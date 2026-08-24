import { Body, Controller, Post, Res } from "@nestjs/common";
import { appendFile, mkdir } from "fs/promises";
import * as path from "path";
import { randomUUID } from "crypto";
import type { Response } from "express";
import { sendContactEmail } from "./mail.util";

const DATA_DIR = path.join(process.cwd(), "..", "data", "contact-messages");
const LOG_FILE = path.join(DATA_DIR, "submissions.jsonl");

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

interface ContactRequestBody {
  name?: string;
  companyName?: string;
  email?: string;
  contactNumber?: string;
  message?: string;
}

@Controller("contact")
export class ContactController {
  @Post()
  async submit(@Body() body: ContactRequestBody, @Res() res: Response) {
    const { name, companyName, email, contactNumber, message } = body ?? {};

    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(contactNumber) ||
      !isNonEmptyString(message)
    ) {
      return res.status(400).json({ error: "Name, email, contact number, and message are required." });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const id = randomUUID();
    const record = {
      id,
      submittedAt: new Date().toISOString(),
      name,
      companyName: isNonEmptyString(companyName) ? companyName : null,
      email,
      contactNumber,
      message,
    };

    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(LOG_FILE, `${JSON.stringify(record)}\n`, "utf8");

    try {
      await sendContactEmail(record);
    } catch (err) {
      console.error("[contact] Failed to send contact email:", err);
    }

    return res.status(200).json({ ok: true, id });
  }
}
