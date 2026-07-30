"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Camera } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const images = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80",
]

export function InstagramFeed() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge variant="primary" className="mb-4">Follow Us</Badge>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-dark font-medium hover:text-primary transition-colors"
          >
            <Camera size={20} />
            @centreformation
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Instagram ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
