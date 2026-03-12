import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";

const frontendSkills = [
  { name: "HTML", levelKey: "experienced" },
  { name: "CSS", levelKey: "intermediate" },
  { name: "React JS", levelKey: "intermediate" },
  { name: "JavaScript", levelKey: "intermediate" },
  { name: "TypeScript", levelKey: "intermediate" },
  { name: "Tailwind", levelKey: "intermediate" },
  { name: "Bootstrap", levelKey: "intermediate" },
  { name: "WordPress", levelKey: "intermediate" },
] as const;

const backendSkills = [
  { name: "Python", levelKey: "experienced" },
  { name: "Django REST", levelKey: "experienced" },
  { name: "Flask", levelKey: "experienced" },
  { name: "SQL", levelKey: "experienced" },
  { name: "Git", levelKey: "intermediate" },
  { name: "QGIS", levelKey: "intermediate" },
] as const;

const aiSkills = [
  { name: "Prompt Engineering", levelKey: "experienced" },
  { name: "ChatGPT / GPT API", levelKey: "experienced" },
  { name: "LLM Integration", levelKey: "intermediate" },
  { name: "AI-Assisted Dev", levelKey: "experienced" },
] as const;

const SkillsSection = () => {
  const { t } = useLang();

  const levelColor = (key: string) =>
    key === "experienced" ? "text-primary" : "text-muted-foreground";

  const levelLabel = (key: string) =>
    key === "experienced" ? t.experienced : t.intermediate;

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary tracking-widest uppercase mb-2">{t.skillsSubtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">{t.skillsTitle}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated rounded-xl p-8"
          >
            <h3 className="font-heading font-semibold text-lg mb-6 text-center">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{skill.name}</p>
                    <p className={`text-xs ${levelColor(skill.levelKey)}`}>{levelLabel(skill.levelKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated rounded-xl p-8"
          >
            <h3 className="font-heading font-semibold text-lg mb-6 text-center">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{skill.name}</p>
                    <p className={`text-xs ${levelColor(skill.levelKey)}`}>{levelLabel(skill.levelKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated rounded-xl p-8 md:col-span-2 max-w-md mx-auto w-full"
          >
            <h3 className="font-heading font-semibold text-lg mb-6 text-center">AI & Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {aiSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{skill.name}</p>
                    <p className={`text-xs ${levelColor(skill.levelKey)}`}>{levelLabel(skill.levelKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
