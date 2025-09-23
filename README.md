# 🚀 Jaime Gabriels DevOps Portfolio

> Professional portfolio website showcasing DevOps expertise, cloud architecture, and automation skills

[![React](https://img.shields.io/badge/React-18.2+-blue)](https://reactjs.org/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-green)](#responsive-design)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](#quick-start)
[![Mobile Optimized](https://img.shields.io/badge/Mobile-Optimized-orange)](#responsive-design)

## 👨‍💻 About

This portfolio website represents my journey as a **DevOps Engineer**, featuring interactive project showcases, technology expertise, and professional experience. Built with modern web technologies and DevOps best practices, including a dynamic video background and comprehensive responsive design.

## ✨ Key Features

- 🎬 **Interactive Video Background**: Engaging 3D character video storytelling
- 🌙 **Theme Toggle**: Seamless dark/light mode switching with system preference detection
- 📱 **Fully Responsive**: Optimized for all devices and orientations (including landscape mobile)
- 🛠️ **Technology Showcase**: Interactive DevOps tool demonstrations with logos
- 📄 **Resume Integration**: Downloadable PDF resume
- 🎨 **Modern Design**: Clean, professional aesthetics with gradient effects and 3D hover animations
- ⚡ **Performance Optimized**: Clean code, optimized CSS, and fast loading
- 🗂️ **Two-Tier Layout**: Innovative About section with video and content organization
- 📧 **Contact Form**: Interactive contact form with validation

## 🏗️ DevOps Projects Featured

- **Cloud Infrastructure**: AWS/GCP deployment architectures
- **CI/CD Pipelines**: Jenkins, GitHub Actions automation
- **Container Orchestration**: Kubernetes and Docker implementations  
- **Infrastructure as Code**: Terraform and Helm charts
- **Monitoring Solutions**: Comprehensive observability setups
- **Election Management System**: Scalable voting platform architecture
- **Streaming Platform**: Real-time data processing infrastructure

## 📁 Project Structure

```
JAIME-GABRIELS-PORTFOLIO-WEBSITE/
├── public/
│   ├── images/
│   │   ├── logos/              # Technology stack logos (AWS, Docker, K8s, etc.)
│   │   ├── projects/           # Project architecture diagrams
│   │   └── *.png              # Profile and background images
│   ├── merged-background-video.mp4  # Interactive 3D character video
│   ├── Jaime-Gabriels-DevOps-Resume.pdf # Professional resume
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About/             # Two-tier layout with video and content
│   │   ├── Header/            # Hero section with title and subtitle
│   │   ├── Navigation/        # Fixed navigation with smooth scrolling
│   │   ├── Projects/          # Project showcase with links
│   │   ├── Technologies/      # Tech stack grid display
│   │   ├── Resume/            # Resume download section
│   │   ├── Contact/           # Contact form with validation
│   │   ├── Footer/            # Site footer
│   │   └── ThemeToggle/       # Dark/light theme switcher
│   ├── pages/
│   │   └── App.jsx            # Main application component
│   └── styles/
│       ├── globals.css        # Global styles and responsive breakpoints
│       └── variables.css      # CSS custom properties and theme variables
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm
- Modern web browser with video support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GABRIELS562/JAIME-GABRIELS-PORTFOLIO-WEBSITE.git
   cd JAIME-GABRIELS-PORTFOLIO-WEBSITE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts development server on localhost:3000 |
| `npm run dev` | Alias for start command |
| `npm run build` | Creates optimized production build |
| `npm test` | Runs test suite |

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag and drop 'build' folder to Netlify dashboard
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 🛠️ Technology Stack

### Frontend
- **React 18.2+** - Modern React with hooks and functional components
- **CSS Modules** - Component-scoped styling with responsive design
- **JavaScript ES6+** - Modern JavaScript features and async/await
- **HTML5 Video** - Interactive background video with autoplay

### DevOps & Tools Showcased
- **AWS & GCP** - Cloud platforms
- **Docker & Kubernetes** - Containerization and orchestration
- **Terraform** - Infrastructure as Code
- **Jenkins & GitHub Actions** - CI/CD pipelines
- **Helm** - Kubernetes package management
- **ArgoCD** - GitOps continuous delivery
- **Python** - Automation and scripting
- **WordPress** - Content management systems

### Development
- **Git** - Version control
- **npm** - Package management
- **React Scripts** - Build toolchain
- **CSS Grid & Flexbox** - Layout systems

## 📱 Responsive Design

Comprehensive responsive design with multiple breakpoints:

| Device | Breakpoint | Features |
|--------|------------|----------|
| **Desktop** | 1024px+ | Full side-by-side layout, hover effects, 65vh video |
| **Tablet** | 768px-1024px | Responsive layout, touch-optimized, 55vh video |
| **Mobile** | 480px-768px | Stacked layout, thumb navigation, 40vh video |
| **Small Mobile** | <480px | Compact UI, essential content, 35vh video |
| **Landscape Mobile** | <500px height | Optimized for landscape orientation |

### Mobile Optimizations
- Touch-friendly button sizes (44px minimum)
- Optimized video heights for different screen sizes
- Stacked layout on small screens
- Landscape orientation support
- Smooth scrolling navigation
- Responsive typography scaling

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary-dark: #213555;
  --primary-medium: #3E5879;
  
  /* Accent Colors */
  --accent-warm: #D8C4B6;
  --accent-cream: #F5EFE7;
  --accent-gold: #C9A96E;
  --accent-blue: #3b82f6;
  
  /* Background */
  --background-primary: rgba(33, 53, 85, 0.95);
  --background-card: rgba(62, 88, 121, 0.1);
  
  /* Text */
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
}
```

### Typography
- **Primary Font**: Inter, "DM Sans", "Segoe UI"
- **Responsive Font Sizes**: 18px → 15px across breakpoints
- **Font Weights**: 400 (normal), 600 (semi-bold), 700 (bold)

### Layout Principles
- **Two-Tier Layout**: Video + summary on top, detailed content below
- **CSS Grid & Flexbox**: Modern layout techniques
- **Mobile-First**: Progressive enhancement approach
- **Consistent Spacing**: 1rem, 1.5rem, 2rem rhythm

## 🔧 Performance Features

- **Optimized Assets**: Compressed images and efficient video encoding
- **CSS Modules**: Component-scoped styles prevent conflicts
- **Responsive Images**: Proper image sizing and object-fit
- **Clean Code**: No console.log statements or unused code
- **Production Build**: Optimized bundle sizes (49.54 kB JS, 5.7 kB CSS)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Commit changes (`git commit -m 'Add enhancement'`)
4. Push to branch (`git push origin feature/enhancement`)
5. Open a Pull Request

## 📞 Connect With Me

- **LinkedIn**: [Jaime Gabriels](https://linkedin.com/in/jaime-gabriels-643132386)
- **GitHub**: [@GABRIELS562](https://github.com/GABRIELS562)
- **Email**: Available in resume
- **Portfolio**: Live demo available at deployment URL

## 🎯 Future Enhancements

- [ ] Blog integration for DevOps articles
- [ ] Project case studies with detailed architectures
- [ ] Interactive DevOps tool demos
- [ ] Performance monitoring dashboard
- [ ] Continuous deployment pipeline
- [ ] Internationalization support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repository if you found it helpful!**

*Built with passion for DevOps and modern web development practices*