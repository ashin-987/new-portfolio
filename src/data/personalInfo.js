import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

export const personalInfo = {
  name: "Your Name",
  role: "Full Stack Developer",
  username: "developer",
  email: "your.email@example.com",
  location: "Remote",
  bio: "I'm a passionate Full Stack Developer who loves crafting elegant solutions to complex problems. I specialize in React, Node.js, and modern web technologies.",
  
  // Code block for Hero section
  codeBlock: {
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS"
    ]
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  }
};

// About Section Data
export const aboutData = {
  paragraphs: [
    "I'm a passionate Full Stack Developer who loves building elegant solutions to complex problems. With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by robust, scalable architectures.",
    "My journey in web development started with curiosity and grew into a deep commitment to craftsmanship. I believe in writing clean, maintainable code and staying current with the latest technologies and best practices."
  ],
  
  values: [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "I write code that's easy to read, maintain, and scale. Quality over quantity, always."
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant, efficient solutions."
    },
    {
      icon: FaRocket,
      title: "Fast Learner",
      description: "Technology evolves rapidly, and I'm always learning new tools and techniques."
    },
    {
      icon: FaHeart,
      title: "User-Focused",
      description: "Every line of code I write is aimed at creating better experiences for users."
    }
  ],
  
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "∞", label: "Coffee Consumed" }
  ]
};

export default personalInfo;
