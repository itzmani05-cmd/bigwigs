import { Controller, Post, Req, Res, UploadedFile, UseFilters, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { memoryStorage } from "multer";
import type { Request, Response } from "express";
import { mkdir, writeFile, appendFile } from "fs/promises";
import * as path from "path";
import { randomUUID } from "crypto";
import { ParseErrorFilter } from "./parse-error.filter";

const DATA_DIR = path.join(process.cwd(), "..", "data", "careers-submissions");
const RESUME_DIR = path.join(DATA_DIR, "resumes");
const LOG_FILE = path.join(DATA_DIR, "submissions.jsonl");

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB
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
    const body = request.body as Record<string, string | undefined>;
    const fullName = body.fullName;
    const email = body.email;
    const phone = body.phone;
    const position = body.position;
    const experience = body.experience;
    const portfolioUrl = body.portfolioUrl;
    const coverLetter = body.coverLetter;

    if (!isNonEmptyString(fullName) || !isNonEmptyString(email) || !isNonEmptyString(position)) {
      return res.status(400).json({ error: "Full name, email, and position are required." });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    if (!resume || resume.size === 0) {
      return res.status(400).json({ error: "A resume file is required." });
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return res.status(400).json({ error: "Resume must be smaller than 5MB." });
    }
    if (!ALLOWED_RESUME_TYPES.has(resume.mimetype)) {
      return res.status(400).json({ error: "Resume must be a PDF, DOC, or DOCX file." });
    }

    await mkdir(RESUME_DIR, { recursive: true });

    const id = randomUUID();
    const safeOriginalName = resume.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
    const resumeFilename = `${id}-${safeOriginalName}`;
    await writeFile(path.join(RESUME_DIR, resumeFilename), resume.buffer);

    const record = {
      id,
      submittedAt: new Date().toISOString(),
      fullName,
      email,
      phone: isNonEmptyString(phone) ? phone : null,
      position,
      experience: isNonEmptyString(experience) ? experience : null,
      portfolioUrl: isNonEmptyString(portfolioUrl) ? portfolioUrl : null,
      coverLetter: isNonEmptyString(coverLetter) ? coverLetter : null,
      resumeFile: resumeFilename,
    };

    await appendFile(LOG_FILE, `${JSON.stringify(record)}\n`, "utf8");

    return res.status(200).json({ ok: true, id });
  }
}
