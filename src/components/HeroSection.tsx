import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import profilePic from "@/assets/profile-pic.png";
import { useLang } from "@/hooks/useLang";

const LINKEDIN_URL = "https://linkedin.com/in/juan-ignacio-hernandez-feser";

const HeroSection = () => {
  const { t } = useLang();

  const openLinkedIn = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">{t.heroGreeting}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4">
            Juan Ignacio{" "}
            <span className="text-gradient">Hernández Feser</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">FullStack Developer</p>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {t.heroContact}
            </a>
            <button
              onClick={openLinkedIn}
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin size={20} />
            </button>
            <a
              href="https://github.com/juanhernandezfeser"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
            <img src={profilePic} alt="Juan Ignacio Hernández Feser" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
