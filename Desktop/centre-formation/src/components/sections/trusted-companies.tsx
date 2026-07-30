"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Google", color: "#4285F4" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Meta", color: "#1877F2" },
  { name: "Apple", color: "#555555" },
  { name: "Shopify", color: "#96BF48" },
  { name: "Deloitte", color: "#00A4EF" },
  { name: "PwC", color: "#E57E25" },
]

export function TrustedCompanies() {
  return (
    <section className="py-16 bg-white border-y border-border/50">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted uppercase tracking-wider mb-10 font-medium"
        >
          Our graduates work at leading companies
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 rounded-lg items-center justify-center" style={{ backgroundColor: `${company.color}15` }}>
                <span className="text-sm font-bold" style={{ color: company.color }}>
                  {company.name[0]}
                </span>
              </div>
              <span className="text-base font-semibold text-dark/60">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
