"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award, GraduationCap, CheckCircle, ChevronRight, BookOpen, Briefcase, ArrowLeft } from "lucide-react"
import { getProgramBySlug, programs } from "@/data/programs"

export default function ProgramDetail() {
  const params = useParams()
  const program = getProgramBySlug(params.slug as string)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  if (!program) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Program Not Found</h1>
        <Link href="/programs">
          <Button variant="primary">Back to Programs</Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHero
        title={program.title}
        subtitle={program.description}
        image={program.image}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <span className="flex items-center gap-1.5 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock size={16} /> {program.duration}
          </span>
          <span className="flex items-center gap-1.5 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Award size={16} /> Certificate
          </span>
          <span className="flex items-center gap-1.5 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <GraduationCap size={16} /> {program.level}
          </span>
          <span className="flex items-center gap-1.5 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users size={16} /> {program.students}+ Students
          </span>
        </div>
        <div className="mt-8">
          <Link href="/programs">
            <Button variant="secondary" size="md">
              <ArrowLeft size={16} className="mr-2" /> Back to Programs
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="primary" className="mb-4">Overview</Badge>
                <h2 className="font-heading text-3xl font-bold text-dark mb-6">Course Overview</h2>
                <p className="text-muted leading-relaxed text-lg">{program.longDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Badge variant="accent" className="mb-4">Outcomes</Badge>
                <h2 className="font-heading text-3xl font-bold text-dark mb-6">What You&apos;ll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-light">
                      <CheckCircle size={20} className="text-success shrink-0 mt-0.5" />
                      <span className="text-dark text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge variant="primary" className="mb-4">Curriculum</Badge>
                <h2 className="font-heading text-3xl font-bold text-dark mb-6">Program Curriculum</h2>
                <div className="space-y-4">
                  {program.curriculum.map((module, i) => (
                    <details key={i} className="group bg-light rounded-2xl overflow-hidden">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">
                            {i + 1}
                          </span>
                          <span className="font-semibold text-dark">{module.title}</span>
                        </div>
                        <ChevronRight size={20} className="text-muted transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-5 pb-5">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.topics.map((topic, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-muted">
                              <CheckCircle size={14} className="text-primary shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge variant="success" className="mb-4">Career</Badge>
                <h2 className="font-heading text-3xl font-bold text-dark mb-6">Career Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.careers.map((career, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-light">
                      <Briefcase size={20} className="text-primary shrink-0" />
                      <span className="text-dark text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {program.faq.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Badge variant="primary" className="mb-4">FAQ</Badge>
                  <h2 className="font-heading text-3xl font-bold text-dark mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {program.faq.map((item, i) => (
                      <details key={i} className="group bg-light rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <span className="font-medium text-dark">{item.question}</span>
                          <ChevronRight size={18} className="text-muted transition-transform group-open:rotate-90 shrink-0" />
                        </summary>
                        <div className="px-5 pb-5">
                          <p className="text-muted text-sm">{item.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-light rounded-2xl p-6 shadow-soft"
                >
                  <div className="text-3xl font-bold text-primary mb-4">{program.price}</div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Duration</span>
                      <span className="font-medium text-dark">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Lessons</span>
                      <span className="font-medium text-dark">{program.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Students</span>
                      <span className="font-medium text-dark">{program.students}+</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Certificate</span>
                      <span className="font-medium text-dark">Yes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Level</span>
                      <span className="font-medium text-dark">{program.level}</span>
                    </div>
                  </div>
                  <Button variant="primary" size="xl" className="w-full mb-3">
                    Enroll Now
                  </Button>
                  <Button variant="ghost" size="md" className="w-full">
                    Request More Info
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-light rounded-2xl p-6 shadow-soft"
                >
                  <h3 className="font-heading font-bold text-dark mb-4">Your Instructor</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={program.instructor.image}
                      alt={program.instructor.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <div className="font-semibold text-dark text-sm">{program.instructor.name}</div>
                      <div className="text-xs text-muted">{program.instructor.role}</div>
                    </div>
                  </div>
                  <Link href="/teachers">
                    <Button variant="ghost" size="sm" className="w-full">
                      Meet All Instructors
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Badge variant="primary" className="mb-3">Requirements</Badge>
                  <ul className="space-y-2">
                    {program.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle size={14} className="text-success shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Join {program.students}+ students who have transformed their careers through this program.
            </p>
            <Button variant="secondary" size="xl">
              Enroll Now - {program.price}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
