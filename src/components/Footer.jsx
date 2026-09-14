import { Icon, Link } from "./Primitives";

export default function Footer({ data }) {
  const credit = data.settings?.credit;
  return (
    <footer className="footer shell">
      <div className="footer-main">
        <div>
          <a className="footer-name" href="#inicio">
            {data.firstName} {data.lastName}
            <span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} · {data.ui.rights}
          </p>
        </div>
        <div className="footer-socials">
          {data.socials
            ?.filter((link) => link.url && link.label)
            .map((link) => (
              <Link key={link.url} href={link.url}>
                {link.label}
                <Icon name="diagonal" />
              </Link>
            ))}
          <a className="back-top" href="#inicio" aria-label={data.ui.backToTop}>
            <Icon name="down" />
          </a>
        </div>
      </div>
      {(credit?.enabled || data.settings?.demoNotice) && (
        <div className="footer-bottom">
          <span>{data.settings?.demoNotice}</span>
          {credit?.enabled && (
            <span>
              {credit.label}{" "}
              {credit.url ? (
                <Link href={credit.url}>{credit.name}</Link>
              ) : (
                <strong>{credit.name}</strong>
              )}
            </span>
          )}
        </div>
      )}
    </footer>
  );
}
