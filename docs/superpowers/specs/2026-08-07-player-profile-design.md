# Design Spec: Manav Shah Premium Player Profile Website

**Date:** 2026-08-07  
**Status:** Under Review  
**Topic:** Player Profile and Resume Landing Page for Manav Shah  

---

## 1. Project Overview & Goals
The goal of this project is to build a premium, highly aesthetic, and responsive single-page portfolio website for professional golfer **Manav Shah**. 

The website serves two primary purposes:
1. **Fan Engagement & Storytelling:** Narrate Manav's career journey, emphasizing his resilience (rebuilding his swing after a fractured hand injury) and his achievement of qualifying for the 126th U.S. Open at Shinnecock Hills.
2. **Professional Profile & Resume:** Showcase his athletic credentials, including 8 professional wins, 6 course records, and corporate sponsors, providing a sleek resume for fans, sponsors, and the media.

---

## 2. Technical Stack
To maximize performance, load speed, SEO, and visual fidelity, we will use a vanilla web stack:
* **HTML5:** Semantic markup structure.
* **CSS3:** Custom properties for theming, CSS Grid and Flexbox for responsive layouts, backdrop-filters for glassmorphism, and keyframe animations.
* **JavaScript (ES6):** Vanilla JS for DOM interactions, interactive tabs (Wins vs. Records), interactive timeline triggers, contact form validation, and scroll-driven animation controls.
* **Google Fonts API:** Integration of typography.

### Directory Structure
```text
/
├── index.html
├── style.css
├── app.js
├── assets/
│   ├── logos/           # Grayscale and color partner logos
│   └── images/          # Professional golf photography assets
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-08-07-player-profile-design.md
```

---

## 3. Design System & Brand Identity

### 3.1 Color System
We will use a cohesive, dark-themed, "Premium Athletic" color palette:
```css
:root {
  --bg-canvas: #0c0f0d;          /* Matte black with faint green tint */
  --bg-panel: rgba(18, 24, 21, 0.8); /* Glassmorphic panel base */
  --border-panel: rgba(212, 175, 55, 0.15); /* Muted gold border for glass panels */
  
  --primary-brand: #1b4332;      /* Deep golf green */
  --primary-accent: #2d6a4f;     /* Vivid forest green */
  --secondary-brand: #d4af37;    /* Classic tournament gold */
  --secondary-accent: #f0cd60;   /* Bright highlight gold */
  
  --text-main: #f4f6f5;          /* Off-white/ice white for high contrast read */
  --text-muted: #8fa298;         /* Sage grey for body copy and metadata */
  --text-gold: #d4af37;          /* Gold text accent */
  
  --glow-green: rgba(45, 106, 79, 0.4);
  --glow-gold: rgba(212, 175, 55, 0.35);
}
```

### 3.2 Typography
* **Primary Headings (`h1`, `h2`, `h3`):** `'Playfair Display', serif` (Google Fonts). This classic serif font conveys heritage, prestige, and tournament history.
* **Body & UI Elements (`p`, `span`, `button`, `input`):** `'Outfit', sans-serif` (Google Fonts). A modern, geometric sans-serif that balances the classic headings with an athletic, high-tech aesthetic.

### 3.3 Visual Accents & Styling Rules
* **Glassmorphism:** All cards and panels will feature `backdrop-filter: blur(12px)` and a thin border of `var(--border-panel)`.
* **Gold Highlights:** Use gold sparingly to draw attention (e.g., card borders on hover, title accents, metric counters, win badges).
* **Smooth Transitions:** All hovers and page actions will transition over `0.3s cubic-bezier(0.25, 0.8, 0.25, 1)`.

---

## 4. Page Structure & Components

### 4.1 Navigation (Sticky Header)
* **Layout:** Top bar with a glassmorphic background (`backdrop-filter`).
* **Left:** Brand Text (`MANAV SHAH` in serif typography).
* **Right:** Navigation links: `Story`, `Timeline`, `Wins & Records`, `Partners`, `Contact`.
* **Mobile Menu:** Hamburger menu that overlays cleanly on small screens.

### 4.2 Hero Section (First Fold)
* **Layout:** Centered or left-aligned column with a dark, atmospheric background.
* **Background Effect:** A slow-pulsing forest green radial gradient center-screen.
* **Heading:** Large typography header `MANAV SHAH`.
* **Tagline:** *Professional Golfer // 8x Pro Champion // U.S. Open Contestant*
* **Metrics Dashboard:** A horizontal grid of three large glass counters:
  * **8** — Professional Wins
  * **6** — Course Records
  * **126th** — U.S. Open Shinnecock Hills
* **Call to Actions:**
  * Primary: Gold-filled button "Explore Journey" (scrolls to Story).
  * Secondary: Outline button "Inquire / Book" (scrolls to Contact).
  * Social Links: Subtle gold-bordered icons linking to Instagram (`@manavtheshah`) and Email.

### 4.3 Narrative: "Proven on Five"
* **Structure:** Two-column split-layout.
* **Left Column:** A giant serif blockquote highlighting the central narrative:
  > *"One fractured hand reset everything. Rereaching the world stage at Shinnecock Hills validated the work."*
