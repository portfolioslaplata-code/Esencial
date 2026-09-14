import { portfolio } from "./data/portfolio";
import { getSections } from "./lib/portfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App({ data = portfolio }) {
  const sections = getSections(data);
  return (
    <>
      <a className="skip-link" href="#contenido">
        {data.ui.skipLink}
      </a>
      <Navbar data={data} sections={sections} />
      <main id="contenido" tabIndex={-1}>
        <Hero data={data} sections={sections} />
        {sections.about && <About data={data} />}
        {sections.projects && <Projects data={data} />}
        {sections.services && <Services data={data} />}
        {sections.journey && <Journey data={data} sections={sections} />}
        {sections.skills && <Skills data={data} />}
        {sections.contact && <Contact data={data} />}
      </main>
      <Footer data={data} />
    </>
  );
}
