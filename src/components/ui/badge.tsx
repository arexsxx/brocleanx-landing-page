import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em]",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-black/20 text-[#c6ff00] backdrop-blur-sm",
        secondary: "border-[#0a2e22] bg-white/5 text-white",
        subtle: "border-white/10 bg-white/5 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