* **Right Column:** Narrative blocks detail:
  * **The Climb:** From a standout UCLA student-athlete (All-Pac-12 Honors) to professional transition.
  * **The Setback:** A fractured hamate hook bone during Korn Ferry Tour qualifying that forced a complete rebuild of his swing from the ground up.
  * **The Global Return:** Rebuilding his game to earn status across five tours (PGA Tour Canada, PGA Tour LA, Korn Ferry Tour, Asian Tour, and IGPL), culminating in qualifying for the 126th U.S. Open.

### 4.4 The Timeline (Interactive Journey)
* **Layout:** Center line with alternating left/right event cards.
* **Timeline Nodes:**
  * **2011–2015 | UCLA Student-Athlete:** All-Pac-12 Second Team & Honorable Mention.
  * **2016–2018 | PGA Tour Canada:** Full status, peak of 22nd on the Order of Merit.
  * **2019–2022 | PGA Tour Latinoamérica & Korn Ferry:** Earned full status, 8th on Order of Merit (2022), and won the Quito Open.
  * **2023–2026 | Global Tour Status:** Full status on Asian Tour and IGPL (India), securing 3 Top-3 finishes.
  * **2026 | The U.S. Open:** Earning a spot in the field at Shinnecock Hills, competing among the world's best.
* **Interaction:** Scroll triggers add fade-in and slide-up animations to the timeline cards as they enter the viewport.

### 4.5 Wins & Records Grid (Tabbed Showcase)
* **Structure:** Toggle buttons to switch between **Professional Wins (8)** and **Course Records (6)**.
* **Tab 1: Professional Wins (8 Cards)**
  1. **Quito Open** — PGA TOUR Latinoamérica (2022) [Marquee Win - gold highlighted card]
  2. **APGA Juneteenth Classic** (2024)
  3. **Sand Hollow Open** (2021)
  4. **PFP Dallas Open** (2021)
  5. **Bakersfield Open** (2021)
  6. **Walnut Creek Open** (2019)
  7. **Mission Hills Challenge** (2018)
  8. **Bakersfield Open** (2018)
* **Tab 2: Course Records (6 Cards)**
  1. **Sand Hollow Championship** — Score: **60**
  2. **Stockdale Country Club** — Score: **60**
  3. **Avondale Country Club** — Score: **61**
  4. **Bermuda Dunes C.C.** — Score: **62**
  5. **Hylands Golf Club** — Score: **62**
  6. **TPC Valencia** — Score: **63**

### 4.6 Partnerships (Sponsor Portfolio)
* **Layout:** Grid of 12 sponsor logos with thin gold outline borders.
* **Sponsors Included:**
  * **Hard Rock Casino Tejon** (Title Partner — Left chest & bag placement, Kern County destination)
  * **RadNet** (Healthcare — NASDAQ: RDNT, outpatient diagnostic imaging)
  * **Infinx** (AI Healthcare — Revenue Cycle platform backed by KKR)
  * **Stirling Venture Capital** (VC firm backing high-growth platforms)
  * **Greyson** (Premium Golf Apparel — On-course styling partner)
  * **Motor City GMC** (Automotive — Hometown Buick-GMC dealer in Bakersfield)
  * **UCI Construction** (Heavy Industrial general engineering contractor)
  * **DeepHealth** (AI Health Informatics — RadNet's radiology clinical AI division)
  * **Ally Bank** (Financial Services — Digital banking leader)
  * **Double Eagle Golf** (Golf Lifestyle Apparel)
  * **JumboMax** (Golf Equipment — Oversized-grip technology)
  * **Anand Systems** (Hospitality Software — Hotel management platform)
* **Hover Interaction:** Inactive state is a clean, low-opacity grayscale logo. Hovering highlights the card with a gold glow and displays a tooltip describing the brand's integration or role.

### 4.7 Contact & Inquiries
* **Layout:** Centered glass card.
* **Fields:** Name, Email, Organization (optional), Message (Text area), and Subject Dropdown (Sponsorship, Media Booking, Fan Mail, Other).
* **Success State:** Displays a green and gold success message dynamically without page reload.
* **Direct Details:** Muted display of direct email `manavshah661@gmail.com` and Instagram handle `@manavtheshah`.

---

## 5. Animations & Interactive Details
* **Scroll Animations:** Using Intersection Observer to add a `.visible` class to sections when they enter the viewport, triggering CSS animations.
* **Number Counter:** Numbers in the Hero section (`8`, `6`, `126`) animate count-up from `0` when the page loads.
* **Interactive Tabs:** Instant transitions for Wins and Records tabs, using fade and slide animations for card entries.

---

## 6. Verification & Test Plan
* **Visual Audit:** Validate contrast ratios (WCAG AA compliance) of all text elements against the dark green/matte background.
* **Mobile Responsiveness:** Test layouts at breakpoints `1024px` (tablets) and `768px`/`480px` (mobile devices).
* **Form Verification:** Verify email validation regex and dynamic success/error alerts in JavaScript.
