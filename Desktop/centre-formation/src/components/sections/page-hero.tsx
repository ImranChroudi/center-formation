"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  className?: string
  children?: React.ReactNode
}

export function PageHero({ title, subtitle, image, className, children }: PageHeroProps) {
  return (
    <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden", className)}>
      {image && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark/80 via-dark/60 to-dark/80 z-10" />
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-light to-accent/5" />
      )}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[96px]" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-[64px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={cn(
            "font-heading text-4xl md:text-6xl lg:text-7xl font-bold",
            image ? "text-white" : "text-dark"
          )}>
            {title}
          </h1>
          {subtitle && (
            <p className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto mt-6",
              image ? "text-white/70" : "text-muted"
            )}>
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
