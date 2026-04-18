# D365 Solution Architect - Resume Site

A clean, professional single-page resume website built with React, Vite, and Tailwind CSS. Designed for deployment to GitHub Pages.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## Deploy to GitHub Pages

### Step 1 - Set your repository name

Open `vite.config.js` and update `REPO_NAME` to match your GitHub repository name:

```js
const REPO_NAME = 'GithubResume'  // replace with your actual repo name
```

If you are deploying to `username.github.io` (root, no sub-path), set:

```js
base: '/',
```

### Step 2 - Deploy

```bash
npm run deploy
```

This runs the build and pushes the `dist/` folder to the `gh-pages` branch of your repository.

### Step 3 - Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under Source, select `gh-pages` branch and `/ (root)`
4. Save

Your site will be live at `https://your-username.github.io/GithubResume/`

---

## Customising Content

All content is defined directly in the component files. No separate data file is needed.

| What to change | Where to edit |
|---|---|
| Hero headline and stats | `src/components/Hero.jsx` |
| About text | `src/components/About.jsx` |
| Core Expertise cards | `src/components/CoreExpertise.jsx` |
| Selected Capabilities list | `src/components/SelectedCapabilities.jsx` |
| Experience Highlights cards | `src/components/ExperienceHighlights.jsx` |
| LinkedIn, GitHub, Email, CV link | `src/components/Contact.jsx` (top of file) |
| Page title and meta description | `index.html` |
| Site name in nav and footer | `src/components/Nav.jsx`, `src/components/Footer.jsx` |
| Accent colour | `tailwind.config.js` under `colors.accent` |

---

## Adding Your CV

Place your CV PDF in the `public/` folder as `your-cv.pdf` and update the `CV_URL` constant in `src/components/Contact.jsx`:

```js
const CV_URL = '/your-cv.pdf'
```

---

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment
