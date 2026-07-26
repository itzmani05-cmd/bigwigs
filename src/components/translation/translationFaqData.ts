export interface TranslationFaqItem {
  question: string;
  answer: string;
}

export const translationFaqItems: TranslationFaqItem[] = [
  {
    question: "Do you translate technical documents?",
    answer:
      "Yes — API documentation, engineering manuals, and scientific papers are translated by linguists with subject-matter background, not generalists.",
  },
  {
    question: "Can you localize websites?",
    answer:
      "Yes. We handle content, layout, currencies, date formats, and right-to-left languages — without you maintaining a separate codebase per market.",
  },
  {
    question: "Do you support multilingual SEO?",
    answer:
      "Yes — keyword research, metadata, and on-page content are localized per region, not just translated word-for-word.",
  },
  {
    question: "How do you ensure translation quality?",
    answer:
      "Every translation passes through a native-speaker review against your terminology and style guide before it's delivered.",
  },
];
