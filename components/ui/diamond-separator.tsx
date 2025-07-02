import * as React from "react"
import { cn } from "@/lib/utils"

export interface DiamondSeparatorProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function DiamondSeparator({ className, size = "md" }: DiamondSeparatorProps) {
  const sizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl"
  }

  return (
    <span className={cn("text-[#C8A75D] inline-block", sizeClasses[size], className)}>
      ◆
    </span>
  )
} 