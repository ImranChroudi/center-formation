"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award, Users, Globe, BookOpen, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience at top companies.",
    color: "from-primary to-blue-600",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn internationally recognized certificates that boost your career prospects.",
    color: "from-accent to-cyan-600",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with maximum 15 students per class for optimal learning.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Join a community of 5000+ alumni working at leading companies worldwide.",
    color: "from-primary to-accent",
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description: "Industry-aligned curriculum updated regularly to match market demands.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Dedicated career services including job placement assistance and interview prep.",
    color: "from-orange-500 to-orange-600",
  },
]

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">Why Choose Us</Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Students Choose{" "}
            <span className="text-gradient">Centre Formation</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We combine academic excellence with practical training to deliver the best educational experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-light hover:bg-white border border-border/50 hover:border-primary/10 hover:shadow-medium transition-all duration-500"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-5 shadow-lg`}>
                <feature.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-3">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
