import { Container } from "@/components/container";

const skills = [
  {
    category: "Frontend Development",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Query", "Vite", "Redux Toolkit"]
  },
  {
    category: "Backend & Database",
    technologies: ["Node.js", "PostgreSQL", "Elasticsearch", "Redis", "Firebase", "Supabase"]
  },
  {
    category: "Tools & Infrastructure", 
    technologies: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "Linear", "Figma"]
  },
  {
    category: "Testing & Quality",
    technologies: ["Jest", "React Testing Library", "Playwright", "ESLint", "Prettier", "TypeScript"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills">
      <Container asSection>
        <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
          Technical Expertise
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="text-muted text-sm flex items-start gap-2">
                  <span className="text-muted">•</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </Container>
    </section>
  )
}
