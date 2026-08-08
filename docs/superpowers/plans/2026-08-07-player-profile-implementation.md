# Manav Shah Player Profile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, dark-themed, single-page player profile and resume website for professional golfer Manav Shah, showcasing his story, milestones, wins, course records, and sponsors.

**Architecture:** The project is structured as a lightweight, high-performance vanilla web application (HTML5, CSS3, ES6 JavaScript) to ensure sub-second page loads and direct compatibility with static hosting (Vercel). Interactive elements (tabs, count-up counters, timeline scroll effects) are powered by native JavaScript.

**Tech Stack:** HTML5, CSS3 (CSS Grid, CSS Flexbox, custom properties, glassmorphism), JavaScript (ES6, Intersection Observer API), Google Fonts (Playfair Display, Outfit).

## Global Constraints
* **Vanilla Stack Only:** No React, Vue, Next.js, or TailwindCSS. Pure HTML, CSS, and JS.
* **Responsive Breakpoints:** Must look perfect at 1440px, 1024px (tablet), 768px (mobile landscape), and 480px (mobile portrait).
* **Aesthetic Standard:** Strictly follow the Premium Athletic theme (Deep Matte Black, Forest Green, Gold highlights, Glassmorphic panels, and glowing hover states).
* **Contrast Compliance:** All text must meet WCAG AA contrast ratios (minimum 4.5:1 for body, 3:1 for large headings) against dark backgrounds.

---

## Proposed Changes

### Project Scaffolding
#### [NEW] [index.html](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/index.html)
#### [NEW] [style.css](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/style.css)
#### [NEW] [app.js](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/app.js)
#### [NEW] [.gitignore](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/.gitignore)

---

## Tasks

### Task 1: Scaffolding and Git Initialization

**Files:**
* Create: `[.gitignore](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/.gitignore)`
* Create: `[index.html](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/index.html)` (Empty boilerplate)
* Create: `[style.css](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/style.css)` (Empty boilerplate)
* Create: `[app.js](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/app.js)` (Empty boilerplate)

**Interfaces:**
* Produces: Clean folder structure ready for vanilla web development and linked to a local git repository.

- [ ] **Step 1: Create `.gitignore`**
  Write `.gitignore` to ignore OS files, temporary txt files, and system generated tasks:
  ```text
  .DS_Store
  node_modules/
  ocr-page-*.txt
  profile_text.txt
  page-*.png
  ```
- [ ] **Step 2: Initialize Git Repository**
  Run: `git init` in `/Users/dilanpatel/Developer/All Google Antigravity Projects/Manav's Website`
- [ ] **Step 3: Create empty files**
  Create `index.html`, `style.css`, and `app.js` as empty files in the root.
- [ ] **Step 4: Verify git setup**
  Run: `git status`
  Expected: Success, showing untracked files: `.gitignore`, `index.html`, `style.css`, `app.js`.
- [ ] **Step 5: Commit scaffolding**
  Run:
  ```bash
  git add .gitignore index.html style.css app.js
  git commit -m "chore: scaffold project structure"
  ```

---

### Task 2: CSS Theme & Layout Foundation

**Files:**
* Modify: `[style.css](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/style.css)`

**Interfaces:**
* Consumes: Scaffolding.
* Produces: CSS custom properties (variables), reset styles, base text layouts, Google Font imports, and glassmorphism definitions.

- [ ] **Step 1: Set up CSS variables and resets**
  Import `Playfair Display` and `Outfit` fonts from Google Fonts, define color variables, and configure base page parameters.
  Write to `style.css`:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

  :root {
    --bg-canvas: #0c0f0d;
    --bg-panel: rgba(18, 24, 21, 0.75);
    --border-panel: rgba(212, 175, 55, 0.15);
    --border-hover: rgba(212, 175, 55, 0.4);
    
    --primary-brand: #1b4332;
    --primary-accent: #2d6a4f;
    --secondary-brand: #d4af37;
    --secondary-accent: #f0cd60;
    
    --text-main: #f4f6f5;
    --text-muted: #8fa298;
    --text-gold: #d4af37;
    
    --glow-green: rgba(45, 106, 79, 0.4);
    --glow-gold: rgba(212, 175, 55, 0.25);
    
    --transition-smooth: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bg-canvas);
    color: var(--text-main);
    font-family: 'Outfit', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .glass-card {
    background: var(--bg-panel);
    border: 1px solid var(--border-panel);
    border-radius: 12px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: var(--transition-smooth);
  }

  .glass-card:hover {
    border-color: var(--border-hover);
    box-shadow: 0 8px 32px var(--glow-gold);
  }
  ```
- [ ] **Step 2: Commit CSS Foundation**
  Run:
  ```bash
  git add style.css
  git commit -m "style: define variables, resets, and glass card foundation"
  ```

---

### Task 3: HTML Structure & Content

**Files:**
* Modify: `[index.html](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/index.html)`

**Interfaces:**
* Consumes: CSS theme foundation.
* Produces: Semantic HTML markup structure containing Navigation, Hero, Story, Timeline, Wins/Records, Sponsors, and Contact Form.

- [ ] **Step 1: Write index.html scaffolding**
  Create the core HTML structure linking the CSS stylesheet and JS logic. Include all sections: Navigation (`nav`), Hero Section (`header`), Biography (`section#story`), Milestone Timeline (`section#timeline`), Wins & Records (`section#records`), Sponsors Grid (`section#partners`), and Contact Form (`section#contact`).
