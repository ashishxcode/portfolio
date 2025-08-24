
const achievements = [
  "Built search engine indexing 420M+ creator profiles with <200ms response",
  "Optimized React components, improving core web vitals by 40%",
  "Delivered features that increased user engagement by 50%",
  "Created design system foundation used across all product modules",
  "Built reusable component library with TypeScript and Storybook",
  "Reviewed 200+ pull requests and mentored 5 junior engineers"
];

export function AchievementsSection() {
  return (
    <div>
      <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
        Key Achievements
      </h2>
      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        Career highlights
      </h3>
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="leading-relaxed flex items-start gap-2">
            <span className="text-foreground">•</span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  )
}
