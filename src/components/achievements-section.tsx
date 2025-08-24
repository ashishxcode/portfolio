const achievements = [
  "Built search engine indexing 420M+ creator profiles with clean architecture",
  "Created intuitive user interfaces that increased engagement by 50%",
  "Developed scalable component library serving 100+ enterprise clients",
  "Established design system foundation used across all product modules",
  "Built reusable TypeScript components with comprehensive documentation",
  "Mentored junior developers and reviewed 200+ pull requests",
];

export function AchievementsSection() {
  return (
    <div>
      <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
        Key Achievements
      </h2>

      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="leading-relaxed flex items-start gap-2">
            <span className="text-foreground">•</span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}