- [ ] **Step 2: Embed text contents, SVGs, and labels**
  Add all professional golf content (wins list, course records scores, bio text, timeline entries, sponsor company names) verbatim from the spec, using crisp inline SVGs for icons (e.g., mail, instagram, golf club, crown, map-pin, check-circle) to ensure visual premium quality without broken image icons.
- [ ] **Step 3: Commit HTML**
  Run:
  ```bash
  git add index.html
  git commit -m "feat: implement semantic html markup with complete content and svgs"
  ```

---

### Task 4: Interactive Logic & App JS

**Files:**
* Modify: `[app.js](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/app.js)`

**Interfaces:**
* Consumes: HTML markup.
* Produces: Page behavior logic including tab switching, metric count-up animations, timeline visibility transitions (Intersection Observer), and contact form submit states.

- [ ] **Step 1: Implement mobile navigation and tab switching**
  Write JS functions to toggle mobile menus and handle switching between the "Professional Wins" tab and "Course Records" tab (modifying classes to trigger CSS opacity transitions).
- [ ] **Step 2: Implement count-up animation and intersection observer**
  Add a count-up function that animates the numbers `8`, `6`, and `126` in the hero section when the page is loaded. Set up an Intersection Observer to add a `.visible` class to sections/timeline items as they scroll into view.
- [ ] **Step 3: Implement contact form submission**
  Add event listeners to the contact form to validate input client-side, prevent default reload behavior, display a dynamic glassmorphic success overlay, and reset form inputs.
- [ ] **Step 4: Commit JS**
  Run:
  ```bash
  git add app.js
  git commit -m "feat: implement interactive tabs, count-up animation, scroll transitions, and contact form handling"
  ```

---

### Task 5: Responsive Layout Styling & Polish

**Files:**
* Modify: `[style.css](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/style.css)`
* Modify: `[index.html](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/index.html)`

**Interfaces:**
* Consumes: Complete HTML + JS components.
* Produces: Polished responsive grid layouts, animations, grayscale-to-color sponsor logo hovers, glow effects, and media queries.

- [ ] **Step 1: Style the Header and Hero section**
  Implement the flex layout for navigation and grid for the hero metrics. Apply the radial ambient background glow behind the hero.
- [ ] **Step 2: Style the Story & Timeline sections**
  Style the two-column biography. Style the timeline with a central gold line, custom nodes, and scroll-triggered animations.
- [ ] **Step 3: Style the Wins/Records and Sponsor grids**
  Create CSS grids for wins/records cards and partners. Style the grayscale sponsor logo hover effect and popover tooltips.
- [ ] **Step 4: Add Mobile Media Queries**
  Add media queries for tablet (`@media (max-width: 1024px)`) and mobile (`@media (max-width: 768px)`, `@media (max-width: 480px)`) devices, turning split columns into stacked scroll grids, and optimizing font sizes.
- [ ] **Step 5: Commit responsive styles**
  Run:
  ```bash
  git add style.css index.html
  git commit -m "style: implement responsive design, layout styling, and visual polish"
  ```

---

### Task 6: local Validation & Setup GitHub Repository

**Files:**
* Modify: `[docs/superpowers/specs/2026-08-07-player-profile-design.md](file:///Users/dilanpatel/Developer/All%20Google%20Antigravity%20Projects/Manav's%20Website/docs/superpowers/specs/2026-08-07-player-profile-design.md)`

**Interfaces:**
* Consumes: Complete codebase.
* Produces: Verified local build and initialized GitHub repository.

- [ ] **Step 1: Check code syntax and links**
  Verify HTML syntax, CSS links, and JS references. Ensure there are no broken links.
- [ ] **Step 2: Run a local static server to test**
  Run: `npx -y serve -l 3000` (or similar sandboxed dev server) to verify the site renders correctly.
- [ ] **Step 3: Create GitHub repository and push**
  Using the `github-mcp-server` lazily loaded tool or running `git remote add origin` (if the user provides details) to initialize and push, or prepare a push guide for the user. We will create a repository named `manav-shah-portfolio` via `create_repository` if the user is logged in, or guide them.
- [ ] **Step 4: Commit final checks**
  Run:
  ```bash
  git add -A
  git commit -m "chore: final adjustments and code verification"
  ```

---

## Verification Plan

### Automated Checks
* Run: `python3 -m http.server 3000` or `npx -y serve` and perform a curl check to verify the local server serves `index.html` successfully.
* Verify CSS linting/syntax by verifying it loads cleanly in standard render.

### Manual Verification
* Test mobile layout navigation, tab switching (Wins vs. Records), hover states (partners cards glow), and submit the contact form to ensure success overlays appear dynamically.
