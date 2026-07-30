"use client"

import { useLenis } from "@/hooks/use-lenis"
import { Hero } from "@/components/sections/hero"
import { TrustedCompanies } from "@/components/sections/trusted-companies"
import { FeaturedPrograms } from "@/components/sections/featured-programs"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { LatestArticles } from "@/components/sections/latest-articles"
import { Newsletter } from "@/components/sections/newsletter"
import { InstagramFeed } from "@/components/sections/instagram-feed"

export default function Home() {
  useLenis()

  return (
    <>
      <Hero />
      <TrustedCompanies />
      <FeaturedPrograms />
      <WhyChooseUs />
      <TestimonialsSection />
      <LatestArticles />
      <Newsletter />
      <InstagramFeed />
    </>
  )
}
