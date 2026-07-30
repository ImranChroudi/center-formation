"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award, ArrowRight, GraduationCap } from "lucide-react"
import { programs, categories } from "@/data/programs"

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All" ? programs : programs.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Explore our comprehensive range of professional programs designed to accelerate your career."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
      />

      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white text-muted hover:text-dark border border-border hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((program, i) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="default" className="bg-white/90 text-dark">
                        {program.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-primary">
                        {program.price}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-dark mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-2">
                      {program.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted mb-5">
                      <span className="flex items-center gap-1.5 bg-light px-3 py-1.5 rounded-lg">
                        <Clock size={14} /> {program.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-light px-3 py-1.5 rounded-lg">
                        <Users size={14} /> {program.students}+
                      </span>
                      <span className="flex items-center gap-1.5 bg-light px-3 py-1.5 rounded-lg">
                        <Award size={14} /> Certificate
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-5">
                      <GraduationCap size={16} className="text-muted" />
                      <span className="text-xs text-muted">{program.level}</span>
                    </div>

                    <Link href={`/programs/${program.slug}`}>
                      <Button variant="outline" size="md" className="w-full group">
                        View Program <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
