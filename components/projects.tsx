// pages/index.js
import { LoopIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  icon: JSX.Element;
  url: string;
  technologies: string[];
}

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <LoopIcon />,
    url: "https://example.com/project1",
    technologies: ["React", "Next.js"],
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <LoopIcon />,
    url: "https://example.com/project2",
    technologies: ["React", "Next.js"],
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <LoopIcon />,
    url: "https://example.com/project3",
    technologies: ["React", "Next.js"],
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <LoopIcon />,
    url: "https://example.com/project4",
    technologies: ["React", "Next.js"],
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <LoopIcon />,
    url: "https://example.com/project5",
    technologies: ["React", "Next.js"],
  },
  {
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <LoopIcon />,
    url: "https://example.com/project6",
    technologies: ["React", "Next.js"],
  },
];

// components/Project.js
const Project = ({
  title,
  description,
  icon,
  url,
  technologies,
}: ProjectProps) => {
  return (
    <div className="rounded-lg overflow-hidden border border-blue-500/20 hover:shadow-lg cursor-pointer transition-all duration-300 hover:bg-blue-500/10">
      <div className="space-y-6 p-6">
        <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
          {icon}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="opacity-80">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="text-sm italic font-medium bg-blue-500/10 rounded-sm px-2 py-1 dark:bg-blue-500/20"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="space-y-4">
      <h1 className="h1 mb-5 md:mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
