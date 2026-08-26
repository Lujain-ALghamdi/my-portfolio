# Lujain Anwar Alghamdi — Portfolio & CV

Interactive 3D portfolio + ATS-friendly CV for **Lujain Anwar Alghamdi**, a Computer Science
graduate from the University of Jeddah.

**Live:** https://lujain-alghamdi.github.io/my-portfolio1/ · **CV:** https://lujain-alghamdi.github.io/my-portfolio1/cv/

## Live Sections

| Route | Description |
|-------|-------------|
| `/` | 3D scroll portfolio (Three.js + Framer Motion) |
| `/cv` | ATS-friendly CV — print to PDF (Ctrl+P) |

## Stack

- **Next.js 16** · TypeScript · Tailwind CSS v4
- **React Three Fiber** · Drei · Three.js
- **Framer Motion**

## Run Locally

```bash
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## CV (ATS)

1. Go to `/cv`
2. Click **Print / Save PDF**
3. Choose "Save as PDF" — single column, no graphics, ATS-safe

## Deploy (GitHub Pages)

This project is configured for static export and deploys to GitHub Pages under
`/my-portfolio1/`. Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with
`GITHUB_PAGES=true` (enabling the `/my-portfolio1` base path) and publishes the `out/` folder.

```bash
GITHUB_PAGES=true npm run build
```

## Projects Included

- TrainLink — university training management platform
- Luna AI Assistant — voice-based AI assistant
- Real-Time Color Recognition — OpenCV computer vision
- User Management System — PHP & MySQL
- Arduino Ultrasonic Servo Control — IoT & embedded systems
- Flower-Shaped L Keychain — 3D design

See [github.com/Lujain-ALghamdi](https://github.com/Lujain-ALghamdi) for all repositories.

## Author

Lujain Anwar Alghamdi · Jeddah, Saudi Arabia
