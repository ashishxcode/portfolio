"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { AchievementsSection } from "@/components/achievements-section";

const experiences = [
  {
    company: "CultureX",
    period: "Aug 2023 — Present",
    role: "Senior Frontend Engineer",
    description:
      "Leading frontend architecture and performance optimization. Scaled core systems to support 100+ enterprise clients and improved developer experience by 40%.",
    current: true,
    impact: [
      "Scaled to 100+ enterprise clients",
      "Led architecture decisions",
      "Improved developer experience by 40%",
    ],
    companyInfo: "B2B Creator Marketing Platform",
  },
  {
    company: "CultureX",
    period: "Feb 2022 — Jul 2023",
    role: "Frontend Engineer",
    description:
      "Joined as an early engineer and helped build the product from ground up. Built core features, reusable components, and launched internal dashboards.",
    current: false,
    impact: [
      "Early-stage team member (employee #3)",
      "Built core product features from scratch",
      "Improved ops efficiency by 10+ hours/week",
    ],
    companyInfo: "Series A Startup",
  },
];


export function ExperienceSection() {
  return (
    <section id="experience">
      <Container asSection>
        <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-12 pt-12 border-t">
          <AchievementsSection />
        </div>
      </Container>
    </section>
  );
}

function ExperienceItem({
  experience,
  isLast,
}: {
  experience: any;
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border rounded-lg mb-4 overflow-hidden bg-background hover:shadow-sm transition-all duration-200")}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-6 text-left cursor-pointer hover:bg-accent/30 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-foreground/10 rounded"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {experience.role}
                </h3>
                {experience.current && (
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs rounded-full font-medium border border-green-500/20 self-start sm:self-center">
                    Current
                  </span>
                )}
              </div>
              <p className="text-muted text-xs sm:text-sm mb-2">
                {experience.company} • {experience.companyInfo}
              </p>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
          <div className="ml-2 sm:ml-4 flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
            <div className="text-right">
              <span className="text-xs sm:text-sm text-muted block">
                {experience.period.split(" — ")[0]}
              </span>
              <span className="text-xs sm:text-sm text-muted">
                {experience.period.split(" — ")[1] === "Present"
                  ? "Present"
                  : experience.period.split(" — ")[1]}
              </span>
            </div>
            <Plus
              className={`w-4 h-4 sm:w-5 sm:h-5 text-muted transition-all duration-200 flex-shrink-0 ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          </div>
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 border-t border-accent/50">
          <div className="mt-6">
            <h4 className="text-sm uppercase tracking-wide text-muted mb-4">
              Key Impact
            </h4>
            <ul className="space-y-3">
              {experience.impact.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-muted">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
