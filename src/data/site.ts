import { StatChip } from "@/types";

export const siteConfig = {
  name: "Abhishek Sharma",
  title: "Abhishek Sharma — AI/ML Engineer",
  role: "AI/ML Engineer",
  headlineWords: ["RAG Chatbots", "LangGraph Agents", "Computer Vision", "LoRA Fine-tuning", "Full-Stack AI Apps"],
  subline: "AI/ML Engineer specializing in Retrieval-Augmented Generation (RAG), agentic workflows (LangGraph, LangChain), computer vision (YOLO, SAM), and scalable cloud ML systems on AWS.",
  aboutParagraphs: [
    "I am an AI/ML Engineer with hands-on experience building production Retrieval-Augmented Generation (RAG) chatbots, agentic LLM workflows (LangChain, LangGraph, OpenClaw), computer-vision pipelines, and full-stack ML applications in Python, Django, and TensorFlow.",
    "Currently at Devexhub Private Ltd. (Mohali, Punjab), I own end-to-end delivery across four major internal platforms—from data pipelines and model integration to secure AWS cloud deployment (EC2, Lambda, S3) using Docker, Celery/Redis, and Playwright.",
    "My technical focus includes parameter-efficient fine-tuning of LLMs (LoRA, QLoRA, 4-bit quantization), fine-tuning object-detection models (YOLO), tracing LLM apps with LangSmith, and automating JD-matched client proposal workflows."
  ],
  stats: [
    { number: "4+", label: "production platforms delivered" },
    { number: "RAG & Agents", label: "LangGraph, LangSmith & OpenClaw" },
    { number: "AWS & Docker", label: "EC2, Lambda, S3 & Celery/Redis" }
  ] as StatChip[],
  socials: {
    github: "https://github.com/abhishek-sharma-aiml",
    linkedin: "https://www.linkedin.com/in/abhishek-sharma-6b2a34352/",
    email: "abhis699675@gmail.com",
    phone: "+91 78766 30851",
    location: "Hamirpur, Himachal Pradesh / Mohali, Punjab, India"
  },
  availability: "Open to work"
};
