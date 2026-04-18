import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconLinkProps {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export default function IconLink({
  href,
  label,
  children,
  className,
}: IconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
