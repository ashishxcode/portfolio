"use client";

import { useState, useRef } from "react";
import { Container } from "@/components/container";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const projects = [
    {
      title: "Creator Discovery Engine",
      subtitle: "Clean search interface for 420M+ creator profiles",
      description:
        "Built an intuitive search and discovery platform with clean, minimal design that helps B2B clients efficiently find relevant creators from a massive database.",
      impact: [
        "Serves 100+ enterprise clients",
        "420M+ profiles indexed with clean architecture",
        "Fast, responsive search experience",
        "99.9% uptime reliability",
      ],
      tech: ["React", "TypeScript", "Elasticsearch", "Node.js", "Redis"],
      year: "2024",
      liveLink: "https://culturex.com",
    },
    {
      title: "Campaign Management Dashboard",
      subtitle: "Clean, user-friendly automation platform",
      description:
        "Designed and developed intuitive dashboards with minimal, clean interfaces that transformed complex manual campaign processes into simple automated workflows.",
      impact: [
        "Saved 10+ hours/week for operations team",
        "95% reduction in manual errors",
        "3x faster campaign setup process",
        "100% team adoption rate",
      ],
      tech: ["React", "Tailwind", "React Query", "PostgreSQL", "Python"],
      year: "2023",
      liveLink: "https://culturex.com/dashboard",
    },
    {
      title: "Scalable Architecture Migration",
      subtitle: "Modern, clean codebase transformation",
      description:
        "Led complete migration from legacy architecture to modern Vite-based system with clean component refactoring, improved developer experience, and scalable patterns.",
      impact: [
        "40% faster development builds",
        "Build time reduced from 8min to 2min",
        "Improved user experience and engagement",
        "60% increase in developer satisfaction",
      ],
      tech: ["Vite", "React", "TypeScript", "Clean Architecture", "Webpack"],
      year: "2023",
      liveLink: "https://culturex.com",
    },
  ];

  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="work" ref={ref}>
      <Container asSection>
        <motion.h2
          className="text-sm text-muted uppercase tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Selected Work
        </motion.h2>
        <motion.div
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectItem
                project={project}
                isLast={index === projects.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  tech: string[];
  year: string;
  liveLink: string;
}

function ProjectItem({
  project,
  isLast,
}: {
  project: Project;
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn("border group hover:bg-accent", !isLast && "border-b-0")}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-6 lg:p-8 text-left cursor-pointer hover:bg-accent/50 transition-colors"
      >
        <div className="flex items-start sm:items-center justify-between">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-muted/30 rounded"></div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1 group-hover:text-muted transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-xs sm:text-sm">
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="ml-2 sm:ml-4 flex-shrink-0">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-muted transition-transform group-hover:scale-110" />
            </motion.div>
          </div>
        </div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ y: -20 }}
            animate={{ y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.2, delay: isOpen ? 0.1 : 0 }}
          >
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-sm sm:text-base font-medium text-foreground mb-2 sm:mb-3">
                  Impact
                </h4>
                <ul className="space-y-2">
                  {project.impact.map((item: string, itemIndex: number) => (
                    <li
                      key={itemIndex}
                      className="text-muted text-xs sm:text-sm flex items-start gap-2"
                    >
                      <span className="text-muted">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-medium text-foreground mb-2 sm:mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent text-foreground text-xs sm:text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
