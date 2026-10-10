import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI & Agentic LLMs",
    description: "Agentic workflows, fine-tuning, RAG pipelines, and automated LLM evaluation.",
    skills: [
      "LangChain",
      "LangGraph (Stateful Agents)",
      "LangSmith (Tracing & Eval)",
      "RAG & Vector Search",
      "OpenClaw Agent Workflows",
      "LoRA & QLoRA Fine-tuning",
      "Hugging Face Transformers",
      "4-bit Quantization (PEFT)",
      "Prompt Engineering",
      "Replicate API & Claude Code"
    ]
  },
  {
    title: "Computer Vision & Core ML",
    description: "Object detection, surface segmentation, depth estimation, and mathematical modeling.",
    skills: [
      "YOLO Object Detection",
      "SAM (Segment Anything)",
      "Depth Anything",
      "Computer Vision (OpenCV)",
      "PyTorch & TensorFlow",
      "Scikit-learn",
      "NumPy & Pandas",
      "Matplotlib & Seaborn",
      "Recommendation Systems",
      "Data Cleaning & Feature Engineering"
    ]
  },
  {
    title: "Backend, Cloud & Databases",
    description: "Scalable API backends, message queues, cloud orchestration, and secured data vaults.",
    skills: [
      "Python (Advanced)",
      "Django & REST APIs",
      "FastAPI & WebSockets",
      "AWS (EC2, Lambda, S3)",
      "Docker & Containerization",
      "Celery & Redis Caching",
      "PostgreSQL & MySQL",
      "Streamlit & Firebase",
      "Playwright Automation",
      "Data Hashing & Security"
    ]
  }
];
