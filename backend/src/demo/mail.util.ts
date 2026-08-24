import { sendResendEmail, resolveRecipients } from "../lib/resend-mailer";

interface DemoRequestRecord {
  firstName: string;
  lastName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  jobTitle: string | null;
  industry: string | null;
  serviceInterested: string | null;
  preferredDate: string | null;
  preferredTime: string | null;
  message: string | null;
}

export async function sendDemoRequestEmail(record: DemoRequestRecord): Promise<void> {
  const lines = [
    `Name: ${record.firstName} ${record.lastName}`,
    `Company: ${record.companyName}`,
    `Business email: ${record.businessEmail}`,
    `Phone: ${record.phoneNumber}`,
    `Job title: ${record.jobTitle ?? "—"}`,
    `Industry: ${record.industry ?? "—"}`,
    `Service interested in: ${record.serviceInterested ?? "—"}`,
    `Preferred date: ${record.preferredDate ?? "—"}`,
    `Preferred time: ${record.preferredTime ?? "—"}`,
    "",
    "Message:",
    record.message ?? "—",
  ];

  await sendResendEmail({
    to: resolveRecipients("DEMO_NOTIFY_EMAILS"),
    replyTo: record.businessEmail,
    subject: `New Demo Request — ${record.firstName} ${record.lastName} (${record.companyName})`,
    text: lines.join("\n"),
  });
}
