import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "w-full appearance-none rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 text-white font-body text-sm outline-none transition-colors duration-300 focus:border-gold/60 focus:bg-white/[0.06]",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
    </div>
  );
});
Select.displayName = "Select";
