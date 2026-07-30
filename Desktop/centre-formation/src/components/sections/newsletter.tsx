"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [email, setEmail] = useState("")

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-[96px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Mail className="text-white" size={28} />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for the latest courses, career tips, and educational resources.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                required
              />
            </div>
            <Button variant="secondary" size="md" className="whitespace-nowrap w-full sm:w-auto">
              Subscribe <Send size={16} className="ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
