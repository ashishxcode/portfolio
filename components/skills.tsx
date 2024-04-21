import React from "react";

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

const SKILLS_LIST = [
  {
    id: "frontend",
    name: "Frontend Development",
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
    id: "backend ",
    name: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "other",
    name: "Other",
    skills: ["Git", "Firebase", "Figma"],
  },
];

const SkillItem = ({ skill }: { skill: string }) => (
  <div className="text-center p-2 rounded-lg border border-primary/20 bg-primary/10 dark:bg-primary/20 cursor-default">
    <p>{skill}</p>
  </div>
);

const SkillsCategory = ({ category }: { category: SkillCategory }) => (
  <div key={category.id} className="px-4">
    <h3 className="text-lg mb-4">{category.name}</h3>
    <div className="flex flex-wrap gap-4">
      {category.skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section className="space-y-4">
    <h1 className="h1 mb-5 md:mb-10">Skills</h1>
    <div className="space-y-5 md:space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-primary/20">
        {SKILLS_LIST.map((category) => (
          <SkillsCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
