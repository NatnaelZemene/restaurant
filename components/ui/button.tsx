import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-all duration-300 ease-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50 disabled:pointer-events-none",
          size === "default" ? "px-7 py-3 text-sm" : "px-9 py-4 text-base",
          variant === "primary" &&
            "bg-gold-gradient text-[#1a1305] shadow-gold hover:shadow-gold-lg hover:brightness-110",
          variant === "outline" &&
            "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold",
          variant === "ghost" && "text-white/80 hover:text-gold",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
