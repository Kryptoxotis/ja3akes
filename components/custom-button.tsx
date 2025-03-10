import type React from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  children: React.ReactNode
  className?: string
}

export function CustomButton({ variant = "primary", children, className, ...props }: CustomButtonProps) {
  return (
    <ShadcnButton
      className={cn(variant === "primary" ? "custom-btn-primary" : "custom-btn-outline", className)}
      {...props}
    >
      {children}
    </ShadcnButton>
  )
}

// Add these styles to globals.css

