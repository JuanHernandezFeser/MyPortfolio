import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "es" | "en";

const translations = {
  es: {
    // Navbar
    navHome: "Inicio",
    navAbout: "Sobre mí",
    navSkills: "Skills",
    navProjects: "Proyectos",
    navContact: "Contacto",
    navExperience: "Experiencia",
    // Hero
    heroGreeting: "Hola, soy",
    heroContact: "Contacto",
    heroDownloadCV: "Descargar CV",
    // About
    aboutSubtitle: "Conóceme",
    aboutTitle: "Sobre Mí",
    aboutExperience: "Experiencia",
    aboutYears: "3+ años",
    aboutEducation: "Educación",
    aboutDegree1: "Técnico Superior en Programación",
    aboutDegree2: "Lic. en Contabilidad",
    aboutText: "Soy Juani, un desarrollador fullstack con tres años de experiencia acumulada usando tanto JavaScript como Python. Tengo una gran pasión por la programación y el aprendizaje de nuevas tecnologías, trabajando en equipo con mis compañeros para crear soluciones efectivas y escalables.",
    // Experience
    expSubtitle: "Mi trayectoria",
    expTitle: "Experiencia Laboral",
    expRole1: "Desarrollador Full Stack",
    expPeriod1: "Oct 2024 – Jun 2025",
    expBullet1a: "Participé en proyectos de cartografía para las provincias de Chaco, Córdoba y CABA utilizando QGIS, Python, JavaScript y PostgreSQL.",
    expBullet1b: "Coordiné con analistas y diseñadores para implementar especificaciones de diseño.",
    expBullet1c: "Realicé presentaciones a clientes, aumentando su satisfacción.",
    expBullet1d: "Documenté proyectos según normativas vigentes.",
    expRole2: "Desarrollador Full Stack",
    expPeriod2: "Oct 2022 – Mar 2024",
    expBullet2a: "Participé en la planificación, diseño y desarrollo de más de 25 proyectos web con Django, Flask, React, TypeScript y PostgreSQL.",
    expBullet2b: "Colaboré directamente con clientes para levantar requisitos.",
    expBullet2c: "Elaboré documentación alineada con normativas vigentes.",
    // Skills
    skillsSubtitle: "Mis habilidades",
    skillsTitle: "Skills",
    experienced: "Experimentado",
    intermediate: "Intermedio",
    // Projects
    projectsSubtitle: "Mi trabajo",
    projectsTitle: "Proyectos",
    viewSite: "Ver sitio",
    projectDesc1: "Herramienta utilizada por el Gobierno de la Ciudad de Buenos Aires para gestionar usuarios, roles y permisos de acceso al visor de mapas.",
    projectDesc2: "Visor de mapas web que permite a los usuarios interactuar fácilmente con datos territoriales de la Ciudad de Buenos Aires.",
    projectDesc3: "Aplicación web diseñada para encriptar y desencriptar texto proporcionado por el usuario siguiendo patrones basados en reglas.",
    projectDesc4: "Aplicación web para promover el alquiler de casas vacacionales en Sierra de la Ventana, Buenos Aires.",
    projectDesc5: "Sitio web promocional creado para presentar y lanzar el nuevo lanzamiento musical del artista 'GARI'.",
    // Contact
    contactSubtitle: "Hablemos",
    contactTitle: "Contacto",
    // Footer
    footerRights: "Todos los derechos reservados.",
  },
  en: {
    navHome: "Home",
    navAbout: "About Me",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroGreeting: "Hello, I'm",
    heroContact: "Contact",
    heroDownloadCV: "Download CV",
    aboutSubtitle: "Get To Know More",
    aboutTitle: "About Me",
    aboutExperience: "Experience",
    aboutYears: "3+ years",
    aboutEducation: "Education",
    aboutDegree1: "Higher Technique in Programming",
    aboutDegree2: "Bachelor's in Accounting",
    aboutText: "I'm Juani, a fullstack developer with three years of experience using both JavaScript and Python. I have a great passion for programming and learning new things, working in a group with my coworkers to create effective and scalable solutions.",
    expSubtitle: "My journey",
    expTitle: "Work Experience",
    expRole1: "Full Stack Developer",
    expPeriod1: "Oct 2024 – Jun 2025",
    expBullet1a: "Participated in cartography projects for the provinces of Chaco, Córdoba, and CABA using QGIS, Python, JavaScript, and PostgreSQL.",
    expBullet1b: "Coordinated with analysts and designers to implement design specifications.",
    expBullet1c: "Delivered client presentations, increasing their satisfaction.",
    expBullet1d: "Documented projects according to current regulations.",
    expRole2: "Full Stack Developer",
    expPeriod2: "Oct 2022 – Mar 2024",
    expBullet2a: "Participated in planning, design, and development of 25+ web projects using Django, Flask, React, TypeScript, and PostgreSQL.",
    expBullet2b: "Collaborated directly with clients to gather requirements.",
    expBullet2c: "Prepared documentation aligned with current regulations.",
    skillsSubtitle: "My abilities",
    skillsTitle: "Skills",
    experienced: "Experienced",
    intermediate: "Intermediate",
    projectsSubtitle: "My work",
    projectsTitle: "Projects",
    viewSite: "Go to Page",
    projectDesc1: "A tool used by the Government of the City of Buenos Aires to manage users, roles, and access permissions for the map viewer.",
    projectDesc2: "A web-based map viewer that allows users to easily interact with territorial data from the City of Buenos Aires.",
    projectDesc3: "A web application designed to encrypt and decrypt user-provided text following specific rule-based patterns.",
    projectDesc4: "A web application designed to promote the rental of vacation houses in Sierra de la Ventana, Buenos Aires Province, Argentina.",
    projectDesc5: "A promotional website created to present and launch the new song release by the artist 'GARI'.",
    contactSubtitle: "Let's Talk",
    contactTitle: "Contact Me",
    footerRights: "All rights reserved.",
  },
} as const;

type Translations = { [K in keyof typeof translations.es]: string };

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return (saved === "en" || saved === "es") ? saved : "es";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
