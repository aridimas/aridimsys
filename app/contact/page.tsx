"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

const contactMethods = [
  {
    label: "Email",
    value: "aridimas145@gmail.com",
    link: "mailto:aridimas145@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "ari dimas yudistiawan",
    link: "https://id.linkedin.com/in/ari-dimas-yudistiawan",
  },
  {
    label: "Instagram",
    value: "@aridimas.y",
    link: "https://instagram.com/aridimas.y",
  },
  {
    label: "GitHub",
    value: "github.com/aridimas",
    link: "https://github.com/aridimas/",
  },
]

export default function Contact() {
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
              <h1 className="section-title mb-4 "> <span className="text-cyan-400 glow-text">Get in</span> <span>Touch</span> </h1>
              <h2 className="hero-title mb-12"><span>Let's</span><span className="text-cyan-400 glow-text"> Connect</span></h2>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="body-text text-foreground-secondary mb-8">
                    I'm always interested in hearing about new projects and opportunities. Feel free to reach out
                    through any of the channels below.
                  </p>
                  <p className="body-text text-foreground-secondary">
                    Whether you have a question or just want to say hello, don't hesitate to contact me.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="block p-4 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors duration-300"
                    >
                      <p className="contact-label text-foreground-secondary mb-1">{method.label}</p>
                      <p className="contact-text text-foreground hover:underline">{method.value}</p>
                    </motion.a>
                  ))}
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
                  href="/projects"
                  className="px-8 py-4 bg-foreground text-background rounded-lg nav-text font-medium hover:bg-foreground-secondary transition-colors duration-300"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-foreground text-foreground border-cyan-500 rounded-lg nav-text font-medium hover:bg-foreground/10 transition-colors duration-300"
                >
                  About Me
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
