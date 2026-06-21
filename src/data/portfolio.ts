import { Project, Skill, Service, Experience, Education, Testimonial, Achievement, BlogPost, NavLink } from "@/types";

export const personalInfo = {
  name: "John Doe",
  title: "Creative Developer & UI Designer",
  greeting: "Hi, I'm",
  valueProposition: "I build modern web experiences with performance, accessibility and beautiful UI.",
  bio: "I'm a passionate developer with over 2 years of experience crafting digital experiences. My journey into tech started with curiosity about how websites work, which evolved into a deep love for frontend development and UI design. I specialize in React ecosystems and have a growing interest in Swift and Java development.",
  resumeUrl: "#",
  email: "hello@johndoe.dev",
  location: "San Francisco, CA",
  social: {
    email: "mailto:hello@johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  techStack: ["React", "Next.js", "TypeScript", "Java", "Swift", "Python"],
};

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#featured", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    category: "web",
    technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
    image: "/images/project-1.jpg",
    githubUrl: "https://github.com/johndoe/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI-powered insights.",
    category: "mobile",
    technologies: ["React Native", "Swift", "Firebase", "TensorFlow"],
    image: "/images/project-2.jpg",
    githubUrl: "https://github.com/johndoe/fitness-tracker",
    liveUrl: "https://fitness-demo.vercel.app",
    featured: true,
  },
  {
    id: "design-system",
    title: "Neumorphic Design System",
    description: "A comprehensive design system and component library built with neumorphic design principles.",
    category: "ui",
    technologies: ["React", "Storybook", "TypeScript", "Tailwind CSS"],
    image: "/images/project-3.jpg",
    githubUrl: "https://github.com/johndoe/design-system",
    liveUrl: "https://design-system-demo.vercel.app",
    featured: true,
  },
  {
    id: "open-source-cli",
    title: "DevTools CLI",
    description: "An open-source command-line tool for scaffolding and managing web projects with templates.",
    category: "opensource",
    technologies: ["Node.js", "TypeScript", "Commander.js"],
    image: "/images/project-4.jpg",
    githubUrl: "https://github.com/johndoe/devtools-cli",
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with 7-day forecasts, interactive maps, and severe weather alerts.",
    category: "web",
    technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
    image: "/images/project-5.jpg",
    githubUrl: "https://github.com/johndoe/weather",
    liveUrl: "https://weather-demo.vercel.app",
  },
  {
    id: "task-manager",
    title: "Task Manager UI",
    description: "A clean, intuitive task management interface with drag-and-drop, kanban boards, and team collaboration.",
    category: "ui",
    technologies: ["Figma", "React", "DnD Kit"],
    image: "/images/project-6.jpg",
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://task-demo.vercel.app",
  },
];

export const featuredProjects = projects.filter(p => p.featured);

export const skills: Skill[] = [
  { name: "HTML", category: "Frontend", proficiency: 95 },
  { name: "CSS", category: "Frontend", proficiency: 92 },
  { name: "JavaScript", category: "Frontend", proficiency: 90 },
  { name: "React", category: "Frontend", proficiency: 88 },
  { name: "Next.js", category: "Frontend", proficiency: 82 },
  { name: "Node.js", category: "Backend", proficiency: 78 },
  { name: "Express", category: "Backend", proficiency: 75 },
  { name: "Java", category: "Languages", proficiency: 72 },
  { name: "Python", category: "Languages", proficiency: 70 },
  { name: "Swift", category: "Languages", proficiency: 65 },
  { name: "Git", category: "Tools", proficiency: 90 },
  { name: "Figma", category: "Tools", proficiency: 85 },
  { name: "VS Code", category: "Tools", proficiency: 95 },
  { name: "PostgreSQL", category: "Backend", proficiency: 70 },
];

export const services: Service[] = [
  {
    icon: "<>",
    title: "Web Development",
    description: "Building responsive, performant web applications using modern frameworks like React and Next.js.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with clean aesthetics and thoughtful interaction patterns.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications using React Native and native Swift.",
  },
  {
    icon: "💡",
    title: "Consulting",
    description: "Providing technical guidance on architecture, performance optimization, and best practices.",
  },
];

