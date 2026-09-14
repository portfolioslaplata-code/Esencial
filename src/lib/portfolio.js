export const sectionIds = {
  about: "sobre-mi",
  projects: "trabajos",
  services: "servicios",
  journey: "recorrido",
  skills: "habilidades",
  contact: "contacto",
};

export function getContactLinks(data) {
  return [
    ...(data.email ? [{ label: data.email, url: `mailto:${data.email}` }] : []),
    ...(data.phone
      ? [{ label: data.phone, url: `tel:${data.phone.replace(/[^+\d]/g, "")}` }]
      : []),
    ...(data.socials ?? []),
    ...(data.externalLinks ?? []),
  ].filter((link) => link.label && link.url);
}

export function getSections(data) {
  const enabled = (key) => data.settings?.sections?.[key] !== false;
  const experience = enabled("experience") && Boolean(data.experience?.length);
  const education = enabled("education") && Boolean(data.education?.length);
  return {
    about:
      enabled("about") &&
      Boolean(data.about?.intro || data.about?.paragraphs?.some(Boolean)),
    projects: enabled("projects") && Boolean(data.projects?.items?.length),
    services: enabled("services") && Boolean(data.services?.items?.length),
    experience,
    education,
    journey: experience || education,
    skills:
      enabled("skills") &&
      Boolean(data.skills?.groups?.some((group) => group.items?.length)),
    contact: enabled("contact") && getContactLinks(data).length > 0,
  };
}

export function resolveAction(action, sections) {
  if (!action?.label) return null;
  if (action.url) return { ...action, href: action.url };
  if (sections[action.section] && sectionIds[action.section])
    return { ...action, href: `#${sectionIds[action.section]}` };
  return null;
}
