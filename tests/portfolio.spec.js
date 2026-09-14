import { test, expect } from "@playwright/test";

test("renders without overflow, missing images or broken anchors at supported widths", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const width of [320, 375, 430, 640, 768, 960, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow at ${width}px`,
    ).toBe(true);
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
        .toBe(true);
    }
    expect(
      await page
        .locator('a[href^="#"]')
        .evaluateAll((links) =>
          links.every((a) => document.getElementById(a.hash.slice(1))),
        ),
    ).toBe(true);
    await page.evaluate(() => window.scrollTo(0, 0));
    if (width === 375 || width === 1440) {
      await page.screenshot({
        path: `test-results/portfolio-${width}.png`,
        fullPage: true,
      });
      await page.screenshot({ path: `test-results/hero-${width}.png` });
    }
  }
  expect(errors).toEqual([]);
});

test("mobile navigation works with keyboard, Escape, and anchor focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByText("Saltar al contenido")).toBeFocused();
  const toggle = page.getByRole("button", { name: "Abrir menú" });
  await toggle.click();
  await expect(page.getByRole("navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Trabajos" })
    .click();
  await expect(page.locator("#trabajos")).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#trabajos$/);
});

test("optional sections, photo, contact links and credit adapt without dangling links", async ({
  page,
}) => {
  await page.route("**/src/data/portfolio.js*", async (route) => {
    const response = await route.fetch();
    const body = await response.text();
    await route.fulfill({
      response,
      body: `${body}\nportfolio.photo = null; portfolio.experience = []; portfolio.projects.items = []; portfolio.skills.groups = []; portfolio.settings.credit.enabled = false; portfolio.email = ''; portfolio.socials = [{ label: 'LinkedIn', url: 'https://www.linkedin.com/' }];`,
    });
  });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.locator("#inicio img")).toHaveCount(0);
  await expect(page.locator("#trabajos")).toHaveCount(0);
  await expect(page.locator("#habilidades")).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Experiencia", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Formación", exact: true }),
  ).toBeVisible();
  await expect(page.locator("#servicios")).toBeVisible();
  await expect(page.getByText("Portfolio realizado por")).toHaveCount(0);
  await expect(
    page
      .locator("#contacto")
      .getByRole("link", { name: "LinkedIn", exact: true }),
  ).toHaveAttribute("rel", "noopener noreferrer");
  expect(
    await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links.every((a) => document.getElementById(a.hash.slice(1))),
      ),
  ).toBe(true);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("empty optional content leaves a working minimal portfolio", async ({
  page,
}) => {
  await page.route("**/src/data/portfolio.js*", async (route) => {
    const response = await route.fetch();
    await route.fulfill({
      response,
      body: `${await response.text()}\nportfolio.photo = null; portfolio.about = null; portfolio.experience = []; portfolio.education = []; portfolio.projects = null; portfolio.services = null; portfolio.skills = null; portfolio.email = ''; portfolio.phone = ''; portfolio.socials = []; portfolio.externalLinks = [];`,
    });
  });
  await page.goto("/");
  await expect(page.locator("main section")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("nav a")).toHaveCount(0);
});

test("metadata, reduced motion and year are correct", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Elena Rivas — Diseño y comunicación visual");
  await expect(page.locator("html")).toHaveAttribute("lang", "es-AR");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Portfolio de muestra/,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    /Elena Rivas/,
  );
  expect(
    await page
      .locator(".hero-copy")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  await expect(page.locator("footer")).toContainText(
    String(new Date().getFullYear()),
  );
});
