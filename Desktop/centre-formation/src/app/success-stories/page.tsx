"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { testimonials } from "@/data/testimonials"
import { Star, Quote, Briefcase } from "lucide-react"

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "98%", label: "Employment Rate" },
  { value: "50+", label: "Expert Instructors" },
  { value: "15+", label: "Programs" },
]

const careerStats = [
  { value: "65%", label: "Average Salary Increase" },
  { value: "3 Months", label: "Average Job Placement Time" },
  { value: "92%", label: "Career Satisfaction Rate" },
  { value: "40+", label: "Hiring Partner Companies" },
]

export default function SuccessStories() {
  const statsRef = useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef, { once: true })

  const cardsRef = useRef<HTMLDivElement>(null)
  const isCardsInView = useInView(cardsRef, { once: true })

  const careerRef = useRef<HTMLDivElement>(null)
  const isCareerInView = useInView(careerRef, { once: true })

  return (
    <>
      <PageHero
        title="Student Success Stories"
        subtitle="Discover how our graduates transformed their careers through our programs."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
      />

      <section ref={statsRef} className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={cardsRef} className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="primary" className="mb-4">Success Stories</Badge>
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Real Stories from <span className="text-gradient">Our Graduates</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Hear from our alumni about how our programs helped them achieve their career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className={idx < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote size={20} className="text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-muted text-sm leading-relaxed pl-6">{t.content}</p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-dark text-sm">{t.name}</h4>
                    <div className="flex items-center gap-1 text-primary text-xs">
                      <Briefcase size={12} />
                      <span>{t.role}</span>
                    </div>
                    <span className="text-muted text-xs">{t.program}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={careerRef} className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="accent" className="mb-4">Career Achievements</Badge>
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Measurable <span className="text-gradient">Career Impact</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our programs deliver tangible results that accelerate your professional growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {careerStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isCareerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-light rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
