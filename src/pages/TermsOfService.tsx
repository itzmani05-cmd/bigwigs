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
    heading: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your use of the Bigwigs Technologies Private Limited (\"Bigwigs\", \"we\", \"us\", or \"our\") website and any services described on it. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.",
    ],
  },
  {
    heading: "2. Description of Services",
    body: [
      "Bigwigs provides enterprise software development, data annotation, AI data services, and Generative AI solutions. Information on this website is provided for general informational purposes and does not itself constitute a service agreement — actual engagements are governed by a separate signed contract or statement of work between Bigwigs and the client.",
    ],
  },
  {
    heading: "3. Use of Website",
    body: ["When using our website, you agree not to:"],
    list: [
      "Use the site for any unlawful purpose or in violation of these Terms.",
      "Attempt to gain unauthorized access to our systems, accounts, or data.",
      "Interfere with or disrupt the website's functionality or security.",
      "Copy, scrape, or reproduce site content without our prior written permission.",
    ],
  },
  {
    heading: "4. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, and software — is the property of Bigwigs Technologies Private Limited or its licensors and is protected by applicable intellectual property laws. No rights are granted to you except as expressly stated in these Terms.",
    ],
  },
  {
    heading: "5. Client Engagements",
    body: [
      "Any project, deliverable, timeline, pricing, or scope discussed through this website (including via demo requests or contact forms) is preliminary and non-binding until formalized in a written agreement signed by both parties. That agreement — not this website — governs the resulting engagement.",
    ],
  },
  {
    heading: "6. Confidentiality",
    body: [
      "Information shared with us during an engagement is handled under the confidentiality terms of the applicable client agreement. General inquiries submitted through this website are handled in accordance with our Privacy Policy.",
    ],
  },
  {
    heading: "7. Disclaimers & Limitation of Liability",
    body: [
      "This website and its content are provided \"as is\" without warranties of any kind, express or implied. To the fullest extent permitted by law, Bigwigs shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Nothing in this section limits liability that cannot be excluded under applicable law.",
    ],
  },
  {
    heading: "8. Third-Party Links",
    body: [
      "Our website may link to third-party sites for your convenience. We do not control and are not responsible for the content, policies, or practices of any third-party site.",
    ],
  },
  {
    heading: "9. Governing Law",
    body: [
      "These Terms are governed by the laws of India, without regard to conflict-of-law principles. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Tamil Nadu, India.",
    ],
  },
  {
    heading: "10. Changes to These Terms",
    body: [
      `We may revise these Terms from time to time. The "Last updated" date above reflects the most recent revision. Continued use of our website after changes take effect constitutes acceptance of the updated Terms.`,
    ],
  },
  {
    heading: "11. Contact Us",
    body: ["Questions about these Terms can be directed to:"],
    list: [
      "Bigwigs Technologies Private Limited",
      "2nd Floor, Vijaya Mini Hall, 206, Mathur, Tamil Nadu – 622515, India",
      "Email: info@bigwigsfolks.in",
      "Phone: +91 93447 69914",
    ],
  },
];

export default function TermsOfService() {
  useDocumentTitle("Terms of Service | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
            Legal
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
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
