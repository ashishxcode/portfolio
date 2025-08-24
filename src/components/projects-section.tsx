"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const projects = [
    {
      title: "Creator Discovery Engine",
      subtitle: "Scaling search for 420M+ creator profiles",
      description:
        "Built a comprehensive search and discovery platform enabling B2B clients to efficiently find relevant creators from a massive database.",
      impact: [
        "Enabled 100+ B2B clients",
        "420M+ profiles indexed",
        "<200ms search response",
        "99.9% uptime",
      ],
      tech: ["React", "TypeScript", "Elasticsearch", "Node.js", "Redis"],
      year: "2024",
      liveLink: "https://culturex.com",
    },
    {
      title: "Campaign Management Dashboard",
      subtitle: "Intelligent automation platform for marketing ops",
      description:
        "Developed comprehensive dashboards that transformed manual campaign processes into automated workflows with real-time monitoring.",
      impact: [
        "10+ hours/week saved",
        "95% error reduction",
        "3x faster setup",
        "100% team adoption",
      ],
      tech: ["React", "Tailwind", "React Query", "PostgreSQL", "Python"],
      year: "2023",
      liveLink: "https://culturex.com/dashboard",
    },
    {
      title: "Performance Optimization Suite",
      subtitle: "Modern architecture transformation",
      description:
        "Led complete migration from legacy CRA to Vite-based architecture with component refactoring and bundle optimization.",
      impact: [
        "40% faster builds",
        "8min → 2min build time",
        "50% better engagement",
        "60% dev satisfaction",
      ],
      tech: ["Vite", "React", "TypeScript", "Performance APIs", "Webpack"],
      year: "2023",
      liveLink: "https://culturex.com",
    },
  ];

  return (
    <section id="work">
      <Container asSection>
        <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
          Selected Work
        </h2>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectItem({ project, isLast }: { project: any; isLast: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn("border group hover:bg-accent", !isLast && "border-b-0")}
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
              <p className="text-muted text-xs sm:text-sm">{project.subtitle}</p>
            </div>
          </div>
          <div className="ml-2 sm:ml-4 flex-shrink-0">
            <Plus
              className={`w-4 h-4 sm:w-5 sm:h-5 text-muted transition-transform group-hover:scale-110 ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-muted text-sm sm:text-base leading-relaxed">{project.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-sm sm:text-base font-medium text-foreground mb-2 sm:mb-3">Impact</h4>
                <ul className="space-y-2">
                  {project.impact.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="text-muted text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-muted">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-medium text-foreground mb-2 sm:mb-3">Tech Stack</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
}
