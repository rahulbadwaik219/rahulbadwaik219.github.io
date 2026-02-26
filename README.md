# Rahul Badwaik — Personal Portfolio Website

A fully responsive, dark-themed personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. No build tools or frameworks required.

---

## Project Structure

```
rahul-portfolio/
├── index.html          ← Main HTML file (single-page)
├── css/
│   └── style.css       ← All styles (dark theme, responsive)
├── js/
│   └── main.js         ← All data + rendering logic
├── assets/
│   └── Resume_Rahul_SDE-2.pdf   ← Resume PDF
└── README.md
```

---

## How to Run Locally

### Option 1 — Open directly in browser (simplest)
1. Unzip the folder.
2. Double-click `index.html` to open it in your browser.

> **Note:** Skill logos are loaded from a CDN (devicons). You need an internet connection for them to appear.

### Option 2 — Use VS Code Live Server (recommended)
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
2. Open the `rahul-portfolio` folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.

### Option 3 — Python local server
```bash
cd rahul-portfolio
python3 -m http.server 8080
# Then open http://localhost:8080 in your browser
```

---

## Customisation Guide

All content is stored in the `DATA` object at the top of `js/main.js`. You can edit it directly:

| Section      | Where to edit                            |
|--------------|------------------------------------------|
| Personal info | `DATA.name`, `DATA.email`, etc.         |
| Stats         | `DATA.stats` array                      |
| Skills        | `DATA.skills` array (add/remove items)  |
| Experience    | `DATA.experience` array                 |
| Projects      | `DATA.projects` array (or use the UI button) |
| Education     | `DATA.education` array                  |

### Adding a new skill
```js
// Inside the relevant category in DATA.skills:
{ name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
```

### Adding a new project via UI
Click the **"+ Add Project"** button on the Projects section and fill in the form. The project will appear instantly.

### Adding a new project permanently (in code)
Add an object to `DATA.projects` in `js/main.js`:
```js
{
  title: "My New Project",
  period: "Jan 2026 – Mar 2026",
  icon: "🚀",
  description: "Description of what you built...",
  tags: ["Python", "React", "AWS"],
  github: "https://github.com/rahulbadwaik219/my-project"
}
```

---

## Features

- **Single-page** with smooth scroll navigation
- **Typed animation** in the hero section
- **Fade-up animations** on scroll
- **Responsive** — works on mobile, tablet, and desktop
- **Add Project modal** — add new projects without editing code
- **Skill logos** from Devicons CDN
- **Resume download** button
- **Social links** (GitHub, LinkedIn, Email, Phone)
- **Dark theme** with purple accent

---

## Technologies Used

- HTML5 / CSS3 (CSS Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- [Font Awesome 6](https://fontawesome.com/) — icons
- [Google Fonts](https://fonts.google.com/) — Inter + Fira Code
- [Devicons CDN](https://devicon.dev/) — skill logos
