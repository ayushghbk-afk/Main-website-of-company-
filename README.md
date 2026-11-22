# We Are Tired — Multi-page website

A lightweight, responsive, static website built with plain HTML, CSS, and JavaScript. We Are Tired is an independent initiative working toward a more accessible, useful, and open internet.

## Pages

- `index.html` — Home
- `vision.html` — Our vision
- `why.html` — Our reason and founder's motivation
- `principles.html` — The principles behind the mission
- `projects.html` — Planned project areas (not launched products)
- `contact.html` — Get involved
- `404.html` — Custom not-found page

Shared assets are in `assets/css/`, `assets/js/`, plus the `assets/favicon.svg`, `assets/apple-touch-icon.png`, and `assets/share-card.png` images.

## Run locally

No build tools, package manager, API key, or framework are required. Open `index.html` in a browser, or serve this folder with any static web server.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the publishing branch and the `/(root)` folder, then save.
5. Wait for GitHub Pages to finish deploying. Your site is available at the URL shown in Settings → Pages (e.g. `https://<user>.github.io/<repo>/`).

All internal links and asset paths are relative, so the site works as a GitHub Pages project site and as a custom domain.

## SEO and AI discovery

- Organization / WebSite / WebPage structured data is embedded in every page (JSON-LD, in `<head>`).
- Social-sharing metadata (Open Graph + Twitter Card) and canonical URLs are set per page.
- `sitemap.xml` and `robots.txt` point at the GitHub Pages URL; `llms.txt` describes the initiative for AI readers.
- Favicon and share card: `assets/favicon.svg`, `assets/apple-touch-icon.png`, `assets/share-card.png`.
- Google Search Console: after deployment, submit `sitemap.xml` and replace the old verification notes if needed.

## Before publishing

- `contact.html` deliberately does not invent a public email address or social account. Add the official contact details when you have them.
- The Projects page describes planned areas of exploration, not launched products. Add names, status, documentation, and links here as projects become real.
- Update the copyright year in the shared page footers when needed.
- Add official social links and a privacy policy when those are ready.

## Customize

- Colors, layout, typography, responsiveness, and animations: `assets/css/styles.css`
- Mobile navigation and scroll-reveal animation: `assets/js/main.js`
- Page content and navigation labels: the corresponding `.html` files

The site respects `prefers-reduced-motion` for visitors who have reduced motion enabled.
