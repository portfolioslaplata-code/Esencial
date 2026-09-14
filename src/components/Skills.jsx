export default function Skills({ data }) {
  return (
    <section id="habilidades" className="skills-section" tabIndex={-1}>
      <div className="shell skills-layout">
        <div>
          <p className="eyebrow">{data.skills.eyebrow}</p>
          <h2>{data.skills.title}</h2>
          <p className="skills-description">{data.skills.description}</p>
          <span className="skills-star" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="skills-groups">
          {data.skills.groups
            .filter((group) => group.items?.length)
            .map((group) => (
              <div key={group.name}>
                <h3>{group.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li className="skill-tag" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
