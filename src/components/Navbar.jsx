import { useEffect, useRef, useState } from "react";
import { sectionIds } from "../lib/portfolio";
import { Icon } from "./Primitives";

export default function Navbar({ data, sections }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 960px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      media.removeEventListener("change", onResize);
    };
  }, [open]);
  function navigate(event) {
    setOpen(false);
    document
      .querySelector(event.currentTarget.getAttribute("href"))
      ?.focus({ preventScroll: true });
  }
  return (
    <header
      ref={header}
      className={`site-header ${scrolled ? "is-scrolled" : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="shell navbar">
        <a
          className="brand"
          href="#inicio"
          onClick={navigate}
          aria-label={`${data.firstName} ${data.lastName} — ${data.ui.backToTop}`}
        >
          <span className="monogram">
            {data.monogram || data.firstName[0]}
            <span>.</span>
          </span>
          <span className="brand-name">
            {data.firstName} {data.lastName}
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? data.ui.menuClose : data.ui.menuOpen}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="navigation"
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label={data.ui.navigationLabel}
        >
          {Object.entries(sectionIds)
            .filter(([key]) => sections[key])
            .map(([key, id]) => (
              <a
                key={key}
                href={`#${id}`}
                onClick={navigate}
                className={key === "contact" ? "nav-contact" : ""}
              >
                {data.ui.nav[key]}
                {key === "contact" && <Icon name="diagonal" />}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
}
