export interface Project {
  id: string;
  title: string;
  description: string;
  category: "web" | "mobile" | "ui" | "opensource";
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Testimonial {
  name: string;
  designation: string;
  review: string;
  image: string;
}

export interface Achievement {
  value: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface NavLink {
  href: string;
  label: string;
}
