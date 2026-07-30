"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const featured = testimonials[currentIndex]

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Hear from our graduates about how our programs transformed their careers and lives."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
      />

      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" className="mb-4">Featured Story</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">
              Success{" "}
              <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Every graduate has a unique journey. Read their inspiring stories below.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-strong"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/30 to-transparent" />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <Badge variant="accent" className="mb-4 w-fit">{featured.program}</Badge>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: featured.rating }).map((_, i) => (
                        <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-dark text-lg md:text-xl leading-relaxed mb-6 italic">
                      &ldquo;{featured.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <div className="font-bold text-dark">{featured.name}</div>
                        <div className="text-sm text-muted">{featured.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-dark hover:text-primary transition-all hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-dark hover:text-primary transition-all hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex md:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-dark"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-dark"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" className="mb-4">All Reviews</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">
              What Our{" "}
              <span className="text-gradient">Graduates Say</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real feedback from real students who transformed their careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-light rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 relative group"
              >
                <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-dark">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Badge variant="primary" className="mb-4">Google Reviews</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6">
              Rated{" "}
              <span className="text-gradient">4.9 Stars</span>
            </h2>
            <p className="text-muted text-lg mb-8">
              Our students consistently rate us 4.9 out of 5 on Google. Here&apos;s what they love about us.
            </p>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-strong">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={32} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-5xl md:text-6xl font-bold text-dark mb-2">4.9</div>
              <div className="text-muted mb-6">Google Rating</div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted mb-6">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-medium">Based on 500+ reviews</span>
              </div>
              <div className="flex flex-col gap-3 text-left">
                {[
                  { name: "Sarah M.", text: "Best training center in the country. The instructors are incredibly knowledgeable and supportive." },
                  { name: "Ahmed R.", text: "The practical approach to learning made all the difference. I was job-ready in months." },
                  { name: "Marie L.", text: "Excellent programs with real-world applications. Highly recommended for career changers." },
                ].map((review, i) => (
                  <div key={i} className="bg-light rounded-xl p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted mb-1">&ldquo;{review.text}&rdquo;</p>
                    <span className="text-xs font-semibold text-dark">{review.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
