# Shahryar Sultan - Resume

The personal resume site of **Shahryar Sultan**, Microsoft Dynamics 365 Solution Architect
(Malaga, Spain). A single-page, mobile-responsive, **printable**, **ATS-friendly**, and
**search-optimized** resume built with plain HTML and Tailwind CSS.

**Live:** https://s4shahryar.github.io/ShahryarSultanResume/

Layout adapted from the
[HTML Resume Template by Owen Gretzinger](https://github.com/owengretzinger/html-resume-template)
(released under the Unlicense).

---

## How it works

The site is plain static HTML - [`index.html`](index.html) plus a pre-compiled Tailwind stylesheet
([`assets/output.css`](assets/output.css)). No JavaScript and no runtime CDN are required, so the page
is fully rendered in the HTML itself. That matters for SEO: crawlers and ATS parsers read the real
content directly instead of having to execute JavaScript, and the page loads instantly.

The entire resume text is **plain ASCII** (no smart dashes, fancy bullet glyphs, or accented
characters), which keeps it clean when copied into application forms or parsed by ATS software.

| File | Purpose |
|---|---|
| `index.html` | The entire resume - markup, content, SEO meta, and structured data |
| `assets/output.css` | Compiled Tailwind CSS (only the classes the page uses, ~9 KB) |
| `og-image.png` | 1200x630 social/search preview card |
| `apple-touch-icon.png` | 180x180 icon for iOS home screens and crawlers |
| `favicon.svg` | Browser tab icon |
| `robots.txt` | Allows crawling; points to the sitemap |
| `sitemap.xml` | Single-page sitemap for search engines |

---

## SEO optimizations

This site is tuned for two goals: ranking for the name query **"Shahryar Sultan"** and presenting
a rich, accurate preview when the URL is shared. Everything below is already implemented in
`index.html`.

### On-page (done)

- **Name-first title** (59 chars): `Shahryar Sultan | Microsoft Dynamics 365 Solution Architect`
- **Meta description** (~148 chars, no truncation) with name, role, and location
- **Single `<h1>`** containing the full name; clean `h2`/`h3` section hierarchy
- **Canonical URL** to prevent duplicate-URL dilution
- **`author` meta** and `lang="en-GB"`
- **Robots directives**: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
  for full rich display in results
- **Open Graph + Twitter cards**, including absolute image URL, `og:image:width/height/alt`,
  `og:locale`, and `twitter:image:alt`
- **`schema.org/Person` JSON-LD** with `name`, `jobTitle`, `description`, `image`, `email`,
  `worksFor`, `address`, `alumniOf`, `sameAs` (LinkedIn + GitHub), and `knowsAbout` (key skills)
- **Crawlability**: `robots.txt` and `sitemap.xml` (with `lastmod`)
- **Keyword coverage** in real content: D365 Sales, Customer Insights, Project Operations, Power
  Platform, Dataverse, Azure Logic Apps, plus named clients (Zurich Insurance, BDO UK, First Abu
  Dhabi Bank, etc.)

### Off-page (your action - these need your accounts)

These are now the highest-leverage steps and cannot be done from the repo:

1. **Google Search Console** - verify the property at https://search.google.com/search-console and
   submit `https://s4shahryar.github.io/ShahryarSultanResume/sitemap.xml`. This is the single biggest
   step to get indexed quickly.
2. **Backlinks from profiles you control** - add the live URL to your LinkedIn (Contact info ->
   Website), GitHub profile/README, and email signature. Inbound links from authoritative profiles
   are the strongest signal for a personal-name search.
3. **Optional: custom domain** (e.g. `shahryarsultan.com`) - ranks better for a personal brand than a
   `github.io` sub-path. Add a `CNAME` file and configure DNS, then update the canonical/OG URLs.

### Verify the live page

- **Structured data:** https://search.google.com/test/rich-results
- **Performance / Core Web Vitals:** https://pagespeed.web.dev/
- **Index status:** Google Search Console (after submitting the sitemap)

> If you change the canonical/live URL (e.g. move to a custom domain), update it in three places in
> `index.html` (`<link rel="canonical">`, `og:url`, and the JSON-LD `url`/`image`), plus `robots.txt`
> and `sitemap.xml`.

---

## Editing your content

Open `index.html` and edit the text directly - all content is real (no placeholders). Common edits:

- **Contact** (email, location, LinkedIn, GitHub) - in both the desktop and mobile headers
- **Professional Experience** - company names, dates, and bullets in the right column
- **Profile, Skills, Education, Certifications** - in the left column

When you edit, keep the text **plain ASCII** to preserve ATS friendliness (use `-` rather than smart
dashes or bullet characters). If you update the LinkedIn handle, change it in both headers **and** in
the JSON-LD `sameAs` block.

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

This is a static site served from the repository root:

1. Go to **Settings -> Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose the **`main`** branch and **`/ (root)`** folder, then **Save**

The site goes live at `https://s4shahryar.github.io/ShahryarSultanResume/`. After each push to `main`,
GitHub rebuilds automatically; hard-refresh (Ctrl/Cmd+Shift+R) to bypass the CDN cache.
