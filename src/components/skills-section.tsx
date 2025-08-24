"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "Tanstack",
      "Vite",
      "Redux Toolkit",
    ],
  },
  {
    category: "Design & User Experience",
    technologies: [
      "Figma",
      "v0",
      "Clean Architecture",
      "Component Design",
      "Responsive Design",
      "User-Centered Design",
    ],
  },
  {
    category: "Backend & Database",
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Supabase",
    ],
  },
  {
    category: "Tools & Infrastructure",
    technologies: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "Linear",
      "Jira",
      "ESLint",
    ],
  },
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills">
      <Container asSection>
        <motion.h2
          className="text-sm text-muted uppercase tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Technical Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-foreground">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-muted flex items-start gap-2"
                  >
                    <span className="text-muted">•</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
