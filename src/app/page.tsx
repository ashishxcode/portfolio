import { PortfolioHeader } from "@/components/portfolio-header";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactCTASection } from "@/components/contact-cta-section";

export default function Home() {
  return (
    <>
      <PortfolioHeader />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactCTASection />
    </>
  );
}
