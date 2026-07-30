"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".gsap-reveal")
      cards?.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        })
      })

      const parallaxElements = containerRef.current?.querySelectorAll(".gsap-parallax")
      parallaxElements?.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          y: -50,
          ease: "none",
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return <div ref={containerRef}>{children}</div>
}
