"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/data/blog"

export function LatestArticles() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const articles = blogPosts.slice(0, 3)

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <Badge variant="primary" className="mb-4">Blog</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark">
              Latest{" "}
              <span className="text-gradient">Articles</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-dark font-medium hover:text-primary transition-colors mt-4 md:mt-0"
          >
            View All Articles <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default" className="bg-white/90 text-dark">{post.category}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-dark group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
