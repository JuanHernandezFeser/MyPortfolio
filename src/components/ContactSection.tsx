import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const LINKEDIN_URL = "https://linkedin.com/in/juan-ignacio-hernandez-feser";

const ContactSection = () => {
  const { t } = useLang();

  const openLinkedIn = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary tracking-widest uppercase mb-2">{t.contactSubtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">{t.contactTitle}</h2>
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

          <button
            onClick={openLinkedIn}
            className="card-elevated rounded-xl p-6 flex items-center gap-4 hover:border hover:border-primary/30 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="text-primary" size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">Juan Ignacio Hernández Feser</p>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
