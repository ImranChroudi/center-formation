"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Target, Eye, Heart, Shield, Lightbulb, Globe } from "lucide-react"

const values = [
  { icon: Shield, title: "Excellence", desc: "We maintain the highest standards in education and training." },
  { icon: Heart, title: "Passion", desc: "We are driven by a genuine love for teaching and learning." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace new technologies and methodologies." },
  { icon: Globe, title: "Inclusivity", desc: "We welcome students from all backgrounds and cultures." },
]

const timeline = [
  { year: "2012", title: "Founded", desc: "Centre de Formation was established with a vision to transform professional education." },
  { year: "2014", title: "500 Students", desc: "Reached our first milestone of 500 enrolled students across 5 programs." },
  { year: "2016", title: "International Expansion", desc: "Launched partnerships with international educational institutions." },
  { year: "2018", title: "Digital Transformation", desc: "Introduced online learning platform with 20+ courses." },
  { year: "2020", title: "Global Recognition", desc: "Awarded Best Training Center by the International Education Council." },
  { year: "2024", title: "5000+ Alumni", desc: "Celebrated 5000+ successful graduates employed worldwide." },
]

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "98%", label: "Employment Rate" },
  { value: "15+", label: "Programs" },
  { value: "50+", label: "Expert Instructors" },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Discover our story, mission, and commitment to excellence in professional education."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-4">Our Story</Badge>
              <h2 className="font-heading text-4xl font-bold text-dark mb-6">
                Empowering Careers Since <span className="text-gradient">2012</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Centre de Formation was founded with a simple yet powerful mission: to bridge the gap between academic education and industry requirements. We recognized that traditional education wasn't preparing students for the real world, and we set out to change that.
                </p>
                <p>
                  Over the past decade, we have grown from a small training center with just 5 programs to a comprehensive educational institution offering 15+ professional programs across multiple disciplines. Our commitment to quality, innovation, and student success has earned us recognition as one of the leading training centers in the region.
                </p>
                <p>
                  Today, with over 5,000 successful alumni working at top companies worldwide, we continue to push the boundaries of professional education. Our team of 50+ expert instructors brings real-world experience and passion to every classroom.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                  alt="Our campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-strong">
                <div className="text-4xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-soft text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <Target size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-dark mb-3">Our Mission</h3>
              <p className="text-muted text-sm">To provide accessible, high-quality professional education that equips students with the skills and knowledge needed to thrive in the global workforce.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-soft text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4">
                <Eye size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-dark mb-3">Our Vision</h3>
              <p className="text-muted text-sm">To be the leading center for professional education, recognized globally for producing skilled, confident, and successful graduates who make a difference.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-soft text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-success/10 text-success mb-4">
                <Award size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-dark mb-3">Our Commitment</h3>
              <p className="text-muted text-sm">We commit to continuous improvement, industry-aligned curricula, and personalized support for every student's journey toward career success.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Badge variant="primary" className="mb-4">Our Values</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-10">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft text-center hover:shadow-medium transition-all"
                >
                  <v.icon className="mx-auto mb-3 text-primary" size={24} />
                  <h4 className="font-semibold text-dark mb-1">{v.title}</h4>
                  <p className="text-muted text-xs">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Our Journey</Badge>
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">
              Our <span className="text-gradient">Timeline</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md hidden md:block" />
                  <div className="flex-1 bg-light rounded-2xl p-6 shadow-soft">
                    <span className="text-primary font-bold text-sm">{item.year}</span>
                    <h3 className="font-heading font-bold text-lg text-dark mt-1">{item.title}</h3>
                    <p className="text-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
    </>
  )
}
