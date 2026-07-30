"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ChevronRight } from "lucide-react"

const contactInfo = [
  { icon: MapPin, title: "Address", detail: "123 Education Street, Downtown, City 10001" },
  { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
  { icon: Mail, title: "Email", detail: "info@centreformation.com" },
  { icon: Clock, title: "Working Hours", detail: "Mon - Fri: 8:00 AM - 6:00 PM" },
]

const faqs = [
  {
    q: "What are the enrollment requirements?",
    a: "Candidates must have a high school diploma or equivalent. Some advanced programs may require prior coursework or professional experience. Each program has specific prerequisites outlined on its course page.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer flexible payment plans to make education accessible. You can choose monthly, quarterly, or semester-based installments. Contact our admissions team for personalized options.",
  },
  {
    q: "Can I get a refund if I withdraw?",
    a: "Refunds are available within the first two weeks of enrollment, minus a small administrative fee. Withdrawals after this period may receive partial refunds depending on the program.",
  },
  {
    q: "Are certificates internationally recognized?",
    a: "Yes, our certificates are accredited by international education bodies and recognized by employers worldwide. Many of our programs also offer dual certification with partner institutions.",
  },
  {
    q: "Do you offer online courses?",
    a: "Absolutely. We offer a wide range of online and hybrid courses with live instruction, recorded materials, and interactive assignments. You can learn from anywhere in the world.",
  },
]

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null)
  const formInView = useInView(formRef, { once: true })

  const faqRef = useRef<HTMLDivElement>(null)
  const faqInView = useInView(faqRef, { once: true })

  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us. We're here to help you start your learning journey."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-4">Get in Touch</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <div className="grid gap-4">
                {contactInfo.map((item) => (
                  <div key={item.title} className="bg-light rounded-2xl p-5 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-muted text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-light rounded-2xl p-8"
            >
              <h3 className="font-heading text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1.5">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                    <option value="">Select a subject</option>
                    <option value="enrollment">Enrollment Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="payment">Payment & Fees</option>
                    <option value="certification">Certification</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">Our Location</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Find Us <span className="text-gradient">Here</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-light rounded-2xl h-[400px] flex flex-col items-center justify-center border border-border"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <MapPin size={32} />
            </div>
            <p className="text-dark font-semibold text-lg">Centre de Formation - Main Campus</p>
            <p className="text-muted text-sm mt-1">123 Education Street, Downtown, City 10001</p>
          </motion.div>
        </div>
      </section>

      <section ref={faqRef} className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">FAQ</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-light rounded-xl p-5 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-dark">{faq.q}</h4>
                  <ChevronRight
                    size={20}
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? "rotate-90" : ""}`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                    marginTop: openFaq === i ? 12 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-success to-green-600 rounded-2xl p-10 md:p-16 text-center text-white"
          >
            <MessageSquare size={48} className="mx-auto mb-6 text-white/80" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Have a Quick Question?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Chat with us on WhatsApp and get an instant response from our team.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-success hover:bg-white/90 shadow-lg">
              <MessageSquare size={20} className="mr-2" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
