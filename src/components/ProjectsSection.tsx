import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";

const ProjectsSection = () => {
  const { t } = useLang();

  const projects = [
    {
      title: "Portal IDECABA",
      description: t.projectDesc1,
      image: project4,
      liveUrl: "https://idecaba.buenosaires.gob.ar/",
    },
    {
      title: "IDECABA Map Viewer",
      description: t.projectDesc2,
      image: project5,
      liveUrl: "https://visualizador-idecaba.buenosaires.gob.ar/#/",
    },
    {
      title: "Text Encryptor",
      description: t.projectDesc3,
      image: project1,
      liveUrl: "https://juanhernandezfeser.github.io/EncriptadorDeTexto/",
    },
    {
      title: "La Nanana",
      description: t.projectDesc4,
      image: project2,
      liveUrl: "https://lananana.com.ar/",
    },
    {
      title: "Gari - NEON",
      description: t.projectDesc5,
      image: project3,
      liveUrl: "https://juanhernandezfeser.github.io/GariNeon/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary tracking-widest uppercase mb-2">{t.projectsSubtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">{t.projectsTitle}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-elevated rounded-xl overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-base mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} /> {t.viewSite}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
