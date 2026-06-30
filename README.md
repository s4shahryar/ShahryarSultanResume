# Shahryar Sultan — Resume

A single-page, mobile-responsive, **printable**, **ATS-friendly** resume built with plain HTML and
Tailwind CSS. Layout adapted from the
[HTML Resume Template by Owen Gretzinger](https://github.com/owengretzinger/html-resume-template)
(released under the Unlicense).

**Live:** https://s4shahryar.github.io/ShahryarSultanResume/

---

## How it works

The site is plain static HTML — [`index.html`](index.html) plus a pre-compiled Tailwind stylesheet
([`assets/output.css`](assets/output.css)). No JavaScript and no runtime CDN are required, so it stays
styled offline and loads instantly. You can open `index.html` directly in a browser or deploy the
folder as-is.

| File | Purpose |
|---|---|
| `index.html` | The entire resume (markup, SEO, structured data) |
| `assets/output.css` | Compiled Tailwind CSS (only the classes the page uses) |
| `favicon.svg` | Site icon |
| `robots.txt` | Allows crawling; points to the sitemap |
| `sitemap.xml` | Single-page sitemap for search engines |

---

## Editing your content

Open `index.html` and edit the text directly. Anything in `[square brackets]` is a **placeholder** to
replace with your real details:

- **Contact** — email, phone, location, LinkedIn (appears in both the desktop and mobile headers)
- **Experience** — company names, dates, and bullets under *Professional Experience*
- **Education** and **Certifications** (left column)

The structured-data block (`<script type="application/ld+json">` in the `<head>`) and the LinkedIn
link both reference `linkedin.com/in/your-profile` — update those too.

> **Changing the styling?** `assets/output.css` only contains the Tailwind classes currently used in
> `index.html`. If you add *new* Tailwind classes, regenerate it:
>
> ```bash
> npx tailwindcss@3 -i input.css -o assets/output.css --content ./index.html --minify
> ```
>
> (where `input.css` contains the three `@tailwind base; @tailwind components; @tailwind utilities;`
> directives). Editing existing text never needs a rebuild.

---

## Printing / exporting to PDF

Press **Ctrl+P** (Windows) or **Cmd+P** (Mac). The layout removes the background, shadow, and rounded
corners for print and targets a single Letter-size page. To keep the accent colours in the PDF, enable
**"Background graphics"** under *More settings* in the print dialog.

---

## Deploying to GitHub Pages

Because this is a static site served from the repository root:

1. Go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose the **`main`** branch and **`/ (root)`** folder, then **Save**

The site will be live at `https://s4shahryar.github.io/ShahryarSultanResume/`.

---

## SEO checklist

Already included: page `<title>` and description with your name, `author` meta, canonical URL,
Open Graph + Twitter cards (with a 1200×630 `og-image.png`), `schema.org/Person` structured data,
`robots.txt`, and `sitemap.xml`.
