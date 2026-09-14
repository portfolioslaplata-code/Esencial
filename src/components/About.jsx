import { Icon, Link } from "./Primitives";

export default function About({ data }) {
  const { about } = data;
  return (
    <section id="sobre-mi" className="section about-section" tabIndex={-1}>
      <div className="shell about-grid">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>
            {about.title}
            <br />
            <em>{about.accent}</em>
          </h2>
          {data.cv?.url && (
            <Link className="text-link cv-link" href={data.cv.url} download>
              {data.cv.label}
              <Icon name="down" />
            </Link>
          )}
          {about.photo?.src && (
            <img
              className="about-photo"
              src={about.photo.src}
              alt={about.photo.alt || ""}
              width="640"
              height="480"
              loading="lazy"
            />
          )}
        </div>
        <div className="about-copy">
          {about.intro && <p className="about-intro">{about.intro}</p>}
          {about.paragraphs?.filter(Boolean).map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          {about.facts?.length > 0 && (
            <dl className="about-facts">
              {about.facts
                .filter((fact) => fact.value)
                .map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
