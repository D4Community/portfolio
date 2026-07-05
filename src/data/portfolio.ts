import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ayush Kumar Tiwari",
    title: "Passionate Software Engineer",
    subtitle:
      "Software Engineer | Bridging Technical Innovation with Strategic Execution",
    bio: "A software engineer who enjoys building full-stack products from the ground up, React, Angular, Next.js, and Node.js are my usual toolkit. I also organize D4Community and ML Chandigarh to help developers connect and learn from each other. These days I'm spending my free time exploring Go, system design, and GenAI. At the core, I just love shipping things that matter and helping other engineers grow.",
    avatar: "/about/ayush.png",
    location: "Chandigarh, India",
    email: "ayushtiwari.connect@gmail.com",
    phone: "+919693628301",
    resumeUrl: "https://drive.google.com/file/d/1gm5kM_RD4QP2hrfhnx-YgyL08IC2KDHT/view?usp=sharing",
    website: "https://itsayu.vercel.app",
    languages: [
      // { name: 'Indonesian', level: 'Native' },
      { name: "English", level: "Limited Working" },
      // { name: 'French', level: 'Elementary' },
    ],
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/itsayu",
        icon: "github",
        username: "itsayu",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/itsayu",
        icon: "linkedin",
        username: "itsayu",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/its_a.k.t",
        icon: "instagram",
        username: "its_a.k.t",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/Its_AKT_",
        icon: "twitter",
        username: "Its_AKT_",
      },
      {
        platform: "Discord",
        url: "https://discord.com/users/itsayu",
        icon: "discord",
        username: "itsayu.",
      },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/user/31gsiihpgmuut5g6xlis2gtysmxe",
        icon: "spotify",
        username: "Ayush",
      },
    ],
  },
  projects: [
    {
      id: "project-1",
      slug: "students-api",
      title: "Students API",
      description:
        "A RESTful API for managing student records and academic data.",
      longDescription:
        "Students API is a production-ready backend service built with Go for managing student records, enrollment data, and academic information. It demonstrates clean architecture, proper separation of concerns, and efficient data handling — perfect for learning Go backend development and building scalable systems.",

      techStack: ["Go", "REST APIs", "Database Design", "Backend Architecture"],
      tools: ["VS Code", "Git", "Go Modules"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/students-api",
      demoUrl: "#",

      startDate: "2026-01-15",
      role: "Go Developer",
      customTimeline: "2026",
      team: "Personal Project",

      highlights: [
        "Go Backend Development",
        "Clean Architecture",
        "API Design",
        "Database Integration",
      ],
      category: "Backend & Systems",

      features: [
        {
          title: "Core Features",
          items: [
            "**Student Management**: Create, read, update, and delete student records with proper validation.",
            "**Data Persistence**: Robust storage layer with efficient database operations.",
            "**Clean Code**: Well-structured Go project following best practices and conventions.",
          ],
        },
        {
          title: "Architecture & Design",
          items: [
            "**Modular Structure**: Separation of concerns with cmd, internal, config, and storage layers.",
            "**Configuration Management**: Flexible config system for different environments.",
            "**Production-Ready**: Proper error handling, logging, and API design patterns.",
          ],
        },
        {
          title: "Learning Focus",
          items: [
            "**Go Best Practices**: Idiomatic Go code with proper package organization.",
            "**Backend Fundamentals**: REST API design, routing, and request handling.",
            "**System Design**: Building scalable backend services from scratch.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone the Repository",
          code: "git clone https://github.com/Itsayu/students-api.git\ncd students-api",
          type: "code",
        },
        {
          title: "Install Dependencies",
          code: "go mod download\ngo mod tidy",
          type: "code",
        },
        {
          title: "Configure Environment",
          code: "cp config/.env.example config/.env\n# Update configuration as needed",
          type: "code",
        },
        {
          title: "Run the API",
          code: "go run cmd/students-api/main.go\n# API starts on localhost:8080",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Learning Go project structure and conventions",
          solution:
            "Organized code into logical layers: cmd (entry point), internal (business logic), config (configuration), and storage (data access).",
        },
        {
          problem: "Building scalable API endpoints",
          solution:
            "Implemented proper routing, request/response handling, and error management following Go best practices.",
        },
        {
          problem: "Data persistence and validation",
          solution:
            "Created efficient storage layer with proper data validation and error handling for consistency.",
        },
      ],
      images: ["/project/studentsapi1.png", "/project/studentsapi2.png"],
    },
    {
      id: "project-2",
      slug: "url-shortner",
      title: "URL Shortener",
      description: "A high-performance URL shortening service built with Go.",
      longDescription:
        "URL Shortener is a lightweight, fast, and efficient service for converting long URLs into short, shareable links. Built entirely in Go, it demonstrates clean API design, efficient data handling, and practical backend development patterns — perfect for learning URL compression algorithms and building scalable web services.",

      techStack: ["Go", "REST APIs", "Hash Generation", "Redirects"],
      tools: ["VS Code", "Git", "Go Modules"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/url-shortner",
      demoUrl: "#",

      startDate: "2026-02-01",
      role: "Go Developer",
      customTimeline: "February 2026",
      team: "Personal Project",

      highlights: [
        "URL Compression",
        "Fast Redirects",
        "Collision-Free Hashing",
        "Clean API",
      ],
      category: "Backend & Systems",

      features: [
        {
          title: "Core Features",
          items: [
            "**URL Shortening**: Convert long URLs into short, unique identifiers with just an API call.",
            "**Fast Redirects**: Efficient redirect service that handles high-volume traffic.",
            "**Collision Prevention**: Smart hashing algorithm ensures no duplicate short URLs.",
            "**RESTful API**: Simple, clean endpoints for creating and retrieving short URLs.",
          ],
        },
        {
          title: "Technical Implementation",
          items: [
            "**Hash-Based Generation**: Efficient algorithm for generating short URL identifiers.",
            "**Data Storage**: Persistent mapping between short and long URLs.",
            "**Optimal Performance**: Built for speed with minimal overhead.",
            "**Production-Ready**: Error handling and request validation throughout.",
          ],
        },
        {
          title: "Learning Outcomes",
          items: [
            "**URL Encoding**: Understanding URL structures and encoding schemes.",
            "**Hashing Algorithms**: Implementing collision-free hash functions.",
            "**API Design**: Building simple yet powerful RESTful endpoints.",
            "**Backend Patterns**: Real-world backend development best practices.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone the Repository",
          code: "git clone https://github.com/Itsayu/url-shortner.git\ncd url-shortner",
          type: "code",
        },
        {
          title: "Install Dependencies",
          code: "go mod download\ngo mod tidy",
          type: "code",
        },
        {
          title: "Run the Service",
          code: "go run main.go\n# Service starts on localhost:8080",
          type: "code",
        },
        {
          title: "Create a Short URL",
          code: 'curl -X POST http://localhost:8080/api/shorten \\\n  -H "Content-Type: application/json" \\\n  -d \'{"url":"https://example.com/very/long/url"}\'\n\n# Response: {"short_url": "http://localhost:8080/abc123"}',
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Generating unique short identifiers without collisions",
          solution:
            "Implemented a base62 encoding system combined with sequential IDs or custom hashing to ensure every long URL gets a unique short code.",
        },
        {
          problem: "Handling high-volume redirect requests efficiently",
          solution:
            "Used fast in-memory lookups and optimized database queries to serve redirects in milliseconds without bottlenecks.",
        },
        {
          problem: "Keeping the implementation minimal yet complete",
          solution:
            "Focused on core functionality with clean Go code — no unnecessary frameworks or dependencies, just pure backend logic.",
        },
        {
          problem: "URL validation and error handling",
          solution:
            "Added comprehensive validation for incoming URLs and proper HTTP error responses for edge cases.",
        },
      ],
      images: ["/project/urlshortener1.png", "/project/urlshortener2.png"],
    },
    {
      id: "project-3",
      slug: "creative-portfolio-website",
      title: "Creative Portfolio Website",
      description:
        "Modern, animated portfolio with 3D elements and smooth animations.",
      longDescription:
        "A production-grade creative portfolio engineered to demonstrate high-level proficiency in Artificial Intelligence, Blockchain, and Modern Web Architectures. This platform transcends traditional static websites by offering a high-performance interactive experience powered by advanced WebGL shaders, physics-based simulations, and real-time data integration. It serves as a living laboratory for experimenting with cutting-edge frontend technologies while maintaing strict accessibility and SEO standards.",

      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "Framer Motion",
        "GSAP",
      ],
      tools: ["VS Code", "Figma", "GitHub"],
      status: "completed",
      demoUrl: "https://itsayu.vercel.app",
      repoUrl: "https://github.com/Itsayu/New-Portfolio",
      startDate: "2025-01-20",
      highlights: ["3D animations", "Scroll effects", "Bilingual EN/ID"], // Keep for backward compatibility if needed, or rely on features
      category: "Creative Tech",
      features: [
        {
          title: "Immersive 3D Experience",
          items: [
            "**Interactive 3D Lanyard**: A physics-simulated 3D ID Card in the hero section that reacts to mouse movements.",
            "**Hyperspeed Backgrounds**: Custom shader-based warp effects for a futuristic Web3 aesthetic.",
            "**Particle Systems**: Dynamic background particles that enhance depth and interactivity.",
          ],
        },
        {
          title: "Professional Insights",
          items: [
            "**Real-time Coding Stats**: Integrated WakaTime cards showing your top languages and coding activity.",
            "**Dynamic GitHub Metrics**: Live cards displaying repository stats and contributions.",
            "**Interactive Timeline**: A visual journey of your career at CPS Lab, HUMIC, and more.",
          ],
        },
        {
          title: "Performance & UX",
          items: [
            "**Bilingual (EN/ID)**: Complete internationalization support.",
            "**Smooth Scroll**: Lenis-based smooth scrolling for a premium feel.",
            '**Theme Engine**: System-preferred dark/light mode with a custom "Click Spark" effect.',
            "**Responsive Architecture**: Pixel-perfect layouts for mobile, tablet, and desktop.",
          ],
        },
        {
          title: "Scalable Ecosystem",
          items: [
            "**Modular Components**: Atomic design architecture for maximum reusability.",
            "**Type Safety**: Full TypeScript implementation for robust code reliability.",
            "**SEO Optimized**: Semantic HTML and meta tags for maximum visibility.",
          ],
        },
      ],
      installation: [
        {
          title: "Clone the Repository",
          code: "git clone https://github.com/Itsayu/New-Portfolio.git\ncd New-Portfolio",
          type: "code",
        },
        {
          title: "Install Dependencies",
          code: "npm install",
          type: "code",
        },
        {
          title: "Environment Variables",
          type: "text",
          code: `Create a .env.local file in the root directory:

NEXT_PUBLIC_GITHUB_USERNAME=itsayu
WAKATIME_API_KEY=your_wakatime_key`,
        },
        {
          title: "Launch Development Server",
          code: "npm run dev",
          type: "code",
        },
      ],
      challengesAndSolutions: [
        {
          problem: "Performance Bottlenecks with Heavy 3D Assets",
          solution:
            "Engineered a custom rendering pipeline using Instanced Meshes and aggressive DRaco compression, reducing initial load time by 60% while maintaining a consistent 60 FPS on mobile devices through dynamic quality scaling.",
        },
        {
          problem: "Seamless State Synchronization",
          solution:
            "Implemented a robust global state management system using Zustand to orchestrate complex interactions between the React UI layer and the 3D Canvas, ensuring perfectly synchronized animations without prop-drilling overhead.",
        },
        {
          problem: "Cross-Browser Shader Compatibility",
          solution:
            "Developed fallback materials and uniform-based capability detection to ensure the custom GLSL shaders render correctly across inconsistent WebGL implementations on Safari and older Android browsers.",
        },
      ],
      images: [
        "/project/creativeportfoliowebsite1.png",
        "/project/creativeportfoliowebsite2.png",
        "/project/creativeportfoliowebsite3.png",
        "/project/creativeportfoliowebsite4.png",
      ],
    },
    {
      id: "project-4",
      slug: "gift-shop",
      title: "Gift Shop",
      description:
        "A fully functional e-commerce platform for browsing and purchasing gifts online.",
      longDescription:
        "Gift Shop is a modern e-commerce web application built with vanilla HTML, CSS, and JavaScript. It provides a complete shopping experience including product browsing, detailed product views, shopping cart management, user authentication, order tracking, and checkout functionality. The platform demonstrates responsive design, smooth user interactions, and clean frontend architecture — perfect for building scalable web storefronts.",

      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
      tools: ["VS Code", "GitHub Pages", "Git", "Chrome DevTools"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/GIFT-SHOP",
      demoUrl: "https://itsayu.github.io/GIFT-SHOP/",

      startDate: "2025-06-01",
      role: "Frontend Developer",
      customTimeline: "June 2025",
      team: "Personal Project",

      highlights: [
        "Complete E-commerce Flow",
        "Responsive Design",
        "10+ Pages",
        "Order Management",
      ],
      category: "E-commerce & Frontend",

      features: [
        {
          title: "Complete Shopping Experience",
          items: [
            "**Product Catalog**: Browse through curated gift collections with detailed product information and high-quality images.",
            "**Product Details**: Comprehensive product pages with descriptions, pricing, and customer reviews.",
            "**Shopping Cart**: Add/remove items, update quantities, and see real-time cart totals.",
            "**Search & Filter**: Find products easily with filtering by category, price, and ratings.",
          ],
        },
        {
          title: "User Features & Account Management",
          items: [
            "**User Authentication**: Secure login and signup system for customer accounts.",
            "**Order History**: Track all past orders with detailed information and status updates.",
            "**Order Details**: View full order summaries, tracking, and receipt information.",
            "**Profile Management**: Update personal information and preferences.",
          ],
        },
        {
          title: "Checkout & Payments",
          items: [
            "**Smooth Checkout Flow**: Multi-step checkout with address and payment information collection.",
            "**Order Confirmation**: Thank you page with order summary and confirmation details.",
            "**Error Handling**: 404 page and comprehensive error handling throughout the app.",
            "**Form Validation**: Client-side validation for all user inputs and forms.",
          ],
        },
        {
          title: "Design & Performance",
          items: [
            "**Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices.",
            "**Modern UI/UX**: Clean interface with smooth transitions and interactive elements.",
            "**Fast Loading**: Lightweight assets and optimized images for quick page loads.",
            "**Accessible**: Semantic HTML and ARIA labels for better accessibility.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone the Repository",
          code: "git clone https://github.com/Itsayu/GIFT-SHOP.git\ncd GIFT-SHOP",
          type: "code",
        },
        {
          title: "View Live (GitHub Pages)",
          code: "Open in browser: https://itsayu.github.io/GIFT-SHOP/",
          type: "code",
        },
        {
          title: "Run Locally",
          code: "python -m http.server 8000\n# or\nnpx http-server\n\n# Visit: http://localhost:8000",
          type: "code",
        },
        {
          title: "Project Structure",
          code: "GIFT-SHOP/\n├── index.html          # Home page\n├── login.html          # User login\n├── checkout.html       # Checkout process\n├── shoppingCart.html   # Cart management\n├── productDetails.html # Product view\n├── collection.html     # Product listing\n├── myOrder.html        # Order history\n├── assets/             # Images & resources\n└── error404.html       # Error page",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Managing complex state without a framework (cart, user data, orders)",
          solution:
            "Implemented a robust state management system using localStorage and vanilla JavaScript, with event-driven updates across pages.",
        },
        {
          problem:
            "Ensuring responsive design across all screen sizes and devices",
          solution:
            "Built mobile-first CSS with flexbox and CSS Grid, media queries for tablet and desktop optimization, and touch-friendly interactions.",
        },
        {
          problem: "Handling form validation and checkout flow consistency",
          solution:
            "Created reusable validation functions, form state management, and error display patterns for seamless user experience.",
        },
        {
          problem:
            "Maintaining code organization without modules in vanilla JavaScript",
          solution:
            "Organized code into logical sections with clear comments, consistent naming conventions, and separation of concerns across multiple pages.",
        },
      ],
      images: ["/project/giftshop1.png", "/project/giftshop2.png"],
    },
    {
      id: "project-5",
      slug: "d4-community-website",
      title: "D4 Community",
      description:
        "The official digital platform for India's leading developer community hub.",
      longDescription:
        "D4 Community Official Website is a world-class, high-performance web application serving as the digital gateway for India's premier developer community. Built with cutting-edge technologies including Next.js 16, React 19, and TypeScript, the platform combines immersive 3D visuals with a robust headless CMS (Sanity v5). It features interactive 3D scenes, real-time content management, smooth animations, and a seamless community experience uniting developers, designers, and tech leaders. The project showcases advanced frontend engineering, scalable architecture, and modern web development best practices.",

      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Three.js",
        "Sanity CMS",
        "Framer Motion",
        "shadcn/ui",
        "Zod Validation",
      ],
      tools: ["VS Code", "GitHub", "Sanity Studio", "Vercel", "npm"],

      status: "ongoing",
      repoUrl: "https://github.com/D4Community/d4-website-revamped",
      demoUrl: "https://d4community.com",

      startDate: "2024-06-01",
      role: "Full Stack Developer",
      customTimeline: "June 2024 – Present",
      team: "5+ Developers",

      highlights: [
        "3D Interactive Visuals",
        "Headless CMS Integration",
        "160+ Commits",
        "Type-Safe Architecture",
      ],
      category: "Community Platform",

      features: [
        {
          title: "🎨 Immersive Visual Experience",
          items: [
            "**3D Interactive Elements**: Powered by Three.js and @react-three/fiber for stunning 3D scenes, interactive globe visualizations, and responsive 3D backgrounds.",
            "**Smooth Animations**: Orchestrated with Framer Motion for fluid UI transitions and momentum scrolling via Lenis.",
            "**Modern Styling**: Built with Tailwind CSS v4 and class-variance-authority (CVA) for atomic, scalable design patterns.",
          ],
        },
        {
          title: "⚙️ Headless CMS & Dynamic Content",
          items: [
            "**Sanity v5 Integration**: Real-time content management for events, blogs, team members, and community updates without redeployment.",
            "**Type-Safe Queries**: Strongly typed Sanity fetch operations ensuring data consistency across the platform.",
            "**Live Preview**: Content creators can see changes in real-time via Sanity Studio.",
          ],
        },
        {
          title: "🔧 Advanced Frontend Engineering",
          items: [
            "**Form Management**: React Hook Form with Zod schema validation for type-safe, accessible forms throughout the platform.",
            "**Custom Hooks**: React 19 optimized hooks including marquee effects and scroll-based logic.",
            "**Component Architecture**: Atomic design pattern with UI primitives, canvas components, and feature-specific sections.",
          ],
        },
        {
          title: "🚀 Backend & Integrations",
          items: [
            "**Server Actions**: Next.js server-side functions for secure email handling and data processing.",
            "**Email Notifications**: Nodemailer integration for transactional emails and community communications.",
            "**Document Generation**: PDF rendering with @react-pdf/renderer for certificates and event materials.",
            "**Google APIs**: Calendar and Drive integration for event management and resource sharing.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone the Repository",
          code: "git clone https://github.com/D4Community/d4-website-revamped.git\ncd d4-website-revamped",
          type: "code",
        },
        {
          title: "Install Dependencies",
          code: "npm install\n# or\nbun install",
          type: "code",
        },
        {
          title: "Environment Setup",
          code: "cp .env.example .env.local\n\n# Fill in:\nNEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id\nNEXT_PUBLIC_SANITY_DATASET=production\nEMAIL_SERVER_USER=your_email\nEMAIL_SERVER_PASSWORD=your_password",
          type: "code",
        },
        {
          title: "Run Development Server",
          code: "npm run dev\n# Visit http://localhost:3000\n\n# Sanity Studio available at http://localhost:3000/studio",
          type: "code",
        },
        {
          title: "Build & Deploy",
          code: "npm run build\nnpm run lint\n# Deploy to Vercel automatically on push to main",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem:
            "Balancing 3D visuals with performance on diverse devices and network conditions",
          solution:
            "Implemented progressive enhancement using Three.js with fallbacks, lazy loading for 3D assets, and responsive viewport detection to scale visual complexity based on device capabilities.",
        },
        {
          problem: "Managing dynamic content at scale without redeployment",
          solution:
            "Integrated Sanity v5 headless CMS with real-time synchronization, enabling content teams to update events, blogs, and team information instantly without rebuilding the site.",
        },
        {
          problem:
            "Ensuring type safety across frontend and CMS content structures",
          solution:
            "Implemented TypeScript interfaces for all Sanity schemas and React Hook Form with Zod validation, providing compile-time safety and runtime validation throughout the application.",
        },
        {
          problem:
            "Coordinating complex state and animations across interactive elements",
          solution:
            "Leveraged React 19 hooks, custom measurement hooks, and Framer Motion's orchestration to manage component state and animation timing elegantly across the entire platform.",
        },
      ],
      images: [
        "/project/d4community1.png",
        "/project/d4community2.png",
        "/project/d4community3.png",
        "/project/d4community4.png",
        "/project/d4community5.png",
        "/project/d4community6.png",
        "/project/d4community7.png",
        "/project/d4community8.png",
        "/project/d4community9.png",
      ],
    },
    {
      id: "project-6",
      slug: "gdg-chandigarh-website",
      title: "GDG Chandigarh",
      description:
        "Official community website for Google Developer Group (GDG) Chandigarh, hosting event info, organizer profiles, and DevFest Chandigarh.",
      longDescription:
        "The official website for GDG Chandigarh — a community of developers in and around Chandigarh focused on Google's developer technologies (Android, Firebase, Cloud, and more). Built as an Angular single-page application and deployed via Firebase Hosting, the site serves as the central hub for community events, including the flagship annual DevFest Chandigarh conference, organizer profiles, and event registration links. Note: GDG Chandigarh is a distinct, independent community — not affiliated with D4 Community or ML Chandigarh.",

      techStack: ["Angular", "TypeScript", "Firebase", "HTML", "CSS"],
      tools: ["VS Code", "Angular CLI", "Firebase CLI"],
      status: "ongoing", // CONFIRM: completed / ongoing?
      repoUrl: "https://github.com/itsayu/gdg-chandigarh",
      demoUrl: "https://gdgchandigarh.in/gdg-chandigarh/home",
      startDate: "", // CONFIRM: your start date on this project
      role: "", // CONFIRM: e.g. "Contributor" / "Frontend Developer"
      customTimeline: "", // CONFIRM: e.g. "Sep 2025 - Present"

      highlights: [
        "Community Event Hub",
        "DevFest Chandigarh Showcase",
        "Firebase-Powered Hosting",
      ],
      category: "Web Development",
      features: [
        {
          title: "Core Capabilities",
          items: [
            "**Event Hub**: Central listing for GDG Chandigarh events including DevFest, Cloud Community Days, and I/O Extended.",
            "**Organizer Profiles**: Showcases community organizers and their roles.",
            "**External Registration Links**: Routes attendees to event registration pages.",
          ],
        },
        {
          title: "Technical Architecture",
          items: [
            "**Frontend**: Angular 16 single-page application with component-based architecture.",
            "**Hosting**: Deployed via **Firebase Hosting** for fast, reliable delivery.",
            "**Styling**: Custom CSS with responsive layouts for desktop and mobile.",
          ],
        },
      ],
      installation: [
        {
          title: "Clone and Setup",
          code: "git clone https://github.com/itsayu/gdg-chandigarh.git\ncd gdg-chandigarh\nnpm install",
          type: "code",
        },
        {
          title: "Run Dev Server",
          code: "ng serve",
          type: "code",
        },
        {
          title: "Access Application",
          code: "Open http://localhost:4200",
          type: "text",
        },
      ],
      challengesAndSolutions: [
        {
          problem: "", // CONFIRM: a real challenge you faced
          solution: "", // CONFIRM
        },
      ],
      images: ["/project/gdgchandigarh1.png"],
    },
    {
      id: "project-7",
      slug: "ai-article-summarizer",
      title: "AI Article Summarizer",
      description:
        "AI-powered tool that extracts and summarizes articles from any URL.",
      longDescription:
        "A web app that takes any article URL, extracts the full text, and generates a concise GPT-based summary. Built with React and Redux Toolkit (RTK Query) for clean async state management, with a Tailwind-styled UI and persistent search history so users can revisit past summaries.",

      techStack: ["React 18", "Redux Toolkit", "Tailwind CSS", "Vite"],
      tools: ["VS Code", "RapidAPI", "Netlify"],
      status: "completed",
      repoUrl: "https://github.com/Itsayu/AI-Article-Extractor-And-Summarizer",
      demoUrl: "https://al-summerizer-articles.netlify.app",
      startDate: "2023-01-01", // CONFIRM: exact month
      role: "Frontend Developer",
      customTimeline: "2023",

      highlights: [
        "RTK Query Integration",
        "GPT-Based Summarization",
        "Search History",
      ],
      category: "AI & Machine Learning",
      features: [
        {
          title: "Core Capabilities",
          items: [
            "**URL-Based Extraction**: Paste any article link to pull the full text content.",
            "**AI Summarization**: Uses a GPT-powered API to condense articles into key points.",
            "**Search History**: Stores previously summarized articles in app state for quick revisits.",
          ],
        },
        {
          title: "Technical Architecture",
          items: [
            "**State Management**: **Redux Toolkit** with RTK Query for async API calls and caching.",
            "**Styling**: Utility-first design with **Tailwind CSS** for a responsive layout.",
            "**Build Tooling**: Bundled with **Vite** for fast dev and production builds.",
          ],
        },
      ],
      installation: [
        {
          title: "Clone and Setup",
          code: "git clone https://github.com/Itsayu/AI-Article-Extractor-And-Summarizer.git\ncd AI-Article-Extractor-And-Summarizer\nnpm install",
          type: "code",
        },
        {
          title: "Configure API Key",
          code: "Add your RapidAPI key to a .env file",
          type: "text",
        },
        {
          title: "Run Dev Server",
          code: "npm run dev",
          type: "code",
        },
      ],
      challengesAndSolutions: [
        {
          problem: "Managing Async API State",
          solution:
            "Used RTK Query to handle loading, error, and caching states for the summarization API without writing manual reducers.",
        },
      ],
      images: ["/project/aiarticlesummarizer1.png"],
    },
    {
      id: "project-8",
      slug: "jupiter-visa-advisors",
      title: "Jupiter Visa Advisors",
      description:
        "Multi-page business website for an immigration and visa consultancy.",
      longDescription:
        "A static, multi-page marketing website for a visa consultancy agency, featuring dedicated landing pages for each destination country (USA, UK, Canada, Australia, Germany, New Zealand, Singapore, Armenia), along with services, team, testimonials, portfolio, blog, careers, and contact pages. Built with plain HTML/CSS/JS and a PHP-based contact form handler.",

      techStack: ["HTML5", "CSS3", "JavaScript", "PHP"],
      tools: ["VS Code", "Vercel"],
      status: "completed",
      repoUrl: "https://github.com/Itsayu/Jupiter-Visa-Advisors",
      demoUrl: "https://jupitervisaadvisors.vercel.app",
      startDate: "2024-01-01", // CONFIRM: exact month
      role: "Web Developer",
      customTimeline: "2024",

      highlights: [
        "Multi-Country Visa Pages",
        "Agency-Style Design",
        "PHP Contact Form",
      ],
      category: "Web Development",
      features: [
        {
          title: "Core Pages",
          items: [
            "**Country Pages**: Dedicated pages for USA, UK, Canada, Australia, Germany, New Zealand, Singapore, and Armenia visa info.",
            "**Services & Team**: Detailed service breakdowns and team/testimonial sections to build trust.",
            "**Portfolio & Blog**: Showcases case studies and articles for SEO and credibility.",
          ],
        },
        {
          title: "Technical Architecture",
          items: [
            "**Static Site**: Pure HTML/CSS/JS pages for fast load times and simple hosting.",
            "**Contact Handling**: PHP script in the `forms` directory processes inquiry submissions.",
          ],
        },
      ],
      installation: [
        {
          title: "Clone the Repository",
          code: "git clone https://github.com/Itsayu/Jupiter-Visa-Advisors.git\ncd Jupiter-Visa-Advisors",
          type: "code",
        },
        {
          title: "Open Locally",
          code: "Open index.html in your browser, or serve with PHP for form testing: php -S localhost:8000",
          type: "code",
        },
      ],
      challengesAndSolutions: [
        {
          problem: "", // CONFIRM: a real challenge you faced
          solution: "", // CONFIRM
        },
      ],
      images: [
        "/project/jupitervisaadvisors1.png",
        "/project/jupitervisaadvisors2.png",
      ],
    },
    {
      id: "project-9",
      slug: "weariti-fashion",
      title: "WEARITI",
      description:
        "Full-featured fashion e-commerce web app with cart, wishlist, and auth.",
      longDescription:
        "WEARITI (ATTIREX) is a fashion e-commerce platform covering the full shopping flow — browsing, product details, cart, wishlist, checkout, and user profiles — with simulated authentication and a mocked backend so the frontend could be built and demoed independently of a real API.",

      techStack: [
        "React 18",
        "Material UI",
        "React Router DOM",
        "Axios",
        "MirageJS",
      ],
      tools: ["VS Code", "Mockman", "Netlify"],
      status: "completed",
      repoUrl: "https://github.com/Itsayu/WEARITI-FASHION-main",
      demoUrl: "https://weariti.netlify.app",
      startDate: "2023-01-01", // CONFIRM: exact month
      role: "Frontend Developer",
      customTimeline: "2023",

      highlights: [
        "Mocked Backend with MirageJS",
        "JWT-Simulated Authentication",
        "Full Shopping Flow",
      ],
      category: "Web Development",
      features: [
        {
          title: "Shopping Experience",
          items: [
            "**Product Listing & Detail Pages**: Browse and view individual fashion items.",
            "**Cart & Wishlist**: Add, remove, and manage items across both lists.",
            "**Checkout Flow**: Multi-step checkout simulating a real purchase process.",
          ],
        },
        {
          title: "Account & Architecture",
          items: [
            "**Authentication**: Login, signup, and logout flows using **JWT** encode/decode.",
            "**Mock API**: **MirageJS** simulates backend REST endpoints for development without a live server.",
            "**UI Components**: Built with **Material UI (MUI)** for consistent, polished components.",
          ],
        },
      ],
      installation: [
        {
          title: "Clone and Setup",
          code: "git clone https://github.com/Itsayu/WEARITI-FASHION-main.git\ncd WEARITI-FASHION-main\nnpm install",
          type: "code",
        },
        {
          title: "Run Dev Server",
          code: "npm start",
          type: "code",
        },
      ],
      challengesAndSolutions: [
        {
          problem: "Building Without a Real Backend",
          solution:
            "Used MirageJS to mock REST API endpoints, enabling full frontend development and testing before backend integration.",
        },
      ],
      images: ["/project/weariti1.png", "/project/weariti2.png"],
    },
    {
      id: "project-10",
      slug: "meriemi",
      title: "MeriEMI",
      description:
        "EMI Calculator and Financial Planning Tool - A responsive web application for calculating and managing Equated Monthly Installments.",
      longDescription:
        "MeriEMI is a comprehensive EMI (Equated Monthly Installment) calculator designed to help users understand loan repayment schedules and financial planning. The application provides an intuitive interface for calculating monthly payments, total interest, and generating detailed payment schedules.",

      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "Responsive Design"],
      tools: ["VS Code", "GitHub", "Browser DevTools"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/MeriEMI",
      demoUrl: "#",

      startDate: "2024-01-01",

      highlights: [
        "Real-time EMI Calculation",
        "Payment Schedule Generator",
        "Multi-purpose Calculator Interface",
        "Responsive Mobile Design",
      ],

      category: "Web Application",

      features: [
        {
          title: "Core Features",
          items: [
            "**EMI Calculator**: Calculate monthly installments based on principal, interest rate, and tenure.",
            "**Payment Schedule**: Detailed breakdown of principal and interest for each payment.",
            "**Multiple Pages**: About, Services, Contact, and Calculator sections.",
            "**Form Handling**: PHP backend for processing contact and service requests.",
          ],
        },
        {
          title: "User Interface",
          items: [
            "**Responsive Design**: Mobile-friendly layout that works across all devices.",
            "**Interactive Forms**: Contact forms and service request management.",
            "**Clean Navigation**: Easy-to-navigate website structure.",
            "**Visual Organization**: Well-structured asset management with separate folders.",
          ],
        },
        {
          title: "File Structure",
          items: [
            "**index.html**: Main landing page",
            "**about.html**: About page with company/creator information",
            "**contact.html**: Contact form page",
            "**services.html**: Services listing page",
            "**emiCalculator.html**: Main EMI calculator interface",
            "**assets/**: Images and static resources",
            "**forms/**: Form processing files",
          ],
        },
      ],
      images: ["/project/meriemi1.png"],
    },
    {
      id: "project-11",
      slug: "geet",
      title: "Geet",
      description:
        "Modern web development framework with Vite and Tailwind CSS for rapid UI development.",
      longDescription:
        "Geet is a contemporary web application framework built with Vite, offering lightning-fast development experience and optimized production builds. It integrates Tailwind CSS for utility-first styling and includes ESLint for code quality. The project demonstrates modern development practices with hot module replacement and efficient build processes.",

      techStack: [
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "PostCSS",
        "Node.js",
        "ESLint",
        "npm/pnpm",
      ],
      tools: ["VS Code", "npm", "pnpm", "Vite Dev Server", "GitHub"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/Geet",
      demoUrl: "#",

      startDate: "2024-06-01",
      role: "Full Stack Dev",
      customTimeline: "Ongoing",
      team: "1 Developer",

      highlights: [
        "Lightning-fast Vite Build",
        "Tailwind CSS Integration",
        "Hot Module Replacement",
        "ESLint Configuration",
      ],

      category: "Development Framework",

      features: [
        {
          title: "Build & Development",
          items: [
            "**Vite Bundler**: Next-generation frontend build tool for ultra-fast development experience.",
            "**Hot Module Replacement**: Instant updates during development without page reload.",
            "**Optimized Production Build**: Tree-shaking and code splitting for minimal bundle size.",
            "**Environment Configuration**: .env.example template for environment variable management.",
          ],
        },
        {
          title: "Styling & Quality",
          items: [
            "**Tailwind CSS**: Utility-first CSS framework for rapid component development.",
            "**PostCSS Processing**: CSS transformation pipeline with autoprefixer and advanced features.",
            "**ESLint Integration**: JavaScript linting for consistent code style and error prevention.",
            "**Package Management**: Lock files for reliable dependency installation.",
          ],
        },
      ],

      installation: [
        {
          title: "Install Dependencies",
          code: "npm install\n# or\npnpm install",
          type: "code",
        },
        {
          title: "Development Server",
          code: "npm run dev\n# or\npnpm dev",
          type: "code",
        },
        {
          title: "Production Build",
          code: "npm run build\n# or\npnpm build",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Build Performance Optimization",
          solution:
            "Leveraged Vite's native ES modules and optimized bundling for faster builds and HMR updates.",
        },
        {
          problem: "CSS Framework Integration",
          solution:
            "Integrated Tailwind CSS with PostCSS for efficient utility class generation and customization.",
        },
      ],
    },
    {
      id: "project-12",
      slug: "drawing-app",
      title: "Drawing App",
      description:
        "Interactive web-based drawing application for digital art creation using HTML5 Canvas.",
      longDescription:
        "Drawing App is a browser-based drawing application leveraging HTML5 Canvas API for smooth, real-time drawing experience. Users can create digital artwork with customizable brush sizes, colors, and tools. The application features an intuitive toolbar interface with social sharing capabilities and responsive design for all devices.",

      techStack: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Browser APIs"],
      tools: ["VS Code", "Chrome DevTools", "GitHub"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/Drawing-App",
      demoUrl: "#",

      startDate: "2024-05-15",
      role: "Frontend Dev",
      customTimeline: "May 2024",
      team: "1 Developer",

      highlights: [
        "Real-time Canvas Drawing",
        "Intuitive Toolbar UI",
        "Social Media Integration",
        "Responsive Mobile Design",
      ],

      category: "Creative Application",

      features: [
        {
          title: "Drawing Tools",
          items: [
            "**Canvas Drawing**: HTML5 Canvas API for smooth, lag-free drawing experience.",
            "**Brush Customization**: Adjustable brush size, opacity, and multiple brush styles.",
            "**Color Selection**: Dynamic color picker for foreground and background colors.",
            "**Eraser & Tools**: Multiple drawing tools including pen, eraser, and fill options.",
          ],
        },
        {
          title: "User Experience",
          items: [
            "**Real-time Rendering**: Immediate visual feedback as users draw on canvas.",
            "**Social Sharing**: Integrated buttons for sharing artwork on social media platforms.",
            "**Responsive Layout**: Adapts seamlessly to desktop and mobile screens.",
            "**Icon-based Toolbar**: SVG icons for clear tool identification and accessibility.",
          ],
        },
        {
          title: "Performance & Assets",
          items: [
            "**Optimized Rendering**: Efficient Canvas state management for smooth performance.",
            "**Asset Organization**: Organized icon and favicon directories for easy maintenance.",
            "**Browser Compatibility**: Works across modern browsers with Canvas support.",
            "**Lightweight**: Minimal dependencies for fast loading.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code: "git clone https://github.com/Itsayu/Drawing-App.git\ncd Drawing-App",
          type: "code",
        },
        {
          title: "Open in Browser",
          code: "# Open index.html in your web browser\nopen index.html  # macOS\nstart index.html # Windows\nxdg-open index.html # Linux",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Canvas Performance with Continuous Drawing",
          solution:
            "Implemented requestAnimationFrame and efficient state management to maintain smooth drawing at 60fps.",
        },
        {
          problem: "Touch and Mouse Event Handling",
          solution:
            "Created unified event handler for both mouse and touch events enabling drawing on all devices.",
        },
      ],
    },
    {
      id: "project-13",
      slug: "portfolio-two",
      title: "Portfolio Two",
      description:
        "Professional portfolio website with project showcase, blog section, and contact information.",
      longDescription:
        "Portfolio Two is a comprehensive personal portfolio website featuring a multi-page design with project showcases, an extensive blog section (6+ articles), about page, and contact forms. Built with semantic HTML5 and modern CSS, it's deployed on GitHub Pages and demonstrates professional web design and development capabilities.",

      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Web Fonts",
        "GitHub Pages",
      ],
      tools: ["VS Code", "GitHub Pages", "GitHub", "Git"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/PortfolioTwo",
      demoUrl: "https://itsayu.github.io/PortfolioTwo/",

      startDate: "2024-04-01",
      role: "Full Stack Dev",
      customTimeline: "April - June 2024",
      team: "1 Developer",

      highlights: [
        "Multi-page Portfolio Design",
        "Blog Platform with 6+ Posts",
        "Professional Typography",
        "GitHub Pages Deployment",
      ],

      category: "Portfolio Website",

      features: [
        {
          title: "Portfolio Sections",
          items: [
            "**Projects Showcase**: Detailed project listings with descriptions, technologies, and links.",
            "**Blog Platform**: Multiple blog articles (blog-post-1.html through blog-post-6.html) with rich content.",
            "**About Section**: Personal biography and professional background information.",
            "**Contact Page**: Contact forms and social media connectivity options.",
          ],
        },
        {
          title: "Design & Content",
          items: [
            "**Main Pages**: index.html, about.html, projects.html, blog.html, contact.html for comprehensive content.",
            "**Navigation**: Consistent and intuitive navigation across all pages.",
            "**Custom Typography**: Custom web fonts for professional and unique appearance.",
            "**Visual Hierarchy**: Clear content organization with proper spacing and typography.",
          ],
        },
        {
          title: "Responsive & Accessible",
          items: [
            "**Mobile-First Design**: Responsive layout that works on all screen sizes.",
            "**CSS Organization**: Separate stylesheets for different sections (title.css, layout.css, etc.).",
            "**Asset Management**: Organized directories for images, fonts, and resources.",
            "**Semantic HTML**: Proper HTML structure for SEO and accessibility.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code: "git clone https://github.com/Itsayu/PortfolioTwo.git\ncd PortfolioTwo",
          type: "code",
        },
        {
          title: "Local Server (Optional)",
          code: "# Python 3\npython -m http.server 8000\n\n# Node.js with http-server\nnpx http-server",
          type: "code",
        },
        {
          title: "Access Website",
          code: "# Open in browser\nhttp://localhost:8000\n\n# Or visit live site\nhttps://itsayu.github.io/PortfolioTwo/",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Scaling Blog Content",
          solution:
            "Created modular blog post HTML structure allowing easy addition of new articles without redesign.",
        },
        {
          problem: "Responsive Image Gallery",
          solution:
            "Implemented CSS grid with responsive images and proper aspect ratio handling for portfolio showcase.",
        },
        {
          problem: "Performance Optimization",
          solution:
            "Optimized image sizes, lazy loading, and minimized CSS for fast static page delivery.",
        },
      ],
    },
    {
      id: "project-14",
      slug: "car-rental",
      title: "Car Rental",
      description:
        "Car rental booking and management platform with vehicle catalog and reservation system.",
      longDescription:
        "Car Rental is a full-featured e-commerce platform for car rental services. The application allows users to browse available vehicles, search and filter by preferences, and manage rental reservations. Built with vanilla JavaScript and responsive CSS, it provides an intuitive interface for customers to book vehicles with ease.",

      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "DOM Manipulation",
      ],
      tools: ["VS Code", "GitHub", "Browser DevTools"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/Car-Rental",
      demoUrl: "#",

      startDate: "2024-05-10",
      role: "Frontend Dev",
      customTimeline: "May - June 2024",
      team: "1 Developer",

      highlights: [
        "Vehicle Catalog Management",
        "Interactive Booking System",
        "Search & Filter Functionality",
        "Responsive Mobile Design",
      ],

      category: "E-Commerce Platform",

      features: [
        {
          title: "Vehicle Management",
          items: [
            "**Car Catalog**: Browse available rental vehicles with images, details, and pricing.",
            "**Vehicle Details**: Comprehensive information including type, capacity, features, and rental rates.",
            "**Image Gallery**: High-quality car images for better decision making.",
            "**Availability Tracking**: Real-time availability status for each vehicle.",
          ],
        },
        {
          title: "Booking Features",
          items: [
            "**Reservation System**: User-friendly booking interface for rental management.",
            "**Date Selection**: Calendar widget for pickup and return date selection.",
            "**Price Calculation**: Automatic calculation of rental costs based on duration.",
            "**Booking Confirmation**: Immediate confirmation and summary of bookings.",
          ],
        },
        {
          title: "Search & Filter",
          items: [
            "**Search Functionality**: Find cars by name, type, or features.",
            "**Filter Options**: Filter by price range, car type, capacity, and features.",
            "**Quick Search**: Fast search results with instant UI updates.",
            "**Sort Options**: Sort vehicles by price, popularity, or newest additions.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code: "git clone https://github.com/Itsayu/Car-Rental.git\ncd Car-Rental",
          type: "code",
        },
        {
          title: "Run Local Server",
          code: "# Python 3\npython -m http.server 8000\n\n# Or open index.html directly in browser",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Dynamic Pricing Calculation",
          solution:
            "Implemented JavaScript algorithm to calculate rental costs based on vehicle type, duration, and distance.",
        },
        {
          problem: "Real-time Availability Updates",
          solution:
            "Created state management system to track vehicle availability across multiple bookings.",
        },
        {
          problem: "Mobile Responsiveness",
          solution:
            "Used CSS media queries and flexible layouts to ensure optimal experience on all devices.",
        },
      ],
    },
    {
      id: "project-15",
      slug: "imdb-next",
      title: "IMDB Next",
      description:
        "Modern movie and TV show database application built with Next.js and React.",
      longDescription:
        "IMDB Next is a full-stack movie and TV show discovery platform built with Next.js, combining server-side rendering and static generation for optimal performance. The application integrates with a movie database API, allowing users to search, browse, and explore detailed information about films and TV shows with ratings and reviews.",

      techStack: [
        "Next.js 14",
        "React",
        "JavaScript/TypeScript",
        "Tailwind CSS",
        "PostCSS",
        "API Integration",
      ],
      tools: ["npm", "Node.js", "VS Code", "Vercel", "GitHub"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/imdb-next",
      demoUrl: "https://imdb-next-omega.vercel.app",

      startDate: "2024-07-01",
      role: "Full Stack Dev",
      customTimeline: "July - September 2024",
      team: "1 Developer",

      highlights: [
        "Server-Side Rendering with Next.js",
        "Movie Database API Integration",
        "Advanced Search Capabilities",
        "Vercel Deployment",
      ],

      category: "Full-Stack Web Application",

      features: [
        {
          title: "Movie Discovery",
          items: [
            "**Movie Search**: Search for movies and TV shows by title with real-time results.",
            "**Movie Details**: Comprehensive information including synopsis, ratings, runtime, and cast.",
            "**Popular Movies**: Curated lists of trending and popular content.",
            "**Genre Filtering**: Browse movies by genre, release year, and rating.",
          ],
        },
        {
          title: "Performance & SEO",
          items: [
            "**Server-Side Rendering**: Dynamic pages rendered on server for optimal SEO and performance.",
            "**Static Generation**: Pre-built pages for faster loading and reduced server load.",
            "**Image Optimization**: Next.js Image component for automatic optimization and responsive images.",
            "**Code Splitting**: Automatic code splitting for faster initial page loads.",
          ],
        },
        {
          title: "Developer Experience",
          items: [
            "**ESLint Configuration**: Integrated linting for consistent code quality.",
            "**Environment Variables**: Secure API key management with .env configuration.",
            "**TypeScript Support**: Type safety for robust development.",
            "**Hot Reload Development**: Fast development workflow with file watching.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code: "git clone https://github.com/Itsayu/imdb-next.git\ncd imdb-next",
          type: "code",
        },
        {
          title: "Install Dependencies",
          code: "npm install\n# or\npnpm install",
          type: "code",
        },
        {
          title: "Configure Environment",
          code: "cp .env.example .env.local\n# Add your API key to .env.local",
          type: "code",
        },
        {
          title: "Run Development Server",
          code: "npm run dev\n# or\npnpm dev",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "API Rate Limiting",
          solution:
            "Implemented caching strategy with ISR (Incremental Static Regeneration) to minimize API calls.",
        },
        {
          problem: "Large Image Optimization",
          solution:
            "Utilized Next.js Image component with automatic formats and responsive sizing.",
        },
        {
          problem: "SEO for Dynamic Content",
          solution:
            "Implemented dynamic meta tags and structured data for proper search engine indexing.",
        },
      ],
    },
    {
      id: "project-16",
      slug: "cover-letter-generator",
      title: "Cover Letter Generator",
      description:
        "AI-powered cover letter generation tool for automated job application document creation.",
      longDescription:
        "Cover Letter Generator is an automated utility that helps job seekers create professional, customized cover letters tailored to specific positions and companies. The application uses templates and user inputs to dynamically generate personalized cover letters ready for submission, with export and formatting options.",

      techStack: ["HTML5", "CSS3", "JavaScript", "Template Engine", "DOM APIs"],
      tools: ["VS Code", "GitHub", "Browser APIs"],

      status: "completed",
      repoUrl: "https://github.com/Itsayu/Cover-Letteer-Generator",
      demoUrl: "#",

      startDate: "2024-06-15",
      role: "Frontend Dev",
      customTimeline: "June - July 2024",
      team: "1 Developer",

      highlights: [
        "Automated Letter Generation",
        "Multiple Professional Templates",
        "Real-time Preview",
        "Export Capabilities",
      ],

      category: "Utility Application",

      features: [
        {
          title: "Template System",
          items: [
            "**Multiple Templates**: Selection of professional cover letter templates for various industries.",
            "**Industry-Specific**: Tailored templates for tech, finance, healthcare, and other sectors.",
            "**Customizable Sections**: Flexible sections for objective, experience, skills, and closing.",
            "**Professional Language**: Built-in suggestions for professional phrasing and tone.",
          ],
        },
        {
          title: "Dynamic Generation",
          items: [
            "**User Input Forms**: Form fields for personal details, job information, and achievements.",
            "**Auto-Fill Features**: Intelligent suggestion engine based on user profile.",
            "**Real-time Preview**: Live preview of generated cover letter as user types.",
            "**Field Validation**: Client-side validation for complete and accurate information.",
          ],
        },
        {
          title: "Output & Export",
          items: [
            "**Copy to Clipboard**: One-click copying of generated content.",
            "**Download Options**: Export as PDF, DOCX, or plain text formats.",
            "**Print Support**: Print-optimized formatting and styling.",
            "**Email Ready**: Generate content ready for email submission.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code: "git clone https://github.com/Itsayu/Cover-Letteer-Generator.git\ncd Cover-Letteer-Generator",
          type: "code",
        },
        {
          title: "Open in Browser",
          code: "# Open index.html directly\nopen index.html  # macOS\nstart index.html # Windows",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Template Customization",
          solution:
            "Created flexible template system allowing users to modify content while maintaining professional structure.",
        },
        {
          problem: "Export Functionality",
          solution:
            "Implemented JavaScript libraries for PDF and document generation with proper formatting preservation.",
        },
      ],
    },
    {
      id: "project-17",
      slug: "ai-community-chandigarh",
      title: "AI Community Chandigarh",
      description:
        "Community platform hub for AI/ML enthusiasts, developers, and researchers in Chandigarh.",
      longDescription:
        "AI Community Chandigarh is the central hub for the Artificial Intelligence and Machine Learning community in Chandigarh. The platform connects professionals, students, and researchers through event management, team directories, and integrated social media channels. Built with Next.js and deployed on Vercel, it serves as a dynamic platform for collaboration, learning, and networking in the AI/ML space.",

      techStack: [
        "Next.js 14",
        "React",
        "TypeScript/JavaScript",
        "Tailwind CSS",
        "PostCSS",
        "Vercel Deployment",
      ],
      tools: ["npm", "Node.js", "VS Code", "Vercel", "GitHub"],

      status: "completed",
      repoUrl:
        "https://github.com/AIChandigarh/ai-community-chandigarh-website",
      demoUrl: "https://ai-community-chandigarh.vercel.app/",

      startDate: "2024-08-01",
      role: "Full Stack Dev",
      customTimeline: "August - October 2024",
      team: "Multiple Developers",

      highlights: [
        "Community Event Management",
        "Team Directory System",
        "Social Media Integration",
        "Real-time Event Updates",
      ],

      category: "Community Platform",

      features: [
        {
          title: "Community Hub",
          items: [
            "**Event Management**: Upcoming workshops, meetups, conferences, and webinars.",
            "**Event Calendar**: Interactive calendar for event discovery and RSVP management.",
            "**Team Directory**: Browse community members, leaders, and contributors.",
            "**Member Profiles**: Detailed profiles with expertise, social links, and contributions.",
          ],
        },
        {
          title: "Social Integration",
          items: [
            "**YouTube Channel**: Subscribe for tutorials, talks, and community content.",
            "**Instagram Feed**: Follow for community highlights and event updates.",
            "**LinkedIn Connection**: Professional networking and job opportunities.",
            "**Twitter/X Updates**: Real-time announcements and AI/ML news.",
            "**Centralized Links**: Single dashboard for all social platform access.",
          ],
        },
        {
          title: "Content & Resources",
          items: [
            "**Community About**: Mission, vision, and community values information.",
            "**Event Details**: Comprehensive event descriptions with speakers and agenda.",
            "**News & Updates**: Latest developments in AI/ML field and community achievements.",
            "**Resource Library**: Learning materials, documentation, and research links.",
          ],
        },
        {
          title: "Technical Features",
          items: [
            "**Server-Side Rendering**: Next.js SSR for fast page loads and SEO optimization.",
            "**Dynamic Content Loading**: Real-time event and member data updates.",
            "**Responsive Design**: Mobile-first approach for all devices and screen sizes.",
            "**Global CDN**: Vercel deployment for worldwide fast access.",
            "**API Integration**: Connected to YouTube, Instagram, LinkedIn, and Twitter APIs.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone Repository",
          code: "git clone https://github.com/AIChandigarh/ai-community-chandigarh-website.git\ncd ai-community-chandigarh-website",
          type: "code",
        },
        {
          title: "Install Dependencies",
          code: "npm install\n# or\npnpm install",
          type: "code",
        },
        {
          title: "Configure Environment",
          code: "cp .env.example .env.local\n# Add API keys for YouTube, Instagram, LinkedIn, Twitter",
          type: "code",
        },
        {
          title: "Run Development Server",
          code: "npm run dev\n# Visit http://localhost:3000",
          type: "code",
        },
        {
          title: "Deploy to Vercel",
          code: "npm install -g vercel\nvercel",
          type: "code",
        },
      ],

      challengesAndSolutions: [
        {
          problem: "Multi-API Integration",
          solution:
            "Created unified API layer abstracting YouTube, Instagram, LinkedIn, and Twitter endpoints for consistency.",
        },
        {
          problem: "Event Calendar Management",
          solution:
            "Implemented dynamic event system with real-time updates and notification system for member engagement.",
        },
        {
          problem: "Social Media Feed Performance",
          solution:
            "Implemented caching strategy and ISR for social feeds to reduce API calls and improve load times.",
        },
        {
          problem: "Community Scalability",
          solution:
            "Designed modular component structure allowing easy addition of new features and community sections.",
        },
      ],
      images: ["/project/aicommunitychandigarh1.png"],
    },
  ],
  experiences: [
    // 1. PROFESSIONAL EXPERIENCE
    {
      id: "prof-0",
      company: "Niwi.ai",
      position: "Software Engineer",
      description:
        "Leading frontend development for niwi.ai and primhub.ai using Next.js, React.js, and TypeScript, focusing on fast performance, clean UI, and scalable architecture.",
      responsibilities: [
        "Building and maintaining frontend for niwi.ai and primhub.ai",
        "Developing scalable UI components with React.js and TypeScript",
        "Optimizing performance and core web vitals",
        "Architecting reusable component libraries and design systems",
      ],
      skills: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "Angular.js",
        "Ionic",
        "n8n",
        "Azure DevOps",
        "AWS Amplify",
        "SEO",
        "Frontend Architecture",
        "Performance Optimization",
        "Go Lang",
        "Tailwind CSS",
      ],
      startDate: "2024-05-01",
      isOngoing: true,
      location: "Remote",
      type: "contract",
      logo: "/assets/niwilogo.png",
      externalLink: "https://niwi.ai",
    },
    {
      id: "prof-1",
      company: "Beta Byte Technologies",
      position: "Web Developer",
      description:
        "Developed and maintained responsive web applications using ReactJS, PHP, Bootstrap, HTML, JavaScript, and CSS across global client projects.",
      responsibilities: [
        "Building responsive web apps with ReactJS and PHP",
        "Maintaining and extending client-facing web platforms",
        "Collaborating across global project teams",
        "Ensuring cross-browser compatibility and performance",
      ],
      skills: ["ReactJS", "PHP", "Bootstrap", "JavaScript", "CSS", "HTML"],
      startDate: "2024-02-01",
      endDate: "2024-05-01",
      isOngoing: false,
      location: "Remote",
      type: "contract",
      logo: "/assets/betabyte.jpg",
      externalLink: "",
    },
    {
      id: "prof-2",
      company: "Gravity Infinity",
      position: "Web Developer",
      description:
        "Collaborated in building responsive web applications and modernizing the company's web assets for enhanced user experience.",
      responsibilities: [
        "Developing and updating responsive web applications",
        "Modernizing legacy web assets for improved UX",
        "Working with design and backend teams on client deliverables",
        "Testing and debugging across devices and browsers",
      ],
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "UI Development"],
      startDate: "2023-08-01",
      endDate: "2024-02-01",
      isOngoing: false,
      location: "Remote",
      type: "contract",
      logo: "/assets/GravityInfinity.jpg",
      externalLink: "",
    },
    {
      id: "prof-3",
      company: "Zymo.app",
      position: "Web Developer Intern",
      description:
        "Responsible for developing a user-centric web platform using React.js and deploying customized client solutions seamlessly onto Firebase hosting landscapes.",
      responsibilities: [
        "Building user-centric web interfaces with React.js",
        "Deploying client solutions to Firebase hosting",
        "Implementing responsive and accessible UI patterns",
        "Collaborating with product team on feature delivery",
      ],
      skills: [
        "React.js",
        "Firebase",
        "JavaScript",
        "Web Deployment",
        "UI Development",
      ],
      startDate: "2023-03-01",
      endDate: "2023-05-01",
      isOngoing: false,
      location: "Remote",
      type: "internship",
      logo: "/assets/zymo.png",
      externalLink: "",
    },

    // 2. LEADERSHIP & ORGANIZATIONAL EXPERIENCE
    {
      id: "lead-1",
      company: "ML Chandigarh",
      position: "Organizer",
      description:
        "Connecting tech communities and AI enthusiasts with leading professionals, researchers, and engineers. Hosting live in-person and virtual events on TensorFlow, Deep Learning, and real-world AI applications.",
      responsibilities: [
        "Organizing and co-hosting ML community events",
        "Coordinating speaker sessions and workshop logistics",
        "Building partnerships with local tech ecosystem players",
        "Driving member engagement around AI and Deep Learning topics",
      ],
      skills: [
        "Community Building",
        "Event Management",
        "Public Speaking",
        "Developer Relations",
      ],
      startDate: "2024-01-01",
      isOngoing: true,
      location: "Chandigarh",
      type: "volunteer",
      logo: "/assets/mlchandigarh.png",
      externalLink: "",
    },
    {
      id: "lead-2",
      company: "D4 Community",
      position: "Organizer",
      description:
        "An independent, non-profit open-source community centered around four core pillars: Discite (Learn), Develop, Debug, and Deploy. Connecting tech enthusiasts across India through 50+ events and 3 national hackathons.",
      responsibilities: [
        "Co-founding and leading community strategy and growth",
        "Organizing 50+ events and 3 national hackathons",
        "Building open-source initiatives and contributor programs",
        "Fostering an inclusive tech ecosystem across India",
      ],
      skills: [
        "Community Building",
        "Open Source",
        "Leadership",
        "Event Management",
      ],
      startDate: "2023-01-01",
      isOngoing: true,
      location: "India",
      type: "volunteer",
      logo: "/assets/d4community.png",
      externalLink: "https://d4community.com",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Chandigarh Group of Colleges, Mohali, Punjab",
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      startDate: "2020",
      endDate: "2024",
      isOngoing: false,
      // gpa: "3.8/4.0",
      activities: ["Computer Science", "D4 Community"],
      achievements: [
        "Only alumnus of the college appointed as a member of the Board of Studies (BOS)",
        "Organized multiple national-level events",
      ],
      logo: "/assets/cgc.svg",
    },
    {
      id: "edu-2",
      institution: "DAV Public School, B.S City, Bokaro, Jharkhand",
      degree: "12th",
      major: "PCM",
      startDate: "2017",
      endDate: "2019",
      isOngoing: false,
      activities: ["Science Studies"],
      achievements: [
        "Strong foundation in mathematics, physics, Chemistry",
        "Analytical thinking development",
      ],
      logo: "/assets/dav.png",
    },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Solving for India Hackathon",
      issuer: "Google",
      date: "2023-5-13",
      description:
        "Achieved top 15 ranking in Solving for India Hackathon",
      category: "award",
    },
    {
      id: "cert-1",
      title: "Generative AI",
      issuer: "D4 Community",
      date: "2026-07-05",
      credentialId: "72ZD5LYYLZYW",
      credentialUrl: "https://www.xyz.com",
      type: "Course",
      tags: ["AI", "Generative AI"],
      category: "certification",
      image: "/certificate/xyz.pdf",
    },
  ],
  techStack: [
    // Core Languages
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
      category: "language",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript",
      category: "language",
    },
    {
      name: "Golang",
      icon: "https://cdn.simpleicons.org/go",
      category: "language",
    },
    {
      name: "C++",
      icon: "https://cdn.simpleicons.org/c++",
      category: "language",
    },

    // Frontend & Frameworks
    {
      name: "React.js",
      icon: "https://cdn.simpleicons.org/react",
      category: "framework",
    },
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs",
      category: "framework",
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs",
      category: "framework",
    },

    // Libraries
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss",
      category: "library",
    },

    // Databases
    {
      name: "Redis",
      icon: "https://cdn.simpleicons.org/redis",
      category: "database",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql",
      category: "database",
    },

    // Cloud Native & Infrastructure
    {
      name: "Docker",
      icon: "https://api.iconify.design/logos:docker-icon.svg",
      category: "tool",
    },
    {
      name: "Git",
      icon: "https://api.iconify.design/logos:git-icon.svg",
      category: "tool",
    },
    {
      name: "GitHub",
      icon: "https://api.iconify.design/logos:github-icon.svg",
      category: "tool",
    },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n", category: "tool" },
    {
      name: "Postman",
      icon: "https://api.iconify.design/logos:postman-icon.svg",
      category: "tool",
    },
    {
      name: "Azure DevOps",
      icon: "https://api.iconify.design/logos:azure.svg",
      category: "tool",
    },
    {
      name: "AWS",
      icon: "https://api.iconify.design/logos:aws.svg",
      category: "tool",
    },
    {
      name: "Vercel",
      icon: "https://api.iconify.design/logos:vercel-icon.svg",
      category: "tool",
    },
    { name: "v0", icon: "https://cdn.simpleicons.org/v0", category: "tool" },
    {
      name: "Antigravity",
      icon: "https://brandlogos.net/wp-content/uploads/2025/12/google_antigravity-logo_brandlogos.net_qu4jc-768x708.png",
      category: "tool",
    },
    {
      name: "Netlify",
      icon: "https://api.iconify.design/logos:netlify-icon.svg",
      category: "tool",
    },
    {
      name: "n8n",
      icon: "https://cdn.simpleicons.org/n8n",
      category: "tool",
    },
  ],
  hardSkills: [
    // Software Engineering & Architecture
    {
      name: "Full Stack Development",
      level: "expert",
      category: "software",
      description:
        "Engineering scalable web architectures from pixel-perfect frontends to robust databases.",
    },
    {
      name: "System Architecture",
      level: "intermediate",
      category: "software",
      description:
        "Designing robust, scalable, and high-performance system architectures for complex applications.",
    },
    {
      name: "Software Design",
      level: "advanced",
      category: "software",
      description:
        "Applying architectural patterns and principles to build maintainable and modular systems.",
    },
    {
      name: "System Analysis",
      level: "advanced",
      category: "software",
      description:
        "Translating complex stakeholder requirements into efficient and scalable technical blueprints.",
    },
    {
      name: "SDLC",
      level: "intermediate",
      category: "software",
      description:
        "Governing the entire life cycle of software development with a focus on quality and agility.",
    },

    // Artificial Intelligence & Advanced Analytics
    {
      name: "Computer Vision",
      level: "intermediate",
      category: "ai",
      description:
        "Developing real-time object detection, pattern recognition, and spatial analysis systems.",
    },
    {
      name: "Large Language Models (LLM)",
      level: "beginner",
      category: "ai",
      description:
        "Expertise in fine-tuning open-source models, RAG architectures, and complex prompt engineering.",
    },
    {
      name: "AI Agents & Autonomy",
      level: "beginner",
      category: "ai",
      description:
        "Designing autonomous systems with recursive reasoning and decision-making capabilities.",
    },

    // Cloud & DevOps
    {
      name: "DevOps",
      level: "advanced",
      category: "devops",
      description:
        "Streamlining development workflows and infrastructure management through automation.",
    },
    {
      name: "Docker & Kubernetes",
      level: "intermediate",
      category: "devops",
      description:
        "Containerizing applications for consistent deployment and orchestrating cloud resources.",
    },
    {
      name: "Google Cloud Platform",
      level: "beginner",
      category: "cloud",
      description:
        "Utilizing cloud infrastructure and services for scalable application hosting.",
    },
  ],
  softSkills: [
    {
      name: "Problem Solving",
      description: "Innovative debugging and algorithmic optimization",
    },
    {
      name: "Systemic Thinking",
      description: "Designing robust, scalable end-to-end architectures",
    },
    {
      name: "Critical Thinking",
      description:
        "Analytical approach to solving complex engineering challenges",
    },
    {
      name: "Continuous Learning",
      description: "Staying updated with state-of-the-art AI research",
    },
    {
      name: "Analytical Thinking",
      description: "Breaking down complex data into actionable insights",
    },
    {
      name: "Adaptability",
      description: "Quickly mastering new frameworks and AI models",
    },
    {
      name: "Leadership",
      description: "Leading engineering teams and managing complex projects",
    },
    {
      name: "Communication",
      description: "Translating complex AI concepts for stakeholders",
    },
    {
      name: "Teamwork",
      description: "Collaborative development in cross-functional agile teams",
    },
  ],
  tools: [
    {
      name: "VS Code",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      category: "ide",
    },
    {
      name: "Figma",
      icon: "https://cdn.simpleicons.org/figma",
      category: "design",
    },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github",
      category: "devops",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git",
      category: "devops",
    },
    {
      name: "Docker",
      icon: "https://cdn.simpleicons.org/docker",
      category: "devops",
    },
    {
      name: "Postman",
      icon: "https://cdn.simpleicons.org/postman",
      category: "devops",
    },
    {
        name: "Azure DevOps",
        icon: "https://api.iconify.design/logos:azure.svg",
        category: "devops"
    },
    {
      name: "Ollama",
      icon: "https://cdn.simpleicons.org/ollama",
      category: "devops",
    },
    {
      name: "n8n",
      icon: "https://cdn.simpleicons.org/n8n",
      category: "devops",
    },
    {
      name: "Vercel",
      icon: "https://cdn.simpleicons.org/vercel",
      category: "devops",
    },
    {
      name: "V0",
      icon: "https://cdn.simpleicons.org/v0",
      category: "devops",
    },
    {
      name: "Netlify",
      icon: "https://cdn.simpleicons.org/netlify",
      category: "devops",
    },
    {
      name: "Claude",
      icon: "https://cdn.simpleicons.org/Claude",
      category: "devops",
    },
  ],
  faqs: [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in Full Stack Development (React, Next.js, Node.js), AI/ML Development (TensorFlow, Computer Vision, NLP), Data Science, and Blockchain/Web3 development (Solidity, Smart Contracts, DApps).",
    },
    {
      question: "What technologies are you exploring?",
      answer:
        "Currently diving deep into AI Agents, Blockchain technology (Solidity, Smart Contracts), and MLOps for production-ready AI systems.",
    },
    {
      question: "Are you available for opportunities?",
      answer:
        "Yes! I'm open to internships, collaborations, and exciting projects in AI, Data Science, Full Stack Development, and Blockchain. Feel free to reach out!",
    },
  ],
  blogs: [
    {
      id: "blog-1",
      slug: "future-of-ai-agents",
      title: "The Future of AI Agents in Enterprise",
      excerpt:
        "How autonomous agents are redefining software architecture and decision-making processes.",
      content: "Detailed exploration of AI agents...",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-20",
      category: "applied-ai",
      tags: ["AI", "Agents", "Enterprise"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "5",
    },
    {
      id: "blog-2",
      slug: "web3-ux-challenges",
      title: "Overcoming Web3 UX Challenges",
      excerpt:
        "Strategies for building decentralized applications that feel as smooth as Web2.",
      content: "UX in Web3 is critical...",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-15",
      category: "more",
      tags: ["Web3", "Blockchain", "UX"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "4",
    },
    {
      id: "blog-3",
      slug: "mastering-nextjs-performance",
      title: "Mastering Next.js Performance",
      excerpt:
        "Advanced techniques for optimizing Core Web Vitals in modern React applications.",
      content: "Performance optimization...",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-05",
      category: "software-development",
      tags: ["Next.js", "React", "Performance"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "6",
    },
    {
      id: "blog-4",
      slug: "ai-driven-security",
      title: "AI-Driven Cybersecurity",
      excerpt:
        "Using deep learning to detect and prevent modern network intrusion.",
      content: "Cybersecurity with AI...",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
      date: "2026-02-28",
      category: "applied-ai",
      tags: ["AI", "Security", "Deep Learning"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "7",
    },
    {
      id: "blog-5",
      slug: "llm-fine-tuning",
      title: "Fine-Tuning LLMs locally",
      excerpt:
        "A guide to optimizing open-source models using Ollama and LoRA techniques.",
      content: "Local LLM fine-tuning...",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      date: "2026-02-15",
      category: "applied-ai",
      tags: ["LLM", "Python", "Ollama"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "8",
    },
    {
      id: "blog-6",
      slug: "smart-contract-security",
      title: "Smart Contract Audit Patterns",
      excerpt: "Common vulnerabilities and how to prevent them in Solidity.",
      content: "Audit patterns...",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
      date: "2026-02-01",
      category: "more",
      tags: ["Solidity", "Ethereum", "Security"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "5",
    },
    {
      id: "blog-7",
      slug: "modern-state-management",
      title: "Modern State Management in React",
      excerpt:
        "Comparing Zustand, Redux Toolkit, and React Context for large-scale apps.",
      content: "State management...",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
      date: "2026-01-25",
      category: "software-development",
      tags: ["React", "Zustand", "Architecture"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "4",
    },
    {
      id: "blog-8",
      slug: "iot-edge-computing",
      title: "Edge Computing with ESP32",
      excerpt:
        "Implementing real-time data processing at the edge for industrial IoT.",
      content: "Edge computing...",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
      date: "2026-01-10",
      category: "software-development",
      tags: ["IoT", "ESP32", "Edge"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "6",
    },
    {
      id: "blog-9",
      slug: "ai-in-healthcare",
      title: "AI Transformation in Healthcare",
      excerpt:
        "How computer vision is assisting in medical diagnostics and data analysis.",
      content: "Healthcare AI...",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
      date: "2026-01-05",
      category: "applied-ai",
      tags: ["Healthcare", "AI", "Ethics"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "7",
    },
    {
      id: "blog-10",
      slug: "the-architects-manifesto",
      title: "Digital Garden: The Architect's Manifesto",
      excerpt:
        "Reflecting on my journey as an AI Engineer and the philosophy behind building intelligent, scalable systems.",
      content:
        "My journey into the world of technology hasn't been just about code...",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
      date: "2026-03-31",
      category: "about-me",
      tags: ["Philosophy", "Engineering", "About Me"],
      author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
      readTime: "5",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/ayush.jpeg",
      category: "",
    },
    {
      id: "gal-2",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/ioind.jpeg",
      category: "",
    },
    {
      id: "gal-3",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/devfest24.jpeg",
      category: "",
    },
    {
      id: "gal-4",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/iochd.jpeg",
      category: "",
    },
    {
      id: "gal-5",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/hnw2win.jpeg",
      category: "",
    },
    {
      id: "gal-6",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/hnw2g.jpeg",
      category: "",
    },
    {
      id: "gal-7",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/genai.jpeg",
      category: "",
    },
    {
      id: "gal-8",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/mongodb.jpg",
      category: "",
    },
    {
      id: "gal-9",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g1.jpeg",
      category: "",
    },
    {
      id: "gal-10",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g2.jpeg",
      category: "",
    },
    {
      id: "gal-11",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g3.jpeg",
      category: "",
    },
    {
      id: "gal-12",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g4.jpeg",
      category: "",
    },
    {
      id: "gal-13",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g5.jpeg",
      category: "",
    },
    {
      id: "gal-14",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g6.jpeg",
      category: "",
    },
    {
      id: "gal-15",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g7.jpeg",
      category: "",
    },
    {
      id: "gal-16",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g8.jpeg",
      category: "",
    },
    {
      id: "gal-17",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g9.jpeg",
      category: "",
    },
    {
      id: "gal-18",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g10.jpeg",
      category: "",
    },
    {
      id: "gal-19",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g11.jpeg",
      category: "",
    },
    {
      id: "gal-20",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g12.jpeg",
      category: "",
    },
    {
      id: "gal-21",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g13.jpeg",
      category: "",
    },
    {
      id: "gal-22",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g14.jpeg",
      category: "",
    },
    {
      id: "gal-23",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g15.jpeg",
      category: "",
    },
    {
      id: "gal-24",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g16.jpeg",
      category: "",
    },
    {
      id: "gal-25",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g17.jpeg",
      category: "",
    },
    {
      id: "gal-26",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g18.jpeg",
      category: "",
    },
    {
      id: "gal-27",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g19.jpeg",
      category: "",
    },
    {
      id: "gal-28",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g20.jpeg",
      category: "",
    },
    {
      id: "gal-29",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/ayush.jpeg",
      category: "",
    },
    {
      id: "gal-30",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g22.jpeg",
      category: "",
    },
    {
      id: "gal-31",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g23.jpeg",
      category: "",
    },
    {
      id: "gal-32",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g24.jpeg",
      category: "",
    },
    {
      id: "gal-33",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g25.jpeg",
      category: "",
    },
    {
      id: "gal-34",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g26.jpeg",
      category: "",
    },
    {
      id: "gal-35",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g27.jpeg",
      category: "",
    },
  ],
};
