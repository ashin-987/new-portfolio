import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

export const skills = [
  {
    category: "Frontend",
    icon: FaCode,
    items: [
      { name: "React", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "TailwindCSS", level: 80 },
      { name: "HTML/CSS", level: 90 }
    ]
  },
  {
    category: "Backend",
    icon: FaServer,
    items: [
      { name: "Node.js", level: 60 },
      { name: "Python", level: 65 },
      { name: "Java (OOP, DSA)", level: 85 }
    ]
  },
  {
    category: "Database",
    icon: FaDatabase,
    items: [
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: FaTools,
    items: [
      { name: "Git", level: 75 }
    ]
  }
];

export default skills;
