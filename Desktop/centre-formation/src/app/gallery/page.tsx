"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { galleryItems, galleryCategories } from "@/data/gallery"

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our campus, classrooms, events, and student life through our photo gallery."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c341?w=1920&q=80"
      />

      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Our Gallery</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Moments That <span className="text-gradient">Define Us</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-muted hover:bg-dark/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-soft"
                  onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                      <p className="font-heading font-semibold text-sm">{item.alt}</p>
                      <span className="inline-block mt-1 text-xs text-white/70 bg-white/20 rounded-full px-3 py-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 rounded-full px-4 py-1.5">
              {selectedImage.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
