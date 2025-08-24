"use client";

import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AchievementsSection } from "@/components/achievements-section";

const experiences = [
  {
    company: "CultureX",
    period: "Feb 2022 — Present",
    role: "Senior Frontend Engineer",
    description:
      "Joined as early engineer (employee #3) to build the product from ground up. Now leading frontend development with focus on clean, scalable solutions that serve 100+ enterprise clients.",
    current: true,
    impact: [
      "Early-stage team member, grew to senior role",
      "Built core product features and scalable architecture",
      "Created internal dashboards saving 10+ hours/week",
      "Led clean architecture serving 100+ enterprise clients",
      "Streamlined developer workflows and tooling",
    ],
    companyInfo: "B2B Creator Marketing Platform",
  },
];

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="experience">
      <Container asSection>
        <motion.h2
          className="text-sm text-muted uppercase tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Experience
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceItem
                experience={exp}
                isLast={index === experiences.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AchievementsSection />
        </motion.div>
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
  return (
    <div
      className={cn(
        "border overflow-hidden bg-background hover:shadow-sm transition-all duration-200"
      )}
    >
      <button className="w-full p-4 sm:p-6 text-left hover:bg-accent/30 transition-colors">
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
          </div>
        </div>
      </button>
    </div>
  );
}
