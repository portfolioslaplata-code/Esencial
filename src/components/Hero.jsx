import { resolveAction } from "../lib/portfolio";
import { Icon, Link } from "./Primitives";

export default function Hero({ data, sections }) {
  const primary = resolveAction(data.hero.primaryAction, sections);
  const secondary = resolveAction(data.hero.secondaryAction, sections);
  return (
    <section
      id="inicio"
      className={`hero shell ${!data.photo?.src ? "hero-without-photo" : ""}`}
      tabIndex={-1}
    >
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="tiny-line" />
          {data.hero.eyebrow}
        </p>
        <p className="hero-greeting">
          {data.hero.greeting}{" "}
          <strong>
            {data.firstName} {data.lastName}
          </strong>
        </p>
        <h1>
          {data.hero.headline.map((line, i) => (
            <span
              key={i}
              className={i === data.hero.accentLine ? "accent-type" : ""}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-profession">{data.profession}</p>
        <p className="hero-description">{data.hero.description}</p>
        <div className="hero-actions flex flex-wrap items-center gap-6">
          {primary && (
            <Link href={primary.href} className="button">
              {primary.label}
              <Icon name="diagonal" />
            </Link>
          )}
          {secondary && (
            <Link href={secondary.href} className="text-link">
              {secondary.label}
              <Icon name="arrow" />
            </Link>
          )}
        </div>
      </div>
      {data.photo?.src && (
        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src={data.photo.src}
              alt={data.photo.alt || `${data.firstName} ${data.lastName}`}
              width="1000"
              height="1250"
              fetchPriority="high"
              style={{ objectPosition: data.photo.position }}
            />
            <span className="portrait-star" aria-hidden="true">
              ✳
            </span>
          </div>
          {data.hero.availability && (
            <div className="availability">
              <span />
              {data.hero.availability}
            </div>
          )}
          {data.photo.caption && (
            <p className="photo-caption">
              {data.photo.caption}
              <span aria-hidden="true">↗</span>
            </p>
          )}
        </div>
      )}
      <div className="hero-bottom">
        {data.location && (
          <span className="flex items-center gap-2">
            <Icon name="pin" />
            {data.location}
          </span>
        )}
        {!data.photo?.src && data.hero.availability && (
          <span>{data.hero.availability}</span>
        )}
        {sections.about && (
          <a href="#sobre-mi" className="text-link">
            {data.hero.scrollLabel}
            <Icon name="down" />
          </a>
        )}
      </div>
    </section>
  );
}
