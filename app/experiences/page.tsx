"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project and what it accomplishes.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "Details about your second project and the technologies used.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "Information about your third project and its impact.",
    tags: ["Design", "Figma", "Prototyping"],
    link: "#",
  },
  {
    title: "Project Four",
    description: "Description of your fourth project and key features.",
    tags: ["Full Stack", "AWS", "Docker"],
    link: "#",
  },
]

export default function Projects() {
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
              <h1 className="section-title mb-4"> <span>Port</span><><span className="text-cyan-400 glow-text">folio</span></></h1>
              <h2 className="hero-title mb-12"><span>Professional</span> <span className="text-cyan-400 glow-text">Experience</span></h2>

              <div className="grid gap-8 mb-12">
                {projects.map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group bg-foreground/5 rounded-lg p-8 hover:bg-foreground/10 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="project-title mb-3 group-hover:text-foreground transition-colors">
                          {project.title}
                        </h3>
                        <p className="project-description text-foreground-secondary mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-foreground/10 text-foreground-secondary rounded text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-foreground-secondary group-hover:text-foreground transition-colors">→</div>
                    </div>
                  </motion.a>
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
