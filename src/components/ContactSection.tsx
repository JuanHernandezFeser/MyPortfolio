import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary tracking-widest uppercase mb-2">Hablemos</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">Contacto</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="mailto:jihernandezfeser@gmail.com"
            className="card-elevated rounded-xl p-6 flex items-center gap-4 hover:border hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">jihernandezfeser@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/juan-ignacio-hernandez-feser/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-elevated rounded-xl p-6 flex items-center gap-4 hover:border hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="text-primary" size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">Juan Ignacio Hernández Feser</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
