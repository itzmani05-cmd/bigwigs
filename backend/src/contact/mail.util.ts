import { sendResendEmail, resolveRecipients } from "../lib/resend-mailer";

interface ContactMessageRecord {
  name: string;
  companyName: string | null;
  email: string;
  contactNumber: string;
  message: string;
}

export async function sendContactEmail(record: ContactMessageRecord): Promise<void> {
  const lines = [
    `Name: ${record.name}`,
    `Company: ${record.companyName ?? "—"}`,
    `Email: ${record.email}`,
    `Contact number: ${record.contactNumber}`,
    "",
    "Message:",
    record.message,
  ];

  await sendResendEmail({
    to: resolveRecipients("CONTACT_NOTIFY_EMAILS"),
    replyTo: record.email,
    subject: `New Contact Message — ${record.name}`,
    text: lines.join("\n"),
  });
}
