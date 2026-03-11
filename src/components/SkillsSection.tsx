import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Intermediate" },
  { name: "React JS", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Tailwind", level: "Intermediate" },
  { name: "Bootstrap", level: "Intermediate" },
  { name: "WordPress", level: "Intermediate" },
];

const backendSkills = [
  { name: "Python", level: "Experienced" },
  { name: "Django REST", level: "Experienced" },
  { name: "Flask", level: "Experienced" },
  { name: "SQL", level: "Experienced" },
  { name: "Git", level: "Intermediate" },
  { name: "QGIS", level: "Intermediate" },
];

const levelColor = (level: string) =>
  level === "Experienced" ? "text-primary" : "text-muted-foreground";

const SkillsSection = () => {
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
          <p className="text-sm text-primary tracking-widest uppercase mb-2">Mis habilidades</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
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
                    <p className={`text-xs ${levelColor(skill.level)}`}>{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
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
                    <p className={`text-xs ${levelColor(skill.level)}`}>{skill.level}</p>
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
