import { Icon, SectionHeading } from "./Primitives";

export default function Services({ data }) {
  return (
    <section id="servicios" className="section services-section" tabIndex={-1}>
      <div className="shell">
        <SectionHeading content={data.services} />
        <div className="services-grid">
          {data.services.items.map((service, i) => (
            <article className="service-card" key={service.id}>
              <div className="service-top">
                {service.icon && <Icon name={service.icon} />}
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
