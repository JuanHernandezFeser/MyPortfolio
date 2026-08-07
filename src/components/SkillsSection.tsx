import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", levelKey: "experienced" },
      { name: "CSS", levelKey: "intermediate" },
      { name: "React JS", levelKey: "intermediate" },
      { name: "JavaScript", levelKey: "intermediate" },
      { name: "TypeScript", levelKey: "intermediate" },
      { name: "Tailwind", levelKey: "intermediate" },
      { name: "Bootstrap", levelKey: "intermediate" },
      { name: "WordPress", levelKey: "intermediate" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", levelKey: "experienced" },
      { name: "Django REST", levelKey: "experienced" },
      { name: "Flask", levelKey: "experienced" },
      { name: "FastAPI", levelKey: "basic" },
      { name: "SQL (PostgreSQL)", levelKey: "experienced" },
      { name: "MySQL", levelKey: "experienced" },
      { name: "REST APIs", levelKey: "experienced" },
      { name: "C#", levelKey: "basic" },
      { name: "Node.js", levelKey: "experienced" },
      { name: "Git", levelKey: "intermediate" },
      { name: "QGIS", levelKey: "intermediate" },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "Cursor", levelKey: "experienced" },
      { name: "GitHub Copilot", levelKey: "experienced" },
      { name: "Claude / ChatGPT", levelKey: "experienced" },
      { name: "Lovable / v0", levelKey: "intermediate" },
      { name: "OpenCode", levelKey: "intermediate" },
    ],
  },
  {
    title: "Deploy / Infra",
    skills: [
      { name: "Vercel", levelKey: "intermediate" },
      { name: "Cloudflare Pages/Workers", levelKey: "intermediate" },
    ],
  },
];

const levelColor = (key: string) => {
  if (key === "experienced") return "text-primary";
  if (key === "basic") return "text-muted-foreground/70";
  return "text-muted-foreground";
};

const SkillsSection = () => {
  const { t } = useLang();

  const levelLabel = (key: string) =>
    key === "experienced" ? t.experienced : key === "basic" ? t.basic : t.intermediate;

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
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-elevated rounded-xl p-8"
            >
              <h3 className="font-heading font-semibold text-lg mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
