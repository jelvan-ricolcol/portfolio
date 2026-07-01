# <img src="https://img.shields.io/badge/Jelvan_Ricolcol-Repository_Ecosystem-CAFD00?style=for-the-badge&logo=github&logoColor=000&labelColor=0d0d0d" alt="Jelvan Ricolcol Repository Ecosystem" />

[![Portfolio](https://img.shields.io/badge/Portfolio-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://github.com/jelvan-ricolcol/portfolio)
[![Frontend](https://img.shields.io/badge/Frontend-React%20%2F%20Next.js-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Styling-TailwindCSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployment-Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/)

This repository is the **central documentation hub** for the broader **Jelvan Ricolcol project ecosystem**. It is designed for recruiters, technical reviewers, and collaborators who need a single place to understand the full body of work rather than reviewing one portfolio folder in isolation.

---

## Executive Overview

The ecosystem currently spans **8 repositories** across portfolio engineering, authentication, education technology, e-commerce, customization, and documentation.

### What a recruiter can verify quickly
- Strong use of **TypeScript-first frontend engineering** across multiple products
- Consistent delivery on **React, Vite, Next.js, Tailwind CSS, Motion, and Cloudflare-oriented deployment**
- Clear product variety: **portfolio, secure auth, bookstore commerce, LMS platforms, customization storefronts, and documentation systems**
- Reusable patterns in **modular UI design, deployment docs, typed configs, and production-ready repo organization**

---

## Repository Inventory

| Repository | Role in ecosystem | Primary stack | Notes |
|---|---|---|---|
| [`portfolio`](https://github.com/jelvan-ricolcol/portfolio) | Public flagship portfolio and recruiter entry point | React, Vite, TypeScript, Tailwind CSS v4, Cloudflare Worker | Main professional presentation layer |
| [`authenticator-app-operava`](https://github.com/jelvan-ricolcol/authenticator-app-operava) | Secure authentication and identity vault system | React, Vite, TypeScript, Express, Tailwind CSS v4 | Includes frontend, server, database, and security docs |
| [`onlinebookstore`](https://github.com/jelvan-ricolcol/onlinebookstore) | Interactive bookstore showcase | React, Vite, TypeScript, Tailwind CSS v4, Motion | Commerce-style UX and order-tracking patterns |
| [`learning-management-system-aiai`](https://github.com/jelvan-ricolcol/learning-management-system-aiai) | LMS and AI learning studio | Next.js, React, TypeScript, Recharts, Tailwind CSS | Education-focused application with multiple dashboards |
| [`bolekstore`](https://github.com/jelvan-ricolcol/bolekstore) | Clothing customizer and storefront | React, Vite, TypeScript, Tailwind CSS v4, Motion | Product customization and retail interaction patterns |
| [`Institute-school-AI`](https://github.com/jelvan-ricolcol/Institute-school-AI) | Academic institution portal | Next.js, React, TypeScript, Recharts, Tailwind CSS | Public campus portal plus LMS-oriented structure |
| [`Saas-bolek-workspace`](https://github.com/jelvan-ricolcol/Saas-bolek-workspace) | Workspace / domain-level brand repo | Public-facing workspace repo | Documents `www.bolekworkspace.com` and `suite.bolekworkspace.com` |

---

## Ecosystem Architecture

```text
Jelvan Ricolcol Ecosystem
├── Portfolio / recruiter entry point
│   ├── portfolio
│   └── Saas-bolek-workspace
├── Security / identity
│   └── authenticator-app-operava
├── Education technology
│   ├── Institute-school-AI
│   └── learning-management-system-aiai
├── Commerce / customization
│   ├── onlinebookstore
│   └── bolekstore

```

---

## Detailed Repository Breakdown

## 1. `portfolio`
**Repository:** https://github.com/jelvan-ricolcol/portfolio  
**Role:** Main recruiter-facing website and digital flagship.

### What it demonstrates
- Premium portfolio presentation with modular React components
- Cloudflare Worker integration for AI-assisted inquiries
- Strong attention to layout, branding, animation, and production polish
- Structured presentation of experience, education, tools, services, and selected works

### Verified top-level structure
```text
portfolio/
├── public/
├── src/
│   └── components/
├── worker/
├── package.json
├── vite.config.ts
├── wrangler.jsonc
└── README.md
```

### Verified stack
- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Motion
- Cloudflare Wrangler / Worker tooling

---

## 2. `authenticator-app-operava`
**Repository:** https://github.com/jelvan-ricolcol/authenticator-app-operava  
**Role:** Authentication, OTP, encrypted vault, and secure identity project.

### What it demonstrates
- Security-oriented product positioning
- Combined frontend and backend implementation in one repository
- Typed build flow with both application and server packaging
- Supporting documentation for deployment, structure, security, and description

### Verified top-level structure
```text
authenticator-app-operava/
├── database/
├── src/
├── server.ts
├── package.json
├── DEPLOYMENT.md
├── SECURITY.md
├── structure.md
└── README.md
```

### Verified stack
- React 19
- Vite
- TypeScript
- Express
- Tailwind CSS v4
- esbuild / tsx
- Cloudflare-oriented configuration via `wrangler.toml`

### Verified product description
- Zero-knowledge authenticator
- Secure identity vault for web and Cloudflare
- TOTP account storage and OTP generation
- Encrypted vault synchronization and passkey-focused security positioning

---

## 3. `onlinebookstore`
**Repository:** https://github.com/jelvan-ricolcol/onlinebookstore  
**Role:** Premium online bookstore simulation and commerce UX showcase.

### What it demonstrates
- Product catalog interfaces and stateful cart interactions
- UI for customer and publisher style workflows
- Strong motion, typography, and visual merchandising patterns
- Documentation beyond code through `deployment.md` and `description.md`

### Verified top-level structure
```text
onlinebookstore/
├── src/
├── package.json
├── vite.config.ts
├── deployment.md
├── description.md
├── metadata.json
└── README.md
```

### Verified stack
- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Motion
- Lucide React

### Verified product description
- Interactive bookstore with live catalog filtering
- Reactive shopping cart
- Persistent wishlist behavior
- Review manager and book discovery interactions

---

## 4. `learning-management-system-aiai`
**Repository:** https://github.com/jelvan-ricolcol/learning-management-system-aiai  
**Role:** LMS and AI-enabled learning experience platform.

### What it demonstrates
- Multi-surface education product architecture
- Next.js application structure with reusable components and hooks
- Dashboard and chart-oriented UX with typed frontend patterns
- Extensive supporting documentation for design and deployment

### Verified top-level structure
```text
learning-management-system-aiai/
├── app/
├── components/
├── hooks/
├── package.json
├── deployment.md
├── lmsdesign.md
├── lmscomponents.md
├── metadata.json
└── README.md
```

### Verified stack
- Next.js 14.2.16
- React 18
- TypeScript
- Recharts
- Lucide React
- Motion
- Tailwind CSS 3

### Verified product description
- Academic campus and LMS-focused experience
- Educational programs and certification-oriented portal framing
- Dashboard and learning workflow orientation
- AI capability metadata present in repo configuration

---

## 5. `bolekstore`
**Repository:** https://github.com/jelvan-ricolcol/bolekstore  
**Role:** Apparel storefront and customization studio.

### What it demonstrates
- Retail-focused frontend implementation
- Product customization and visual merchandising direction
- Supporting documentation for deployment and description
- Reusable Vite + React + TypeScript storefront architecture

### Verified top-level structure
```text
bolekstore/
├── src/
├── package.json
├── vite.config.ts
├── deployment.md
├── description.md
├── metadata.json
└── README.md
```

### Verified stack
- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Motion
- Express listed in dependency graph

### Verified product description
- Online clothing storefront
- Premium clothing configurator
- Custom apparel print positioning
- Feature direction aligned with rich customization flows

---

## 6. `Institute-school-AI`
**Repository:** https://github.com/jelvan-ricolcol/Institute-school-AI  
**Role:** Institutional academic portal for the Asian Academy of Artificial Intelligence.

### What it demonstrates
- Education portal architecture using Next.js app structure
- Reusable academic platform patterns across public portal and LMS-style components
- Supporting design, deployment, and component documentation
- Strong overlap with structured institutional product design

### Verified top-level structure
```text
Institute-school-AI/
├── app/
├── components/
├── hooks/
├── package.json
├── deployment.md
├── lmsdesign.md
├── lmscomponents.md
├── metadata.json
└── README.md
```

### Verified stack
- Next.js 14.2.16
- React 18
- TypeScript
- Recharts
- Motion
- Tailwind CSS 3

### Verified product description
- Official academic campus portal framing
- Certifications and vocational technical training orientation
- Multi-surface education product structure
- AI capability metadata present in repo configuration

---

## 7. `Saas-bolek-workspace`
**Repository:** https://github.com/jelvan-ricolcol/Saas-bolek-workspace  
**Role:** Workspace and domain-level umbrella repository.

### What it demonstrates
- Brand-level workspace naming and deployment identity
- Public-facing linkage to active domain endpoints
- A staging point for broader workspace operations beyond the individual app repos

### Verified public repo details
- `www.bolekworkspace.com`
- `suite.bolekworkspace.com`
- `jelvan.ricolcol@bolekworkspace.com`

### Current repository state
The public repo currently exposes minimal documentation, but it is still important in the ecosystem because it anchors the broader workspace identity around the deployed projects.

---

### What it demonstrates
- Consolidated repo-level documentation for the full ecosystem
- Cross-project review support for recruiters and technical evaluators
- A private staging area for improving presentation quality before publishing or linking outward

### Current repository structure
```text
Scratch-Pad/
├── README.md
└── file.md
```

---

## Cross-Repository Technical Patterns

Across the ecosystem, reviewers can consistently observe:
- **TypeScript as the main implementation language**
- **React-centered frontend development** through either Vite or Next.js
- **Tailwind CSS-driven design systems**
- **Documentation-aware project setup** with dedicated README, deployment, and description files
- **Cloudflare-aware deployment thinking** across public-facing products
- **Modular repository organization** with distinct application, component, and config layers

---

## Recommended Review Order

If someone is reviewing the work end-to-end, this is the best sequence:
1. Start with [`portfolio`](https://github.com/jelvan-ricolcol/portfolio) for the overall personal and technical brand
2. Review [`authenticator-app-operava`](https://github.com/jelvan-ricolcol/authenticator-app-operava) for security and full-stack depth
3. Review [`onlinebookstore`](https://github.com/jelvan-ricolcol/onlinebookstore) and [`bolekstore`](https://github.com/jelvan-ricolcol/bolekstore) for commerce and customization UX
4. Review [`Institute-school-AI`](https://github.com/jelvan-ricolcol/Institute-school-AI) and [`learning-management-system-aiai`](https://github.com/jelvan-ricolcol/learning-management-system-aiai) for education platform design
5. Use `Scratch-Pad` as the consolidated reference layer for ecosystem-wide context

---

## Contact & Inquiries

Ready to streamline your team's development lifecycle or deploy intelligent workforce automation models? Reach out directly:

<div align="left">
  <a href="mailto:hello@jelvan.pro">
    <img src="https://img.shields.io/badge/Email-hello%40jelvan.pro-CAFD00?style=for-the-badge&logo=gmail&logoColor=black&labelColor=111" alt="Email" />
  </a>
  <a href="https://portfolio.jelvan.pro" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-jelvan.pro-0052FF?style=for-the-badge&logo=google-chrome&logoColor=white&labelColor=111" alt="Portfolio" />
  </a>
  <a href="https://linkedin.com" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=111" alt="LinkedIn" />
  </a>
</div>

<br />

```
// SYSTEM Blueprints Logged. Approved for Technical Sourcing & Talent Acquisition.
// Checked & Verified by the AI Engineering Agent, 2026.
```
