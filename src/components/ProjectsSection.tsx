import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";

const projects = [
  {
    title: "Portal IDECABA",
    description: "Herramienta utilizada por el Gobierno de la Ciudad de Buenos Aires para gestionar usuarios, roles y permisos de acceso al visor de mapas.",
    image: project4,
    liveUrl: "#",
  },
  {
    title: "IDECABA Map Viewer",
    description: "Visor de mapas web que permite a los usuarios interactuar fácilmente con datos territoriales de la Ciudad de Buenos Aires.",
    image: project5,
    liveUrl: "#",
  },
  {
    title: "Text Encryptor",
    description: "Aplicación web diseñada para encriptar y desencriptar texto proporcionado por el usuario siguiendo patrones basados en reglas.",
    image: project1,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "La Nanana",
    description: "Aplicación web para promover el alquiler de casas vacacionales en Sierra de la Ventana, Buenos Aires.",
    image: project2,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Gari - NEON",
    description: "Sitio web promocional creado para presentar y lanzar el nuevo lanzamiento musical del artista 'GARI'.",
    image: project3,
    githubUrl: "#",
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
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
          <p className="text-sm text-primary tracking-widest uppercase mb-2">Mi trabajo</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Proyectos</h2>
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
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-base mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} /> Github
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} /> Ver sitio
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
