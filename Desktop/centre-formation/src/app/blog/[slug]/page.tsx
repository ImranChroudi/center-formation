"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, User, Tag } from "lucide-react"
import { getBlogPostBySlug, blogPosts } from "@/data/blog"

export default function BlogPostDetail() {
  const params = useParams()
  const post = getBlogPostBySlug(params.slug as string)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const relatedRef = useRef<HTMLDivElement>(null)
  const relatedInView = useInView(relatedRef, { once: true })

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link href="/blog">
          <Button variant="primary">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Button>
        </Link>
      </div>
    )
  }

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <span className="flex items-center gap-1.5 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <User size={16} /> {post.author}
          </span>
          <span className="flex items-center gap-1.5 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Calendar size={16} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock size={16} /> {post.readTime}
          </span>
        </div>
        <div className="mt-8">
          <Link href="/blog">
            <Button variant="secondary" size="md">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Button>
          </Link>
        </div>
      </PageHero>

      <section ref={ref} className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <Badge variant="primary">{post.category}</Badge>
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs text-muted bg-light px-3 py-1.5 rounded-full">
                <Tag size={12} /> {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 mb-10 pb-10 border-b border-border"
          >
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div>
              <div className="font-semibold text-dark">{post.author}</div>
              <div className="text-sm text-muted flex items-center gap-2">
                <Calendar size={14} />
                <span>{post.date}</span>
                <span>·</span>
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark prose-p:text-muted prose-a:text-primary prose-strong:text-dark"
          >
            <div className="text-muted leading-relaxed text-lg whitespace-pre-line">{post.content}</div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section ref={relatedRef} className="section-padding bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
                Related <span className="text-gradient">Articles</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/blog/${item.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
