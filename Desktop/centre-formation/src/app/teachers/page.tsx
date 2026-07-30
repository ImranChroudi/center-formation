"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen } from "lucide-react"
import { teachers } from "@/data/teachers"

export default function Teachers() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <PageHero
        title="Our Teachers"
        subtitle="Meet our team of expert instructors with years of industry experience."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
      />

      <section ref={ref} className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" className="mb-4">Our Team</Badge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
              Meet Our <span className="text-gradient">Teachers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="default" className="bg-white/90 text-dark">
                      {teacher.experience}
                    </Badge>
                    <div className="flex items-center gap-2">
                      {teacher.linkedin && (
                        <a
                          href={teacher.linkedin}
                          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all"
                          aria-label="LinkedIn"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {teacher.twitter && (
                        <a
                          href={teacher.twitter}
                          className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all"
                          aria-label="Twitter"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">{teacher.role}</p>

                  <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {teacher.bio}
                  </p>

                  <div className="flex items-center gap-2 mb-3 text-sm text-muted">
                    <Award size={16} className="text-primary shrink-0" />
                    <span>{teacher.experience}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-muted">
                    <BookOpen size={16} className="text-accent shrink-0" />
                    <span>{teacher.education}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((s) => (
                      <Badge key={s} variant="accent">{s}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
