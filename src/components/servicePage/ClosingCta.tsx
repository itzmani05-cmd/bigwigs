import type { ReactNode } from "react";
import CTASection from "@/components/ui/CTASection";

interface CtaAction {
  label: string;
  href: string;
}

interface ClosingCtaProps {
  heading: ReactNode;
  description: string;
  primary: CtaAction;
  secondary: CtaAction;
}

export default function ClosingCta({ heading, description, primary, secondary }: ClosingCtaProps) {
  return (
    <CTASection
      heading={heading}
      description={description}
      primaryAction={primary}
      secondaryAction={{ ...secondary, showArrow: false }}
    />
  );
}
