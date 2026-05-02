import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

export const skills = [
  {
    category: "Frontend",
    icon: FaCode,
    items: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TailwindCSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 85 }
    ]
  },
  {
    category: "Backend",
    icon: FaServer,
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 90 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 80 },
      { name: "WebSocket", level: 85 }
    ]
  },
  {
    category: "Database",
    icon: FaDatabase,
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: FaTools,
    items: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Linux", level: 80 },
      { name: "Jest", level: 85 }
    ]
  }
];

export default skills;
