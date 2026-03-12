import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { useLang } from "@/hooks/useLang";

const Index = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border">
        © 2026 Juan Ignacio Hernández Feser. {t.footerRights}
      </footer>
    </div>
  );
};

export default Index;
