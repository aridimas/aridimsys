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

        <section className="section-spacing pt-28 sm:pt-32 px-4 sm:px-8">
          <div className="container-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="section-title mb-3 text-cyan-400 glow-text text-2xl sm:text-3xl text-center sm:text-left">
                About Me
              </h1>
              <h2 className="hero-title mb-10 text-center sm:text-left text-3xl sm:text-5xl font-semibold">
                Ari Dimas Yudhi Setiawan
              </h2>

              {/* === Bagian konten utama === */}
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 sm:gap-12 mb-12 text-justify">
                {/* === Kolom kiri (cerita) === */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="body-text text-foreground-secondary mb-6 leading-relaxed">
                    It all started when I was just a curious kid who couldn’t stop wondering how the internet actually worked. I’d spend hours messing around with computers, breaking things just to see what would happen, and then trying to fix them again. That curiosity slowly turned into passion, a constant need to understand what happens behind the screen.
                  </p>
                  <p className="body-text text-foreground-secondary mb-6 leading-relaxed">
                    Years later, I decided to take that curiosity seriously and studied Informatics at Ahmad Dahlan University. During college, I started diving deeper into how networks, systems, and security fit together. Around 2016, I discovered penetration testing, and it completely hooked me, learning how attackers think and how systems can be pushed to their limits was like solving endless puzzles.
                  </p>
                  <p className="body-text text-foreground-secondary mb-6 leading-relaxed">
                    But over time, I realized there’s more to cybersecurity than just breaking things. I wanted to understand how to defend them too. That led me to join the Blue Team, working as a SOC L1 Threat analyst in Dias Naga Alpha on NagaCyberSecurity team for about 1.3 years. It was an eye-opening experience, learning how to detect threats, respond to incidents, and protect real systems under pressure.
                  </p>
                  <p className="body-text text-foreground-secondary leading-relaxed">
                    Now, I’m still on that same journey, learning, experimenting, and exploring new corners of cybersecurity. The same question that started it all still keeps me going:
                    “How does the digital world really work beneath everything we think is safe?”
                  </p>
                </motion.div>

                {/* === Kolom kanan (Quick Facts) === */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-foreground/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm"
                >
                  <h3 className="project-title mb-6 leading-relaxed text-cyan-400 glow-text text-lg sm:text-xl">
                    Quick Facts
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="body-text">
                      <span className="text-foreground font-bold">Location:</span> Jakarta, Indonesia
                    </li>
                    <li className="body-text">
                      <span className="text-foreground font-bold">Professional Experience:</span> 3+ Years
                    </li>
                    <li className="body-text">
                      <span className="text-foreground font-bold">Specialization:</span> Threat Analysis
                    </li>
                    <li className="body-text">
                      <span className="text-foreground font-bold">Passion:</span> Music, Gaming, Tech, Sports
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* === Tombol navigasi === */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mt-12 justify-center sm:justify-start"
              >
                <Link
                  href="/skills"
                  className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-lg nav-text font-medium hover:bg-foreground-secondary transition-colors duration-300 text-center"
                >
                  View Skills
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 border border-cyan-500 text-foreground rounded-lg nav-text font-medium hover:bg-foreground/10 transition-colors duration-300 text-center"
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
