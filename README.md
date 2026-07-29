<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <br/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/EmailJS-FF6B6B?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS" />
</div>

<br/>

<h1 align="center">🚀 3D Developer Portfolio</h1>

<p align="center">
  <strong>An immersive, interactive 3D portfolio built with React, Three.js, and Framer Motion</strong>
  <br/>
  Showcasing projects, skills, and professional experience through cutting-edge web technologies.
</p>

<div align="center">
  <a href="#-overview"><strong>Overview</strong></a> •
  <a href="#-features"><strong>Features</strong></a> •
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> •
  <a href="#-getting-started"><strong>Getting Started</strong></a> •
  <a href="#-project-structure"><strong>Project Structure</strong></a> •
  <a href="#-deployment"><strong>Deployment</strong></a>
</div>

<br/>

---

## 📋 Overview

This is a modern, single-page developer portfolio website that combines **3D graphics**, **smooth animations**, and **responsive design** to create an engaging user experience. Built with React and powered by Three.js for 3D rendering, the portfolio presents professional information — skills, experience, projects, and testimonials — in a visually striking yet performant manner.

### ✨ Who It's For

Designed for **Full Stack Developers**, **AI Engineers**, and **Creative Technologists** who want a memorable online presence that goes beyond the traditional template-based portfolio.

---

## 🎯 Features

### 🎨 Visual & Interactive

| Feature | Description |
|---------|-------------|
| **3D Scene Rendering** | Immersive 3D elements built with `@react-three/fiber` and `@react-three/drei` |
| **Smooth Page Animations** | Framer Motion powered transitions and scroll-triggered animations |
| **Parallax Tilt Effects** | Interactive card tilt effects via `react-parallax-tilt` |
| **Responsive Design** | Fully responsive across all device sizes with TailwindCSS |
| **Custom Cursor & Effects** | Polished UI interactions and hover effects |

### 🧩 Sections

- **Hero** — Captivating landing area with 3D background
- **About** — Overview of roles and expertise
- **Experience** — Vertical timeline showcasing professional journey
- **Tech Stack** — Visual grid of technologies and tools
- **Projects** — Featured work with links to live demos and source code
- **Testimonials** — Client and peer feedback
- **Contact** — Functional contact form powered by EmailJS
- **AI Portfolio Chatbot** — Intelligent assistant that answers questions about the portfolio

### 🤖 AI Integration

- **AI Portfolio Chatbot** — A custom-built conversational agent embedded directly in the portfolio that can answer visitor questions about skills, experience, and projects
- Built with modern AI SDKs including **OpenAI Agents SDK**, **Claude Code CLI**, **SpecKit Plus**, and more

---

## 🛠️ Tech Stack

### Core Framework

| Technology | Purpose |
|------------|---------|
| [React 18](https://reactjs.org/) | UI Component Library |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [React Router v6](https://reactrouter.com/) | Client-side Routing |

### 3D & Animation

| Technology | Purpose |
|------------|---------|
| [Three.js](https://threejs.org/) | 3D Graphics Library |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | React Renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | Three.js Utilities & Helpers |
| [Framer Motion](https://www.framer.com/motion/) | Animation Library |
| [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) | Tilt Hover Effects |

### Styling & UI

| Technology | Purpose |
|------------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS Framework |
| [Tabler Icons](https://tabler-icons.io/) | Icon Library |
| [Lucide React](https://lucide.dev/) | Icon Library |
| [clsx](https://www.npmjs.com/package/clsx) | Conditional Class Management |
| [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) | Class Conflict Resolution |

### Data & Integration

| Technology | Purpose |
|------------|---------|
| [EmailJS](https://www.emailjs.com/) | Contact Form Email Service |
| [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component) | Experience Timeline |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16+ (recommended: v18 LTS)
- **npm** v8+ or **yarn** v1.22+

### Installation

```bash
# Clone the repository
git clone https://github.com/GlitchPhantomX/C--project-3D-developer-portfolio.git

# Navigate to the project directory
cd C--project-3D-developer-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server will start at `http://localhost:5173` (or the next available port).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

---

## 📁 Project Structure

```
src/
├── assets/              # Images, icons, and static assets
│   ├── index.js         # Asset index/exports
│   └── tech/            # Technology icons
├── components/          # React components
│   ├── About.jsx
│   ├── AIPortfolioChatbot.jsx  # AI-powered chatbot component
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Feedbacks.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Tech.jsx
│   └── Works.jsx
├── constants/           # Data constants (projects, skills, experience)
│   └── index.js
├── hoc/                 # Higher-order components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions and helpers
├── App.jsx              # Main application component
├── App.css              # Global styles
└── main.jsx             # Application entry point

public/                  # Static public assets
index.html               # HTML entry point
```

### Customization

To personalize this portfolio for your own use:

1. **Update content** — Edit `src/constants/index.js` to modify projects, skills, experience, and testimonials
2. **Replace assets** — Swap out images in `src/assets/`
3. **Styling** — Modify `tailwind.config.cjs` and component-level styles
4. **Contact form** — Configure your EmailJS service ID, template ID, and public key in `src/components/Contact.jsx`
5. **Chatbot** — Customize the AI Portfolio Chatbot in `src/components/AIPortfolioChatbot.jsx`

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` directory.

### Deploy to Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project into [Vercel](https://vercel.com/)
3. Vercel automatically detects Vite; no additional configuration needed
4. Deploy!

### Deploy to Other Platforms

The built `dist/` folder can be deployed to any static hosting service:
- **Netlify** — Drag and drop `dist/` or connect via Git
- **GitHub Pages** — Use `gh-pages` package or GitHub Actions
- **Cloudflare Pages** — Connect repository for automatic deployment

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is **open source** and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) community for 3D rendering capabilities
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for the React + Three.js bridge
- [Framer Motion](https://www.framer.com/motion/) for animation tools
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All open-source libraries that made this project possible

---

<div align="center">
  <p>
    Built with ❤️ using <strong>React</strong>, <strong>Three.js</strong>, and <strong>Framer Motion</strong>
  </p>
  <p>
    <a href="https://github.com/GlitchPhantomX">GitHub</a> •
    <a href="#-3d-developer-portfolio">Back to Top ↑</a>
  </p>
</div>
