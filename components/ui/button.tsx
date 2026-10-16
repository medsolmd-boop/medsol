import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold tracking-[-0.01em] transition-[transform,box-shadow,background-color,color,border-color,filter] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_12px_28px_rgba(27,58,87,0.22)] hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_18px_36px_rgba(27,58,87,0.28)]",
        secondary:
          "bg-secondary text-white shadow-[0_10px_24px_rgba(61,111,153,0.24)] hover:-translate-y-0.5 hover:brightness-105",
        accent:
          "bg-accent text-white shadow-[0_10px_24px_rgba(58,168,156,0.28)] hover:-translate-y-0.5 hover:brightness-105",
        outline:
          "glass text-primary hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_14px_30px_rgba(28,36,48,0.08)]",
        ghost: "text-primary hover:bg-primary/5",
        link: "rounded-none text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
