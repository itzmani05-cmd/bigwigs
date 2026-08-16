import Container from "@/components/ui/Container";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const LAST_UPDATED = "August 16, 2026";

interface Section {
  heading: string;
  body: string[];
  list?: string[];
}

const SECTIONS: Section[] = [
  {
    heading: "1. Introduction",
    body: [
      "Bigwigs Technologies Private Limited (\"Bigwigs\", \"we\", \"us\", or \"our\") provides enterprise software, data, and AI services. This Privacy Policy explains what information we collect through our website and services, how we use it, and the choices you have.",
      "By using our website or engaging our services, you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: ["We collect information in the following ways:"],
    list: [
      "Information you provide directly — such as your name, email address, phone number, and company details when you fill out a contact form, book a demo, apply for a role, or otherwise communicate with us.",
      "Information collected automatically — such as your IP address, browser type, device information, and pages visited, gathered through cookies and similar technologies when you use our website.",
      "Information from client engagements — data you share with us in the course of a service engagement, handled under the terms of the applicable client agreement rather than this general policy.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: ["We use the information we collect to:"],
    list: [
      "Respond to inquiries, demo requests, and support questions.",
      "Provide, maintain, and improve our website and services.",
      "Process job applications and communicate with candidates.",
      "Send updates, marketing communications, or service notices — you can opt out at any time.",
      "Comply with legal obligations and enforce our agreements.",
    ],
  },
  {
    heading: "4. Cookies",
    body: [
      "We use cookies and similar technologies to remember your preferences, understand how visitors use our site, and improve functionality. You can control or disable cookies through your browser settings; disabling them may limit some features of the site.",
    ],
  },
  {
    heading: "5. How We Share Information",
    body: ["We do not sell your personal information. We may share it with:"],
    list: [
      "Service providers who support our operations (e.g. hosting, analytics, email delivery) under confidentiality obligations.",
      "Professional advisors, where necessary for legal, accounting, or compliance purposes.",
      "Authorities, where required by law or to protect our rights, users, or the public.",
    ],
  },
  {
    heading: "6. Data Security",
    body: [
      "We maintain administrative, technical, and physical safeguards designed to protect the confidentiality and integrity of the information we handle, consistent with our ISO 27001-aligned information security practices. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "7. Data Retention",
    body: [
      "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    heading: "8. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing. To exercise these rights, contact us using the details below.",
    ],
  },
  {
    heading: "9. Children's Privacy",
    body: [
      "Our website and services are intended for business use and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "10. Changes to This Policy",
    body: [
      `We may update this Privacy Policy from time to time. The "Last updated" date above reflects the most recent revision. Continued use of our website or services after changes take effect constitutes acceptance of the updated policy.`,
    ],
  },
  {
    heading: "11. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your information, contact us at:",
    ],
    list: [
      "Bigwigs Technologies Private Limited",
      "2nd Floor, Vijaya Mini Hall, 206, Mathur, Tamil Nadu – 622515, India",
      "Email: info@bigwigsfolks.in",
      "Phone: +91 93447 69914",
    ],
  },
];

export default function PrivacyPolicy() {
  useDocumentTitle("Privacy Policy | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
            Legal
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

          <div className="mt-10 flex flex-col gap-8">
            {SECTIONS.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-bold text-slate-900">{section.heading}</h2>
                <div className="mt-2.5 flex flex-col gap-2.5 text-sm leading-relaxed text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="ml-5 flex list-disc flex-col gap-1.5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
