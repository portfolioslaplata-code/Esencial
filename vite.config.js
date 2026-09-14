import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { portfolio } from "./src/data/portfolio.js";

function portfolioMetadata() {
  const { seo } = portfolio;
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  return {
    name: "portfolio-metadata",
    transformIndexHtml(html) {
      const tags = [
        {
          tag: "meta",
          attrs: { name: "description", content: seo.description },
        },
        { tag: "meta", attrs: { property: "og:title", content: seo.title } },
        {
          tag: "meta",
          attrs: { property: "og:description", content: seo.description },
        },
        { tag: "meta", attrs: { property: "og:type", content: "website" } },
        {
          tag: "meta",
          attrs: {
            property: "og:locale",
            content: portfolio.locale.replace("-", "_"),
          },
        },
        { tag: "link", attrs: { rel: "icon", href: seo.favicon } },
      ];
      if (seo.siteUrl) {
        tags.push(
          { tag: "link", attrs: { rel: "canonical", href: seo.siteUrl } },
          { tag: "meta", attrs: { property: "og:url", content: seo.siteUrl } },
        );
      }
      if (seo.image && (seo.siteUrl || /^https?:\/\//.test(seo.image))) {
        tags.push(
          {
            tag: "meta",
            attrs: {
              property: "og:image",
              content: new URL(seo.image, seo.siteUrl || undefined).href,
            },
          },
          {
            tag: "meta",
            attrs: { property: "og:image:alt", content: seo.imageAlt || "" },
          },
        );
      }
      return {
        html: html
          .replace('lang="es"', `lang="${escape(portfolio.locale)}"`)
          .replace(
            "<title>Portfolio</title>",
            `<title>${escape(seo.title)}</title>`,
          ),
        tags: tags.map((tag) => ({ ...tag, injectTo: "head" })),
      };
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), portfolioMetadata()],
});
