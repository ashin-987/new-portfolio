export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online marketplace with real-time inventory management, payment processing, and admin dashboard. Built to handle thousands of concurrent users.",
    screenshot: "/projects/project1.webp", // Add your actual image paths
    
    // NEW: Add these highlights for better impact
    highlights: [
      "Reduced cart abandonment by 42% with optimized checkout flow",
      "Implemented real-time inventory sync across 3 warehouses",
      "Achieved 98% uptime with AWS auto-scaling infrastructure"
    ],
    
    // Optional: Add case study details
    problem: "High cart abandonment rate and slow checkout process",
    solution: "Streamlined checkout with one-click payment and progress indicators",
    impact: {
      metric: "Cart Abandonment",
      before: "70%",
      after: "28%"
    },
    
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
    category: ["web", "fullstack"],
    link: "https://your-project-link.com",
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "WebSocket-based messaging platform with end-to-end encryption, file sharing, and group chat functionality. Supports 10,000+ concurrent users.",
    screenshot: "/projects/project2.webp",
    
    highlights: [
      "Built custom WebSocket server handling 10k+ concurrent connections",
      "Implemented end-to-end encryption for secure messaging",
      "Reduced message latency to under 50ms globally"
    ],
    
    tech: ["React", "Socket.io", "Express", "PostgreSQL", "Docker"],
    category: ["web", "realtime"],
    link: "https://your-chat-app.com",
    github: "https://github.com/yourusername/chat-app"
  },
];

export default projects;
