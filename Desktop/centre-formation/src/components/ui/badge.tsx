import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "primary" | "accent" | "success"
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-dark/5 text-dark",
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
