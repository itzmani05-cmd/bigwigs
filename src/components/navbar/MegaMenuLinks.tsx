import { Link } from "react-router-dom";
import HashLink from "@/components/ui/HashLink";
import type { MegaContent } from "./navConfig";

interface MegaMenuLinksProps {
  content: MegaContent;
  activeIndex: number;
  onHoverLink: (index: number) => void;
}

export default function MegaMenuLinks({ content, activeIndex, onHoverLink }: MegaMenuLinksProps) {
  return (
    <ul className="flex flex-col">
      {content.links.map((link, index) => {
        const linkClassName = `block py-2.5 lg:py-3 text-lg lg:text-[22px] font-semibold tracking-[-0.01em] transition-all duration-200 ease-out ${
          index === activeIndex
            ? "text-brand-green-500 translate-x-1.5"
            : "text-slate-700 hover:text-blue-500 hover:translate-x-1.5"
        }`;
        return (
          <li key={link.name}>
            {link.href.startsWith("/") ? (
              <Link
                to={link.href}
                onMouseEnter={() => onHoverLink(index)}
                onFocus={() => onHoverLink(index)}
                className={linkClassName}
              >
                {link.name}
              </Link>
            ) : (
              <HashLink
                href={link.href}
                onMouseEnter={() => onHoverLink(index)}
                onFocus={() => onHoverLink(index)}
                className={linkClassName}
              >
                {link.name}
              </HashLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}
