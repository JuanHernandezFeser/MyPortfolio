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
    aboutDegree1: "Técnico en Computación con Orientación Administrativa",
    aboutDegree2: "Universidad Nacional del Sur",
    aboutText: "Soy Juani, un desarrollador fullstack con más de 3 años de experiencia usando tanto JavaScript como Python. Combino trabajo en relación de dependencia con mi práctica freelance (Koda Systems), usando herramientas de IA generativa como Cursor, Copilot y v0 para acelerar el desarrollo sin perder calidad. Me apasiona aprender nuevas tecnologías y crear soluciones efectivas y escalables.",
    // Experience
    expSubtitle: "Mi trayectoria",
    expTitle: "Experiencia Laboral",
    expRole1: "Founder / Freelance Full Stack",
    expPeriod1: "2022 – presente",
    expBullet1a: "Diseño y desarrollo sitios web y aplicaciones a medida para clientes, gestionando todo el ciclo: relevamiento, desarrollo, despliegue y soporte.",
    expBullet1b: "Utilizo herramientas de IA generativa (Cursor, Copilot, Lovable, v0) para acelerar tiempos de desarrollo sin perder calidad de entrega.",
    expBullet1c: "Gestiono de forma autónoma la relación con clientes, desde el alcance del proyecto hasta la entrega final.",
    expRole2: "Desarrollador de Software",
    expPeriod2: "oct. 2024 – jun. 2025",
    expBullet2a: "Desarrollé plugins para QGIS (Python, PyQt) que automatizaron tareas manuales, procesaron y visualizaron datos geoespaciales, e integraron QGIS con otros sistemas, en proyectos de cartografía para Chaco, Córdoba y CABA.",
    expBullet2b: "Participé en 5 proyectos web, construyendo dashboards internos y plataformas conectadas a datos geoespaciales.",
    expBullet2c: "Colaboré en equipo multidisciplinario de 5+ personas, presentando avances a clientes y stakeholders, y elaborando documentación técnica.",
    expRole3: "Desarrollador Full Stack",
    expPeriod3: "nov. 2022 – mar. 2024",
    expBullet3a: "Desarrollé funcionalidades end-to-end en SIGE (React, Django REST Framework, Flask, PostgreSQL, MySQL), abarcando frontend y backend.",
    expBullet3b: "Implementé y mantuve ~25 tiendas e-commerce para clientes, desde desarrollo inicial hasta soporte continuo.",
    expBullet3c: "Mantuve y mejoré sistemas de gestión legacy desarrollados en C#.",
    expBullet3d: "Gestioné despliegues vía SSH y control de versiones con Git en equipo.",
    // Skills
    skillsSubtitle: "Mis habilidades",
    skillsTitle: "Skills",
    experienced: "Experimentado",
    intermediate: "Intermedio",
    basic: "Básico",
    // Projects
    projectsSubtitle: "Mi trabajo",
    projectsTitle: "Proyectos",
    viewSite: "Ver sitio",
    projectDesc1: "Herramienta utilizada por el Gobierno de la Ciudad de Buenos Aires para gestionar usuarios, roles y permisos de acceso al visor de mapas.",
    projectDesc2: "Visor de mapas web que permite a los usuarios interactuar fácilmente con datos territoriales de la Ciudad de Buenos Aires.",
    projectDesc3: "Aplicación web diseñada para encriptar y desencriptar texto proporcionado por el usuario siguiendo patrones basados en reglas.",
    projectDesc4: "Aplicación web para promover el alquiler de casas vacacionales en Sierra de la Ventana, Buenos Aires.",
    projectDesc5: "Sitio web promocional creado para presentar y lanzar el nuevo lanzamiento musical del artista 'GARI'.",
    projectDesc6: "Sitio web para el programa de radio 'A la cancha', transmitido por FM Altos 97.9, Bahía Blanca, Buenos Aires, Argentina.",
    projectDesc7: "Sistema web para la gestión de prodes deportivos. La IA de Gemini se encarga de la creación de fechas, la interpretación de pronósticos y la suma de puntajes.",
    projectDesc8: "Sitio web institucional para Koda Systems, un emprendimiento de desarrollo de soluciones web a medida.",
    projectDesc9: "Ecommerce para la venta de ropa de blanquería en Bahía Blanca, Buenos Aires, Argentina. Pago a través de Mercado Pago, calculadora de envíos de OCA, gestión de clientes y administrador personal.",
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
    navExperience: "Experience",
    heroGreeting: "Hello, I'm",
    heroContact: "Contact",
    heroDownloadCV: "Download CV",
    aboutSubtitle: "Get To Know More",
    aboutTitle: "About Me",
    aboutExperience: "Experience",
    aboutYears: "3+ years",
    aboutEducation: "Education",
    aboutDegree1: "Computer Technician with an Administrative Focus",
    aboutDegree2: "Universidad Nacional del Sur",
    aboutText: "I'm Juani, a fullstack developer with over 3 years of experience using both JavaScript and Python. I combine in-house employment with my freelance practice (Koda Systems), using generative AI tools like Cursor, Copilot, and v0 to speed up development without sacrificing quality. I'm passionate about learning new technologies and creating effective, scalable solutions.",
    expSubtitle: "My journey",
    expTitle: "Work Experience",
    expRole1: "Founder / Freelance Full Stack",
    expPeriod1: "2022 – present",
    expBullet1a: "I design and develop custom websites and applications for clients, managing the whole cycle: requirements gathering, development, deployment, and support.",
    expBullet1b: "I use generative AI tools (Cursor, Copilot, Lovable, v0) to speed up development times without losing delivery quality.",
    expBullet1c: "I autonomously manage client relationships, from project scope to final delivery.",
    expRole2: "Software Developer",
    expPeriod2: "Oct 2024 – Jun 2025",
    expBullet2a: "Developed QGIS plugins (Python, PyQt) that automated manual tasks, processed and visualized geospatial data, and integrated QGIS with other systems, in cartography projects for Chaco, Córdoba, and CABA.",
    expBullet2b: "Worked on 5 web projects, building internal dashboards and platforms connected to geospatial data.",
    expBullet2c: "Collaborated on a multidisciplinary team of 5+ people, presenting progress to clients and stakeholders and writing technical documentation.",
    expRole3: "Full Stack Developer",
    expPeriod3: "Nov 2022 – Mar 2024",
    expBullet3a: "Developed end-to-end features in SIGE (React, Django REST Framework, Flask, PostgreSQL, MySQL), covering frontend and backend.",
    expBullet3b: "Implemented and maintained ~25 e-commerce stores for clients, from initial development to ongoing support.",
    expBullet3c: "Maintained and improved legacy management systems built in C#.",
    expBullet3d: "Managed deployments via SSH and version control with Git as part of a team.",
    skillsSubtitle: "My abilities",
    skillsTitle: "Skills",
    experienced: "Experienced",
    intermediate: "Intermediate",
    basic: "Basic",
    projectsSubtitle: "My work",
    projectsTitle: "Projects",
    viewSite: "Go to Page",
    projectDesc1: "A tool used by the Government of the City of Buenos Aires to manage users, roles, and access permissions for the map viewer.",
    projectDesc2: "A web-based map viewer that allows users to easily interact with territorial data from the City of Buenos Aires.",
    projectDesc3: "A web application designed to encrypt and decrypt user-provided text following specific rule-based patterns.",
    projectDesc4: "A web application designed to promote the rental of vacation houses in Sierra de la Ventana, Buenos Aires Province, Argentina.",
    projectDesc5: "A promotional website created to present and launch the new song release by the artist 'GARI'.",
    projectDesc6: "Website for the radio program 'A la cancha', broadcast on FM Altos 97.9, Bahía Blanca, Buenos Aires, Argentina.",
    projectDesc7: "A web system for managing sports prodes (betting pools). Gemini AI handles the creation of matchdays, interpretation of predictions, and score tallying.",
    projectDesc8: "Corporate website for Koda Systems, a venture dedicated to custom web solutions development.",
    projectDesc9: "E-commerce for selling home linen in Bahía Blanca, Buenos Aires, Argentina. Payments via Mercado Pago, OCA shipping calculator, customer management, and a personal admin panel.",
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
