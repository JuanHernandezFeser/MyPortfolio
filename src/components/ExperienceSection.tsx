import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const ExperienceSection = () => {
  const { t } = useLang();

  const experiences = [
    {
      company: "Koda Systems",
      role: t.expRole1,
      period: t.expPeriod1,
      bullets: [t.expBullet1a, t.expBullet1b, t.expBullet1c],
      tech: ["React", "Node.js", "Python", "PostgreSQL", "Vercel", "Cloudflare"],
    },
    {
      company: "Geosystems S.A.",
      role: t.expRole2,
      period: t.expPeriod2,
      bullets: [t.expBullet2a, t.expBullet2b, t.expBullet2c],
      tech: ["Python", "PyQt", "JavaScript", "PostgreSQL", "QGIS"],
    },
    {
      company: "Paradigma del Sur S.A.",
      role: t.expRole3,
      period: t.expPeriod3,
      bullets: [t.expBullet3a, t.expBullet3b, t.expBullet3c, t.expBullet3d],
      tech: ["Django", "Flask", "React", "TypeScript", "PostgreSQL", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary tracking-widest uppercase mb-2">{t.expSubtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">{t.expTitle}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-6" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                <div className="card-elevated rounded-xl p-6">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Calendar size={14} />
                    <span className="text-xs font-medium">{exp.period}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                    <Building2 size={14} />
                    {exp.company}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
