export const myProjects = [
  {
    id: 1,
    title: "IntelliClass: AI-Powered Smart Classroom",
    description:
      "An intelligent, all-in-one educational platform for SIH 2025, replacing manual processes with a seamless, automated system and AI-driven student personalization.",
    subDescription: [
      "Decoupled architecture with a React/Vite web client, React Native mobile app, and a Node.js/Express RESTful API.",
      "Features instant, secure QR code attendance, AI-personalized dashboards for students, and an integrated AI chatbot.",
      "Provides comprehensive, role-based dashboards for Administrators, Teachers, and Parents to manage the entire academic ecosystem.",
      "Built on the MERN stack (MongoDB, Express, React, Node) with React Native for the cross-platform mobile client.",
    ],
    githubUrl: "https://github.com/Soumabha100/Smart-Classroom",
    liveUrl: "https://intelii-class-client-side.onrender.com",
    image: "/assets/projects/IntelliClass.webp", 
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "React Native",
        path: "/assets/logos/react-native.svg", // Reusing React logo
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/javascript.svg", // Reusing JS logo for Node
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongo.svg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Space Biology Engine (NASA ISAC)",
    description:
      "The frontend for a NASA ISAC knowledge engine, summarizing 600+ biological publications for the NISAC2025 challenge.",
    subDescription: [
      "Developed the complete frontend interface for the NASA ISAC knowledge engine, a tool for space biology research.",
      "Engineered a responsive and accessible user interface using React to query and visualize data from over 600 biological publications.",
      "Focused on creating an intuitive data exploration experience for researchers and scientists.",
      "Built as a contribution to the NASA International Space Apps Challenge (NISAC) 2025.",
    ],
    githubUrl: "https://github.com/Soumabha100/Space-Biology-Engine",
    liveUrl: "#", // No live URL provided
    image: "/assets/projects/blazor-app.jpg", // Placeholder - Add your new image path here
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "X-Clone (Full-Stack MERN)",
    description:
      "A feature-rich, full-stack MERN social media app mirroring the core functionalities of X (Twitter), from a secure RESTful API to a dynamic, responsive frontend.",
    subDescription: [
      "Employs secure JWT Authentication stored in httpOnly cookies, protecting against XSS attacks.",
      "Features a full social ecosystem: Tweet CRUD, liking, commenting, retweeting, and a personalized 'Following' feed.",
      "Uses Redux Toolkit for optimistic UI updates and TanStack Query (React Query) for high-performance data caching.",
      "Integrates Cloudinary for cloud-based image uploads for posts and user profiles.",
      "Decoupled architecture with a React/Vite frontend (Vercel) and a Node.js/Express backend (Render)."
    ],
    githubUrl: "https://github.com/Soumabha100/X-clone",
    liveUrl: "https://x-clone-api-soumabha.onrender.com",
    image: "/assets/projects/X-Clone.webp",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/javascript.svg", // Reusing JS logo for Node
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongo.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Digital World Clock",
    description:
      "A streamlined, interactive tool displaying up to seven global time zones with an intuitive, user-friendly design and optimized, smooth performance.",
    subDescription: [
      "Displays up to seven configurable global time zones simultaneously.",
      "Features a clean, intuitive, and user-friendly interface.",
      "Code is optimized for smooth, lightweight, and efficient performance.",
      "Built with vanilla JavaScript, HTML5, and CSS3, and deployed via GitHub Pages.",
    ],
    githubUrl: "https://github.com/Soumabha100/Digital-World-Clock",
    liveUrl: "https://soumabha100.github.io/Digital-World-Clock/",
    image: "/assets/projects/Digital-World Clock.webp",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Soumabha100",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/soumabha100/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "X",
    href: "https://x.com/soumabha100",
    icon: "/assets/socials/X.svg",
  },
];

export const experiences = [
  {
    title: "Portfolio Development",
    job: "Personal Project",
    year: "2025-Present",
    duration: "September 2025 - Present",
    contents: [
      "Developing a high-performance personal portfolio from scratch using React, Vite, and Tailwind CSS.",
      "Implementing complex 3D animations and interactivity using React Three Fiber and Three.js.",
      "Integrating Framer Motion for a fluid, professional user experience with page transitions and micro-interactions.",
      "Focused on production-level optimization, including code-splitting (React.lazy), asset compression, and security best practices.",
    ],
  },
  {
    title: "Full Stack Web Developer Intern (MERN)",
    job: "ExcelR (Internship)",
    year: "2025",
    duration: "July 2025 - August 2025",
    contents: [
      "Gained hands-on experience building scalable, real-world projects using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Developed full-stack solutions, applying both foundational and advanced concepts of web development.",
      "Enhanced backend and database skills for robust, secure application delivery.",
      "Practiced end-to-end problem-solving, team collaboration, and essential industry practices in a professional environment.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const navLinks = [
  {
    id: "home", // This "id" must match the section's id in your App.jsx
    title: "Home",
  },
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