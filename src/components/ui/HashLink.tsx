import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useHashLink } from "@/hooks/useHashLink";

interface HashLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function HashLink({ href, onClick, ...rest }: HashLinkProps) {
  const resolved = useHashLink(href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    resolved.onClick(e);
  };

  return <a href={resolved.href} onClick={handleClick} {...rest} />;
}
