import { Icon, Link, SectionHeading } from "./Primitives";

export default function Projects({ data }) {
  return (
    <section id="trabajos" className="section shell" tabIndex={-1}>
      <SectionHeading content={data.projects} />
      <div className="projects-grid">
        {data.projects.items.map((project, i) => (
          <article className="project-card" key={project.id}>
            {project.image?.src && (
              <div className="project-image">
                <img
                  src={project.image.src}
                  alt={project.image.alt || project.name}
                  loading="lazy"
                  decoding="async"
                  width="1000"
                  height="1100"
                />
                <span className="project-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            )}
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3>
              {project.url ? (
                <Link href={project.url}>
                  {project.name}
                  <Icon name="diagonal" />
                </Link>
              ) : (
                project.name
              )}
            </h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
