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
  <div key={category.id}>
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
    <h1 className="h1 mb-5 md:mb-10">Skills</h1>
    <div className="space-y-5 md:space-y-10">
      <div className="flex flex-col gap-8">
        {SKILLS_LIST.map((category) => (
          <SkillsCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
