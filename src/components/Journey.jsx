import { SectionHeading } from "./Primitives";

function JourneyColumn({ title, items }) {
  return (
    <div className="journey-column">
      <h3 className="journey-label">{title}</h3>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <p className="journey-period">{item.period}</p>
            <h4>{item.title}</h4>
            <p className="journey-institution">{item.institution}</p>
            {item.description && (
              <p className="journey-description">{item.description}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Journey({ data, sections }) {
  return (
    <section id="recorrido" className="section shell" tabIndex={-1}>
      <SectionHeading content={data.journey} />
      <div className="journey-grid">
        {sections.experience && (
          <JourneyColumn title={data.ui.experience} items={data.experience} />
        )}
        {sections.education && (
          <JourneyColumn title={data.ui.education} items={data.education} />
        )}
      </div>
    </section>
  );
}
