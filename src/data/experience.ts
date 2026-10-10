import { ExperienceItem } from "@/types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "AI/ML Engineer",
    company: "Devexhub Private Ltd.",
    location: "Mohali, Punjab, India",
    period: "Feb 2026 — Present",
    bullets: [
      "Design and ship production AI features spanning generative AI, agentic LLM workflows (LangGraph, LangChain, OpenClaw), computer vision, and full-stack automation.",
      "Own end-to-end delivery across four major internal platforms — from data pipelines and model integration to secure AWS cloud deployment (EC2, Lambda, S3) using Docker, Celery/Redis, and Playwright.",
      "Partner with sales teams to convert client job descriptions into technical proposals auto-populated with matched case studies from company project history.",
      "Fine-tune open-source LLMs using LoRA/QLoRA on limited GPU memory, cutting recurring inference costs while preserving high response accuracy."
    ],
    skills: ["LangChain", "LangGraph", "LangSmith", "RAG", "LoRA/QLoRA", "OpenClaw", "AWS EC2/Lambda", "Docker", "Celery", "Redis", "Django"]
  },
  {
    id: "exp-2",
    role: "Python & AI/ML Intern",
    company: "Sunfocus Pvt. Ltd.",
    location: "India",
    period: "Jun 2025 — Jan 2026",
    bullets: [
      "Automated repetitive backend operations and data processing pipelines using Python and SQL queries, cutting manual processing effort.",
      "Built interactive Streamlit web applications and operational dashboards for internal company data workflows.",
      "Used NumPy and Pandas to clean, analyze, validate, and manipulate project datasets for downstream ML model pipelines."
    ],
    skills: ["Python", "Streamlit", "SQL", "Pandas", "NumPy", "Data Cleaning", "Automation"]
  }
];
