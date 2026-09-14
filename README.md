# Portfolio Esencial · Portfolios La Plata

Base reutilizable de portfolio one-page. React + Vite + Tailwind CSS 4, en JavaScript. Sin backend, formularios, CMS ni servicios externos en tiempo de ejecución.

## Desarrollo

Node 22.12+ (o una versión posterior compatible con Vite 8).

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run lint
```

`build` genera `dist/`, listo para hosting estático. Oxlint es el linter original del proyecto; no se agregó ESLint ni se migró a TypeScript.

## Personalizar un cliente

1. Editar **`src/data/portfolio.js`**: identidad, profesión, claim, descripciones, textos de interfaz, enlaces, formación, experiencia, servicios, habilidades y trabajos.
2. Copiar las imágenes a **`public/images/`** y actualizar `src`, `alt` y, si hace falta, `photo.position`. El prefijo `/images/` apunta a esa carpeta. Se recomienda WebP/AVIF/JPEG comprimido de 800–1200 px; retrato vertical y trabajos con proporciones consistentes. Los componentes reservan espacio y recortan con `object-fit: cover`; ajustar el encuadre si el original lo requiere.
3. Editar **`src/styles/theme.css`**: colores, fondos, texto, acento, bordes, tipografías, ancho máximo y radio. Las utilidades de Tailwind (`bg-canvas`, `text-accent`, etc.) usan los mismos tokens. Verificar contraste al cambiar una paleta. El favicon SVG es un recurso independiente que también debe reemplazarse.
4. Elegir secciones mediante `settings.sections` y/o vaciar los arrays opcionales.
5. Completar `seo`, en especial `siteUrl` con la URL pública final. Ejecutar un nuevo build después de cambiar los datos.

Las fuentes son locales del sistema: no se descargan fuentes de terceros. Para una fuente propia, colocar un WOFF2 en `public/fonts/`, declarar `@font-face` con `font-display: swap` en `theme.css` y actualizar `--font-body` / `--font-display`.

### Estructura

```text
src/
  data/portfolio.js       Contenido y configuración de cada cliente
  styles/theme.css       Tokens visuales y su integración con Tailwind 4
  components/            Navbar, Hero, About, Projects, Services, Journey,
                         Skills, Contact, Footer y pequeños elementos comunes
  lib/portfolio.js       Visibilidad de secciones, CTAs y enlaces de contacto
  App.jsx                Composición de la página
  index.css              Layout, responsive y animaciones
public/
  images/                Fotografías locales
  favicon.svg            Icono reemplazable
tests/                   Pruebas de navegador y variantes de contenido
```

### Secciones y propiedades opcionales

| Contenido                           | Cómo ocultarlo                                                          |
| ----------------------------------- | ----------------------------------------------------------------------- |
| Sobre mí                            | `about: null` o `settings.sections.about: false`                        |
| Trabajos                            | `projects.items: []` o `settings.sections.projects: false`              |
| Servicios                           | `services.items: []` o `settings.sections.services: false`              |
| Experiencia                         | `experience: []` o `settings.sections.experience: false`                |
| Formación y cursos                  | `education: []` o `settings.sections.education: false`                  |
| Habilidades                         | `skills.groups: []` o `settings.sections.skills: false`                 |
| Contacto                            | `settings.sections.contact: false`; también se oculta si no hay canales |
| Foto principal, foto sobre mí, CV   | `null`                                                                  |
| Teléfono, ubicación, disponibilidad | Cadena vacía                                                            |
| Redes y otros links                 | `[]`                                                                    |
| Crédito del servicio                | `settings.credit.enabled: false`                                        |

El recorrido muestra solo las columnas disponibles. Las redes se muestran en contacto y footer. Proyectos sin URL son tarjetas informativas, sin botones ficticios; imágenes e iconos son opcionales. IDs de items deben ser únicos y estables. El nombre, `hero`, los títulos de las secciones activas y `ui` forman parte de la configuración base que se conserva.

La navegación solo apunta a secciones renderizadas. Un CTA con destino oculto también se oculta. Si se reemplazan trabajos por servicios, cambiar `hero.primaryAction` a `{ label: 'Conocé mis servicios', section: 'services' }`. Para un enlace directo usar `{ label: 'Ver mi catálogo', url: 'https://…' }`.

### Contactos y CV

```js
email: 'persona@dominio.com',
phone: '+5492211234567',
cv: { url: '/cv.pdf', label: 'Descargar CV' },
socials: [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/usuario/' },
  { label: 'Instagram', url: 'https://www.instagram.com/usuario/' },
  { label: 'WhatsApp', url: 'https://wa.me/5492211234567' },
],
```

Guardar el CV en `public/cv.pdf`. El teléfono usa `tel:`; para WhatsApp configurar un enlace explícito. Solo agregar URLs confiables con `https:`, `mailto:`, `tel:` o rutas locales. Los enlaces web externos se abren con `noopener noreferrer`.

### SEO

`vite.config.js` lee el mismo archivo de datos e inserta título, descripción, idioma, favicon y Open Graph en el HTML tanto en desarrollo como en producción. No depende de JavaScript ejecutado por rastreadores para mostrar esos metadatos. Canonical y `og:url` solo se generan con `seo.siteUrl`; una imagen local de Open Graph también necesita ese dominio para generar su URL absoluta. El cuerpo sigue siendo una SPA React, sin SSR.

La configuración está preparada para un dominio/subdominio servido desde `/`. Para desplegar en un subdirectorio, ajustar `base` de Vite **y** los paths de imágenes, CV y favicon del archivo de datos. Reiniciar Vite si se cambia la configuración SEO durante el desarrollo.

### Demo

Elena Rivas, su trayectoria y los proyectos son ficticios. Las imágenes son fotografías de muestra, no documentación de trabajos reales. El aviso de demo está en `settings.demoNotice`; vaciarlo para un cliente real. `hola@elena.example` es un correo reservado de ejemplo, no un buzón operativo. Redes y CV se dejan vacíos para no simular destinos personales reales.

Fotografías de muestra descargadas desde Unsplash (IDs de origen, útiles para rastrear/reemplazar los recursos):

- Retrato: `photo-1580489944761-15a19d654956`.
- Interior: `photo-1600210492486-724fe5c67fb0`.
- Botánica: `photo-1490312278390-ab64016e0aa9`.
- Café: `photo-1447933601403-0c6688de566e`.

## Verificación

```sh
npm run test:e2e
```

Playwright usa Microsoft Edge instalado en este entorno. En otro equipo se puede instalar Chromium con `npx playwright install chromium` y ejecutar con `PLAYWRIGHT_CHANNEL=chromium` (en PowerShell: `$env:PLAYWRIGHT_CHANNEL='chromium'`). La herramienta solo es dependencia de desarrollo; no forma parte de la web publicada.

Las pruebas abren un navegador real y verifican anchos de 320 a 1920 px, imágenes cargadas, anclas válidas, ausencia de overflow y errores de consola, menú móvil por teclado, Escape, foco, movimiento reducido, metadatos y variantes con contenido opcional vacío. Guardan capturas desktop/mobile en `test-results/`, excluido de Git.

Antes de entregar a un cliente: reemplazar la demo y sus imágenes, confirmar enlaces y CV, completar el dominio SEO, revisar responsive con el contenido final y ejecutar build, lint y pruebas.
