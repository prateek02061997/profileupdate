# Prateek Parihar — Profile Update & Recruiter Follow-Up

A clean, minimalist, human single-page follow-up note for **Prateek Parihar**.

Built with **React 18 + TypeScript + Vite**.

---

## 📌 Purpose

This website serves as a concise, professional follow-up documenting updates made to Prateek's profile (LinkedIn, CV, and experience presentation) following feedback from a recruiter conversation.

Designed to be scanned in **30–60 seconds** on both desktop and mobile devices.

---

## 🛠️ Tech Stack & Features

- **Framework**: React 18 (TypeScript)
- **Bundler**: Vite
- **Icons**: Lucide React
- **PDF Viewing**: Built-in modal PDF viewer and direct download for `Prateek_Parihar_CV_Generic_1.pdf`
- **Design System**: Responsive dark theme (`#0b0c10`) with zero AI visual noise

---

## 🚀 Quick Start (Local Development)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:3001`).

3. **Build for production**:
   ```bash
   npm run build
   ```
   The static build output will be generated in `dist/`.

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to GitHub Pages or Vercel

### Deploying to Vercel / Netlify / Railway
- Connect this GitHub repository to **Vercel** or **Netlify**.
- Build command: `npm run build`
- Output directory: `dist`

### Deploying to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add `base` path in `vite.config.ts` if deploying to a subdirectory:
   ```ts
   export default defineConfig({
     base: '/<repository-name>/',
     // ...
   });
   ```
3. Run build and deploy.

---

## 📄 License
Private candidate follow-up material © 2026 Prateek Parihar.
