"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Teachers",
    href: "/teachers",
  },
  {
    label: "Success Stories",
    href: "/success-stories",
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white font-bold text-sm">
            CF
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">
            Centre<span className="text-primary">Formation</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-muted hover:text-dark rounded-lg hover:bg-dark/5 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="primary" size="sm">
            Enroll Now
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 lg:hidden p-2 text-dark"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-muted hover:text-dark hover:bg-dark/5 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 px-4">
                <Button variant="ghost" size="md" className="flex-1">
                  Sign In
                </Button>
                <Button variant="primary" size="md" className="flex-1">
                  Enroll Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
