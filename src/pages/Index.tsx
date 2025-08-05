import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CodingProfilesSection } from "@/components/sections/CodingProfilesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  console.log('Index.tsx: Index component rendering...');
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
