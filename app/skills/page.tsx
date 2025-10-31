"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

const skillCategories = [
  {
    title: "Defense",
    skills: ["QRADAR", "Trellix ePO", "Trellix MTD", "Suricata", "Wireshark", "Etc."],
  },
  {
    title: "Offense",
    skills: ["BurpSuite", "SQLMAP", "Accunetix", "Dirsearch", "Shodan/Censys", "Etc."],
  },
  {
    title: "Design",
    skills: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Animation"],
  },
  {
    title: "Programming",
    skills: ["PHP", "CSS", "Python", "React", "Next.js"],
  },
]

export default function Skills() {
  return (
    <SmoothScrollProvider>
      <motion.main
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <CustomCursor />
        <Navbar />

        <section className="section-spacing pt-32">
          <div className="container-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="section-title mb-4 text-cyan-400 glow-text">Skills & Expertise</h1>
              <h2 className="hero-title mb-12"><span>What I Can </span>
              <span className="text-cyan-400 glow-text">Do</span></h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {skillCategories.map((category, index) => (
                  <motion.div 
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-foreground/5 rounded-lg p-8 "
                  >
                    <h3 className="project-title mb-6">{category.title}</h3>
                    <div className="flex flex-wrap">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-foreground/10 text-foreground rounded-full body-text text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex gap-4 mt-12"
              >
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-foreground text-background rounded-lg nav-text font-medium hover:bg-foreground-secondary transition-colors duration-300"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-foreground text-foreground border-cyan-500 rounded-lg nav-text font-medium hover:bg-foreground/10 transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </motion.main>
    </SmoothScrollProvider>
  )
}
