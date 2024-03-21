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
  <div className="text-center p-3 rounded-lg border border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-default">
    <p>{skill}</p>
  </div>
);

const SkillsCategory = ({ category }: { category: SkillCategory }) => (
  <div key={category.id}>
    <h3 className="text-lg text-white mb-2">{category.name}</h3>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {category.skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section>
    <h2 className="text-3xl font-semibold text-white mb-6">Skills</h2>
    <div className="space-y-5 md:space-y-10">
      {SKILLS_LIST.map((category) => (
        <SkillsCategory key={category.id} category={category} />
      ))}
    </div>
  </section>
);

export default Skills;
