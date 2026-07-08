import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 text-white placeholder:text-white/30 font-body text-sm outline-none transition-colors duration-300 focus:border-gold/60 focus:bg-white/[0.06] resize-none",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
