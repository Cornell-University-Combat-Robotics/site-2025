## Cornell Combat Robotics Website (`site-2025`)

This repository contains the 2025 marketing and information site for **Cornell Combat Robotics (CRC)**.
It is a single-page React application that highlights the team, its robots, subteams, sponsors, and how new members can get involved.

The site is built with **React**, **Vite**, **React Router**, and **MUI**, and is designed to be fully responsive across desktop and mobile.

---

## What this website does

- **Showcases CRC as an organization**
  - Explains who Cornell Combat Robotics is, our mission, and what we build.
  - Highlights the competitive combat-robotics focus of the team.

- **Introduces the team and subteams**
  - `About` and `Team` pages describe overall structure and culture.
  - Dedicated pages for subteams like **Kinetic**, **Autonomous**, **Sportsman**, **Marketing**, and **Leads** explain what each group works on and how they collaborate.
  - An **Alumni** section recognizes past members and their contributions.

- **Highlights robots and competitions**
  - `Robots` lists current and past robots with an `IndividualRobot` detail view for each bot.
  - A `Game` page explains the combat robotics game format and rules for the current season.

- **Showcases sponsors**
  - `Sponsors` page displays partner logos and blurbs, and explains how sponsors support CRC (manufacturing, materials, funding, etc.).

- **Recruiting and involvement**
  - `Apply` page walks prospective members through recruitment timelines, expectations, and application links.

- **Accessibility and usability**
  - An `Accessibility` page documents the team’s accessibility commitments and lists accommodations and contact information.
  - The layout, typography, and navigation are tuned for both desktop and mobile via a shared theme and mobile context.

---

## Tech stack

- **Framework**: React (with Vite as the build tool and dev server)
- **Routing**: React Router (hash-based routing via `HashRouter`)
- **UI**: MUI (Material UI) plus custom CSS (`App.css` and component-level styles)
- **Language**: JavaScript (with JSX). Some tooling and configs may assume TypeScript-style type awareness in editors.
- **Linting / Formatting**: ESLint (with auto-formatting on save in VS Code recommended)

---

## Key pages and routes

Routing is configured in `src/App.jsx` using `HashRouter` and `Routes`. The main routes include:

- `/` – **About**: Landing page describing CRC and the current season.
- `/team` – **Team overview**.
- `/team/marketing`, `/team/autonomous`, `/team/kinetic`, `/team/sportsman` – Subteam detail pages.
- `/team/leads` – Leadership page.
- `/team/alumni` – Alumni page.
- `/robots` – Robots overview.
- `/robots/:robotId` – Individual robot detail view.
- `/sponsors` – Sponsors and partners.
- `/game` – Game and competition overview.
- `/apply` – How to join CRC (applications / recruitment).
- `/accessibility` – Accessibility statement and contact.
- `*` – Fallback `PageNotFound` route.

The layout also includes:

- `GradientNavBar` / `NavBarMobile` for desktop/mobile navigation.
- `FooterDesktop` / `FooterMobile` for responsive footers.
- `ScrollToTop` component to reset scroll on route changes.

---

## Getting started (development)

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the Vite dev server**

   ```bash
   npm run dev
   ```

   Then open the printed local URL in your browser (typically `http://localhost:5173`).

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview the production build**

   ```bash
   npm run preview
   ```

---

## Project structure (high level)

While not exhaustive, the most important folders/files are:

- `src/App.jsx` – Root React component and route definitions.
- `src/components/` – Shared components such as navigation bars, footers, subteam components, and robot views.
- `src/pages/` – Top-level page components (about, team, robots, sponsors, game, apply, accessibility, subteams).
- `src/assets/` – Images, icons, and other static assets (if present).

Exact contents may evolve over time as the site is updated for new seasons.

---

## Contributing

When editing or adding components:

- Prefer reusing existing typography variants and theme values defined in `App.jsx`.
- Ensure pages remain accessible and responsive (test both mobile and desktop layouts).
- Run the dev server and visually verify new pages/sections before opening a PR.

Future contributors should update this README as the site structure, tech stack, or processes change.
