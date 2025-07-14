export const mockData = {
  about: {
    name: "Varun Kumar",
    title: "Full Stack Developer, UI/UX Enthusiast, AI Enthusiast, Blockchain Enthusiast, Game Developer, and a lot more",
    bio: "Passionate developer with 3+ years of experience building scalable web applications and beautiful user interfaces. I love turning complex problems into simple, elegant solutions.",
    avatar: "/images/avatar.JPG",
    backgroundPattern: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=800&fit=crop",
    stats: {
      experience: "7+ Years",
      projects: "50+ Projects", 
      technologies: "20+ Technologies",
      languages: "Java, JS, Python, C"
    },
    highlights: [
      "🚀 Built scalable applications serving 100k+ users",
      "🎨 Designed intuitive interfaces with 95% user satisfaction",
      "⚡ Optimized applications reducing load times by 60%",
      "🤝 Led cross-functional teams of 5+ developers"
    ],
    codeSnippet: `const developer = {
  name: "Varun Kumar",
  passion: ["Clean Code", "User Experience", "Innovation"],
  currentFocus: "Building amazing digital experiences",
  availability: "Open for new opportunities"
};`,
    techIcons: [
      { name: "React", icon: "⚛️", color: "#61dafb" },
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "JavaScript", icon: "☕️", color: "#3178c6" },
      { name: "Python", icon: "🐍", color: "#ff9900" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      status: "Production",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      mockup: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/johndeveloper/ecommerce-platform",
      liveUrl: "https://myecommerce.demo.com",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing", 
        "Advanced analytics dashboard",
        "Mobile-responsive design",
        "Admin panel with role management"
      ],
      metrics: {
        users: "10k+",
        uptime: "99.9%",
        performance: "95"
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
      status: "Development",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      mockup: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/johndeveloper/task-manager",
      liveUrl: "https://taskmaster.demo.com",
      features: [
        "Real-time collaboration",
        "Kanban board interface",
        "Time tracking and reporting",
        "Team performance analytics",
        "Integration with popular tools"
      ],
      metrics: {
        users: "5k+",
        uptime: "98.5%",
        performance: "92"
      }
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "An interactive weather analytics dashboard with data visualization, forecasting, and historical data analysis.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      mockup: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/johndeveloper/weather-dashboard",
      liveUrl: "https://weather-analytics.demo.com",
      features: [
        "Interactive data visualizations",
        "7-day weather forecasting",
        "Historical data analysis",
        "Customizable alerts",
        "Multi-location tracking"
      ],
      metrics: {
        users: "15k+",
        uptime: "99.8%",
        performance: "98"
      }
    }
  ],

  skills: {
    frontend: [
      { name: "React", level: 95, icon: "⚛️", color: "#61dafb", years: 3 },
      { name: "Vue.js", level: 70, icon: "💚", color: "#4fc08d", years: 2 },
      { name: "TypeScript", level: 70, icon: "🔷", color: "#3178c6", years: 1 },
      { name: "JavaScript", level: 95, icon: "📄", color: "#f1c40f", years: 7 },
      { name: "Swift", level: 95, icon: "🪽", color: "#2496ed", years: 7 },
      { name: "HTML5", level: 95, icon: "🌐", color: "#e34c26", years: 7 },
      { name: "CSS3", level: 95, icon: "🎨", color: "#1572b6", years: 7 }
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "🟢", color: "#339933", years: 4 },
      { name: "Python", level: 90, icon: "🐍", color: "#3776ab", years: 7 },
      { name: "Java", level: 95, icon: "☕️", color: "#f24e1e", years: 8 },
      { name: "Express.js", level: 95, icon: "🚂", color: "#000000", years: 4 },
      { name: "FastAPI", level: 80, icon: "⚡", color: "#009688", years: 2 },
      { name: "MongoDB", level: 90, icon: "🍃", color: "#47a248", years: 4 },
      { name: "PostgreSQL", level: 80, icon: "🐘", color: "#336791", years: 2 }
    ],
    tools: [
      { name: "Git", level: 95, icon: "🌿", color: "#f05032", years: 7 },
      { name: "Docker", level: 80, icon: "🐳", color: "#2496ed", years: 2 },
      { name: "AWS", level: 80, icon: "☁️", color: "#ff9900", years: 2 },
      { name: "Firebase", level: 80, icon: "🔥", color: "#BA1B1D", years: 3 },
      { name: "Figma", level: 90, icon: "🎨", color: "#f24e1e", years: 4 },
      { name: "Sketch", level: 95, icon: "🎨", color: "#f24e1e", years: 8 },
      { name: "Blender", level: 70, icon: "🎨", color: "#FE5D26", years: 2 },
      { name: "VS Code", level: 100, icon: "💻", color: "#007acc", years: 5 },
      { name: "Three.JS", level: 85, icon: "🎨", color: "#339933", years: 3 },
      { name: "Webpack", level: 80, icon: "📦", color: "#8dd6f9", years: 2 },
      { name: "Unity", level: 75, icon: "🎮", color: "#FFFFFF", years: 2 },
      { name: "Bootstrap", level: 90, icon: "🎨", color: "#B70EFF", years: 7 },
    ]
  },

  experience: [
    {
      id: 1,
      company: "TechFlow Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop",
      description: "Lead developer for multiple high-traffic web applications, mentoring junior developers and implementing best practices for scalable architecture.",
      achievements: [
        "Led a team of 5 developers to deliver 3 major projects ahead of schedule",
        "Improved application performance by 60% through code optimization",
        "Implemented CI/CD pipelines reducing deployment time by 75%",
        "Mentored 8 junior developers, with 6 receiving promotions"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      id: 2,
      company: "Digital Innovations Inc",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Austin, TX",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
      description: "Developed and maintained multiple client projects, focusing on creating responsive web applications and RESTful APIs.",
      achievements: [
        "Delivered 15+ client projects with 98% satisfaction rate",
        "Reduced bug reports by 40% through comprehensive testing",
        "Implemented responsive designs increasing mobile usage by 35%",
        "Optimized database queries improving response times by 50%"
      ],
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker"]
    },
    {
      id: 3,
      company: "StartupLab",
      position: "Frontend Developer",
      period: "2019 - 2020",
      location: "Remote",
      logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop",
      description: "Focused on creating engaging user interfaces for various startup projects, collaborating closely with designers and product managers.",
      achievements: [
        "Built responsive interfaces for 8 different products",
        "Increased user engagement by 45% through UI/UX improvements",
        "Reduced page load times by 55% through optimization",
        "Collaborated with designers to create cohesive design systems"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Figma"]
    }
  ],

  contact: {
    email: "kumarvarun123@hotmail.com",
    phone: "+1 (609) 480-9131",
    location: "New York City, NY",
    timezone: "EST (UTC-4)",
    mapImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    social: {
      github: "https://github.com/iCodedYou/",
      linkedin: "https://www.linkedin.com/in/varun-kumar-77460a23b/",
      instagram: "http://instagram.com/varunxk",
      portfolio: "https://varunxk.com"
    },
    availability: "Open to new opportunities",
    preferredContact: "Email",
    responseTime: "Within 24 hours",
    workingHours: "9 AM - 9 PM EST",
    languages: ["English (Native)", "Hindi (Native)", "Spanish (Conversational)"]
  },

  game: {
    title: "Code Snake",
    description: "A developer-themed twist on the classic Snake game where you eat programming symbols to grow your code snake!",
    instructions: [
      "Use arrow keys to control the snake",
      "Eat code symbols to grow and score points",
      "Speed increases as you score more",
      "Don't hit walls or yourself!"
    ],
    highScore: 0,
    codeItems: [
      { type: 'variable', symbol: 'var', color: '#79c0ff', points: 10 },
      { type: 'function', symbol: 'fn()', color: '#ff7b72', points: 20 },
      { type: 'class', symbol: 'class', color: '#56d364', points: 30 },
      { type: 'object', symbol: '{}', color: '#ffa657', points: 15 },
      { type: 'array', symbol: '[]', color: '#f85149', points: 15 },
      { type: 'string', symbol: '""', color: '#a5d6ff', points: 10 }
    ]
  }
};