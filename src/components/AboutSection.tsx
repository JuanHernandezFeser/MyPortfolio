import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary tracking-widest uppercase mb-2">Conóceme</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Sobre Mí</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="card-elevated rounded-xl p-6 text-center">
              <Briefcase className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-heading font-semibold text-sm mb-1">Experiencia</h3>
              <p className="text-muted-foreground text-sm">3+ años</p>
              <p className="text-muted-foreground text-xs mt-1">FullStack Development</p>
            </div>
            <div className="card-elevated rounded-xl p-6 text-center">
              <GraduationCap className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-heading font-semibold text-sm mb-1">Educación</h3>
              <p className="text-muted-foreground text-xs mt-1">Técnico Superior en Programación</p>
              <p className="text-muted-foreground text-xs mt-1">Lic. en Contabilidad</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              Soy Juani, un desarrollador fullstack con tres años de experiencia acumulada usando tanto JavaScript como Python.
              Tengo una gran pasión por la programación y el aprendizaje de nuevas tecnologías, trabajando en equipo con mis compañeros para crear soluciones efectivas y escalables.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