export const experiences: Experience[] = [
  {
    position: "Frontend Developer",
    company: "TechCorp Inc.",
    duration: "Jan 2024 - Present",
    responsibilities: [
      "Led the development of a customer-facing dashboard using React and TypeScript",
      "Improved Core Web Vitals by 40% through performance optimization",
      "Mentored 3 junior developers and established code review practices",
    ],
  },
  {
    position: "Junior Developer",
    company: "WebStudio Agency",
    duration: "Jun 2023 - Dec 2023",
    responsibilities: [
      "Built responsive landing pages and web applications for 10+ clients",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Contributed to internal component library used across all projects",
    ],
  },
  {
    position: "UI Design Intern",
    company: "DesignLab",
    duration: "Jan 2023 - May 2023",
    responsibilities: [
      "Created wireframes and prototypes for mobile and web applications",
      "Conducted user research and usability testing sessions",
      "Collaborated with developers to ensure design fidelity in production",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.S. Computer Science",
    institution: "State University",
    year: "2022 - 2026",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Online Academy",
    year: "2022",
  },
  {
    degree: "UI/UX Design Certificate",
    institution: "Design Institute",
    year: "2021",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    designation: "Product Manager, TechCorp",
    review: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and understanding of user experience sets him apart.",
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Michael Rodriguez",
    designation: "CTO, WebStudio Agency",
    review: "Working with John was a pleasure. He quickly grasped complex requirements and turned them into elegant, performant solutions.",
    image: "/images/avatar-2.jpg",
  },
  {
    name: "Emily Watson",
    designation: "Design Lead, DesignLab",
    review: "John has a rare combination of technical skill and design sensibility. His contributions to our projects were invaluable.",
    image: "/images/avatar-3.jpg",
  },
];

export const achievements: Achievement[] = [
  { value: "1000+", label: "Git Commits" },
  { value: "15+", label: "Projects Completed" },
  { value: "3", label: "Programming Languages" },
  { value: "2+", label: "Years Learning" },
];

export const currentlyLearning = [
  "Advanced React Patterns & Server Components",
  "Next.js App Router & Server Actions",
  "SwiftUI & iOS Development",
  "Java Data Structures & Algorithms",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-built-my-portfolio",
    title: "How I Built My Neumorphic Portfolio",
    description: "A deep dive into the design and development process behind this very portfolio, from concept to deployment.",
    date: "June 15, 2026",
    readTime: "8 min read",
    tags: ["Next.js", "Design", "Tailwind CSS"],
    content: `## The Concept\n\nI wanted to create a portfolio that felt different from the typical developer portfolio. Instead of following the popular glassmorphism trend, I decided to embrace neumorphism — a design style that creates soft, extruded UI elements using subtle shadows...`,
  },
  {
    slug: "react-performance-tips",
    title: "5 React Performance Tips That Actually Work",
    description: "Practical performance optimization techniques I've learned from building production React applications.",
    date: "May 28, 2026",
    readTime: "6 min read",
    tags: ["React", "Performance", "JavaScript"],
    content: `## Why Performance Matters\n\nAfter optimizing several production React applications, I've compiled the five most impactful techniques that consistently deliver results...`,
  },
  {
    slug: "my-jee-learning-journey",
    title: "My Journey Learning Java DSA",
    description: "How I'm approaching learning data structures and algorithms in Java, and what I've discovered along the way.",
    date: "May 10, 2026",
    readTime: "5 min read",
    tags: ["Java", "DSA", "Learning"],
    content: `## Starting From Scratch\n\nWhen I decided to dive into Java and DSA, I knew it would be challenging. Here's my approach and what I've learned so far...`,
  },
];

export const projectCaseStudies: Record<string, { problem: string; research: string; design: string; development: string; challenges: string; results: string; lessons: string }> = {};

projects.forEach(p => {
  projectCaseStudies[p.id] = {
    problem: "Users needed a seamless way to accomplish their goals, but existing solutions were either too complex or lacked essential features.",
    research: "We conducted interviews with 20 potential users and analyzed competitor products to identify key pain points and opportunities.",
    design: "The design process started with wireframes, evolved into high-fidelity prototypes in Figma, and went through 3 rounds of usability testing.",
    development: "Built using modern best practices with component-driven architecture, automated testing, and continuous deployment.",
    challenges: "The main technical challenges were around real-time synchronization and maintaining performance at scale.",
    results: "The project launched successfully with a 92% satisfaction rating in user testing and exceeded performance benchmarks.",
    lessons: "We learned the importance of early user testing and the value of building a flexible architecture that can adapt to changing requirements.",
  };
});
