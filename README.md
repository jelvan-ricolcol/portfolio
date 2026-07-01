# <img src="https://img.shields.io/badge/Jelvan_Ricolcol-Portfolio-CAFD00?style=for-the-badge&logo=codeforces&logoColor=000&labelColor=0d0d0d" alt="Jelvan Ricolcol Portfolio" />

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4.0-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Workers AI](https://img.shields.io/badge/Cloudflare-Workers_AI-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/workers-ai/)
[![IBM Certified](https://img.shields.io/badge/IBM_Certified-Full_Stack_Dev-052FAD?style=flat-square&logo=ibm&logoColor=white)](https://www.credly.com/)

An avant-garde, ultra-premium digital workspace and recruitment portfolio engineered for **Jelvan Ricolcol**—a hybrid **Full-Stack Software Engineer** and **Corporate Operations / People Strategist** holding a Master's degree in and **Artificial Intelligence for Business** (Spain) & in **HR & Talent Management**. 

This application bridges high-performance edge computing, real-time telemetry-like aesthetics, serverless AI integration, and rigid, enterprise-grade policy blueprints in a beautifully unified single-page containerized architecture.

---

## Quick Executive Summary

*   **Target Roles:** Full-Stack Developer, Solutions Architect, HR Tech Engineer, Operations/AI Strategy Consultant.
*   **Unique Value Prop:** Merging **IBM-certified full-stack engineering proficiency** with **academic credentials in AI Strategy & Strategic HR (M.S. AI + HR)** to build enterprise workflows that are mathematically optimized, securely compliant, and frictionless.
*   **Production Deployment:** Containerized in Cloud Run, fronted by Nginx reverse proxies, with conversational inquiries processed live via **Cloudflare Workers AI** at edge-node locations.

---

## The Tech Spectrum & Programming Languages

Here is a breakdown of the languages and frameworks engineered, utilized, and maintained across this ecosystem:

### Programming & Scripting Languages
*   **TypeScript (ES2026/Strict Mode):** The structural backbone of the entire application. Leveraged for compile-time safety across state managers, DOM interfaces, and serverless edge functions.
*   **JavaScript (ES6+):** Utilized for build tools, dynamic script loaders, and low-level canvas animation loops.
*   **Python:** Extensively used in backend microservices, data analytics pipelines, and Flask/Django AI assessment engines.
*   **SQL (PostgreSQL):** For relational schemas, data indexing, transaction management, and complex analytical ledger queries.
*   **HTML5 / CSS3 (Tailwind Engine):** Modern semantic structures styled with hardware-accelerated layouts, fluid variable grids, and deep dark theme filters.
*   **YAML / JSON Configuration:** To orchestrate CI/CD pipelines, package states, Cloudflare Wrangler configurations, and environment bindings.

### Main Frameworks & Core Tooling
*   **Vite + React 18:** Providing a lightning-fast build cycle and virtualized React tree rendering.
*   **Tailwind CSS v4:** Directly compiled via inline CSS `@import "tailwindcss"` using state-of-the-art native variables.
*   **Framer Motion / Motion 11.x:** Staggered transitions, smooth route animations, and responsive interactive entries.
*   **Lenis Scroll Engine:** Custom physics-based inertial scrolling to eliminate jagged default browser reflows.
*   **Lucide React:** Minimal, modern SVG icon structures styled dynamically with Tailwind utilities.

---

## Design Systems & Aesthetic Directives

The visual architecture is built upon a high-contrast **Slate & Cyberpunk-Lime ("Cosmic Slate")** philosophy, ensuring a highly polished, interactive experience.

```
┌────────────────────────────────────────────────────────────────────────┐
│                          COSMIC SLATE THEME                            │
├─────────────────┬──────────────────────────────────────────────────────┤
│ Deep Canvas     │ #070707 (Absolute Jet-Black) with 3% Glass Overlays  │
│ Soft Neutrals   │ #111111 (Faceted Cards) & #A3A3A3 (Muted Typography)  │
│ Primary Accent  │ #CAFD00 (Neon Cyberpunk Lime - Focus and Energy)     │
│ Typography      │ Display: Space Grotesk | UI: Inter | Mono: JB Mono   │
└─────────────────┴──────────────────────────────────────────────────────┘
```

### Key UI Features:
1.  **High-Fidelity Loader & Checkpoint:** A smooth cinematic intro containing a progress tracker that waits for the **Cloudinary HD streaming video background** to fully load before enabling entry.
2.  **Custom Interactive Elements:** A responsive, magnet-aligned custom cursor that scales, reveals tooltips, and tracks click ripples.
3.  **Bento-Grid Case Studies:** Highly readable, modular layout structures separating selected works and compliance documents into logical, elegant hierarchies.
4.  **Hardware-Accelerated Grain Filter:** An absolute z-index grain background overlay that mimics real photographic film texture without affecting scroll frames.

---

## System Architecture & Project Directory Structure

The workspace is split into modular components following strict production guidelines, keeping application state fully separate from presentation layers:

```
├── .github/                     # Continuous Integration / CD Pipelines
├── .wrangler/                   # Cloudflare local server and telemetry caches
├── public/                      # Static assets, PDF resumes, and system files
│   └── Jelvan_Ricolcol_Resume.pdf
├── src/                         # Application Source Root
│   ├── components/              # Highly modular React UI components
│   │   ├── Loader.tsx           # Dynamic 1-100% video-ready gateway
│   │   ├── Header.tsx           # Glassmorphic persistent tab manager
│   │   ├── CustomCursor.tsx     # Magnetized custom pointer
│   │   ├── ClickRipple.tsx      # Canvas-bound visual click tracker
│   │   ├── Hero.tsx             # Typographic display & mission panel
│   │   ├── Story.tsx            # Personal journey & professional mission
│   │   ├── Services.tsx         # Architectural & consulting service list
│   │   ├── Experience.tsx       # Interactive chronologic timeline
│   │   ├── Education.tsx        # Academic achievements & IBM certifications
│   │   ├── Skills.tsx           # Technical capability grid
│   │   ├── Gallery.tsx          # "The Journey" photo collection
│   │   ├── Tools.tsx            # Toolbelt logo list
│   │   ├── Works.tsx            # Selected apps & PDF compliance blueprints
│   │   ├── Contact.tsx          # Inquiry form & Edge AI chat gateway
│   │   ├── Footer.tsx           # Legal copyright and social links
│   │   └── CloudinaryBackground.tsx # High-definition HTML5 video stream
│   ├── App.tsx                  # Core router and state-to-tab controller
│   ├── index.css                # Global styles with Tailwind @theme variables
│   └── main.tsx                 # Client hydration entry point
├── worker/                      # Edge Infrastructure Layer
│   └── index.ts                 # Cloudflare Worker script operating Edge AI Chat
├── package.json                 # Dependency definitions and lifecycle scripts
├── tsconfig.json                # Strict TypeScript configuration
├── wrangler.jsonc               # Cloudflare Workers configuration profile
└── README.md                    # System documentation and developer profile
```

---

## Under the Hood: The Cloudflare Worker AI Integration

The **Inquiry Concierge** tab features a fully decoupled, high-speed Edge Chat Assistant that connects directly to the serverless Cloudflare Workers ecosystem:

*   **API Endpoint:** Proxy requests are routed securely from `/api/chat` to a high-speed Cloudflare Worker.
*   **The AI Model:** Powered by Cloudflare's serverless AI runner (`@cf/meta/llama-3-8b-instruct`), delivering response speeds in milliseconds.
*   **Edge Security:** Keeps server secrets and API keys safely locked behind Cloudflare's secure vault, never exposing token arrays to client browsers.
*   **Direct Fallbacks:** Designed with a smooth UI controller that guides users to active contact forms or schedules Calendly meetings if the API experiences rate limits.

---

## Full Academic & Technical Credentials

Jelvan's profile is engineered at the intersection of complex human system architecture and code-level precision.

### Academic Foundations
*   **Master's Degree (Universidad Isabel I, Spain - 2025)**
    *   *Master in Artificial Intelligence for Business & in Human Resource Management & Talent Management*
    *   *Total Volume:* 72 ECTS Credits | 1,800 Hours.
*   **Bachelor of Science in Business Administration (University of Northern Philippines - 2018)**
    *   *Major:* Human Resources & Development Management.

### Technical Certifications
*   **IBM Full Stack Software Developer Professional Certificate**
    *   *Credits:* 18 ACE US Semester Credits | 6 FIBAA semester hours.
    *   *Key Mastery:* React, Node.js, Express, Django, Python, Docker, Kubernetes, Serverless, and Cloud Native Development.
*   **American Staffing Association Corporate Recruiting Professional Certificate**
    *   *Core Mastery:* Talent Sourcing Algorithms, Compliance-Audited Onboarding, Workforce Logistics.
*   **University of Pennsylvania**
    *   *AI Applications in Marketing and Finance* & *AI Fundamentals for Non-Data Scientists*.
*   **Amazon Web Services (AWS)**
    *   *AWS Certified Artificial Intelligence Practitioner*.

---

## Installation & Local Development

Should you wish to review or test this application locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Launch the Cloudflare Worker locally (requires Wrangler):**
    ```bash
    npx wrangler dev worker/index.ts
    ```

5.  **Build the production distribution:**
    ```bash
    npm run build
    ```

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
