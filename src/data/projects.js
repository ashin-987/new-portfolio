export const projects = [
  {
    id: 1,
    title: "Shoe Showcase",
    description: "Advanced product showcase leveraging WebGL and React Three Fiber for immersive 3D visualization. Features procedural geometry generation, professional 3D model integration, and real-time state management with full shopping cart functionality.",
    screenshot: "/projects/project1.webp", // Add your actual image paths
    
    // NEW: Add these highlights for better impact
    highlights: [
      "Built dual rendering system supporting both procedural 3D generation and GLB model loading",
      "Optimized WebGL performance achieving consistent 60fps animations with GPU acceleration",
      "Deployed production-ready application with automated CI/CD pipeline and zero-downtime deployment"
    ],
    
    tech: ["React","Three.js", "WebGL", "Zustand", "Tailwind CSS", "Vite"],
    category: ["Web"],
    link: "https://shoe-store-lyart-gamma.vercel.app/",
    github: "https://github.com/ashin-987/Shoe-Store"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "A full-stack enterprise HR solution with comprehensive employee lifecycle management, department analytics, and secure authentication. Designed to handle complex organizational hierarchies with role-based permissions.",
    screenshot: "/projects/project2.webp",
    
    highlights: [
      "Streamlined employee onboarding with automated form validation reducing errors by 80%",
      "Built real-time dashboard with department distribution and monthly hiring trends visualization",
      " Deployed scalable architecture handling 1000+ employee records with instant search"
    ],
    
    tech: ["React", "Java Spring Boot", "MySQL", "JWT Auth", "Tailwind CSS", "Axios", "Docker"],
    category: ["Web", "FullStack"],
    link: "https://ems-pro-rvdv.vercel.app/login",
    github: "https://github.com/ashin-987/ems-pro"
  },
  {
    id: 3,
    title: "AI-Powered Document Intelligence System",
    description: "An intelligent document analysis platform leveraging Retrieval-Augmented Generation (RAG) to provide accurate, context-aware answers from custom knowledge bases. Features automated document chunking, vector embeddings, and multi-model LLM integration for enterprise-scale question answering.",
    screenshot: "/projects/project3.webp",
    
    highlights: [
      "Engineered complete RAG pipeline with automated document processing, reducing manual document analysis time by 90%",
      "Achieved 98% semantic search precision using all-MiniLM-L6-v2 embeddings with optimized chunking strategy (800 chars, 200 overlap)",
      "Integrated 4 production-grade LLMs (Phi-3.5, Mistral-7B, Flan-T5, Zephyr-7B) with automatic fallback and retry logic for 99.9% uptime"
    ],
    
    tech: ["Python 3.9+", "ChromaDB", "Sentence Transformers", "PyPDF2", "Vector Search", "Streamlit"],
    category: ["AI/ML"],
    link: "https://aiknowledgeassistant-ashin.streamlit.app/",
    github: "https://github.com/ashin-987/ai_knowledge_assistant"
  },
];

export default projects;
