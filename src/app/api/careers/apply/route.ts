import { NextResponse } from "next/server";
import { mkdir, writeFile, appendFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const DATA_DIR = path.join(process.cwd(), "data", "careers-submissions");
const RESUME_DIR = path.join(DATA_DIR, "resumes");
const LOG_FILE = path.join(DATA_DIR, "submissions.jsonl");

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isNonEmptyString(value: FormDataEntryValue | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const position = formData.get("position");
  const experience = formData.get("experience");
  const portfolioUrl = formData.get("portfolioUrl");
  const coverLetter = formData.get("coverLetter");
  const resume = formData.get("resume");

  if (!isNonEmptyString(fullName) || !isNonEmptyString(email) || !isNonEmptyString(position)) {
    return NextResponse.json(
      { error: "Full name, email, and position are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "A resume file is required." }, { status: 400 });
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: "Resume must be smaller than 5MB." }, { status: 400 });
  }
  if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
    return NextResponse.json(
      { error: "Resume must be a PDF, DOC, or DOCX file." },
      { status: 400 }
    );
  }

  await mkdir(RESUME_DIR, { recursive: true });

  const id = randomUUID();
  const safeOriginalName = resume.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const resumeFilename = `${id}-${safeOriginalName}`;
  const resumeBuffer = Buffer.from(await resume.arrayBuffer());
  await writeFile(path.join(RESUME_DIR, resumeFilename), resumeBuffer);

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

  return NextResponse.json({ ok: true, id });
}
