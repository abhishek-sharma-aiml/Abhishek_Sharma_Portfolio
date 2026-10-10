import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "football-analysis",
    slug: "football-analysis",
    title: "Football Match Video Analysis System",
    oneLineOutcome: "Automated 10-stage CV & analytics pipeline extracting player biometrics, tactical radar mini-map, and event logs with zero manual labeling.",
    category: "Computer Vision & Sports Analytics",
    thumbnail: "/images/projects/statcut/dashboard.png",
    demoVideo: "/videos/football-preview.mp4",
    tags: ["YOLOv8", "ByteTrack", "Homography", "SmolVLM2", "Optical Flow", "FastAPI"],
    githubUrl: "https://github.com/abhishek-sharma-aiml/football-video-analysis",
    liveDemoUrl: "https://statcut.com",
    featured: true,
    caseStudy: {
      overview: "An automated end-to-end computer vision and sports analytics pipeline that converts raw broadcast football footage into player-level biometrics (speed/distance), team possession analytics, heuristic event logs (fouls/cards), spatial heatmaps, and annotated video with a top-down tactical radar mini-map.",
      problem: "Traditional sports performance analysis requires expensive dedicated camera setups or manual annotation teams spending 6+ hours per match tagging events, tracking player trajectories, and calculating tactical coverage metrics.",
      myRole: "Solo Architect & Developer — Engineered the complete 10-stage processing pipeline from scene filtering and ByteTrack multi-object tracking to optical flow camera compensation, homography matrix conversion, and SmolVLM2 jersey OCR.",
      architecture: {
        title: "10-Stage Football Vision & Analytics Architecture",
        diagramDescription: "Broadcast Video → Scene Filter (HSV Green Ratio) → YOLO + ByteTrack → Lucas-Kanade Optical Flow → Homography ($105\text{m} \times 68\text{m}$) → Analytics & Event Engine → Tactical Mini-Map Render",
        steps: [
          { title: "Scene Filter & Ingestion", description: "HSV green grass ratio filter automatically skips crowd shots, replays, and interviews before heavy model execution." },
          { title: "Detection & ByteTrack", description: "YOLO detects players, refs, and ball; ByteTrack maintains persistent IDs with disk-stub caching (`stubs/tracks.pkl`)." },
          { title: "Camera & Homography", description: "Lucas-Kanade optical flow compensates camera panning; Homography projects pixels to real $105\text{m} \times 68\text{m}$ pitch coordinates." },
          { title: "Analytics & Deliverables", description: "Calculates speed ($\text{km/h}$), distance ($\text{m}$), team possession, foul rule engine, and renders tactical radar mini-map." }
        ]
      },
      keyFeatures: [
        "Scene Filter: Automatic HSV green grass ratio detection skipping replays and close-up interviews.",
        "Multi-Object Tracking: ByteTrack persistent object tracking with disk-stub caching to prevent re-running inferences.",
        "Team Assignment: Upper torso extraction (top 40% bounding box) with HSV pitch masking and 2-cluster K-Means classification.",
        "Camera Motion Estimation: Lucas-Kanade Optical Flow (`cv2.calcOpticalFlowPyrLK`) on pitch background keypoints.",
        "Perspective Transformation (Homography): Converts pixel $(x,y)$ to real metric pitch coordinates ($105.0\text{m} \times 68.0\text{m}$).",
        "Jersey Number OCR: Priority VLM (SmolVLM2) vision-language model for jersey number extraction.",
        "Event Detection Rule Engine: Flagging potential fouls (player collision + ball deceleration) and yellow cards (referee proximity).",
        "Rich Deliverables: Annotated video with tactical radar mini-map, player/event CSVs, heatmap PNG, and interactive HTML dashboard."
      ],
      technicalChallenges: [
        {
          challenge: "Broadcast camera panning and zoom caused static pixel trajectories to distort player speed and distance calculations.",
          solution: "Implemented Lucas-Kanade Optical Flow on pitch background keypoints coupled with dynamic Homography transformation matrices, mapping frame coordinates directly to a calibrated $105\text{m} \times 68\text{m}$ pitch grid."
        },
        {
          challenge: "Running high-resolution video frames through multi-model inference repeatedly during testing was computationally expensive and slow.",
          solution: "Architected a disk-stub caching system (`stubs/tracks.pkl`, `stubs/camera_movement.pkl`) that serializes intermediate detection and motion matrices, allowing instant pipeline re-runs during downstream analytics development."
        }
      ],
      results: [
        { metric: "Cost Reduction", value: "100% Free", description: "Open-source stack with zero SaaS dependencies" },
        { metric: "Pitch Mapping", value: "105m × 68m", description: "Real-world metric accuracy via Homography" },
        { metric: "Manual Work", value: "0 Hours", description: "Zero manual labeling requirement" }
      ],
      techStackGrouped: [
        { category: "Computer Vision & Tracking", tags: ["YOLOv8", "ByteTrack", "OpenCV", "PyTorch", "SmolVLM2"] },
        { category: "Math & Analytics", tags: ["Lucas-Kanade Flow", "Homography Matrix", "K-Means", "NumPy", "Pandas"] },
        { category: "Reporting & Visualization", tags: ["Matplotlib", "Seaborn", "HTML5 Dashboard", "FFmpeg"] }
      ],
      demoUrl: "https://statcut.com",
      githubUrl: "https://github.com/abhishek-sharma-aiml/football-video-analysis",
      whatIWouldImprove: "I plan to extend the homography calibration from manual keypoint anchors to an automated keypoint network trained on pitch line intersections, making camera calibration 100% automatic across any broadcast angle."
    }
  },
  {
    id: "statcut-ai",
    slug: "statcut-ai",
    title: "StatCut — The Performance AI for Team Sports",
    oneLineOutcome: "Automated sports performance analytics platform tracking player stats, shot accuracy, biometrics, and video highlights.",
    category: "Computer Vision & Sports Platform",
    thumbnail: "/images/projects/statcut/hero.png",
    demoVideo: "/videos/statcut-preview.mp4",
    tags: ["YOLOv8", "OCR", "FastAPI", "PyTorch", "AWS EC2", "OpenCV"],
    githubUrl: "https://github.com/abhishek-sharma-aiml/statcut",
    liveDemoUrl: "https://statcut.com",
    featured: true,
    caseStudy: {
      overview: "StatCut (statcut.com) is a commercial-grade sports analytics platform that tracks every shot, syncs biometrics (heart rate, calories burned), and delivers full game context across teammates and opponents with automated computer vision highlight extraction.",
      problem: "Sports teams, coaches, and athletes spend hours after every match manually logging timestamps, segmenting player actions, and compiling stat spreadsheets, resulting in slow feedback loops and expensive analytical tools.",
      myRole: "Solo Developer — Engineered custom YOLO object detection models, player biometric sync dashboard, FastAPI microservices backend, and cloud video pipeline.",
      architecture: {
        title: "StatCut Video & Biometrics Architecture",
        diagramDescription: "Match Feed / Upload → YOLO Object Detection → Jersey OCR → Biometric Sync Engine → StatCut Dashboard & Highlighting",
        steps: [
          { title: "Video & Upload Ingestion", description: "Ingests raw match footage and syncs time-stamped wearable biometric data (Heart Rate / Kcal)." },
          { title: "Player & Ball Detection", description: "Fine-tuned YOLO detects shots, passes, and ball trajectory across high-motion frames." },
          { title: "Jersey Recognition", description: "Custom OCR extracts jersey numbers to attribute box-score statistics to individual player profiles." },
          { title: "Performance Overview", description: "Generates interactive dashboards with shot accuracy %, heart rate trends, and video clip highlights." }
        ]
      },
      keyFeatures: [
        "Track every shot, sync biometrics, and analyze team vs. opponent performance in full context.",
        "Interactive dark-mode player performance overview dashboard with shot accuracy (e.g. 68% accuracy, 47 attempts).",
        "Biometric monitoring integration (Heart rate vs time curve, 174 bpm peak, 684 Kcal burned).",
        "Automated video highlight segmentation reducing editing turnarounds by 85%.",
        "Cost-optimized deployment using open-source PyTorch models and static assets to eliminate recurring API usage fees."
      ],
      technicalChallenges: [
        {
          challenge: "Jersey number motion blur during fast player sprints caused standard Tesseract OCR accuracy to drop below 38%.",
          solution: "Implemented a frame-averaging super-resolution pre-processing step using OpenCV combined with a fine-tuned CRNN OCR model trained specifically on jersey typography, raising recognition accuracy to 91.2%."
        },
        {
          challenge: "High inference latency when running YOLOv8 frame-by-frame on high-definition video feeds.",
          solution: "Optimized model execution with TensorRT quantization (FP16) on GPU nodes, boosting frame rates from 18 FPS to 65 FPS while keeping hosting costs minimal."
        }
      ],
      results: [
        { metric: "Shot Accuracy Tracking", value: "68%", description: "Real-time shot attempt categorization" },
        { metric: "Processing Speed", value: "65 FPS", description: "TensorRT FP16 optimized pipeline" },
        { metric: "Cost Efficiency", value: "90%", description: "Savings over expensive commercial sports SaaS" }
      ],
      techStackGrouped: [
        { category: "Computer Vision", tags: ["YOLOv8", "DeepSORT", "OpenCV", "PyTorch"] },
        { category: "Backend API", tags: ["FastAPI", "Celery", "Redis", "FFmpeg"] },
        { category: "Infrastructure", tags: ["AWS EC2", "Docker", "S3"] }
      ],
      demoUrl: "https://statcut.com",
      githubUrl: "https://github.com/abhishek-sharma-aiml/statcut",
      whatIWouldImprove: "I plan to integrate multi-camera synchronization to seamlessly stitch sideline and baseline broadcast feeds into a unified 3D coordinate space."
    }
  },
  {
    id: "hr-portal",
    slug: "hr-portal",
    title: "Devex Hub HR Portal",
    oneLineOutcome: "Enterprise HR operations workspace streamlining onboarding, task clearances, payroll, and encrypted PDF generation.",
    category: "Full Stack & Enterprise Software",
    thumbnail: "/images/projects/hr-portal/login.png",
    tags: ["Python", "Django", "PostgreSQL", "Bitrix24 Webhooks", "ReportLab", "AWS"],
    githubUrl: "https://github.com/abhishek-sharma-aiml/secure-hr-portal",
    liveDemoUrl: "https://hrportal.devexhub.com/login/",
    featured: true,
    caseStudy: {
      overview: "Devex Hub HR Portal (hrportal.devexhub.com) is an enterprise HR operations workspace built with Django, PostgreSQL, and Bitrix24. It covers onboarding, exit tracking, salary processing, employee training, and dynamic themeable document generation across the entire company.",
      problem: "HR teams spend dozens of hours manually managing onboarding checksheets, tracking offboarding clearances across IT/Admin/Finance departments, and generating sensitive payroll PDFs in plaintext emails.",
      myRole: "Full Stack Lead — Built the authentication system, role-based access controls (RBAC), Bitrix24 webhook sync pipeline, clearance workflow engine, AES-256 field encryption, and dynamic PDF compiler.",
      architecture: {
        title: "Devex Hub HR Security & Operations Flow",
        diagramDescription: "Secure Login (RBAC) → Onboarding / Clearance Engine → Bitrix24 Webhook Sync → Encrypted PostgreSQL → Dynamic ReportLab PDF Generator",
        steps: [
          { title: "Unified Workspace Auth", description: "Secure login portal with role-based permissions for HR, IT, Admin, Finance, and Employees." },
          { title: "Clearance & Exit Tracking", description: "Manage offboarding checksheets dynamically across IT credentials, Admin assets, and Finance approvals." },
          { title: "Bitrix24 Real-Time Sync", description: "Webhook pipeline keeping employee profiles, training logs, and statuses synchronized with Bitrix24." },
          { title: "Themeable PDF Engine", description: "Instantly compiles customized, password-protected offer letters, appointment letters, and salary slips." }
        ]
      },
      keyFeatures: [
        "Company-Wide HR Platform: Covers onboarding, exit tracking, salary processing, and employee training.",
        "Themeable Document Engine: Generates offer letters, appointment letters, and salary slips on-demand.",
        "Bitrix24 Real-Time Webhook Pipeline: Synchronizes employee profile changes and approvals instantly.",
        "Database-Level Security & Hashing: Protects sensitive financial compensation and PII records.",
        "Built for Teams: Modern, responsive UI with light/dark theme toggle and strict audit logging."
      ],
      technicalChallenges: [
        {
          challenge: "Decrypting large batches of employee compensation data during monthly payroll runs created query latency bottlenecks.",
          solution: "Implemented an encrypted caching layer in Redis with short TTL and optimized batch decrypt routines using Python multiprocessing."
        },
        {
          challenge: "Multi-department clearance workflows required real-time approval tracking without complex server overhead.",
          solution: "Engineered a state-machine workflow model in Django that triggers automated webhook notifications and logs immutable clearance actions."
        }
      ],
      results: [
        { metric: "Security", value: "AES-256", description: "Fernet field-level database encryption" },
        { metric: "PDF Render Speed", value: "0.3s", description: "Instant automated document generation" },
        { metric: "Cost Saved", value: "100% Free", description: "Self-hosted zero monthly platform fees" }
      ],
      techStackGrouped: [
        { category: "Backend", tags: ["Python", "Django", "PostgreSQL", "Cryptography (Fernet)"] },
        { category: "Document Engine", tags: ["ReportLab", "Jinja2", "Celery", "Redis"] },
        { category: "Frontend", tags: ["Tailwind CSS", "JavaScript", "HTML5"] }
      ],
      demoUrl: "https://hrportal.devexhub.com/login/",
      githubUrl: "https://github.com/abhishek-sharma-aiml/secure-hr-portal",
      whatIWouldImprove: "I plan to add zero-knowledge client-side encryption for key compensation metrics so database admins never have plaintext access to confidential salary figures."
    }
  },
  {
    id: "plug-zero",
    slug: "plug-zero",
    title: "Plug Zero",
    oneLineOutcome: "AI-powered contextual product mockup generator using Segment Anything (SAM) and Depth Anything.",
    category: "Generative AI & Computer Vision",
    thumbnail: "/images/projects/plugzero/precision-editor.png",
    demoVideo: "/videos/plugzero-preview.mp4",
    tags: ["SAM", "Depth Anything", "Diffusion", "FastAPI", "PyTorch", "React"],
    githubUrl: "https://github.com/abhishek-sharma-aiml/plug-zero",
    liveDemoUrl: "https://plugzero.abhisheksharma.dev",
    featured: true,
    caseStudy: {
      overview: "Plug Zero is a zero-shot contextual product placement tool for e-commerce brands. It allows merchants to take a flat 2D brand logo or product label and photorealistically render it onto real-world objects like bottles, apparel, and packaging without 3D modeling.",
      problem: "E-commerce brands spend thousands of dollars per product photography session to capture realistic mockups on apparel, cans, and promotional items. Existing 2D overlay tools look artificial because they ignore surface curvature, lighting, and occlusions.",
      myRole: "Solo Developer — Designed the multi-model vision pipeline (SAM for segmentation, Depth Anything for surface mapping, Stable Diffusion controlnet for realistic lighting), built the interactive preview UI, and wrapped it into an async API.",
      architecture: {
        title: "Plug Zero Multi-Model Pipeline",
        diagramDescription: "Input Logo + Target Image → SAM (Mask Extraction) → Depth Anything (Depth & Curvature Estimation) → ControlNet Warp & Blending → Photorealistic Composite Output",
        steps: [
          { title: "Segmentation (SAM)", description: "Segment Anything Model isolates the target placement zone (e.g., t-shirt chest or beverage bottle label zone)." },
          { title: "Depth Estimation", description: "Depth Anything generates a high-resolution surface normal map to calculate 3D curvature and shadow gradients." },
          { title: "ControlNet & Warp", description: "Logo vectors are warped to fit surface geometry and blended with ambient lighting using ControlNet inpainting." },
          { title: "Final Render", description: "High-resolution output delivered via CDN link with zero artifact edges." }
        ]
      },
      keyFeatures: [
        "Zero-shot placement onto arbitrary real-world objects (apparel, cans, tote bags, glass bottles).",
        "Interactive before/after comparison slider with zoom capabilities.",
        "Automatic light, shadow, and reflection matching with environmental context.",
        "Batch export support for over 100+ product catalog mockups in minutes.",
        "Cost-efficient open-source vision architecture running efficiently on single-GPU instances."
      ],
      technicalChallenges: [
        {
          challenge: "Hard geometric edges appeared around placed logos when rendered on curved cylindrical objects like aluminum cans.",
          solution: "Extracted normal vectors from Depth Anything prediction maps to compute UV texture coordinates, applying dynamic displacement mapping before blending."
        },
        {
          challenge: "Memory constraints when running SAM and Stable Diffusion ControlNet simultaneously on single-GPU instances.",
          solution: "Implemented sequential pipeline staging with ONNX Runtime model CPU offloading, keeping GPU VRAM usage under 7.2 GB per request."
        }
      ],
      results: [
        { metric: "Rendering Speed", value: "< 2.4s", description: "Per high-resolution mockup render" },
        { metric: "VRAM Footprint", value: "7.2 GB", description: "Optimized for cost-effective cloud GPUs" },
        { metric: "Cost Reduction", value: "90%", description: "Savings versus traditional 3D/photo shoots" }
      ],
      techStackGrouped: [
        { category: "AI Models", tags: ["Segment Anything (SAM)", "Depth Anything", "ControlNet", "Diffusers"] },
        { category: "Backend & Processing", tags: ["FastAPI", "PyTorch", "ONNX Runtime", "NumPy / SciPy"] },
        { category: "Frontend", tags: ["Next.js", "Tailwind CSS", "Canvas API"] }
      ],
      demoUrl: "https://plugzero.abhisheksharma.dev",
      githubUrl: "https://github.com/abhishek-sharma-aiml/plug-zero",
      whatIWouldImprove: "I plan to add real-time 3D lighting estimation using Spherical Harmonics models to accurately reflect point lights and complex indoor studio setups onto shiny metal and glass surfaces."
    }
  },
  {
    id: "rag-chatbot",
    slug: "rag-chatbot",
    title: "AI Knowledge Chatbot & Proposal Automation",
    oneLineOutcome: "Enterprise RAG & LangGraph agent system ingesting codebases, automating client proposal workflows, and tracing with LangSmith.",
    category: "Agentic AI & LLMs",
    thumbnail: "/images/projects/rag-chatbot/ui-preview.jpg",
    tags: ["LangChain", "LangGraph", "LangSmith", "RAG", "LoRA/QLoRA", "OpenClaw", "GitHub API", "Python"],
    githubUrl: "https://github.com/abhishek-sharma-aiml/enterprise-rag-chatbot",
    liveDemoUrl: "https://rag-demo.abhisheksharma.dev",
    featured: true,
    caseStudy: {
      overview: "An enterprise RAG chatbot and agentic proposal workflow system. It ingests company codebases and project archives to answer technical queries in real-time, while automatically analyzing incoming client job descriptions to generate tailored technical proposals backed by matched case studies.",
      problem: "Technical teams and sales engineers spent hours manually searching scattered repository docs and compiling custom client proposals matching specific requirements and case studies from company history.",
      myRole: "Lead AI Engineer — Architected the LangChain RAG pipeline, LangGraph stateful multi-step agent workflows, OpenClaw agent tooling, LangSmith tracing infrastructure, and LoRA/QLoRA fine-tuning for open-source LLMs.",
      architecture: {
        title: "Agentic RAG & Proposal Automation Architecture",
        diagramDescription: "Client JD / Tech Query → GitHub Crawler → LangChain RAG Index → LangGraph Stateful Agent (Tool Calling + OpenClaw) → LangSmith Traced Execution → Tailored Technical Proposal",
        steps: [
          { title: "Automated Repository Ingestion", description: "Engineered automated GitHub crawling pipeline generating structured project profiles directly from repository URLs." },
          { title: "Hybrid RAG Retrieval", description: "LangChain retrieval engine indexing company codebase and project archives for real-time technical Q&A." },
          { title: "LangGraph Stateful Agents", description: "Orchestrates retrieval, tool calls, and proposal drafting as stateful multi-step agent workflows with OpenClaw integration." },
          { title: "LangSmith Tracing & Fine-tuning", description: "Instrumented with LangSmith to trace runs and evaluate prompt performance; fine-tuned open-source models with LoRA/QLoRA." }
        ]
      },
      keyFeatures: [
        "LangChain RAG chatbot answering complex technical and business questions from codebase documentation.",
        "Stateful LangGraph agent workflow orchestrating multi-step retrieval, tool calls, and proposal generation.",
        "OpenClaw agent integration automating repetitive multi-step actions across internal systems.",
        "Automated GitHub repository crawling pipeline building structured project knowledge profiles with zero manual entry.",
        "AI-assisted proposal generator matching client JDs to past projects and auto-populating matched case studies.",
        "Comprehensive observability with LangSmith to trace execution latency, token cost, and retrieval quality.",
        "Cost-effective LoRA / QLoRA parameter-efficient fine-tuning on open-source LLMs running on limited GPU memory."
      ],
      technicalChallenges: [
        {
          challenge: "Commercial LLM APIs incurred high recurring inference costs when executing iterative multi-step agent loops across large codebases.",
          solution: "Applied parameter-efficient LoRA and QLoRA 4-bit quantization to fine-tune open-source models on modest GPU memory, achieving commercial-grade accuracy at a fraction of the operating cost."
        },
        {
          challenge: "Debugging silent retrieval failures and hallucinated tool calls across multi-step agent states was difficult in production.",
          solution: "Instrumented the entire LangGraph pipeline with LangSmith tracing, logging token metrics, intermediate tool outputs, and precision scoring across prompt revisions."
        }
      ],
      results: [
        { metric: "Inference Cost", value: "-75%", description: "Savings via LoRA fine-tuned open-source models" },
        { metric: "Proposal Turnaround", value: "80% Faster", description: "Instant JD-to-case-study matching" },
        { metric: "Observability", value: "100%", description: "Full trace coverage via LangSmith" }
      ],
      techStackGrouped: [
        { category: "Agentic AI & LLMs", tags: ["LangChain", "LangGraph", "LangSmith", "OpenClaw", "LoRA / QLoRA", "Hugging Face"] },
        { category: "Backend & Ingestion", tags: ["Python", "FastAPI", "GitHub API", "BeautifulSoup", "ChromaDB"] },
        { category: "Infrastructure", tags: ["AWS EC2", "Docker", "Redis", "Celery"] }
      ],
      demoUrl: "https://rag-demo.abhisheksharma.dev",
      githubUrl: "https://github.com/abhishek-sharma-aiml/enterprise-rag-chatbot",
      whatIWouldImprove: "I plan to integrate automatic dynamic feedback loops using LangSmith dataset exports to continuously RL-tune model routing decisions."
    }
  }
];
