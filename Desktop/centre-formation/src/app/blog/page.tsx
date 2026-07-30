"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts, blogCategories } from "@/data/blog"

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageHero
        title="Our Blog"
        subtitle="Stay updated with the latest career advice, study tips, technology trends, and education news."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
      />

      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8 text-center">
              Explore <span className="text-gradient">Articles</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {blogCategories.map((cat) => (
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
            </div>
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
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="default" className="bg-white/90 text-dark">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted mb-3">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                        <span>·</span>
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-dark group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
