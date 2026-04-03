export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link: string;
  repo: string;
  featured: boolean;
  images: string[];
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "Web App",
    description:
      "A personal finance app that makes budgeting actually enjoyable — track income, expenses, and spending patterns with clear, real-time visualizations.",
    fullDescription:
      "Expense Tracker is a full-stack financial management app built to help people take genuine control of their money. The dashboard gives users an at-a-glance view of their finances with interactive charts that highlight spending patterns over time. Transactions can be categorized and filtered, monthly budgets can be set with intelligent alerts when limits are near, and recurring expenses are handled automatically. The app supports exporting data as Excel sheets for tax season and displays everything through a clean dark-mode interface. Authentication is handled securely with JWT and bcrypt, while Cloudinary manages profile image uploads. The entire experience is fully responsive — it works just as well on a phone as it does on a desktop.",
    image: "/images/expense_tracker.png",
    technologies: [
      "Vite",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "ExcelJS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "bcrypt",
      "MongoDB",
      "Mongoose",
      "Multer",
      "Cloudinary",
    ],
    link: "https://expense-tracker-omega-wine.vercel.app/login",
    repo: "https://github.com/ByteOps02/Expense_Tracker",
    featured: true,
    images: ["/images/expense_tracker.png"],
  },
  {
    id: "visitor-management",
    title: "Visitor Management System",
    category: "Enterprise",
    description:
      "An enterprise-grade visitor management platform that replaces paper logs with a streamlined digital check-in flow, real-time dashboards, and QR code scanning.",
    fullDescription:
      "Built as a college DBMS project, this Visitor Management System tackles a real problem — the chaos of paper-based visitor logs in corporate environments. Visitors can pre-register online before arrival, and on the day, a quick QR code scan handles the entire check-in process. Hosts receive automatic email notifications when their guest arrives, so no one is left waiting in reception. The security dashboard gives teams live visibility into who is currently on-premises, with support for emergency evacuation lists if needed. The system is powered by Supabase with a PostgreSQL backend and secured using OAuth 2.0, with a clean React + TypeScript frontend built on Vite.",
    image: "/images/visitor_management_system.png",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "OAuth 2.0",
      "Postgres",
      "QR Code",
      "EmailJs",
    ],
    link: "https://visitor-management-system-xi.vercel.app/",
    repo: "https://github.com/ByteOps02/DBMS_Project",
    featured: true,
    images: ["/images/VMS.png"],
  },
  {
    id: "snufi-pharma",
    title: "Snufi Pharma Website",
    category: "Corporate",
    description:
      "A polished corporate website for a pharmaceutical brand, built with smooth animations and a design language that communicates trust and professionalism.",
    fullDescription:
      "Snufi Pharma needed a digital presence that matched the credibility of their brand. The result is a sophisticated, fast-loading website with deliberate micro-interactions and scroll-triggered animations that keep users engaged without feeling gimmicky. The product catalog is cleanly laid out for easy browsing, and the research section surfaces key information about their clinical work in a digestible format. Accessibility was a priority throughout — the site adheres to WCAG 2.1 AA standards. Every detail was tuned for performance and SEO, and the layout adapts gracefully from mobile to large desktop screens. Built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    image: "/images/snufi_pharma_website.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
    ],
    link: "https://snufi-pharma.vercel.app/",
    repo: "https://github.com/ByteOps02/Snufi_Pharma",
    featured: true,
    images: ["/images/snufi_pharma.png"],
  },
  {
    id: "shortify",
    title: "Shortify",
    category: "Web App",
    description:
      "A clean, fast URL shortener that turns long links into custom short URLs — with spam filtering and a developer-friendly API in the pipeline.",
    fullDescription:
      "Shortify started as a simple idea: make URL shortening feel effortless and actually pleasant to use. Users can paste any long URL and get a short link in seconds, optionally with a custom alias that's easy to remember and share. The backend is built with Node.js and Express, uses MongoDB for persistence, and Redis for caching to keep response times fast. Security was considered from the start — the system filters suspected spam and malicious URLs before shortening. Planned features include real-time click analytics (geographic breakdown, device types, referral sources), QR code generation per link, and expiration settings. A public API is also on the roadmap for third-party integrations.",
    image: "/images/shortify.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT Authentication",
    ],
    link: "https://url-shortener-lac-five.vercel.app",
    repo: "https://github.com/ByteOps02/URL_Shortener",
    featured: true,
    images: ["/images/Shortify.png"],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5 / CSS3",
      "JavaScript / TypeScript",
      "React / Next.js",
      "Tailwind CSS",
      "Redux / Zustand",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication (JWT, OAuth)",
      "Drizzle ORM",
      "Supabase",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Problem Solving",
    skills: [
      "C++",
      "Data Structures",
      "Algorithms",
      "STL",
      "Sliding Window",
      "Graph Algorithms",
      "Dynamic Programming",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux Fundamentals",
      "Postman",
      "VS Code",
      "Vercel",
    ],
  },
  {
    title: "Computer Science",
    skills: ["Operating Systems", "Computer Networks", "DBMS", "OOP"],
  },
];

export const codingProfiles = [
  {
    title: "Codeforces",
    link: "https://codeforces.com/profile/krishnarammhd",
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/ram_02_Krishna/",
  },
  {
    title: "CodeChef",
    link: "https://www.codechef.com/users/ram_krishna_02",
  },
  {
    title: "GitHub",
    link: "https://github.com/ram02krishna",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    year: "Present",
    role: "Open to SDE & Web Development Roles",
    company: "Full Stack Development · Software Engineering",
    description:
      "I've spent the past year building real projects across the full stack — from authentication flows and REST APIs to responsive UIs and database design. Now I'm looking for a team where I can do meaningful work, grow alongside smart people, and ship things that actually matter.",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

import { Code2, Palette, Rocket, Smartphone } from "lucide-react";

export const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, accessible UIs with React and TypeScript. I care about component architecture, clean state management, and the kind of polish users notice even when they can't name it.",
    icon: Code2,
  },
  {
    title: "Backend & APIs",
    description:
      "Building reliable REST APIs with Node.js and Express, handling authentication, database design, and the backend logic that keeps everything running smoothly under the hood.",
    icon: Palette,
  },
  {
    title: "Performance & SEO",
    description:
      "Improving load times, Core Web Vitals, and search visibility. Fast pages aren't a luxury — they're the baseline for a product people actually want to use.",
    icon: Rocket,
  },
  {
    title: "Full Stack Projects",
    description:
      "Taking ideas from concept to deployed product — handling the frontend, backend, database, and deployment pipeline as a single cohesive system rather than a collection of separate parts.",
    icon: Smartphone,
  },
];
