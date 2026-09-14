export function Icon({ name = "arrow", className = "", ...props }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    menu: <path d="M4 8h16M4 16h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    spark: (
      <path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z" />
    ),
    message: (
      <path d="M20 11a8 8 0 0 1-8 8H4v-8a8 8 0 1 1 16 0ZM8 9h8m-8 4h5" />
    ),
    book: <path d="M12 5v16M3 3l9 2 9-2v16l-9 2-9-2Zm3 5 3 1m6 0 3-1" />,
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}

export function Link({ href, children, ...props }) {
  const external = /^https?:\/\//.test(href ?? "");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

export function SectionHeading({ content }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>
          {content.title} {content.accent && <em>{content.accent}</em>}
        </h2>
      </div>
      {content.description && (
        <p className="section-description">{content.description}</p>
      )}
    </div>
  );
}
