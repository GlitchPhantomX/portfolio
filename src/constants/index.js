import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nextjs,
  python,
  fastapi,
  postman,
  openai,
  claude,
  gemini,
  speckit,
  food,
  carrent,
  jobit,
  tripguide,
  threejs,
  blog,
  book,
  todo,
  shopco,
  dashboard
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Frontend Specialist",
    icon: mobile,
  },
  {
    title: "Agentic AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "OpenAI SDK",
    icon: openai,
  },
  {
    name: "Claude Code",
    icon: claude,
  },
  {
    name: "Gemini CLI",
    icon: gemini,
  },
  {
    name: "SpecKit Plus",
    icon: speckit,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer (Projects & Hackathons)",
    company_name: "Self Projects & Hackathons",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - Past",
    points: [
      "Developed full-stack web applications using React.js, Next.js, Node.js, MongoDB, and REST APIs.",
      "Built responsive and scalable UI components with modern frontend best practices.",
      "Integrated CMS features, authentication systems, and dynamic content handling.",
      "Deployed projects on Vercel and GitHub with proper version control.",
    ],
  },
  {
    title: "AI & Agentic AI Developer",
    company_name: "Independent Research & Projects",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2025 - Past",
    points: [
      "Worked with OpenAI Agents SDK, Prompt Engineering, and Context Engineering.",
      "Built AI agents using SpecKit Plus, Claude Code CLI, and Gemini CLI.",
      "Designed intelligent workflows for automation and AI-powered applications.",
      "Currently researching agentic AI and multi-agent system architectures.",
    ],
  },
  {
    title: "Hackathon Developer",
    company_name: "Hackathon Projects",
    icon: creator,
    iconBg: "#383E56",
    date: "2025 - Past",
    points: [
      "Developed Physical AI & Humanoid Robotics themed web applications during hackathons.",
      "Collaborated in team environments to deliver functional AI-based solutions.",
      "Implemented frontend interfaces and AI content integration.",
      "Managed GitHub repositories and deployment pipelines.",
    ],
  },
  {
    title: "DevOps & Cloud Engineering",
    company_name: "Advanced Tech Stack",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "2026 - Present",
    points: [
      "Working with Docker containers and Kubernetes orchestration.",
      "Learning cloud deployment and CI/CD pipelines.",
      "Understanding scalable backend architecture using modern cloud practices.",
      "Integrating DevOps tools with full stack applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog Website with CMS",
    description:
      "A full-featured blog platform with Content Management System built using Next.js and modern web technologies. Features include dynamic content handling, responsive design, and SEO optimization.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "cms",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Areesha-sites/milestone3-blog-website.git",
    liveLink: "https://areesha-milestone3-blog-website.vercel.app/",
  },
  {
    name: "ChowChamp - Food E-commerce",
    description:
      "A modern food e-commerce platform with seamless user experience. Features include product catalog, shopping cart, order management, and responsive design for all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Areesha-sites/3b-milestone-ecommerce-website.git",
    liveLink: "https://3b-milestone-ecommerce-website.vercel.app/",
  },
  {
    name: "Physical AI & Humanoid Robotics Website",
    description:
      "An innovative web application showcasing Physical AI and Humanoid Robotics concepts. Built using Claude Code CLI and SpecKit Plus for intelligent content generation and AI integration.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "claude-code",
        color: "green-text-gradient",
      },
      {
        name: "speckit-plus",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/GlitchPhantomX/Hackathon1-humanoids-robotics-book.git",
    liveLink: "https://hackathon1-humanoids-robotics-book.vercel.app/",
  },
  {
    name: "AI Chat Application",
    description:
      "An intelligent chat application powered by OpenAI SDK with features like context-aware responses, prompt engineering, and real-time conversation handling.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/GlitchPhantomX/Hackathon2-Todo-App.git",
    liveLink: "https://todo-master-app.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React.js, Three.js for 3D elements, and Framer Motion for smooth animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: shopco,
    source_code_link: "https://github.com/Areesha-sites/Marketplace_Hackathon_SHOPCO.git",
    liveLink: "https://marketplace-hackathon-shopco.vercel.app/",
  },
  {
    name: "Task Management Dashboard",
    description:
      "A comprehensive task management system with features like task creation, assignment, progress tracking, and team collaboration. Built with modern full-stack technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Areesha-sites/Hackathon_Admin_Panel.git",
    liveLink: "https://hackathon-admin-panel-azure.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };