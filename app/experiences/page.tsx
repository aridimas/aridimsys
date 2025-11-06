"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { desc } from "framer-motion/client"

const projects = [
  { 
    title1: "July, 2024 – August, 2025",
    title2: "Threat Analyst",
    title3: "Dias Naga Alpha - ",
    description: "• Conducting SOC monitoring through SIEM, monitoring threats on more than 300 client computers 24/7.",
    description1: "• Continuously monitoring applications on more than 100 client mobile devices 24/7.",
    description2: "• Performing Threat Intelligence and Threat Hunting to protect client devices and the office network.",
    description3: "• Developing Tactics, Techniques, and Procedures (TTP) for team and company purposes.",
    description4: "• Reporting all detected security threats 24/7 to PC owners for prevention and protection actions.",
    description5: "• Delivered training in conducting attacks which is useful for cyber security education for high school students.",
    description6: "• Preparing a monthly threat analysis report.",
    tags: ["Trellix ePO", "Trellix MTD"],
    
  },
 { 
    title1: "December, 2023 – Februari, 2024",
    title2: "Penetration Tester",
    title3: "BPR Supra Artapersada Bank - ",
    description: "• Reporting and providing recommendations on high-level vulnerability findings that impact the security of the BPR upra Artapersada system.",
    description1: "• Conducting penetration testing on web applications using tools such as Acunetix, SQLmap, Burp Suite, Dirsearch, and others",
    description2: "• Creating a penetration testing report for BPR Supra Artapersada to serve as a reference for web application audits.",
    tags: ["SQLMAP", "Acunetix", "Burp Suite"," Dirsearch", "Manual Testing"],
    
  },
  { 
    title1: "December, 2023 – Februari, 2024",
    title2: "Web Developer",
    title3: "Codelatte - ",
    description: "• Creating and developing labs for penetration testing training focused on common website vulnerabilities",
    description1: "• Performing penetration testing on internal applications and developing websites (PHP Laravel) according to assigned project tasks",
    tags: ["Laravel", "Mariadb", "PHP", "Penetration Testing"],
    
  },
  { 
    title1: "Juni, 2022 – Desember, 2022",
    title2: "Web Developer",
    title3: " PT. Bumi Seduh - ",
    description: "• Collaborated with the company owner in designing the website, acting as a guide for feature layout and button placement to ensure the final product met the owner’s preferences and goals.",
    description1: "• Designed subsidiary logos and implemented them as assets on the developed website.",
    description2: "• Managed feature upgrades and asset updates on the company website from the initial design phase to publishing, ensuring feature responsiveness across various browsers and device types.",
    tags: ["Laravel", "Mariadb", "PHP", "Web Design"],
    
  },
  { 
    title1: "Juni, 2022 – Desember, 2022",
    title2: "Project  ",
    title3: " Initiative and ",
    description: "• Built a Penetration Testing Course web application (labs) containing various vulnerabilities, including SQL Injection, XSS, CSRF, IDOR, Broken Authentication, File Upload, and Local File Inclusion, using HTML, CSS, PHP, and JavaScript.",
    description1: "• Developed a Company Profile website for a car rental company using HTML and JavaScript.",
    description2: "• Created a prototype for a web application for the Human Resources Bureau at Universitas Ahmad Dahlan to manage faculty functional positions, using Adobe XD, Photoshop, and Visio.",
    description3: "• Built a Company Website for a coffee shop group and coffee equipment business.",
    tags: [],
  }
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
                        <h3 className="project description mb-3 group-hover:text-foreground transition-colors font-medium">
                          {project.title1}
                        </h3>
                        <h3 className="project-title mb-3 group-hover:text-foreground transition-colors">
                          {project.title3} <span className="project-title mb-3 group-hover:text-foreground text-cyan-400 transition-colors" >
                          {project.title2}</span>
                        </h3>
                        <p className="project-description text-foreground-secondary mb-4">{project.description}</p>
                        <p className="project-description text-foreground-secondary mb-4">{project.description1}</p>
                        <p className="project-description text-foreground-secondary mb-4">{project.description2}</p>
                        <p className="project-description text-foreground-secondary mb-4">{project.description3}</p>
                        <p className="project-description text-foreground-secondary mb-4">{project.description4}</p>
                        <p className="project-description text-foreground-secondary mb-4">{project.description5}</p>
                        <p className="project-description text-foreground-secondary mb-4">{project.description6}</p>

                        
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
                      <div className="text-foreground-secondary group-hover:text-foreground transition-colors"></div>
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
