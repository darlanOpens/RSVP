import * as React from "react"
import { cn } from "@/lib/utils"

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center font-display tracking-wider uppercase transition-all duration-300 disabled:opacity-50",
          {
            "bg-metallic-gradient text-[#0D0B05] hover:opacity-90 hover:scale-105": variant === "default",
            "border-2 border-[#C8A75D] text-[#C8A75D] hover:bg-[#C8A75D] hover:text-[#0D0B05]": variant === "outline",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "default",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        {variant === "default" && (
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300" />
        )}
      </button>
    )
  }
)
LuxuryButton.displayName = "LuxuryButton"

export { LuxuryButton } 