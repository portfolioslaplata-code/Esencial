import { getContactLinks } from "../lib/portfolio";
import { Icon, Link } from "./Primitives";

export default function Contact({ data }) {
  const links = getContactLinks(data);
  return (
    <section id="contacto" className="contact-section" tabIndex={-1}>
      <div className="shell">
        <p className="eyebrow">{data.contact.eyebrow}</p>
        <div className="contact-heading">
          <h2>
            {data.contact.title}
            <br />
            <em>{data.contact.accent}</em>
          </h2>
          <Link
            className="contact-circle"
            href={links[0].url}
            aria-label={`${data.contact.cta}: ${links[0].label}`}
          >
            <Icon name="diagonal" />
          </Link>
        </div>
        <div className="contact-bottom">
          <p>{data.contact.description}</p>
          <div className="contact-links">
            {links.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
                <Icon name="diagonal" />
              </Link>
            ))}
          </div>
        </div>
        {data.contact.note && (
          <p className="contact-note">
            <span className="tiny-line" />
            {data.contact.note}
          </p>
        )}
      </div>
    </section>
  );
}
