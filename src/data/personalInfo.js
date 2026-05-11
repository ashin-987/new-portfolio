import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

export const personalInfo = {
  name: "ASHIN S H",
  role: "Frontend Developer | Embedded Systems Enthusiast",
  username: "developer",
  email: "ashinsh45@gmail.com",
  location: "Remote",
  bio: "Frontend Developer with a strong interest in Embedded Systems. I build responsive web applications and have a solid foundation in Java (OOP & DSA), along with experience in Embedded C and Arduino.",
  
  // Code block for Hero section
  codeBlock: {
    skills: [
      "React",
      "JavaScript",
      "Java",
      "HTML/CSS",
    ]
  },

  // Social Links
  social: {
    github: "https://github.com/ashin-987",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  }
};

// About Section Data
export const aboutData = {
  paragraphs: [
    "I’m a Frontend Developer with a strong interest in Embedded Systems and VLSI. I enjoy building responsive and user-friendly web applications using React, while also working on real-world hardware projects using Embedded C and Arduino.",
    "My experience includes developing projects like an advanced gas leakage detection system and AI-based web solutions. I focus on writing clean, maintainable code and building systems that solve practical problems.",
    "I also have a strong foundation in Java, focusing on object-oriented programming and data structures."
  ],
  
  values: [
    {
      icon: FaCode,
      title: "Real-World Problem Solving",
      description: "I build solutions that solve practical problems, from web applications to embedded systems like gas leakage detection."
    },
    {
      icon: FaLightbulb,
      title: "Frontend + Embedded Mindset",
      description: "I enjoy combining software and hardware, building both user-friendly interfaces and real-world systems."
    },
    {
      icon: FaRocket,
      title: "Strong Fundamentals",
      description: "I focus on writing clean code and improving problem-solving skills through Java, OOP, and data structures."
    },
    {
      icon: FaHeart,
      title: "Continuous Learning",
      description: "Currently exploring AUTOSAR, VLSI, and modern system design to expand my technical depth."
    }
  ],
  
  stats: [
    { value: "2+", label: "Years Learning & Building" },
    { value: "5+", label: "Projects Completed" },
    { value: "Java + React", label: "Core Skillset" },
    { value: "Embedded Systems", label: "Hands-on Experience" }
  ]
};

export default personalInfo;
