/**
 * PUNTO DE PARTIDA PARA CADA CLIENTE.
 * Demo ficticia: reemplazar identidad, fotografías y contactos antes de publicar.
 * Rutas de public/: /images/archivo.jpg, /cv.pdf.
 * Secciones opcionales: array vacío / texto vacío / settings.sections = false.
 */
export const portfolio = {
  locale: "es-AR",
  firstName: "Elena",
  lastName: "Rivas",
  monogram: "er",
  profession: "Diseñadora y comunicadora visual",
  location: "La Plata, Argentina",
  email: "hola@elena.example",
  phone: "",
  cv: null, // { url: '/cv.pdf', label: 'Descargar CV' }
  photo: {
    src: "/images/profile.jpg",
    alt: "Retrato de muestra para el perfil ficticio de Elena Rivas",
    position: "50% 40%",
    caption: "Creatividad con los pies en la tierra.",
  },
  socials: [], // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/usuario/' }
  externalLinks: [], // Otros enlaces: { label, url }
  settings: {
    sections: {
      about: true,
      projects: true,
      services: true,
      education: true,
      experience: true,
      skills: true,
      contact: true,
    },
    credit: {
      enabled: true,
      label: "Portfolio realizado por",
      name: "Portfolios La Plata",
      url: "",
    },
    demoNotice: "Perfil de muestra · Personas y proyectos ficticios",
  },
  seo: {
    title: "Elena Rivas — Diseño y comunicación visual",
    description:
      "Portfolio de muestra de Elena Rivas. Identidad visual, diseño editorial y comunicación para proyectos con una historia que contar.",
    siteUrl: "", // URL pública final. Activa canonical y og:url.
    image: "/images/casa.jpg",
    imageAlt: "Un espacio cálido y luminoso: inspiración visual del portfolio",
    favicon: "/favicon.svg",
  },
  hero: {
    eyebrow: "Diseño · Comunicación · Estrategia",
    greeting: "Hola, soy",
    headline: ["Ideas claras.", "Marcas con", "sentido."],
    accentLine: 2,
    description:
      "Acompaño a personas y marcas a encontrar su voz y darle forma. Con sensibilidad, intención y una mirada propia.",
    availability: "Disponible para nuevos proyectos",
    primaryAction: { label: "Conocé mi trabajo", section: "projects" },
    secondaryAction: { label: "Conversemos", section: "contact" },
    scrollLabel: "Un poco más de mí",
  },
  about: {
    eyebrow: "01 / Sobre mí",
    title: "Detrás de cada idea,",
    accent: "una mirada humana.",
    intro:
      "Creo en el diseño que se siente cercano. El que ordena, cuenta una historia y deja algo en quien lo encuentra.",
    paragraphs: [
      "Soy Elena, diseñadora y comunicadora visual de La Plata. Trabajo en la intersección entre la estrategia y la sensibilidad estética para transformar ideas en identidades que se sientan auténticas.",
      "Me gusta escuchar, hacer preguntas y encontrar eso que vuelve único a cada proyecto. Desde una primera idea hasta el último detalle, busco que cada decisión tenga un porqué.",
    ],
    facts: [
      { label: "Mi base", value: "La Plata, Argentina" },
      { label: "Mi enfoque", value: "Estrategia + sensibilidad" },
      { label: "Mi forma de trabajar", value: "Cercana y colaborativa" },
    ],
    photo: null,
  },
  projects: {
    eyebrow: "02 / Trabajos seleccionados",
    title: "Ideas que tomaron",
    accent: "forma.",
    description:
      "Una selección de proyectos en los que estrategia y creatividad se encuentran.",
    items: [
      {
        id: "casa",
        name: "Casa Habitada",
        category: "Identidad visual",
        year: "2025",
        image: {
          src: "/images/casa.jpg",
          alt: "Interior cálido con materiales naturales y tonos arena",
        },
        description:
          "Una identidad serena y cercana para un estudio que piensa los espacios desde las personas que los habitan.",
        url: "",
      },
      {
        id: "botanica",
        name: "Botánica",
        category: "Diseño editorial",
        year: "2025",
        image: {
          src: "/images/editorial.jpg",
          alt: "Ramas en flor en dos jarrones blancos sobre una mesa de madera",
        },
        description:
          "Una publicación que explora la relación entre naturaleza y espacios cotidianos, con una mirada pausada y sensible.",
        url: "",
      },
      {
        id: "raiz",
        name: "Raíz Café",
        category: "Estrategia & comunicación",
        year: "2024",
        image: {
          src: "/images/cafe.jpg",
          alt: "Granos de café tostado en una composición de tonos cálidos",
        },
        description:
          "Una nueva forma de contar lo cotidiano: comunicación con origen, calidez y mucho café.",
        url: "",
      },
    ],
  },
  services: {
    eyebrow: "03 / Cómo puedo ayudarte",
    title: "Tu próxima idea,",
    accent: "en buenas manos.",
    description:
      "Cada proyecto es distinto. El punto de partida siempre es escucharte.",
    items: [
      {
        id: "identidad",
        name: "Identidad visual",
        description:
          "Construimos una identidad coherente con lo que sos: concepto, lenguaje visual y un sistema que crece con tu marca.",
        icon: "spark",
      },
      {
        id: "comunicacion",
        name: "Comunicación & contenido",
        description:
          "Encontramos qué decir y cómo decirlo. Estrategia y contenidos para conectar con las personas que importan.",
        icon: "message",
      },
      {
        id: "editorial",
        name: "Diseño editorial",
        description:
          "Damos ritmo y estructura a tus ideas. Publicaciones, presentaciones y piezas que invitan a seguir leyendo.",
        icon: "book",
      },
    ],
  },
  journey: {
    eyebrow: "04 / Mi recorrido",
    title: "Aprender, hacer,",
    accent: "seguir creciendo.",
    description:
      "La formación me dio herramientas. La experiencia, nuevas preguntas.",
  },
  experience: [
    {
      id: "independiente",
      period: "2023 — Actualidad",
      title: "Diseñadora independiente",
      institution: "Proyectos de identidad y comunicación",
      description:
        "Acompaño a emprendimientos y profesionales en la construcción de su presencia visual, desde el concepto hasta la implementación.",
    },
    {
      id: "estudio",
      period: "2021 — 2023",
      title: "Diseñadora de comunicación",
      institution: "Estudio Punto Sur · La Plata",
      description:
        "Desarrollo de identidades, piezas editoriales y campañas junto a un equipo multidisciplinario.",
    },
  ],
  education: [
    {
      id: "grado",
      period: "2016 — 2021",
      title: "Diseño en Comunicación Visual",
      institution: "Universidad Nacional de La Plata",
      description:
        "Formación en identidad, comunicación, diseño editorial y metodología proyectual.",
    },
    {
      id: "curso",
      period: "2024",
      title: "Estrategia de marca y narrativa",
      institution: "Formación complementaria",
      description:
        "Herramientas para conectar propósito, posicionamiento e historias de marca.",
    },
  ],
  skills: {
    eyebrow: "05 / Herramientas & enfoques",
    title: "Una mirada integral.",
    description:
      "Combino pensamiento estratégico, oficio visual y una buena dosis de curiosidad.",
    groups: [
      {
        name: "Lo que hago",
        items: [
          "Identidad visual",
          "Diseño editorial",
          "Dirección de arte",
          "Estrategia de marca",
        ],
      },
      {
        name: "Con qué trabajo",
        items: ["Illustrator", "InDesign", "Photoshop", "Figma"],
      },
      {
        name: "Lo que me guía",
        items: [
          "Escucha activa",
          "Atención al detalle",
          "Trabajo colaborativo",
          "Curiosidad",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "06 / Conversemos",
    title: "Las buenas ideas empiezan",
    accent: "con una conversación.",
    description:
      "¿Tenés un proyecto en mente o simplemente querés saludar? Me encantaría conocerte y escuchar tu idea.",
    cta: "Escribime",
    note: "De La Plata, para donde estés.",
  },
  ui: {
    nav: {
      about: "Sobre mí",
      projects: "Trabajos",
      services: "Servicios",
      journey: "Recorrido",
      skills: "Habilidades",
      contact: "Conversemos",
    },
    navigationLabel: "Navegación principal",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    skipLink: "Saltar al contenido",
    experience: "Experiencia",
    education: "Formación",
    backToTop: "Volver arriba",
    rights: "Todos los derechos reservados.",
  },
};
