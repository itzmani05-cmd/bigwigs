import { sendResendEmail, resolveRecipients } from "../lib/resend-mailer";

interface CareersApplicationRecord {
  fullName: string;
  email: string;
  phone: string | null;
  position: string;
  experience: string | null;
  portfolioUrl: string | null;
  coverLetter: string | null;
}

export async function sendApplicationEmail(
  record: CareersApplicationRecord,
  resume: Express.Multer.File | null,
): Promise<void> {
  const lines = [
    `Full name: ${record.fullName}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone ?? "—"}`,
    `Position: ${record.position}`,
    `Experience: ${record.experience ?? "—"}`,
    `Portfolio: ${record.portfolioUrl ?? "—"}`,
    "",
    "Cover letter:",
    record.coverLetter ?? "—",
  ];

  await sendResendEmail({
    to: resolveRecipients("CAREERS_NOTIFY_EMAILS"),
    replyTo: record.email,
    subject: `New Career Application — ${record.fullName} (${record.position})`,
    text: lines.join("\n"),
    attachments: resume
      ? [{ filename: resume.originalname, content: resume.buffer, contentType: resume.mimetype }]
      : undefined,
  });
}
