import React from "react";

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

const SKILLS_LIST = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    name: "Backend",
    id: "backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "other",
    name: "Other",
    skills: ["Git", "Firebase", "Figma"],
  },
];

const SkillItem = ({ skill }: { skill: string }) => (
  <div className="text-center p-2 rounded-lg border border-blue-500/50 cursor-default">
    <p>{skill}</p>
  </div>
);

const SkillsCategory = ({ category }: { category: SkillCategory }) => (
  <div key={category.id} className="md:first:ps-0 md:last:pe-0 md:px-8">
    <h3 className="text-lg mb-2">{category.name}</h3>
    <div className="flex flex-wrap gap-4">
      {category.skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section className="space-y-4">
    <h2 className="text-3xl font-semibold">Skills</h2>
    <div className="space-y-5 md:space-y-10">
      <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-3 md:divide-x divide-blue-500/50 dark:divide-blue-500/20">
        {SKILLS_LIST.map((category) => (
          <SkillsCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
