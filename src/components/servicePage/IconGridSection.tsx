import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "./SectionHeader";
import IconGrid, { type IconGridItem } from "./IconGrid";
import SectionBackdrop from "./SectionBackdrop";

interface IconGridSectionProps {
  id?: string;
  eyebrow: string;
  heading: ReactNode;
  description?: string;
  headerAlign?: "left" | "center";
  items: IconGridItem[];
  columnsClassName?: string;
  align?: "left" | "center";
  iconTone?: "slate" | "blue";
  iconShape?: "circle" | "square";
  titleSize?: "sm" | "md";
  hoverable?: boolean;
  maxWidthClassName?: string;
}

export default function IconGridSection({
  id,
  eyebrow,
  heading,
  description,
  headerAlign = "left",
  maxWidthClassName = "",
  ...gridProps
}: IconGridSectionProps) {
  return (
    <section id={id} className="relative w-full scroll-mt-24 overflow-hidden bg-gradient-to-b from-orange-50/70 via-orange-50/25 to-white py-14 lg:py-16">
      <SectionBackdrop />

      <Container className="relative z-10">
        <SectionHeader eyebrow={eyebrow} heading={heading} description={description} align={headerAlign} />
        <div className={`mt-10 lg:mt-12 ${maxWidthClassName ? `mx-auto ${maxWidthClassName}` : ""}`}>
          <IconGrid {...gridProps} />
        </div>
      </Container>
    </section>
  );
}
