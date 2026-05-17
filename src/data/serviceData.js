// ================= servicesData.js (8 Services with Projects inside showcase.projects) =================

import {
  Laptop,
  ShoppingCart,
  Search,
  Wrench,
  BrainCircuit,
  Palette,
  Video,
  Globe,
  LineChart,
  Code,
  Database,
  Shield,
  Zap,
  BarChart,
  Target,
  Eye,
  Users,
  TrendingUp,
  Settings,
  Rocket,
  Sparkles,
  CheckCircle,
  Clock,
  Award,
  HeartHandshake,
} from "lucide-react";
import React from "react";
import { BsPalette2 } from "react-icons/bs";
import WebProject1 from "../assets/web-project-1.png"
import WebClient1 from "../assets/web-clint-1.webp"
import WebClient2 from "../assets/web-clint-2.png"
import WebClient3 from "../assets/web-clint-3.webp"


export const servicesData = [
  // 1. Web Development
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Modern responsive websites built for performance and growth.",
    icon: Laptop,
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    heroTitle: "Next-Generation Web Development",
    heroDesc:
      "We build fast, scalable, and future-ready web applications that drive business growth. Our expert team delivers cutting-edge solutions with modern frameworks.",
    sectionTitle: "Custom Web Development Solutions",
    sectionDesc:
      "We create modern, scalable, and high-performance websites using cutting-edge technologies.",
    sectionImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    tabs: [
      {
        title: "Frontend",
        content: {
          heading: "Modern Frontend Development",
          desc: "Responsive and fast user interfaces using modern frameworks.",
          points: [
            "React & Next.js",
            "Tailwind CSS",
            "Responsive Design",
            "Animations & UI Effects",
          ],
        },
      },
      {
        title: "Backend",
        content: {
          heading: "Powerful Backend Systems",
          desc: "Secure and scalable backend architecture for web apps.",
          points: [
            "Node.js APIs",
            "Authentication Systems",
            "Database Integration",
            "Server Optimization",
          ],
        },
      },
      {
        title: "Performance",
        content: {
          heading: "Website Optimization",
          desc: "Speed and SEO optimization for maximum performance.",
          points: [
            "SEO Friendly Structure",
            "Core Web Vitals",
            "Image Optimization",
            "Fast Loading Speed",
          ],
        },
      },
      {
        title: "Deployment",
        content: {
          heading: "Deployment & Hosting",
          desc: "Deploying websites securely on cloud infrastructure.",
          points: [
            "Vercel Deployment",
            "Cloud Hosting",
            "SSL Security",
            "Maintenance & Support",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Websites",
        desc: "Modern websites tailored to your business.",
        icon: Globe,
      },
      {
        title: "Frontend Apps",
        desc: "Interactive UI with React & Next.js.",
        icon: Laptop,
      },
      {
        title: "Backend APIs",
        desc: "Secure and scalable API systems.",
        icon: Database,
      },
      {
        title: "SEO Optimization",
        desc: "Optimized structure for better rankings.",
        icon: Search,
      },
    ],
    capabilitiesTitle: "Web Development",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    processSubTitle: "Our Development Process",
    processTitle: "From Concept to Launch",
    processHighlight: "Excellence",
    processImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    processDesc:
      "We follow a systematic approach to deliver high-quality web solutions that exceed expectations.",
    processFeatures: [
      "Discovery & Planning",
      "Design & Prototyping",
      "Development & Testing",
      "Deployment & Support",
    ],
    showcase: {
      title: "Web Development Projects",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      projects: [
        {
          slug: "fundbox",
          title: "Fundbox – Capital Products for Small Businesses",
          desc: "Fundbox offers fast, easy access to business financing — including lines of credit and term loans up to $250,000 — to help small businesses manage cash flow and grow.",
          image:
            WebProject1,
          tech: [
            "Line of Credit",
            "Term Loans",
            "Stripe",
            "Intuit",
            "FreshBooks",
            "Zoho",
            "Wave",
          ],
          features: [
            "Up to $250,000 in Funding",
            "Apply in 3 Minutes or Less",
            "Fast Access to Funds",
            "Flexible Repayment Terms",
            "No Early Repayment Fees",
          ],
          overview:
            "Fundbox is a small business financing platform founded in 2013 that has connected 500,000+ businesses to over $6 billion in capital. It offers lines of credit and term loans with a simple 3-minute application, fast funding, and flexible repayment — integrated into everyday business tools like Stripe, Intuit, FreshBooks, and more.",
          results: [
            "500k+ Businesses Connected",
            "$6B+ Capital Unlocked",
            "4.8 Trustpilot Score",
          ],
        },
        {
          slug: "api-development",
          title: "API Development",
          desc: "Secure, scalable RESTful and GraphQL APIs for your applications.",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070",
          tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
          features: [
            "RESTful APIs",
            "GraphQL",
            "Authentication",
            "Rate Limiting",
            "Documentation",
          ],
          overview:
            "We build robust APIs that power your web and mobile applications with security and scalability.",
          results: ["99.9% Uptime", "50ms Response Time", "Easy Integration"],
        },
        {
          slug: "landing-page",
          title: "Landing Page Design",
          desc: "High-converting landing pages designed for maximum conversions.",
          image:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070",
          tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
          features: [
            "Conversion Focused",
            "A/B Testing Ready",
            "Fast Loading",
            "Mobile Responsive",
            "Analytics Integration",
          ],
          overview:
            "Create stunning landing pages that convert visitors into customers with our expert design and development.",
          results: ["50% Higher Conversion", "Lower Bounce Rate", "Better ROI"],
        },
        {
          slug: "full-stack-app",
          title: "Full Stack Application",
          desc: "Complete full-stack web applications with frontend and backend integration.",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
          tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind"],
          features: [
            "MERN Stack",
            "Authentication",
            "Database Design",
            "State Management",
            "Deployment",
          ],
          overview:
            "End-to-end full stack development services for complex web applications.",
          results: [
            "Scalable Architecture",
            "Secure Systems",
            "Fast Performance",
          ],
        },
      ],
    },
    blogTitle: "Web Development Insights",
    blogDescription: "Latest trends and best practices in web development",
    blogPosts: [
      {
        title: "Why Next.js is the Future of React",
        category: "React",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        description:
          "Discover why Next.js is becoming the go-to framework for modern web applications.",
        views: "2.5k",
        author: "Ali Raza",
      },
      {
        title: "Web Performance Optimization Guide",
        category: "Performance",
        readTime: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        description:
          "Learn how to optimize your website for lightning-fast performance.",
        views: "1.8k",
        author: "Sarah Khan",
      },
    ],
    testimonials: [
      {
        quote:
          "Their web development team delivered a fast and modern website that exceeded our expectations.",
        name: "Ali Raza",
        designation: "CEO @ TechBrand",
        src: WebClient1,
      },
      {
        quote:
          "Our website speed and conversions improved dramatically after working with them.",
        name: "Ahmed Khan",
        designation: "Founder @ StartupX",
        src: WebClient2,
      },
      {
        quote:
          "Our website speed and conversions improved dramatically after working with them.",
        name: "Ahmed Khan",
        designation: "Founder @ StartupX",
        src: WebClient3,
      },
    ],
    faqs: [
      {
        question: "How long does a website take?",
        answer:
          "A standard business website usually takes 2–6 weeks depending on complexity.",
      },
      {
        question: "Do you provide SEO optimization?",
        answer: "Yes, all websites are optimized for SEO and speed.",
      },
    ],
    roadmap: {
      title: "Web Development Roadmap",
      description: "Our proven process for delivering exceptional websites",
      steps: [
        {
          title: "Discovery & Strategy",
          description:
            "We analyze your business needs and create a comprehensive plan.",
          icon: Target,
        },
        {
          title: "Design & Prototyping",
          description: "Create stunning designs and interactive prototypes.",
          icon: Palette,
        },
        {
          title: "Development",
          description: "Build your website using latest technologies.",
          icon: Code,
        },
        {
          title: "Testing & QA",
          description: "Rigorous testing to ensure flawless performance.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Web Project",
      description: "Follow these simple steps to get your website built",
      steps: [
        {
          title: "Book a Consultation",
          description:
            "Schedule a free consultation to discuss your requirements.",
        },
        {
          title: "Get a Custom Quote",
          description:
            "Receive a detailed proposal and timeline for your project.",
        },
        {
          title: "Launch Your Website",
          description: "We build, test, and launch your website successfully.",
        },
      ],
      buttonText: "Start Your Project",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Build Your Dream Website?",
    ctaButton: "Get in Touch",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
  },

  // 2. E-Commerce Solutions
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce",
    desc: "Scalable online stores with modern shopping experiences.",
    icon: ShoppingCart,
    heroImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070",
    heroTitle: "High-Converting E-Commerce Stores",
    heroDesc:
      "Launch powerful online stores that drive sales and deliver exceptional shopping experiences with our expert e-commerce solutions.",
    sectionTitle: "Powerful E-Commerce Solutions",
    sectionDesc:
      "We create high-converting Shopify and WooCommerce stores for online businesses.",
    sectionImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070",
    tabs: [
      {
        title: "Store Setup",
        content: {
          heading: "E-Commerce Store Setup",
          desc: "Complete online store configuration.",
          points: [
            "Shopify Stores",
            "WooCommerce Setup",
            "Product Management",
            "Store Branding",
          ],
        },
      },
      {
        title: "Payments",
        content: {
          heading: "Payment Integration",
          desc: "Secure payment gateways for smooth transactions.",
          points: [
            "Stripe Integration",
            "PayPal Setup",
            "JazzCash Integration",
            "Easypaisa Support",
          ],
        },
      },
      {
        title: "Optimization",
        content: {
          heading: "Conversion Optimization",
          desc: "Improve sales and customer experience.",
          points: [
            "Fast Checkout",
            "Mobile Optimization",
            "SEO Optimization",
            "Cart Recovery",
          ],
        },
      },
      {
        title: "Marketing",
        content: {
          heading: "Store Growth",
          desc: "Marketing systems for increasing sales.",
          points: [
            "Meta Ads",
            "Google Shopping Ads",
            "Email Marketing",
            "Analytics Tracking",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Shopify Stores",
        desc: "Modern Shopify e-commerce websites.",
        icon: ShoppingCart,
      },
      { title: "WooCommerce", desc: "Custom WooCommerce stores.", icon: Globe },
      {
        title: "Payment Systems",
        desc: "Secure payment integrations.",
        icon: Shield,
      },
      {
        title: "Sales Optimization",
        desc: "Increase conversions and revenue.",
        icon: TrendingUp,
      },
    ],
    capabilitiesTitle: "E-Commerce",
    capabilitiesHighlight: "Solutions",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070",
    processSubTitle: "Our E-Commerce Process",
    processTitle: "Build Your Online Empire",
    processHighlight: "Today",
    processImage:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2070",
    processDesc:
      "We create scalable online shopping experiences designed to maximize sales and conversions.",
    processFeatures: [
      "Store Strategy",
      "Custom Design",
      "Payment Integration",
      "Launch & Marketing",
    ],
    showcase: {
      title: "E-Commerce Projects",
      bgImage:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070",
      projects: [
        {
          slug: "shopify-store",
          title: "Shopify Store Development",
          desc: "Complete Shopify store setup with custom themes and apps.",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
          tech: ["Shopify", "Liquid", "Shopify Apps", "Stripe"],
          features: [
            "Custom Theme",
            "Payment Gateway",
            "Product Management",
            "SEO Optimization",
            "Mobile Responsive",
          ],
          overview:
            "Launch a professional Shopify store that drives sales and provides seamless shopping experience.",
          results: [
            "Faster Launch",
            "Higher Conversions",
            "Better User Experience",
          ],
        },
        {
          slug: "woocommerce-store",
          title: "WooCommerce Store",
          desc: "Custom WordPress-based e-commerce stores with WooCommerce.",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999",
          tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
          features: [
            "Product Catalogs",
            "Secure Checkout",
            "Inventory Management",
            "Shipping Options",
            "Coupon System",
          ],
          overview:
            "Build a flexible and scalable WooCommerce store that grows with your business.",
          results: ["Full Control", "Cost Effective", "Easy Management"],
        },
        {
          slug: "ecommerce-dashboard",
          title: "E-Commerce Analytics Dashboard",
          desc: "Real-time sales and inventory tracking dashboard for online stores.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: ["React", "Node.js", "Chart.js", "MongoDB"],
          features: [
            "Sales Analytics",
            "Inventory Tracking",
            "Customer Insights",
            "Order Management",
            "Revenue Reports",
          ],
          overview:
            "Get complete visibility of your e-commerce operations with our custom analytics dashboard.",
          results: [
            "Better Decisions",
            "Real-time Insights",
            "Increased Efficiency",
          ],
        },
      ],
    },
    blogTitle: "E-Commerce Insights",
    blogDescription: "Tips and strategies for online store success",
    blogPosts: [
      {
        title: "7 Ways to Increase Conversion Rate",
        category: "Conversion",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
        description:
          "Learn proven strategies to boost your e-commerce conversion rates.",
        views: "3.2k",
        author: "Usman Ali",
      },
    ],
    testimonials: [
      {
        quote:
          "Our online sales doubled after the new store launch. Highly recommended!",
        name: "Usman Ali",
        designation: "Founder @ StyleHub",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374",
      },
    ],
    faqs: [
      {
        question: "Which platforms do you use?",
        answer: "We work with Shopify, WooCommerce, and custom solutions.",
      },
      {
        question: "How long does store setup take?",
        answer: "A standard store takes 3-5 weeks to launch.",
      },
    ],
    roadmap: {
      title: "E-Commerce Roadmap",
      description: "Your journey to a successful online store",
      steps: [
        {
          title: "Product Strategy",
          description: "Define your products and target audience.",
          icon: Target,
        },
        {
          title: "Store Design",
          description: "Create an engaging store design.",
          icon: Palette,
        },
        {
          title: "Integration",
          description: "Set up payments and shipping.",
          icon: Settings,
        },
        {
          title: "Launch & Scale",
          description: "Launch and optimize for growth.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Launch Your Store",
      description: "Start selling online today",
      steps: [
        {
          title: "Free Consultation",
          description: "Discuss your e-commerce vision with our experts.",
        },
        {
          title: "Store Setup",
          description: "We build your complete online store.",
        },
        {
          title: "Start Selling",
          description: "Launch and start generating sales.",
        },
      ],
      buttonText: "Start Your Store",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Start Selling Online?",
    ctaButton: "Get a Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070",
  },

  // 3. Digital Marketing
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "SEO, Google Ads & Meta Ads for business growth.",
    icon: Search,
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    heroTitle: "Data-Driven Digital Marketing",
    heroDesc:
      "Grow your business with strategic SEO, targeted Meta Ads, and high-ROI Google advertising campaigns.",
    sectionTitle: "Growth Focused Digital Marketing",
    sectionDesc:
      "Increase traffic, leads, and revenue with smart marketing campaigns.",
    sectionImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074",
    tabs: [
      {
        title: "SEO",
        content: {
          heading: "Search Engine Optimization",
          desc: "Rank higher on Google with modern SEO strategies.",
          points: [
            "On Page SEO",
            "Technical SEO",
            "Keyword Research",
            "Link Building",
          ],
        },
      },
      {
        title: "Meta Ads",
        content: {
          heading: "Facebook & Instagram Ads",
          desc: "Targeted ad campaigns for conversions.",
          points: [
            "Audience Targeting",
            "Retargeting Ads",
            "Campaign Optimization",
            "Lead Generation",
          ],
        },
      },
      {
        title: "Google Ads",
        content: {
          heading: "Google Advertising",
          desc: "Search and display ads for fast business growth.",
          points: [
            "Search Ads",
            "Display Ads",
            "Shopping Ads",
            "Conversion Tracking",
          ],
        },
      },
      {
        title: "Analytics",
        content: {
          heading: "Analytics & Reporting",
          desc: "Track performance with detailed reports.",
          points: [
            "Google Analytics",
            "ROI Tracking",
            "Performance Reports",
            "Audience Insights",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "SEO Services",
        desc: "Increase search engine rankings.",
        icon: Search,
      },
      {
        title: "Meta Ads",
        desc: "Facebook & Instagram advertising.",
        icon: BarChart,
      },
      {
        title: "Google Ads",
        desc: "High-converting ad campaigns.",
        icon: Target,
      },
      {
        title: "Analytics",
        desc: "Data-driven marketing insights.",
        icon: Eye,
      },
    ],
    capabilitiesTitle: "Marketing",
    capabilitiesHighlight: "Excellence",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    processSubTitle: "Our Marketing Process",
    processTitle: "Drive Growth Through",
    processHighlight: "Data",
    processImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
    processDesc:
      "We build data-driven marketing campaigns that increase traffic and sales.",
    processFeatures: [
      "Market Research",
      "Campaign Strategy",
      "Execution & Testing",
      "Optimization & Scaling",
    ],
    showcase: {
      title: "Marketing Campaigns",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      projects: [
        {
          slug: "seo-services",
          title: "SEO Services",
          desc: "Complete SEO packages to rank higher on search engines.",
          image:
            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070",
          tech: ["Ahrefs", "SEMrush", "Google Search Console", "Yoast SEO"],
          features: [
            "Keyword Research",
            "On-page SEO",
            "Technical SEO",
            "Link Building",
            "Local SEO",
          ],
          overview:
            "Rank higher, drive more traffic, and grow your business with our comprehensive SEO services.",
          results: ["Higher Rankings", "More Organic Traffic", "Better ROI"],
        },
        {
          slug: "meta-ads",
          title: "Meta Ads",
          desc: "Targeted advertising campaigns on Facebook and Instagram.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: ["Meta Ads Manager", "Pixel Setup", "Custom Audiences"],
          features: [
            "Audience Targeting",
            "Retargeting",
            "Lead Generation",
            "Conversion Campaigns",
            "A/B Testing",
          ],
          overview:
            "Reach your ideal customers with precision-targeted Meta advertising campaigns.",
          results: [
            "Lower Cost Per Lead",
            "Higher Conversion Rates",
            "Brand Awareness",
          ],
        },
        {
          slug: "google-ads",
          title: "Google Ads Management",
          desc: "Professional Google Ads campaign management for maximum ROI.",
          image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
          tech: ["Google Ads", "Google Analytics", "Keyword Planner"],
          features: [
            "Search Ads",
            "Display Ads",
            "Shopping Ads",
            "YouTube Ads",
            "Remarketing",
          ],
          overview:
            "Get found by customers actively searching for your products or services with Google Ads.",
          results: ["Immediate Traffic", "High Intent Leads", "Measurable ROI"],
        },
      ],
    },
    blogTitle: "Marketing Insights",
    blogDescription: "Latest digital marketing trends and strategies",
    blogPosts: [
      {
        title: "SEO Trends for 2024",
        category: "SEO",
        readTime: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070",
        description:
          "Stay ahead with the latest SEO trends and algorithm updates.",
        views: "4.1k",
        author: "Bilal Ahmed",
      },
    ],
    testimonials: [
      {
        quote:
          "Our leads increased massively after running Google Ads with them.",
        name: "Bilal Ahmed",
        designation: "CEO @ Growthify",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take?",
        answer: "SEO usually takes 3–6 months for strong results.",
      },
      {
        question: "What is your ad spend minimum?",
        answer: "We work with budgets starting from $500/month.",
      },
    ],
    roadmap: {
      title: "Marketing Roadmap",
      description: "Your path to digital growth",
      steps: [
        {
          title: "Audit & Analysis",
          description: "Comprehensive marketing audit.",
          icon: Eye,
        },
        {
          title: "Strategy Development",
          description: "Create custom marketing strategy.",
          icon: Target,
        },
        {
          title: "Campaign Execution",
          description: "Launch and manage campaigns.",
          icon: Rocket,
        },
        {
          title: "Reporting & Optimization",
          description: "Track and optimize performance.",
          icon: TrendingUp,
        },
      ],
    },
    nextSteps: {
      title: "Grow Your Business",
      description: "Start your marketing journey",
      steps: [
        {
          title: "Free Marketing Audit",
          description:
            "Get a comprehensive analysis of your current marketing.",
        },
        {
          title: "Custom Strategy",
          description: "Receive a tailored marketing plan.",
        },
        {
          title: "Scale Your Business",
          description: "Launch campaigns and watch your business grow.",
        },
      ],
      buttonText: "Start Growing",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Grow Your Business?",
    ctaButton: "Get a Free Audit",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
  },

  // 4. Tool Development
  {
    slug: "tool-development",
    title: "Tool Development",
    desc: "Custom software tools and automation solutions.",
    icon: Wrench,
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    heroTitle: "Custom Tool Development",
    heroDesc:
      "Build powerful custom tools and automation systems to streamline your business operations and boost productivity.",
    sectionTitle: "Custom Tool Development Solutions",
    sectionDesc:
      "We build tailored software tools that solve complex business challenges.",
    sectionImage:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070",
    tabs: [
      {
        title: "Automation",
        content: {
          heading: "Business Automation",
          desc: "Streamline workflows with custom automation tools.",
          points: [
            "Workflow Automation",
            "Data Processing",
            "Report Generation",
            "Task Scheduling",
          ],
        },
      },
      {
        title: "Dashboards",
        content: {
          heading: "Analytics Dashboards",
          desc: "Real-time data visualization and reporting.",
          points: [
            "Custom Dashboards",
            "Data Visualization",
            "KPI Tracking",
            "Real-time Updates",
          ],
        },
      },
      {
        title: "APIs",
        content: {
          heading: "API Development",
          desc: "Build robust and scalable APIs.",
          points: ["REST APIs", "GraphQL", "API Documentation", "Security"],
        },
      },
      {
        title: "Integration",
        content: {
          heading: "Third-party Integration",
          desc: "Connect your tools seamlessly.",
          points: [
            "CRM Integration",
            "ERP Integration",
            "Payment Gateways",
            "Email Services",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Tools",
        desc: "Tailored software solutions.",
        icon: Settings,
      },
      { title: "Automation", desc: "Streamlined workflows.", icon: Zap },
      { title: "Dashboards", desc: "Real-time analytics.", icon: BarChart },
      { title: "APIs", desc: "Scalable integrations.", icon: Database },
    ],
    capabilitiesTitle: "Tool Development",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070",
    processSubTitle: "Our Development Process",
    processTitle: "Build Powerful Tools",
    processHighlight: "That Work",
    processImage:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070",
    processDesc:
      "We create custom tools that solve real business problems efficiently.",
    processFeatures: [
      "Requirements Analysis",
      "Architecture Design",
      "Development & Testing",
      "Deployment & Training",
    ],
    showcase: {
      title: "Tool Development Projects",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      projects: [
        {
          slug: "automation-tools",
          title: "Automation Tools",
          desc: "Custom automation solutions to streamline your business processes.",
          image:
            "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070",
          tech: ["Python", "Node.js", "Zapier", "Make.com"],
          features: [
            "Workflow Automation",
            "Data Processing",
            "Report Generation",
            "Task Scheduling",
            "Email Automation",
          ],
          overview:
            "Save time and reduce errors with custom automation tools built for your specific needs.",
          results: [
            "80% Time Savings",
            "Reduced Errors",
            "Improved Efficiency",
          ],
        },
        {
          slug: "custom-crm",
          title: "Custom CRM System",
          desc: "Tailored CRM software for your business needs.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: ["React", "Node.js", "MongoDB", "Express"],
          features: [
            "Contact Management",
            "Lead Tracking",
            "Sales Pipeline",
            "Email Integration",
            "Reporting",
          ],
          overview:
            "Manage your customers and leads effectively with a custom-built CRM system.",
          results: [
            "Better Customer Relationships",
            "Increased Sales",
            "Organized Data",
          ],
        },
        {
          slug: "data-visualization",
          title: "Data Visualization Dashboard",
          desc: "Interactive dashboards for data analysis and reporting.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: ["D3.js", "Chart.js", "React", "Python"],
          features: [
            "Real-time Charts",
            "Data Filters",
            "Export Options",
            "Custom Metrics",
            "Drill-down Reports",
          ],
          overview:
            "Transform your raw data into actionable insights with beautiful, interactive dashboards.",
          results: ["Better Insights", "Faster Decisions", "Data Clarity"],
        },
      ],
    },
    blogTitle: "Tool Development Insights",
    blogDescription: "Latest in custom software development",
    blogPosts: [
      {
        title: "How Automation Can Save Your Business Hours",
        category: "Automation",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        description:
          "Discover how custom automation tools can transform your business operations.",
        views: "1.5k",
        author: "Imran Ali",
      },
    ],
    testimonials: [
      {
        quote:
          "Their custom tool saved us countless hours of manual work each week.",
        name: "Imran Ali",
        designation: "Operations Director",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374",
      },
    ],
    faqs: [
      {
        question: "How long does custom tool development take?",
        answer: "Timeline varies based on complexity, typically 4-12 weeks.",
      },
      {
        question: "Do you provide maintenance?",
        answer: "Yes, we offer ongoing maintenance and support.",
      },
    ],
    roadmap: {
      title: "Tool Development Roadmap",
      description: "From idea to implementation",
      steps: [
        {
          title: "Discovery",
          description: "Understand your requirements.",
          icon: Target,
        },
        {
          title: "Design",
          description: "Architecture and UI/UX design.",
          icon: Palette,
        },
        {
          title: "Development",
          description: "Build and test your tool.",
          icon: Code,
        },
        {
          title: "Deployment",
          description: "Launch and provide training.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Build Your Custom Tool",
      description: "Start your development journey",
      steps: [
        {
          title: "Share Your Requirements",
          description: "Tell us about the tool you need.",
        },
        {
          title: "Get a Custom Quote",
          description: "Receive a detailed development plan.",
        },
        {
          title: "Launch Your Tool",
          description: "Deploy and start using your custom solution.",
        },
      ],
      buttonText: "Discuss Your Project",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Build Your Custom Tool?",
    ctaButton: "Contact Us",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  },

  // 5. AI & Machine Learning
  {
    slug: "python-ml-ai",
    title: "AI & Machine Learning",
    desc: "Python, ML and AI solutions for intelligent automation.",
    icon: BrainCircuit,
    heroImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070",
    heroTitle: "AI & Machine Learning Solutions",
    heroDesc:
      "Leverage the power of Python, AI, and Machine Learning to automate processes and gain valuable insights from your data.",
    sectionTitle: "Intelligent AI & ML Solutions",
    sectionDesc:
      "Transform your business with cutting-edge artificial intelligence and machine learning.",
    sectionImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    tabs: [
      {
        title: "Machine Learning",
        content: {
          heading: "Custom ML Models",
          desc: "Build predictive models for your business.",
          points: [
            "Predictive Analytics",
            "Classification Models",
            "Regression Analysis",
            "Model Training",
          ],
        },
      },
      {
        title: "AI Automation",
        content: {
          heading: "Intelligent Automation",
          desc: "Automate complex tasks with AI.",
          points: [
            "Process Automation",
            "Decision Making",
            "Pattern Recognition",
            "Data Extraction",
          ],
        },
      },
      {
        title: "Data Science",
        content: {
          heading: "Data Analysis",
          desc: "Extract insights from your data.",
          points: [
            "Data Visualization",
            "Statistical Analysis",
            "Data Cleaning",
            "Reporting",
          ],
        },
      },
      {
        title: "NLP",
        content: {
          heading: "Natural Language Processing",
          desc: "Text analysis and processing.",
          points: [
            "Sentiment Analysis",
            "Chatbots",
            "Text Classification",
            "Language Processing",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Machine Learning",
        desc: "Custom predictive models.",
        icon: BrainCircuit,
      },
      {
        title: "AI Automation",
        desc: "Intelligent process automation.",
        icon: Zap,
      },
      { title: "Data Science", desc: "Data-driven insights.", icon: Database },
      { title: "NLP", desc: "Text and language processing.", icon: Search },
    ],
    capabilitiesTitle: "AI & ML",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    processSubTitle: "Our AI Process",
    processTitle: "Intelligence That",
    processHighlight: "Transforms",
    processImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    processDesc:
      "We build intelligent systems that learn and adapt to your business needs.",
    processFeatures: [
      "Data Collection",
      "Model Development",
      "Training & Testing",
      "Deployment & Monitoring",
    ],
    showcase: {
      title: "AI & ML Projects",
      bgImage:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070",
      projects: [
        {
          slug: "predictive-analytics",
          title: "Predictive Analytics",
          desc: "Forecast trends and make data-driven decisions with ML models.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
          features: [
            "Sales Forecasting",
            "Demand Prediction",
            "Risk Assessment",
            "Customer Churn Prediction",
            "Trend Analysis",
          ],
          overview:
            "Use historical data to predict future outcomes and stay ahead of the competition.",
          results: ["Better Planning", "Reduced Risk", "Competitive Advantage"],
        },
        {
          slug: "chatbot-development",
          title: "AI Chatbot Development",
          desc: "Intelligent chatbots for customer support and engagement.",
          image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070",
          tech: ["Python", "Rasa", "Dialogflow", "OpenAI", "LangChain"],
          features: [
            "Natural Language Processing",
            "24/7 Support",
            "Multi-language",
            "Lead Generation",
            "FAQ Automation",
          ],
          overview:
            "Provide instant customer support and engagement with AI-powered chatbots.",
          results: [
            "Faster Response Times",
            "Lower Support Costs",
            "Higher Satisfaction",
          ],
        },
        {
          slug: "image-recognition",
          title: "Image Recognition Systems",
          desc: "Computer vision solutions for image analysis and processing.",
          image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070",
          tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLO"],
          features: [
            "Object Detection",
            "Face Recognition",
            "Image Classification",
            "OCR",
            "Visual Search",
          ],
          overview:
            "Automate visual tasks with cutting-edge computer vision technology.",
          results: [
            "Automated Processing",
            "High Accuracy",
            "Scalable Solutions",
          ],
        },
      ],
    },
    blogTitle: "AI & ML Insights",
    blogDescription: "Latest developments in artificial intelligence",
    blogPosts: [
      {
        title: "How AI is Transforming Business",
        category: "AI",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
        description:
          "Explore how artificial intelligence is reshaping modern business operations.",
        views: "5.2k",
        author: "Dr. Sara Ahmed",
      },
    ],
    testimonials: [
      {
        quote: "Their AI solution gave us insights we never thought possible.",
        name: "Dr. Sara Ahmed",
        designation: "CTO @ DataTech",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374",
      },
    ],
    faqs: [
      {
        question: "What data do I need for ML?",
        answer:
          "We can work with various types of structured and unstructured data.",
      },
      {
        question: "How accurate are the models?",
        answer: "We aim for 85-95% accuracy depending on data quality.",
      },
    ],
    roadmap: {
      title: "AI Implementation Roadmap",
      description: "Your journey to intelligent systems",
      steps: [
        {
          title: "Data Assessment",
          description: "Evaluate your data readiness.",
          icon: Database,
        },
        {
          title: "Model Selection",
          description: "Choose the right ML approach.",
          icon: BrainCircuit,
        },
        {
          title: "Development",
          description: "Build and train models.",
          icon: Code,
        },
        {
          title: "Integration",
          description: "Deploy and monitor AI systems.",
          icon: Settings,
        },
      ],
    },
    nextSteps: {
      title: "Start Your AI Journey",
      description: "Transform your business with AI",
      steps: [
        {
          title: "AI Consultation",
          description: "Discuss your AI opportunities.",
        },
        {
          title: "Feasibility Study",
          description: "We analyze your data and use cases.",
        },
        { title: "Implement AI", description: "Deploy intelligent solutions." },
      ],
      buttonText: "Explore AI Solutions",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Embrace AI?",
    ctaButton: "Talk to an AI Expert",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070",
  },

  // 6. Graphic Design
  {
    slug: "graphic-design",
    title: "Graphic Design",
    desc: "Creative branding and visual design services.",
    icon: Palette,
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    heroTitle: "Creative Graphic Design",
    heroDesc:
      "Stand out with stunning visual designs that capture your brand identity and engage your audience.",
    sectionTitle: "Professional Graphic Design",
    sectionDesc: "We create visual identities that leave lasting impressions.",
    sectionImage:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
    tabs: [
      {
        title: "Branding",
        content: {
          heading: "Brand Identity",
          desc: "Create a memorable brand identity.",
          points: [
            "Logo Design",
            "Brand Guidelines",
            "Color Psychology",
            "Typography",
          ],
        },
      },
      {
        title: "Print Design",
        content: {
          heading: "Print Materials",
          desc: "Professional print design services.",
          points: ["Brochures", "Business Cards", "Posters", "Packaging"],
        },
      },
      {
        title: "Digital Design",
        content: {
          heading: "Digital Graphics",
          desc: "Engaging digital visuals.",
          points: [
            "Social Media Graphics",
            "Web Banners",
            "Email Templates",
            "Digital Ads",
          ],
        },
      },
      {
        title: "Illustration",
        content: {
          heading: "Custom Illustrations",
          desc: "Unique illustrations for your brand.",
          points: ["Character Design", "Infographics", "Icons", "Custom Art"],
        },
      },
    ],
    capabilities: [
      { title: "Branding", desc: "Complete brand identity.", icon: Award },
      {
        title: "Print Design",
        desc: "Professional print materials.",
        icon: HeartHandshake,
      },
      {
        title: "Digital Design",
        desc: "Engaging digital graphics.",
        icon: Globe,
      },
      { title: "Illustration", desc: "Custom artwork.", icon: Palette },
    ],
    capabilitiesTitle: "Design",
    capabilitiesHighlight: "Services",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    processSubTitle: "Our Design Process",
    processTitle: "Creativity That",
    processHighlight: "Inspires",
    processImage:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
    processDesc: "We create visuals that tell your brand's story effectively.",
    processFeatures: [
      "Discovery",
      "Concept Development",
      "Design & Refinement",
      "Final Delivery",
    ],
    showcase: {
      title: "Design Projects",
      bgImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
      projects: [
        {
          slug: "logo-design",
          title: "Logo Design",
          desc: "Unique, memorable logo designs that represent your brand identity.",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
          tech: ["Adobe Illustrator", "Photoshop", "Figma"],
          features: [
            "Custom Concepts",
            "Vector Files",
            "Brand Colors",
            "Multiple Revisions",
            "Logo Guidelines",
          ],
          overview:
            "Get a professional logo that captures your brand's essence and makes a lasting impression.",
          results: [
            "Brand Recognition",
            "Professional Image",
            "Versatile Usage",
          ],
        },
        {
          slug: "social-media-graphics",
          title: "Social Media Graphics",
          desc: "Engaging graphics for all social media platforms.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: ["Photoshop", "Canva", "Illustrator"],
          features: [
            "Instagram Posts",
            "Facebook Covers",
            "LinkedIn Banners",
            "Twitter Headers",
            "Story Templates",
          ],
          overview:
            "Stand out on social media with professionally designed graphics that drive engagement.",
          results: [
            "Higher Engagement",
            "Consistent Branding",
            "More Followers",
          ],
        },
        {
          slug: "brand-identity",
          title: "Complete Brand Identity",
          desc: "Full brand identity package including logos, colors, typography, and guidelines.",
          image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
          tech: ["Illustrator", "Photoshop", "InDesign"],
          features: [
            "Logo Suite",
            "Color Palette",
            "Typography",
            "Brand Guidelines",
            "Stationery Design",
          ],
          overview:
            "Build a cohesive brand identity that communicates your values and attracts your target audience.",
          results: [
            "Brand Consistency",
            "Professional Image",
            "Market Differentiation",
          ],
        },
      ],
    },
    blogTitle: "Design Insights",
    blogDescription: "Latest trends in graphic design",
    blogPosts: [
      {
        title: "2024 Graphic Design Trends",
        category: "Trends",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
        description: "Discover the top graphic design trends shaping 2024.",
        views: "2.8k",
        author: "Fatima Khan",
      },
    ],
    testimonials: [
      {
        quote: "Their design work elevated our brand to a whole new level.",
        name: "Fatima Khan",
        designation: "Creative Director",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1374",
      },
    ],
    faqs: [
      {
        question: "How many revisions do you offer?",
        answer: "We offer unlimited revisions until you're satisfied.",
      },
      {
        question: "What file formats do you provide?",
        answer: "AI, EPS, PSD, PNG, JPG, SVG, and more.",
      },
    ],
    roadmap: {
      title: "Design Roadmap",
      description: "From concept to creation",
      steps: [
        {
          title: "Brief",
          description: "Understand your vision.",
          icon: Target,
        },
        {
          title: "Mood Board",
          description: "Explore creative directions.",
          icon: Palette,
        },
        {
          title: "Design",
          description: "Create stunning visuals.",
          icon: Sparkles,
        },
        {
          title: "Delivery",
          description: "Finalize and deliver assets.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Design Project",
      description: "Bring your vision to life",
      steps: [
        {
          title: "Share Your Vision",
          description: "Tell us about your design needs.",
        },
        {
          title: "Get a Quote",
          description: "Receive a custom design proposal.",
        },
        {
          title: "Receive Your Designs",
          description: "Get stunning designs delivered.",
        },
      ],
      buttonText: "Start Designing",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Transform Your Brand?",
    ctaButton: "Get a Design Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
  },

  // 7. Video Editing
  {
    slug: "video-editing",
    title: "Video Editing",
    desc: "Professional video editing and post-production services.",
    icon: Video,
    heroImage:
      "https://images.unsplash.com/photo-1536240474400-b6c8e6b1c6e5?q=80&w=2070",
    heroTitle: "Professional Video Editing",
    heroDesc:
      "Transform your raw footage into captivating videos that tell your story and engage your audience.",
    sectionTitle: "Professional Video Editing Services",
    sectionDesc: "We create compelling video content that drives engagement.",
    sectionImage:
      "https://images.unsplash.com/photo-1574717024453-3540568c7ec1?q=80&w=2070",
    tabs: [
      {
        title: "Editing",
        content: {
          heading: "Video Editing",
          desc: "Professional video editing services.",
          points: [
            "Cutting & Trimming",
            "Color Grading",
            "Audio Enhancement",
            "Transitions",
          ],
        },
      },
      {
        title: "Motion Graphics",
        content: {
          heading: "Motion Graphics",
          desc: "Engaging animated graphics.",
          points: [
            "Title Sequences",
            "Lower Thirds",
            "Explainer Videos",
            "Logo Animation",
          ],
        },
      },
      {
        title: "VFX",
        content: {
          heading: "Visual Effects",
          desc: "Stunning visual effects.",
          points: [
            "Green Screen",
            "Compositing",
            "Special Effects",
            "3D Integration",
          ],
        },
      },
      {
        title: "Social Media",
        content: {
          heading: "Social Media Videos",
          desc: "Optimized for social platforms.",
          points: [
            "Instagram Reels",
            "YouTube Videos",
            "TikTok Content",
            "Facebook Ads",
          ],
        },
      },
    ],
    capabilities: [
      { title: "Editing", desc: "Professional video editing.", icon: Video },
      { title: "Motion Graphics", desc: "Animated graphics.", icon: Sparkles },
      { title: "VFX", desc: "Visual effects.", icon: Zap },
      {
        title: "Social Media",
        desc: "Platform-optimized content.",
        icon: Globe,
      },
    ],
    capabilitiesTitle: "Video",
    capabilitiesHighlight: "Production",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1536240474400-b6c8e6b1c6e5?q=80&w=2070",
    processSubTitle: "Our Editing Process",
    processTitle: "Stories That",
    processHighlight: "Captivate",
    processImage:
      "https://images.unsplash.com/photo-1574717024453-3540568c7ec1?q=80&w=2070",
    processDesc: "We transform raw footage into compelling visual stories.",
    processFeatures: [
      "Raw Footage Review",
      "Editing & Assembly",
      "Effects & Color",
      "Final Delivery",
    ],
    showcase: {
      title: "Video Projects",
      bgImage:
        "https://images.unsplash.com/photo-1536240474400-b6c8e6b1c6e5?q=80&w=2070",
      projects: [
        {
          slug: "youtube-editing",
          title: "YouTube Video Editing",
          desc: "Professional editing for YouTube content creators.",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070",
          tech: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
          features: [
            "Custom Intros/Outros",
            "B-Roll Integration",
            "Background Music",
            "Captions",
            "End Screens",
          ],
          overview:
            "Keep your audience engaged with professionally edited YouTube videos that stand out.",
          results: ["Higher Retention", "More Subscribers", "Increased Views"],
        },
        {
          slug: "social-media-videos",
          title: "Social Media Video Editing",
          desc: "Short-form video editing for TikTok, Reels, and Shorts.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: ["Premiere Pro", "CapCut", "After Effects"],
          features: [
            "Trendy Effects",
            "Captions",
            "Fast Pacing",
            "Music Sync",
            "Vertical Format",
          ],
          overview:
            "Create viral-worthy short-form content optimized for social media algorithms.",
          results: ["Viral Potential", "Higher Engagement", "Brand Growth"],
        },
        {
          slug: "corporate-video",
          title: "Corporate Video Editing",
          desc: "Professional editing for corporate and business videos.",
          image:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070",
          tech: ["Premiere Pro", "After Effects", "Audition"],
          features: [
            "Business Style",
            "Lower Thirds",
            "Company Graphics",
            "Clean Cuts",
            "Professional Polish",
          ],
          overview:
            "Present your business professionally with polished corporate video content.",
          results: [
            "Professional Image",
            "Better Communication",
            "Increased Trust",
          ],
        },
      ],
    },
    blogTitle: "Video Insights",
    blogDescription: "Latest in video production",
    blogPosts: [
      {
        title: "Video Marketing Trends 2024",
        category: "Marketing",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1536240474400-b6c8e6b1c6e5?q=80&w=2070",
        description: "Stay ahead with the latest video marketing trends.",
        views: "3.1k",
        author: "Omar Hussain",
      },
    ],
    testimonials: [
      {
        quote:
          "Their video editing transformed our raw footage into professional content.",
        name: "Omar Hussain",
        designation: "Marketing Manager",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374",
      },
    ],
    faqs: [
      {
        question: "What video formats do you work with?",
        answer: "We work with all major video formats.",
      },
      {
        question: "How long does editing take?",
        answer: "Turnaround time varies from 3-10 business days.",
      },
    ],
    roadmap: {
      title: "Video Production Roadmap",
      description: "From raw footage to final cut",
      steps: [
        {
          title: "Review",
          description: "Analyze raw footage.",
          icon: Eye,
        },
        {
          title: "Edit",
          description: "Cut and assemble sequences.",
          icon: Video,
        },
        {
          title: "Enhance",
          description: "Add effects and color.",
          icon: Sparkles,
        },
        {
          title: "Deliver",
          description: "Export and deliver final video.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Video Project",
      description: "Bring your story to life",
      steps: [
        {
          title: "Share Your Footage",
          description: "Send us your raw video files.",
        },
        {
          title: "Review & Edit",
          description: "We edit and enhance your video.",
        },
        {
          title: "Receive Final Video",
          description: "Get your professionally edited video.",
        },
      ],
      buttonText: "Start Editing",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Transform Your Videos?",
    ctaButton: "Get a Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1536240474400-b6c8e6b1c6e5?q=80&w=2070",
  },

  // 8. WordPress Website
  {
    slug: "wordpress-website",
    title: "WordPress Website",
    desc: "Custom WordPress development and design services.",
    icon: Globe,
    heroImage:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
    heroTitle: "Custom WordPress Development",
    heroDesc:
      "Get a beautiful, fast, and secure WordPress website that's easy to manage and optimized for growth.",
    sectionTitle: "Professional WordPress Solutions",
    sectionDesc:
      "We build custom WordPress websites that combine design excellence with powerful functionality.",
    sectionImage:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
    tabs: [
      {
        title: "Custom Themes",
        content: {
          heading: "Custom Theme Development",
          desc: "Unique WordPress themes tailored to your brand.",
          points: [
            "Custom Design",
            "Responsive Layouts",
            "Optimized Code",
            "Brand Integration",
          ],
        },
      },
      {
        title: "Plugins",
        content: {
          heading: "Plugin Development",
          desc: "Custom functionality with plugins.",
          points: [
            "Custom Plugins",
            "WooCommerce Extensions",
            "API Integrations",
            "Performance Optimization",
          ],
        },
      },
      {
        title: "Maintenance",
        content: {
          heading: "Site Maintenance",
          desc: "Keep your WordPress site secure and updated.",
          points: [
            "Security Updates",
            "Backup Solutions",
            "Performance Monitoring",
            "Bug Fixes",
          ],
        },
      },
      {
        title: "Speed",
        content: {
          heading: "Speed Optimization",
          desc: "Fast-loading WordPress sites.",
          points: [
            "Caching Solutions",
            "Image Optimization",
            "Code Minification",
            "CDN Setup",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Themes",
        desc: "Unique WordPress designs.",
        icon: Palette,
      },
      { title: "Plugins", desc: "Custom functionality.", icon: Settings },
      { title: "Maintenance", desc: "Ongoing support.", icon: HeartHandshake },
      { title: "Speed", desc: "Optimized performance.", icon: Zap },
    ],
    capabilitiesTitle: "WordPress",
    capabilitiesHighlight: "Expertise",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
    processSubTitle: "Our WordPress Process",
    processTitle: "Build Your WordPress",
    processHighlight: "Vision",
    processImage:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
    processDesc:
      "We create WordPress websites that are beautiful, functional, and easy to manage.",
    processFeatures: [
      "Discovery",
      "Design & Development",
      "Content Integration",
      "Launch & Training",
    ],
    showcase: {
      title: "WordPress Projects",
      bgImage:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
      projects: [
        {
          slug: "custom-wordpress-theme",
          title: "Custom WordPress Theme",
          desc: "Unique, custom-designed WordPress themes tailored to your brand.",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
          tech: ["PHP", "WordPress", "CSS3", "JavaScript", "ACF"],
          features: [
            "Custom Design",
            "Responsive Layout",
            "Optimized Code",
            "SEO Ready",
            "Fast Loading",
          ],
          overview:
            "Get a completely custom WordPress theme that perfectly represents your brand and meets your needs.",
          results: [
            "Unique Brand Identity",
            "Better Performance",
            "Easy Management",
          ],
        },
        {
          slug: "wordpress-maintenance",
          title: "WordPress Maintenance",
          desc: "Ongoing maintenance, security, and support for WordPress sites.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: ["WordPress", "Security Plugins", "Backup Solutions"],
          features: [
            "Security Monitoring",
            "Regular Backups",
            "Plugin Updates",
            "Performance Optimization",
            "24/7 Support",
          ],
          overview:
            "Keep your WordPress site secure, fast, and up-to-date with our maintenance services.",
          results: ["Peace of Mind", "Reduced Downtime", "Enhanced Security"],
        },
        {
          slug: "elementor-design",
          title: "Elementor Website Design",
          desc: "Professional website design using Elementor page builder.",
          image:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
          tech: ["WordPress", "Elementor", "Elementor Pro", "CSS"],
          features: [
            "Drag & Drop",
            "Custom Widgets",
            "Dynamic Content",
            "Popups",
            "Forms",
          ],
          overview:
            "Get a professional WordPress site built with Elementor for easy management and stunning design.",
          results: ["Beautiful Design", "Easy Updates", "Fast Delivery"],
        },
      ],
    },
    blogTitle: "WordPress Insights",
    blogDescription: "Tips and tricks for WordPress success",
    blogPosts: [
      {
        title: "Essential WordPress Plugins for 2024",
        category: "WordPress",
        readTime: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
        description: "Discover the must-have plugins for your WordPress site.",
        views: "4.5k",
        author: "Hassan Raza",
      },
    ],
    testimonials: [
      {
        quote: "Our new WordPress site is fast, beautiful, and easy to manage.",
        name: "Hassan Raza",
        designation: "Business Owner",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374",
      },
    ],
    faqs: [
      {
        question: "Can you redesign my existing WordPress site?",
        answer: "Yes, we handle redesigns and migrations.",
      },
      {
        question: "Do you provide training?",
        answer: "Yes, we provide comprehensive training on managing your site.",
      },
    ],
    roadmap: {
      title: "WordPress Roadmap",
      description: "From concept to launch",
      steps: [
        {
          title: "Planning",
          description: "Define requirements.",
          icon: Target,
        },
        {
          title: "Design",
          description: "Create custom design.",
          icon: BsPalette2,
        },
        {
          title: "Development",
          description: "Build and integrate features.",
          icon: Code,
        },
        {
          title: "Launch",
          description: "Deploy and train.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Start Your WordPress Project",
      description: "Get your dream website today",
      steps: [
        {
          title: "Share Your Vision",
          description: "Tell us about your website needs.",
        },
        {
          title: "Design & Build",
          description: "We create your custom WordPress site.",
        },
        {
          title: "Launch & Grow",
          description: "Go live and start growing online.",
        },
      ],
      buttonText: "Start Your Website",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Launch Your WordPress Site?",
    ctaButton: "Get a Free Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
  },
];
