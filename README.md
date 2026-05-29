# Robert McMaster — Personal Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS. Deployed via GitHub Pages at [robertmcmaster.github.io](https://robertmcmaster.github.io).

---

## Tech Stack

- **React 18** — UI framework
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and scroll transitions
- **React Router** (HashRouter) — client-side routing
- **gh-pages** — deployment to GitHub Pages

---

## Project Structure

```
src/
├── assets/
│   ├── files/cv_pdf/        # Resume (DOCX)
│   ├── profile/             # Profile photo
│   └── projects_img/        # Project screenshots
├── components/
│   ├── Background3D.jsx     # Animated topographic background (canvas/marching squares)
│   ├── Footer.jsx           # Site footer with quick links
│   ├── Loading.jsx          # Suspense loading spinner
│   ├── Navbar.jsx           # Top navigation bar
│   └── ScrollAnimation.jsx  # Scroll-triggered fade-in wrapper
├── config/
│   └── contact.js           # Contact info used across the site
├── pages/
│   ├── Home.jsx             # Landing page with metrics and intro
│   ├── About.jsx            # Bio, achievements, and resume download
│   ├── Education.jsx        # Degree history
│   ├── Experience.jsx       # Work history
│   ├── Skills.jsx           # Technical skills
│   ├── Certificates.jsx     # Certifications
│   ├── Hobbies.jsx          # Interests / personal section
│   ├── Contact.jsx          # Contact form and links
│   ├── Projects.jsx         # Project portfolio (currently disabled in nav)
│   ├── Blog.jsx             # Blog listing (currently disabled in nav)
│   ├── BlogPost.jsx         # Individual blog post
│   └── NotFound.jsx         # 404 page
├── App.jsx                  # Root component — routing, SEO, layout
└── main.jsx                 # React entry point
```

---

## Editing Content

All page content is defined as data arrays near the top of each page file — no separate data files or CMS needed.

| What to edit | File |
|---|---|
| Intro text, metrics | `src/pages/Home.jsx` |
| Bio, achievements | `src/pages/About.jsx` |
| Degrees | `src/pages/Education.jsx` |
| Work history | `src/pages/Experience.jsx` |
| Skills list | `src/pages/Skills.jsx` |
| Certifications | `src/pages/Certificates.jsx` |
| Interests / hobbies | `src/pages/Hobbies.jsx` |
| Contact info | `src/config/contact.js` |
| Nav links | `src/components/Navbar.jsx` |
| Footer links | `src/components/Footer.jsx` |
| SEO page titles/descriptions | `src/App.jsx` → `pageMeta` object |

---

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

---

## Deploying Changes

Every deployment is a two-step process: push source code to `main`, then publish the built site to `gh-pages`.

### 1. Make your changes locally and test
```bash
npm run dev
```

### 2. Commit and push source code
```bash
git add .
git commit -m "describe your change"
git push
```

### 3. Build and deploy to GitHub Pages
```bash
npm run deploy
```

This runs `npm run build` (compiles to `dist/`) then pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves as the live site.

> The live site updates within 1-2 minutes of a successful deploy.

---

## Enabling Disabled Pages

The **Projects** and **Blog** pages exist but are commented out of the nav. To re-enable either:

1. Uncomment the relevant link in `src/components/Navbar.jsx` and `src/components/Footer.jsx`
2. Add the route back in `src/App.jsx` if needed
