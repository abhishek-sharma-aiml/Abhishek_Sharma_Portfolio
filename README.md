# Abhishek Sharma — AI/ML Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse)](https://developer.chrome.com/docs/lighthouse/)

> **Executive engineering portfolio for Abhishek Sharma**, specializing in **Retrieval-Augmented Generation (RAG)**, **Agentic Workflows (LangGraph, LangChain)**, **Computer Vision (YOLOv8, ByteTrack, SAM)**, **LoRA Fine-Tuning**, and **Scalable Cloud ML Systems on AWS**.

---

## ⚡ Core Technical Focus

- **Generative AI & Agentic Architectures**: LangGraph multi-agent teams, LangChain, LangSmith tracing, FAISS vector retrieval, LoRA / QLoRA parameter-efficient fine-tuning.
- **Computer Vision Pipelines**: Real-time object detection & tracking (YOLOv8, ByteTrack), camera motion compensation (Lucas-Kanade Optical Flow), homography pitch perspective mapping, SmolVLM2 jersey OCR, Segment Anything Model (SAM), Depth Anything.
- **Backend & Cloud ML Infrastructure**: Python, FastAPI, Django, Celery & Redis task queues, Playwright automation, Docker containerization, AWS (EC2, S3, Lambda).

---

## 🛠️ Selected Projects Showcased

| Project | Domain | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- |
| **[Football Match Video Analysis System](./src/data/projects.ts)** | Computer Vision & Sports Analytics | YOLOv8, ByteTrack, Homography, SmolVLM2, Optical Flow, FastAPI | Automated 10-stage vision pipeline extracting biometrics, tactical radar mini-map ($105\text{m} \times 68\text{m}$ pitch), and foul event detection with zero manual labeling. |
| **[StatCut — Team Sports Performance AI](./src/data/projects.ts)** | Computer Vision & Performance Platform | YOLOv8, OCR, FastAPI, PyTorch, AWS EC2, OpenCV | Automated commercial analytics platform tracking shots, jersey OCR, wearable heart rate trends, and auto-segmented highlights. |
| **[Devex Hub HR Portal](./src/data/projects.ts)** | Enterprise Full-Stack & Automation | Django, Celery, Redis, Playwright, PostgreSQL, AWS | Centralized enterprise operations platform with scheduled automated scrapers, salary slip generation, and role-based access. |
| **[Plug Zero](./src/data/projects.ts)** | Generative Vision & Precision Editing | SAM, Depth Anything, FastAPI, PyTorch, Canvas API | AI-powered image editing workspace with point-and-click object segmentation and depth-aware background compositing. |
| **[AI Knowledge Chatbot & Proposals](./src/data/projects.ts)** | Agentic RAG & Workflow Automation | LangGraph, LangChain, FAISS, OpenClaw, FastAPI | Context-aware document Q&A assistant with real-time JD-matching proposal generator eliminating repetitive bid drafting. |

---

## 🌟 Portfolio Architecture & Features

- **Next.js 14 App Router + Static Export (`output: "export"`)**: Compiles to 100% static HTML/CSS/JS for blazing sub-second initial load and zero SSR server maintenance costs.
- **Full Dual-Mode Support**: Seamless Dark Mode & Light Mode with high-contrast accessibility across typography and glassmorphic backdrops.
- **Interactive Visuals**: Embedded Spline 3D canvas, live neural synapse network background, and responsive calligraphy insignia.
- **100/100 Lighthouse Verification**:
  - **Accessibility**: 100/100 (WCAG AA compliant, explicit label associations, `useReducedMotion()` support)
  - **SEO**: 100/100 (Canonical tags, OpenGraph 1200×630 cards, Twitter previews, XML Sitemap, Robots.txt)
  - **Best Practices**: 100/100
  - **Performance**: Static pre-rendering with optimized First Load JS (< 89 kB shared).

---

## 🚀 Quickstart & Local Development

### 1. Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm** or **pnpm**
- **Python**: 3.10+ (optional, for asset utilities and ML scripts)

### 2. Installation
Clone the repository and install frontend dependencies:
```bash
git clone https://github.com/abhishek-sharma-aiml/portfolio.git
cd portfolio
npm install
```

### 3. Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Production Build & Static Export
```bash
npm run build
```
Generates production-optimized static files in the `/out` directory.

### 5. Python Environment (Optional)
If running data auditing scripts or ML prototype utilities:
```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
```

---

## 📂 Project Structure

```text
portfolio/
├── public/                     # Static assets served at root
│   ├── images/                 # Optimized avatars, previews & OpenGraph card
│   ├── resume/                 # Official PDF resume (Abhishek_Sharma_Resume.pdf)
│   ├── videos/                 # Clean, compressed MP4 demo previews
│   ├── favicon.ico             # Brand favicon
│   └── .nojekyll               # GitHub Pages compatibility flag
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── layout.tsx          # Root layout, fonts & global SEO metadata
│   │   ├── page.tsx            # Main single-page portfolio view
│   │   ├── projects/[slug]/    # Dynamic SSG project case study pages
│   │   ├── sitemap.ts          # Automated sitemap generator
│   │   └── robots.ts           # Crawler directives
│   ├── components/             # Modular React components
│   │   ├── animations/         # Framer Motion scroll triggers
│   │   ├── layout/             # Navbar, Footer & Brand Insignia
│   │   ├── project/            # ProjectCard, ArchitectureDiagram, VideoShowcase
│   │   ├── sections/           # Hero, About, Projects, Skills, Experience, Contact
│   │   └── theme/              # ThemeProvider & BackgroundNetwork
│   ├── data/                   # Centralized typed data files
│   │   ├── site.ts             # Profile meta, bio, socials & contact details
│   │   ├── projects.ts         # Complete project specifications & case studies
│   │   ├── skills.ts           # Tech stack categories & proficiency data
│   │   └── experience.ts       # Work experience timeline & metrics
│   ├── lib/                    # Shared utility functions & animation constants
│   └── types/                  # TypeScript interface definitions
├── requirements.txt            # Python dependencies for ML/asset processing
├── package.json                # Node dependencies & project scripts
├── tailwind.config.ts          # Tailwind styling configuration
├── tsconfig.json               # TypeScript compiler rules
└── next.config.mjs             # Next.js configuration (static export)
```

---

## 📬 Connect & Inquiries

- **Name**: Abhishek Sharma
- **Role**: AI / ML Engineer
- **Email**: [abhis699675@gmail.com](mailto:abhis699675@gmail.com)
- **LinkedIn**: [linkedin.com/in/abhishek-sharma-6b2a34352](https://www.linkedin.com/in/abhishek-sharma-6b2a34352/)
- **GitHub**: [github.com/abhishek-sharma-aiml](https://github.com/abhishek-sharma-aiml)
- **Location**: Hamirpur, Himachal Pradesh / Mohali, Punjab, India
- **Resume**: [Download PDF](./public/resume/Abhishek_Sharma_Resume.pdf)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
