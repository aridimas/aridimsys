"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

export default function About() {
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
              <h1 className="section-title mb-4">About Me</h1>
              <h2 className="hero-title mb-12">Your Name Here</h2>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="body-text text-foreground-secondary mb-6">
                    This is your about section. Share your story, background, and what drives you as a professional.
                  </p>
                  <p className="body-text text-foreground-secondary mb-6">
                    Tell visitors about your experience, education, and the journey that led you to where you are today.
                  </p>
                  <p className="body-text text-foreground-secondary">
                    Make it personal and authentic to create a meaningful connection with your audience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-foreground/5 rounded-lg p-8"
                >
                  <h3 className="project-title mb-6">Quick Facts</h3>
                  <ul className="space-y-4">
                    <li className="body-text">
                      <span className="text-foreground font-medium">Location:</span> Your City, Country
                    </li>
                    <li className="body-text">
                      <span className="text-foreground font-medium">Experience:</span> X+ Years
                    </li>
                    <li className="body-text">
                      <span className="text-foreground font-medium">Specialization:</span> Your Field
                    </li>
                    <li className="body-text">
                      <span className="text-foreground font-medium">Passion:</span> What you love doing
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex gap-4 mt-12"
              >
                <Link
                  href="/skills"
                  className="px-8 py-4 bg-foreground text-background rounded-lg nav-text font-medium hover:bg-foreground-secondary transition-colors duration-300"
                >
                  View Skills
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-foreground text-foreground rounded-lg nav-text font-medium hover:bg-foreground/10 transition-colors duration-300"
                >
                  Get in Touch
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
