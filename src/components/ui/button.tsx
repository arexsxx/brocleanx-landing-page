import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8ff3d]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030f0f] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#c6ff00] text-black hover:bg-[#a5d600] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,255,0,0.25)] font-bold",
        secondary: "bg-white text-[#03130f] hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)] font-bold",
        outline:
          "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:-translate-y-0.5",
        ghost: "text-white hover:bg-white/5",
        link: "text-[#c6ff00] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
