import { Resend } from "resend";

interface SendResendEmailOptions {
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer; contentType: string }[];
}

let cachedClient: Resend | null | undefined;

function getClient(): Resend | null {
  if (cachedClient !== undefined) return cachedClient;
  const apiKey = process.env.RESEND_API_KEY;
  cachedClient = apiKey ? new Resend(apiKey) : null;
  return cachedClient;
}

function splitEmails(raw: string | undefined): string[] {
  return (raw ?? "").split(",").map((e) => e.trim()).filter(Boolean);
}

export function resolveRecipients(specificEnvKey: string): string[] {
  const explicit = splitEmails(process.env[specificEnvKey]);
  if (explicit.length > 0) return explicit;
  return splitEmails(process.env.ADMIN_EMAILS);
}

export async function sendResendEmail({ to, subject, text, replyTo, attachments }: SendResendEmailOptions): Promise<void> {
  const client = getClient();
  if (!client) {
    console.warn(`[mail] RESEND_API_KEY not configured — skipping email "${subject}".`);
    return;
  }
  if (!to || to.length === 0) {
    console.warn(`[mail] No recipients configured — skipping email "${subject}".`);
    return;
  }

  const { error } = await client.emails.send({
    from: process.env.MAIL_FROM || "Bigwigs <onboarding@resend.dev>",
    to,
    replyTo,
    subject,
    text,
    attachments,
  } as Parameters<typeof client.emails.send>[0]);

  if (error) {
    throw new Error(`Resend error: ${(error as { message?: string }).message ?? JSON.stringify(error)}`);
  }
}
