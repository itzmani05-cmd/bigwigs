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
    heading: "1. What Are Cookies",
    body: [
      "Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, understand how visitors use it, and function properly across visits.",
    ],
  },
  {
    heading: "2. How We Use Cookies",
    body: [
      "Bigwigs Technologies Private Limited (\"Bigwigs\", \"we\", \"us\", or \"our\") uses cookies on this website to keep the site working reliably and to understand how it's used, so we can improve it over time.",
    ],
  },
  {
    heading: "3. Types of Cookies We Use",
    body: [],
    list: [
      "Essential cookies — required for core site functionality, such as remembering that you've accepted this cookie notice. The site won't function properly without these.",
      "Analytics cookies — help us understand which pages are visited and how, so we can improve the site's content and performance.",
      "Preference cookies — remember choices you've made, such as display settings, to make your next visit more convenient.",
    ],
  },
  {
    heading: "4. Third-Party Cookies",
    body: [
      "Some cookies may be set by third-party services we use for analytics or embedded content. These third parties have their own privacy and cookie practices, which we encourage you to review.",
    ],
  },
  {
    heading: "5. Managing Cookies",
    body: [
      "You can control or delete cookies through your browser settings at any time. Most browsers let you block cookies entirely, block third-party cookies only, or clear cookies when you close the browser. Disabling cookies may affect how parts of our website function.",
    ],
  },
  {
    heading: "6. Changes to This Policy",
    body: [
      `We may update this Cookie Policy from time to time. The "Last updated" date above reflects the most recent revision.`,
    ],
  },
  {
    heading: "7. Contact Us",
    body: ["Questions about this Cookie Policy can be directed to:"],
    list: [
      "Bigwigs Technologies Private Limited",
      "2nd Floor, Vijaya Mini Hall, 206, Mathur, Tamil Nadu – 622515, India",
      "Email: info@bigwigsfolks.in",
      "Phone: +91 93447 69914",
    ],
  },
];

export default function CookiePolicy() {
  useDocumentTitle("Cookie Policy | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
            Legal
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Cookie Policy
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
