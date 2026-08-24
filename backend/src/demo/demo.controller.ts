import { Body, Controller, Post, Res } from "@nestjs/common";
import { appendFile, mkdir } from "fs/promises";
import * as path from "path";
import { randomUUID } from "crypto";
import type { Response } from "express";
import { sendDemoRequestEmail } from "./mail.util";

const DATA_DIR = path.join(process.cwd(), "..", "data", "demo-requests");
const LOG_FILE = path.join(DATA_DIR, "submissions.jsonl");

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

interface DemoRequestBody {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  jobTitle?: string;
  industry?: string;
  serviceInterested?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

@Controller("demo")
export class DemoController {
  @Post("request")
  async request(@Body() body: DemoRequestBody, @Res() res: Response) {
    const {
      firstName,
      lastName,
      companyName,
      businessEmail,
      phoneNumber,
      jobTitle,
      industry,
      serviceInterested,
      preferredDate,
      preferredTime,
      message,
    } = body ?? {};

    if (
      !isNonEmptyString(firstName) ||
      !isNonEmptyString(lastName) ||
      !isNonEmptyString(companyName) ||
      !isNonEmptyString(businessEmail) ||
      !isNonEmptyString(phoneNumber)
    ) {
      return res
        .status(400)
        .json({ error: "First name, last name, company name, business email, and phone number are required." });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(businessEmail)) {
      return res.status(400).json({ error: "Please provide a valid business email address." });
    }

    const id = randomUUID();
    const record = {
      id,
      submittedAt: new Date().toISOString(),
      firstName,
      lastName,
      companyName,
      businessEmail,
      phoneNumber,
      jobTitle: isNonEmptyString(jobTitle) ? jobTitle : null,
      industry: isNonEmptyString(industry) ? industry : null,
      serviceInterested: isNonEmptyString(serviceInterested) ? serviceInterested : null,
      preferredDate: isNonEmptyString(preferredDate) ? preferredDate : null,
      preferredTime: isNonEmptyString(preferredTime) ? preferredTime : null,
      message: isNonEmptyString(message) ? message : null,
    };

    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(LOG_FILE, `${JSON.stringify(record)}\n`, "utf8");

    try {
      await sendDemoRequestEmail(record);
    } catch (err) {
      console.error("[demo] Failed to send demo request email:", err);
    }

    return res.status(200).json({ ok: true, id });
  }
}
