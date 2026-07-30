"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { programs } from "@/data/programs"

export function FeaturedPrograms() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featured = programs.slice(0, 6)

  return (
    <section ref={ref} className="section-padding bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">Our Programs</Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">
            Featured{" "}
            <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of professional programs designed to accelerate your career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="default" className="bg-white/90 text-dark">
                    {program.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {program.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted mb-5">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {program.students}+
                  </span>
                  <span className="flex items-center gap-1">
                    <Award size={14} /> Certificate
                  </span>
                </div>

                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                >
                  View Program <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-dark font-medium hover:text-primary transition-colors group text-lg"
          >
            View All Programs
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
