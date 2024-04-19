import Image from "next/image";
import InfluenzerImage from "@/public/images/projects/influenzer.png";
import AppleImage from "@/public/images/projects/apple.png";
import MetaverseImage from "@/public/images/projects/metaverse.png";
import CultureXImage from "@/public/images/projects/culturex.png";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: any;
  url: string;
  technologies: string[];
}

const projects = [
  {
    title: "Influenzer",
    image: InfluenzerImage,
    description:
      "Craft a dynamic and engaging platform showcasing the power of influencer marketing in a sleek and modern interface.",
    technologies: ["Next.js", "TailwindCSS", "AOS"],
    url: "https://www.influenzer.ai/",
  },
  {
    title: "iPhone 14 Landing Page",
    image: AppleImage,
    description:
      "Implement innovative design elements and captivating visuals to highlight the features of the iPhone 14 in an immersive web experience.",
    technologies: ["React", "Three.js", "GSAP"],
    url: "https://appledesign.vercel.app/",
  },
  {
    title: "Metaverse Landing Page",
    image: MetaverseImage,
    description:
      "Create an immersive environment that blurs the lines between reality and virtual reality, featuring captivating artwork and seamless navigation.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    url: "https://themetaversemadness.vercel.app/",
  },
  {
    title: "CultureX",
    image: CultureXImage,
    description:
      "Curate an immersive experience that celebrates diversity and cultural exchange, inviting users to explore and engage with different traditions and perspectives.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    url: "https://culturex.ai/",
  },
];

// components/Project.js
const Project = ({
  title,
  description,
  image,
  url,
  technologies,
}: ProjectProps) => {
  return (
    <Link
      href={url}
      className="rounded-lg overflow-hidden border border-blue-500/20 cursor-pointer transition-all duration-300 hover:bg-blue-500/10"
    >
      <div className="space-y-6 p-6">
        <Image src={image} alt={title} className="w-16 h-16" />
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
    </Link>
  );
};

const Projects = () => {
  return (
    <section className="space-y-4">
      <h1 className="h1 mb-5 md:mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
