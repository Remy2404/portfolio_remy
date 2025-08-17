# Phon Ramy – Professional Portfolio

This is a modern, glassmorphism-themed portfolio website for Phon Ramy, built with React, TypeScript, Tailwind CSS, and daisyUI. It features a galaxy/starfield hero section, animated fire border, timeline, skills, and more.

## ✨ Features

- **Glassmorphism UI**: Frosted-glass cards, soft blurs, and vibrant gradients throughout
- **Animated Galaxy Hero**: Interactive starfield background with a typewriter intro
- **Realistic Fire Border**: Custom CSS fire ring effect around the profile card
- **Experience Timeline**: Vertical timeline with glass cards (react-vertical-timeline-component)
- **Skills Matrix**: Progress bars and skill badges (react-daisyui, @ramonak/react-progress-bar)
- **Project Showcase**: Reusable glass cards for projects and testimonials
- **Contact Form**: Validated with react-hook-form and yup
- **Fully Responsive**: Mobile-first, works on all devices
- **Tailwind CSS & daisyUI**: Utility-first styling and beautiful components
- **TypeScript**: Type-safe, maintainable codebase

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

### 3. Build for production

```bash
npm run build
```

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Tailwind CSS** + **daisyUI** + **react-daisyui**
- **react-simple-typewriter** (custom fallback for SSR)
- **react-vertical-timeline-component**
- **@ramonak/react-progress-bar**
- **react-hook-form** + **yup**
- **OGL** (for animated galaxy background)

## 🔥 Special Effects

- **Animated Fire Border**: Custom CSS/SVG mask, multi-layered gradients, and advanced keyframes for a realistic, flickering fire ring around the profile card.
- **Galaxy/Starfield**: Interactive, animated background using OGL and custom shaders.

## 🧩 Folder Structure

```
app/
	components/
		Hero.tsx
		ExperienceTimeline.tsx
		Skills.tsx
		GlassCard.tsx
		ContactForm.tsx
	app.css
	...
react_bit/
	Galaxy/
		Galaxy.tsx
```

## 📝 Credits

- [Phon Ramy](https://github.com/remy2404) – Portfolio owner & developer
- [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/), [React](https://react.dev/)

---

Built with ❤️ by Phon Ramy. Inspired by modern glassmorphism and cosmic UI trends.
