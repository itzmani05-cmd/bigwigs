import { Body, Controller, Post, Req, Res, UploadedFile, UseFilters, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { memoryStorage } from "multer";
import { appendFile, mkdir, writeFile } from "fs/promises";
import * as path from "path";
import { randomUUID } from "crypto";
import type { Request, Response } from "express";
import { ParseErrorFilter } from "./parse-error.filter";
import { sendApplicationEmail } from "./mail.util";

const DATA_DIR = path.join(process.cwd(), "..", "data", "careers-submissions");
const RESUME_DIR = path.join(DATA_DIR, "resumes");
const LOG_FILE = path.join(DATA_DIR, "submissions.jsonl");
const MAX_RESUME_BYTES = 500 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

@Controller("careers")
@UseFilters(ParseErrorFilter)
export class CareersController {
  @Post("apply")
  @UseInterceptors(FileInterceptor("resume", { storage: memoryStorage() }))
  async apply(
    @Req() request: Request,
    @UploadedFile() resume: Express.Multer.File | undefined,
    @Res() res: Response,
  ) {
    const body = request.body as Record<string, string>;
    const fullName = body.fullName;
    const email = body.email;
    const phone = body.phone;
    const position = body.position;
    const experience = body.experience;
    const portfolioUrl = body.portfolioUrl;
    const coverLetter = body.coverLetter;

    if (!isNonEmptyString(fullName) || !isNonEmptyString(email)) {
      return res.status(400).json({ error: "Full name and email are required." });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    if (resume && resume.size > MAX_RESUME_BYTES) {
      return res.status(400).json({ error: "Resume must be smaller than 500KB." });
    }

    if (resume && !ALLOWED_RESUME_TYPES.has(resume.mimetype)) {
      return res.status(400).json({ error: "Resume must be a PDF, DOC, or DOCX file." });
    }

    const id = randomUUID();
    let resumeFilename: string | null = null;
    if (resume) {
      await mkdir(RESUME_DIR, { recursive: true });
      const safeOriginalName = resume.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
      resumeFilename = `${id}-${safeOriginalName}`;
      await writeFile(path.join(RESUME_DIR, resumeFilename), resume.buffer);
    }

    const record = {
      id,
      submittedAt: new Date().toISOString(),
      fullName,
      email,
      phone: isNonEmptyString(phone) ? phone : null,
      position: isNonEmptyString(position) ? position : "General Application",
      experience: isNonEmptyString(experience) ? experience : null,
      portfolioUrl: isNonEmptyString(portfolioUrl) ? portfolioUrl : null,
      coverLetter: isNonEmptyString(coverLetter) ? coverLetter : null,
      resumeFile: resumeFilename,
    };

    await appendFile(LOG_FILE, `${JSON.stringify(record)}\n`, "utf8");

    try {
      await sendApplicationEmail(record, resume ?? null);
    } catch (err) {
      console.error("[careers] Failed to send application email:", err);
    }

    return res.status(200).json({ ok: true, id });
  }
}
