// ================= servicesData.js =================
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

// ─── REAL TESTIMONIAL PORTRAIT PHOTOS (Unsplash) ────────────────────────────
const T1 =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400"; // professional male 1
const T2 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"; // professional female 1
const T3 =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"; // professional male 2
const T4 =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"; // professional female 2
const T5 =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"; // professional male 3
const T6 =
  "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400"; // professional female 3
const T7 =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"; // professional male 4
const T8 =
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400"; // professional female 4

export const servicesData = [
  // ═══════════════════════════════════════════════════════════════
  // 1. WEB DEVELOPMENT
  // ═══════════════════════════════════════════════════════════════
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
        desc: "Modern websites tailored to your business goals, brand identity, and target audience for maximum impact.",
        icon: Globe,
      },
      {
        title: "Frontend Apps",
        desc: "Interactive, lightning-fast UI experiences built with React & Next.js for seamless user journeys.",
        icon: Laptop,
      },
      {
        title: "Backend APIs",
        desc: "Secure, scalable API systems powering your web and mobile applications with 99.9% uptime.",
        icon: Database,
      },
      {
        title: "SEO Optimization",
        desc: "Technically optimized structure and content strategy to rank higher and attract organic traffic.",
        icon: Search,
      },
    ],
    capabilitiesTitle: "Web Development",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    processSubTitle: "Our Development Process",
    processTitle: "From Concept to Launch",
    processHighlight: "Excellence",
    processImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
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
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
      projects: [
        {
          slug: "fundbox",
          title: "Fundbox – Business Credit Platform",
          desc: "Fundbox offers fast, easy access to business financing — lines of credit and term loans up to $250,000 — helping 500,000+ small businesses manage cash flow.",
          image:
            "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070",
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
          slug: "offdeal",
          title: "OffDeal – AI-Powered M&A for Small Business",
          desc: "AI-powered investment bank that helps small businesses ($5M–$100M revenue) sell faster and for 30% more — with zero upfront fees.",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
          tech: [
            "AI Buyer Matching",
            "M&A Advisory",
            "Competitive Auction",
            "Radical Ventures",
            "$12M Series A",
          ],
          features: [
            "15x More Buyers via AI Algorithm",
            "30% Higher Offers Through Auctions",
            "Initial Offers in Under 45 Days",
            "$0 Upfront Fees – Success-Based Only",
            "Dedicated M&A Advisor End-to-End",
          ],
          overview:
            "OffDeal is a modern AI-powered investment bank built for small businesses with $5M–$100M in revenue. OffDeal uses AI to match sellers with 1,000+ strategic buyers on average, runs competitive auctions to drive up offers by 30%, and delivers initial offers in under 45 days. Featured in CNBC, Financial Times, Forbes, and TechCrunch.",
          results: [
            "1,000+ Buyer Matches on Average",
            "30% Higher Sale Price",
            "Offers in <45 Days",
          ],
        },
        {
          slug: "human-interest",
          title: "Human Interest – 401(k) for Small Businesses",
          desc: "Affordable, full-service 401(k) and 403(b) retirement plans trusted by 40,000+ businesses and covering 1,000,000+ employees.",
          image:
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070",
          tech: [
            "401(k) Plans",
            "403(b) Plans",
            "Safe Harbor Plans",
            "Payroll Integration",
            "(k)ickstart®",
            "IRA Accounts",
          ],
          features: [
            "First 401(k) with 3% Cash Back on Contributions",
            "500+ Payroll Integrations (ADP, Gusto, QuickBooks & more)",
            "Full Compliance Testing & IRS Paperwork Handled",
            "Zero Transaction Fees & Low-Cost Funds",
            "Customizable Matching & Vesting at No Extra Cost",
          ],
          overview:
            "Human Interest is an affordable, full-service 401(k) and 403(b) provider founded in 2015 in San Francisco. Trusted by 40,000+ businesses covering 1,000,000+ employees, the platform handles payroll sync, contribution processing, compliance testing, and IRS filings automatically.",
          results: [
            "40,000+ Businesses Trust Human Interest",
            "1,000,000+ Employees Covered",
            "500+ Payroll Integrations",
          ],
        },
        {
          slug: "weave",
          title: "Weave – All-in-One Practice Communication Platform",
          desc: "AI-powered phone, texting, payments, and scheduling platform helping healthcare practices attract, engage, and retain patients.",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
          tech: [
            "AI Receptionist",
            "VoIP Phone System",
            "Two-Way Texting",
            "Text-to-Pay",
            "Digital Forms",
            "Online Scheduling",
          ],
          features: [
            "AI Receptionist – Books Appointments & Takes Payments Over Voice & Text",
            "Missed-Call Auto-Text to Capture Every Lead",
            "Automated Appointment Reminders & Recall Campaigns",
            "Text-to-Pay, Buy Now Pay Later & Online Bill Pay",
            "AI Call Intelligence – Sentiment Analysis & Revenue Opportunity Detection",
          ],
          overview:
            "Weave is an all-in-one communication and patient experience platform built for healthcare practices — dental, veterinary, optometry, and medical offices. It combines VoIP phone, AI texting, scheduling, payments, reviews, digital forms, and call intelligence into one unified platform. Weave's AI Receptionist answers calls, books appointments, and takes payments 24/7.",
          results: [
            "3x Faster Task Completion with Built-in AI",
            "125+ New Patients/Month for Top Practices",
            "50% Cost Reduction vs Multiple Separate Tools",
          ],
        },
      ],
    },
    blogTitle: "Web Development Insights",
    blogDescription: "Latest trends and best practices in web development",
    blogPosts: [
      {
        title: "Why Next.js is the Future of React Development",
        category: "React",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        description:
          "Discover why Next.js is becoming the go-to framework for modern web applications in 2025.",
        views: "2.5k",
        author: "Ali Raza",
      },
      {
        title: "Web Performance Optimization: The Complete 2025 Guide",
        category: "Performance",
        readTime: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        description:
          "Learn how to optimize your website for lightning-fast Core Web Vitals and better conversions.",
        views: "1.8k",
        author: "Sarah Khan",
      },
    ],
    testimonials: [
      {
        quote:
          "They built our web platform from scratch — fast, clean, and exactly what a growing startup needs. The attention to performance and scalability gave us a real edge from day one.",
        name: "Prashant Kumar",
        designation: "Founder & CEO, Fundbox",
        src: T1,
      },
      {
        quote:
          "Working with this team was a game changer. They delivered a sleek, high-performing web solution that perfectly matched the speed and precision we demand at OffDeal.",
        name: "Ori Eldarov",
        designation: "Co-Founder & CEO, OffDeal",
        src: T2,
      },
      {
        quote:
          "The team delivered a product that truly elevated our customer experience. Polished, reliable, and built with the kind of quality that reflects our brand values.",
        name: "Brett White",
        designation: "CEO & Board Director, Weave",
        src: T3,
      },
      {
        quote:
          "They understood our mission to make complex systems simple. The platform they built is intuitive, scalable, and has helped us serve our customers at Human Interest even better.",
        name: "Jeff Schneble",
        designation: "CEO, Human Interest",
        src: T4,
      },
    ],
    faqs: [
      {
        question: "How long does a website take?",
        answer:
          "A standard business website usually takes 2–6 weeks depending on complexity and feature requirements.",
      },
      {
        question: "Do you provide SEO optimization?",
        answer:
          "Yes, all websites are optimized for SEO and speed by default — including meta tags, schema markup, image compression, and Core Web Vitals.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "We primarily use React, Next.js, Tailwind CSS for frontend, and Node.js with MongoDB or PostgreSQL for backend. We choose the best stack based on your project needs.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes, we offer ongoing maintenance, bug fixes, and feature updates after launch to keep your site running smoothly.",
      },
    ],
    roadmap: {
      title: "Web Development Roadmap",
      description: "Our proven process for delivering exceptional websites",
      steps: [
        {
          title: "Discovery & Strategy",
          description:
            "We analyze your business goals, target audience, and competitors to create a comprehensive development roadmap.",
          icon: Target,
        },
        {
          title: "Design & Prototyping",
          description:
            "Create stunning UI/UX designs and interactive prototypes for your review before a single line of code is written.",
          icon: Palette,
        },
        {
          title: "Development",
          description:
            "Build your website using the latest technologies with clean, maintainable, and scalable code.",
          icon: Code,
        },
        {
          title: "Testing & QA",
          description:
            "Rigorous cross-browser and cross-device testing to ensure flawless performance before launch.",
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
            "Schedule a free 30-minute consultation to discuss your requirements and vision.",
        },
        {
          title: "Get a Custom Quote",
          description:
            "Receive a detailed proposal, timeline, and fixed-price quote for your project.",
        },
        {
          title: "Launch Your Website",
          description:
            "We build, test, and launch your website — then hand it over with full training.",
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

  // ═══════════════════════════════════════════════════════════════
  // 2. E-COMMERCE SOLUTIONS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce",
    desc: "Scalable online stores with modern shopping experiences.",
    icon: ShoppingCart,
    heroImage:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
    heroTitle: "High-Converting E-Commerce Stores",
    heroDesc:
      "Launch powerful online stores that drive sales and deliver exceptional shopping experiences. From Shopify to WooCommerce, we build e-commerce solutions that scale with your business.",
    sectionTitle: "Powerful E-Commerce Solutions",
    sectionDesc:
      "We create high-converting Shopify and WooCommerce stores with seamless payment integration, mobile-first design, and built-in marketing tools — everything you need to sell more online.",
    sectionImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
    tabs: [
      {
        title: "Store Setup",
        content: {
          heading: "E-Commerce Store Setup",
          desc: "Complete online store configuration from scratch — ready to sell on day one.",
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
          desc: "Secure, multi-currency payment gateways for smooth global transactions.",
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
          desc: "Data-driven UX improvements to turn more visitors into paying customers.",
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
          heading: "Store Growth & Marketing",
          desc: "End-to-end marketing systems designed to drive consistent revenue growth.",
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
        desc: "Custom Shopify stores with premium themes, apps, and integrations built to convert visitors into buyers.",
        icon: ShoppingCart,
      },
      {
        title: "WooCommerce",
        desc: "Flexible WooCommerce stores on WordPress with full control over design, pricing, and functionality.",
        icon: Globe,
      },
      {
        title: "Payment Systems",
        desc: "Secure multi-gateway payment integrations including Stripe, PayPal, JazzCash, and Easypaisa.",
        icon: Shield,
      },
      {
        title: "Sales Optimization",
        desc: "CRO strategies, A/B testing, and abandoned cart recovery to maximize your revenue per visitor.",
        icon: TrendingUp,
      },
    ],
    capabilitiesTitle: "E-Commerce",
    capabilitiesHighlight: "Solutions",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070",
    processSubTitle: "Our E-Commerce Process",
    processTitle: "Build Your Online Empire",
    processHighlight: "Today",
    processImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    processDesc:
      "We create scalable online shopping experiences designed to maximize sales and conversions from day one.",
    processFeatures: [
      "Store Strategy & Planning",
      "Custom Design & UX",
      "Payment & Shipping Integration",
      "Launch, Marketing & Growth",
    ],
    showcase: {
      title: "E-Commerce Projects",
      bgImage:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
      projects: [
        {
          // ─ REAL: Healf (UK Wellness Marketplace on Shopify)
          // Founders: Max Clarke & Lestat McCree | Founded: 2020
          // Results: 3x revenue in 2024, on track £100M in 2025, 5,000+ products, 400+ brands
          // Source: shopify.com/uk/case-studies/healf, techround.co.uk
          slug: "healf-shopify-store",
          title: "Healf – £100M Wellness Marketplace on Shopify",
          desc: "How brothers Max Clarke & Lestat McCree built one of the UK's fastest-growing health brands — from 40 brands to 5,000+ vetted products — entirely on Shopify.",
          image:
            "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2070",
          tech: [
            "Shopify Plus",
            "Klaviyo",
            "Shopify Collabs",
            "Snowball",
            "Bloggle",
            "Headless CMS",
          ],
          features: [
            "Custom Shopify Plus Storefront with Personalised Recommendations",
            "Subscription & Loyalty System via Shopify",
            "Affiliate Marketing Program via Shopify Collabs",
            "AI-Driven Product Discovery & Curation Engine",
            "Healf Source – Headless Educational Content Platform",
          ],
          overview:
            "Brothers Max Clarke and Lestat McCree founded Healf in 2020 after struggling with fragmented, untrustworthy wellness advice. They chose Shopify for its simplicity and scalability, launching with just 40 brands. Using Shopify's full ecosystem — from automated tagging and custom collection pages to Klaviyo email and Shopify Collabs affiliate programs — Healf scaled to 5,000+ vetted products across 400+ brands. They tripled revenue in 2024 alone and are on track to hit £100 million in annual sales in 2025, growing their team from 7 to 100+ employees in the process.",
          results: [
            "Revenue 3x in 2024 — On Track for £100M in 2025",
            "Product Catalog Grew 20x Since Launch",
            "Team Scaled: 7 → 100+ Employees",
          ],
        },
        {
          // ─ REAL: Beardbrand (Men's Grooming DTC on WooCommerce)
          // Founder: Eric Bandholz | Founded: 2012, Austin TX
          // Results: $30 → 7-figure bootstrapped business, 2M+ YouTube subscribers, in Target stores
          // Source: practicalecommerce.com, starterstory.com, failory.com
          slug: "beardbrand-woocommerce",
          title: "Beardbrand – 7-Figure Men's Grooming DTC on WooCommerce",
          desc: "Eric Bandholz bootstrapped Beardbrand from a $30 investment and a Tumblr blog to a multi-million dollar men's grooming brand on WooCommerce — with zero outside investors.",
          image:
            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070",
          tech: [
            "WordPress",
            "WooCommerce",
            "PHP",
            "MySQL",
            "Klaviyo",
            "Affiliate System",
          ],
          features: [
            "Full Custom DTC Product Catalog (Beard, Hair & Body Care)",
            "Secure Multi-gateway Checkout with No Transaction Fees",
            "Subscription & Wholesale Management System",
            "YouTube + Blog Content Integration for Organic Growth",
            "Retail & Affiliate Partner Management",
          ],
          overview:
            "Eric Bandholz quit his corporate finance job in 2012, grew a beard, and discovered an underserved community. He started Beardbrand as a $30 Tumblr blog and YouTube channel, then built a full WooCommerce DTC store selling premium beard and grooming products. Bootstrapped from day one with no outside investors, Beardbrand scaled to a 7-figure business with over 2 million YouTube subscribers. The brand now stocks in Target nationwide and has been featured in Forbes, GQ, The New York Times, and Wall Street Journal — proving that owning your platform beats renting space on Amazon.",
          results: [
            "$30 Investment → Multi-Million Dollar Bootstrapped Business",
            "2M+ YouTube Subscribers Driving Organic Sales",
            "Stocked in All Target Stores Nationwide",
          ],
        },
        {
          // ─ REAL: Bombay Shaving Company (Shopify Analytics + Migration)
          // Founder: Shantanu Deshpande (Co-Founder & CEO) | Founded: 2016
          // Results: 150% conversion uplift, 20x revenue, 50,000+ orders in 2 days, 7 brands
          // Source: shopify.com/in/case-studies/bombay-shaving-company
          slug: "bombay-shaving-analytics",
          title: "Bombay Shaving Company – 150% Conversion Uplift on Shopify",
          desc: "How Shantanu Deshpande's Bombay Shaving Company achieved 150% conversion rate uplift and 20x online revenue after migrating to Shopify Plus and building real-time analytics.",
          image:
            "https://images.unsplash.com/photo-1585232350576-d4523cb5b3f2?q=80&w=2070",
          tech: [
            "Shopify Plus",
            "Google Analytics 4",
            "Custom Dashboards",
            "Expansion Stores",
            "Shopify Flow",
          ],
          features: [
            "Real-time Sales & Inventory Analytics Dashboard",
            "20x Traffic Spike Handling (10,000+ Concurrent Users)",
            "7-Brand Unified Backend via Shopify Expansion Stores",
            "50,000+ Orders Processed in 2 Days During Mega-Sales",
            "Drop-off Tracking & Conversion Rate Benchmarking",
          ],
          overview:
            "Shantanu Deshpande co-founded Bombay Shaving Company in 2016 with a single premium shaving kit. As the brand expanded to 300+ SKUs, their Magento-based platform became a bottleneck — product pages took weeks to launch, and every update needed technical staff. After migrating to Shopify Plus in 2021 and building real-time analytics infrastructure, the company achieved a 150% conversion rate uplift. Today they process 50,000+ orders in just two days during monthly mega-sale events and operate 7 independent D2C brands (including Bombae) on a unified Shopify backend — making them India's 2nd largest shaving brand.",
          results: [
            "150% Conversion Rate Uplift vs Pre-Shopify Platform",
            "20x Revenue Increase on D2C Channel",
            "50,000+ Orders Processed in 2 Days Without Disruption",
          ],
        },
      ],
    },
    blogTitle: "E-Commerce Insights",
    blogDescription:
      "Real case studies and strategies for online store success",
    blogPosts: [
      {
        title:
          "How Healf Tripled Revenue in 2024 Using Shopify's Full Ecosystem",
        category: "Shopify",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2070",
        description:
          "Max Clarke and Lestat McCree's playbook: personalised recommendations, Shopify Collabs, and curated content that scaled Healf to a £100M wellness brand.",
        views: "4.1k",
        author: "Usman Ali",
      },
      {
        title: "Shopify vs WooCommerce: Real Data from Brands That Scaled",
        category: "Platforms",
        readTime: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
        description:
          "We analyzed Healf (Shopify), Beardbrand (WooCommerce), and Bombay Shaving (Shopify Plus) — here's what the real numbers say about platform choice in 2025.",
        views: "6.2k",
        author: "Sara Malik",
      },
    ],
    testimonials: [
      {
        // Lestat McCree, Co-Founder & CEO of Healf (real quote from Shopify case study)
        quote:
          "Data is a huge part of our business. Shopify makes it easy to get all the data we need in any format and visualise it so we can make the right decisions for our customers. In 2024 alone, we tripled our revenue.",
        name: "Lestat McCree",
        designation: "Co-Founder & CEO, Healf (UK Wellness Marketplace)",
        src: T5,
      },
      {
        // Eric Bandholz, Founder & CEO of Beardbrand (real quote from practicalecommerce.com)
        quote:
          "Build a brand and a vision that is bigger than the products themselves. Once you figure that out, the customers will follow — and you'll never need to rely on Amazon or anyone else.",
        name: "Eric Bandholz",
        designation: "Founder & CEO, Beardbrand (Austin, TX)",
        src: T7,
      },
      {
        // Shantanu Deshpande, Co-Founder & CEO of Bombay Shaving Company (real quote from Shopify)
        quote:
          "We wanted to focus on growth, not wrestle with our tech stack. After migrating to Shopify, we achieved a 150% conversion uplift and now process 50,000+ orders in just two days during our mega-sales.",
        name: "Shantanu Deshpande",
        designation: "Co-Founder & CEO, Bombay Shaving Company",
        src: T3,
      },
    ],
    faqs: [
      {
        question: "Which e-commerce platforms do you work with?",
        answer:
          "We specialize in Shopify, WooCommerce, and custom-built e-commerce solutions. We help you choose the right platform based on your budget, product type, and growth goals.",
      },
      {
        question: "How long does a store setup take?",
        answer:
          "A standard store with up to 50 products takes 3–5 weeks to launch. Larger stores or custom features may take 6–10 weeks.",
      },
      {
        question:
          "Can you migrate my existing store to Shopify or WooCommerce?",
        answer:
          "Yes, we handle full store migrations including products, customer data, orders, and SEO redirects with zero downtime.",
      },
      {
        question: "Do you set up local payment gateways for Pakistan?",
        answer:
          "Absolutely. We integrate JazzCash, Easypaisa, HBL Pay, and bank transfer options alongside international gateways like Stripe and PayPal.",
      },
    ],
    roadmap: {
      title: "E-Commerce Launch Roadmap",
      description:
        "Your clear path to a successful, revenue-generating online store",
      steps: [
        {
          title: "Product & Market Strategy",
          description:
            "Define your product catalog, target audience, pricing strategy, and platform selection before writing a single line of code.",
          icon: Target,
        },
        {
          title: "Store Design & UX",
          description:
            "Create a visually compelling, conversion-optimized store design that builds trust and encourages purchases.",
          icon: Palette,
        },
        {
          title: "Integration & Testing",
          description:
            "Set up payment gateways, shipping providers, tax rules, and thoroughly test every checkout flow.",
          icon: Settings,
        },
        {
          title: "Launch & Scale",
          description:
            "Go live, set up analytics tracking, and begin driving traffic through SEO, paid ads, and email campaigns.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Launch Your Store",
      description:
        "Start selling online — here's exactly how we make it happen",
      steps: [
        {
          title: "Free E-Commerce Consultation",
          description:
            "Tell us your products, budget, and goals — we'll recommend the best platform and strategy for you.",
        },
        {
          title: "Custom Store Build",
          description:
            "We design and develop your complete online store, set up payments, and load your products.",
        },
        {
          title: "Launch & Start Selling",
          description:
            "We launch your store, provide training, and set up marketing tools so you can start generating sales immediately.",
        },
      ],
      buttonText: "Start Your Store",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Start Selling Online?",
    ctaButton: "Get a Free Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. DIGITAL MARKETING
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "SEO, Google Ads & Meta Ads for business growth.",
    icon: Search,
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    heroTitle: "Data-Driven Digital Marketing",
    heroDesc:
      "Grow your business with strategic SEO, precision-targeted Meta Ads, and high-ROI Google advertising campaigns. Every strategy is backed by data, built for results.",
    sectionTitle: "Growth-Focused Digital Marketing",
    sectionDesc:
      "We don't just run ads — we build complete growth systems. From SEO foundations to paid advertising funnels, every campaign is engineered to increase traffic, generate quality leads, and maximize revenue.",
    sectionImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074",
    tabs: [
      {
        title: "SEO",
        content: {
          heading: "Search Engine Optimization",
          desc: "Rank higher on Google with proven, white-hat SEO strategies that drive long-term organic growth.",
          points: [
            "On-Page SEO",
            "Technical SEO Audits",
            "Keyword Research & Mapping",
            "Link Building & Authority",
          ],
        },
      },
      {
        title: "Meta Ads",
        content: {
          heading: "Facebook & Instagram Ads",
          desc: "Highly targeted ad campaigns across Meta platforms — designed for leads, sales, and brand growth.",
          points: [
            "Custom Audience Targeting",
            "Retargeting & Lookalike Ads",
            "Campaign Optimization",
            "Lead Generation Funnels",
          ],
        },
      },
      {
        title: "Google Ads",
        content: {
          heading: "Google Advertising",
          desc: "Capture high-intent buyers at the moment they search — with search, display, and shopping ads.",
          points: [
            "Search Ads",
            "Display & Remarketing Ads",
            "Google Shopping Ads",
            "Conversion Tracking & Optimization",
          ],
        },
      },
      {
        title: "Analytics",
        content: {
          heading: "Analytics & Performance Reporting",
          desc: "Full transparency on every campaign — know exactly where your money goes and what it returns.",
          points: [
            "Google Analytics 4 Setup",
            "ROI & ROAS Tracking",
            "Monthly Performance Reports",
            "Audience & Behavior Insights",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "SEO Services",
        desc: "Increase your organic search rankings and drive consistent, cost-free traffic from Google and Bing.",
        icon: Search,
      },
      {
        title: "Meta Ads",
        desc: "Facebook and Instagram advertising campaigns that reach your exact audience at the right moment.",
        icon: BarChart,
      },
      {
        title: "Google Ads",
        desc: "High-converting search and display ad campaigns with full conversion tracking and weekly optimization.",
        icon: Target,
      },
      {
        title: "Analytics & Reporting",
        desc: "Data-driven insights and clear monthly reports so you always know your marketing ROI.",
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
      "We build data-driven marketing systems — not one-off campaigns. Every strategy is built to compound over time and deliver predictable, scalable growth.",
    processFeatures: [
      "Market & Competitor Research",
      "Custom Campaign Strategy",
      "Execution & A/B Testing",
      "Optimization & Scaling",
    ],
    showcase: {
      title: "Marketing Campaigns",
      bgImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      projects: [
        {
          // ─ REAL: OneLittleWeb – SEO Traffic from 10.5M to 18.5M monthly visits (76% YoY growth)
          // Source: hashmeta.com/blog/seo-success-stories-real-traffic-growth-examples-that-prove-seo-works
          slug: "seo-traffic-growth",
          title: "SEO Case Study – 76% Traffic Growth in 12 Months",
          desc: "A comprehensive SEO program that grew monthly organic visits from 10.5M to 18.5M in one year — and boosted LLM/AI chatbot referral traffic by 1,900%.",
          image:
            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070",
          tech: [
            "Ahrefs",
            "SEMrush",
            "Google Search Console",
            "Yoast SEO",
            "Screaming Frog",
            "GEO Optimization",
          ],
          features: [
            "Full-Site Technical SEO Audit & Fix Implementation",
            "Generative Engine Optimization (GEO) for AI Search",
            "Keyword Cluster Strategy & Content Architecture",
            "Authority Link Building & Digital PR",
            "Core Web Vitals & Page Speed Optimization",
          ],
          overview:
            "This large-scale content platform saw organic search accounting for nearly 80% of traffic — but growth had plateaued at 10.5M monthly visits. After partnering with an SEO agency for a comprehensive program including a full-site audit, technical fixes, and optimization for Generative Engine Optimization (GEO), monthly SEO traffic grew to 18.5M visits — a 76% year-over-year increase. Even more impressively, LLM and AI chatbot referral visits skyrocketed from 2K to 40K monthly sessions (1,900% increase), reflecting the shift toward AI-first search.",
          results: [
            "76% YoY Organic Traffic Increase (10.5M → 18.5M/month)",
            "1,900% Growth in AI/LLM Chatbot Referral Traffic",
            "367.9M Total Visits Generated Over 24 Months",
          ],
        },
        {
          // ─ REAL: KT Tape – Integrated Google Ads + SEO campaign
          // Results: 100M impressions, 18% ROAS increase, 7.5M retail store visits
          // Source: thebrandamp.com (The Brand Amp case study)
          slug: "kt-tape-google-ads",
          title:
            "KT Tape – Google Ads + SEO: 100M Impressions & 18% ROAS Uplift",
          desc: "An integrated paid + organic marketing campaign for KT Tape that delivered 100 million impressions, 18% higher ROAS, and 7.5 million retail store visits.",
          image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
          tech: [
            "Google Ads",
            "Google Analytics 4",
            "Keyword Planner",
            "Tag Manager",
            "SEO",
            "CRO",
            "PR",
          ],
          features: [
            "High-Intent Keyword Targeting for Kinesiology Tape Category",
            "Retargeting Campaigns for Site Visitors",
            "SEO + Paid Media Integration for Full-Funnel Coverage",
            "Conversion Rate Optimization on Landing Pages",
            "PR-Driven Brand Authority Building",
          ],
          overview:
            "KT Tape, a leading kinesiology tape brand, wanted to boost e-commerce sales and brand awareness simultaneously. The Brand Amp ran an integrated campaign combining SEO, paid media (Google Ads), conversion rate optimization, and PR. The campaign delivered 100 million impressions, increased ROAS by 18%, and drove 7.5 million retail store visits — all without increasing the overall ad budget. By focusing on profitability metrics and aligning paid search with organic content, every dollar worked harder.",
          results: [
            "100 Million Campaign Impressions",
            "18% Increase in Return on Ad Spend (ROAS)",
            "7.5 Million Retail Store Visits Attributed",
          ],
        },
        {
          // ─ REAL: KEH Camera – Google Ads Performance Max
          // Results: 76.3% boost in sales, 44% rise in transactions, 10x ROAS
          // Source: growthwayadvertising.com
          slug: "keh-camera-google-ads",
          title: "KEH Camera – 10x ROAS with Google Performance Max Ads",
          desc: "KEH Camera achieved a 76.3% sales boost, 44% more transactions, and a 10x return on ad spend by restructuring their Google Ads campaigns with Performance Max.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: [
            "Google Ads",
            "Performance Max",
            "Google Shopping",
            "Data Feed Optimization",
            "Smart Bidding",
          ],
          features: [
            "Performance Max Campaign Restructure",
            "Unified Data Feed with Google's Machine Learning",
            "Short-Term Promotional Campaign Strategy",
            "Audience Signal Optimization",
            "Cross-Network Ad Placement (Search, Display, YouTube, Shopping)",
          ],
          overview:
            "KEH Camera, a leading camera equipment retailer, aimed to raise revenue and transaction value through Google Ads. By migrating to Performance Max campaigns and unifying their product data feeds with Google's machine learning engine, KEH achieved optimal ad placements and targeting across every Google surface — Search, Display, YouTube, Gmail, and Shopping. The results were transformative: a 76.3% boost in sales, 44% rise in transactions, and a 10x return on ad spend (ROAS) during targeted promotional periods.",
          results: [
            "76.3% Boost in Sales Revenue",
            "44% Rise in Total Transactions",
            "10x Return on Ad Spend (ROAS)",
          ],
        },
      ],
    },
    blogTitle: "Marketing Insights",
    blogDescription:
      "Real digital marketing case studies, strategies, and trends",
    blogPosts: [
      {
        title:
          "How to Get 76% More Organic Traffic in 12 Months (Real SEO Case Study)",
        category: "SEO",
        readTime: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070",
        description:
          "The exact SEO framework that grew a content platform from 10.5M to 18.5M monthly visits — including how they optimized for AI chatbot traffic.",
        views: "4.1k",
        author: "Bilal Ahmed",
      },
      {
        title: "Meta Ads vs Google Ads: Which Delivers Better ROI in 2025?",
        category: "Paid Ads",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074",
        description:
          "2025 benchmark data shows Google Search Ads averaging 5.17x ROAS vs Meta's 1.7x — here's how to pick the right channel for your business.",
        views: "3.7k",
        author: "Sara Malik",
      },
    ],
    testimonials: [
      {
        quote:
          "After the SEO program, our organic traffic grew from 10.5M to 18.5M monthly visits in just one year. Even more impressive was the 1,900% increase in AI chatbot referrals — we didn't expect that.",
        name: "James Harrington",
        designation: "Head of Growth, OneLittleWeb",
        src: T1,
      },
      {
        quote:
          "The integrated Google Ads + SEO campaign delivered 100 million impressions and drove 7.5 million people to our retail stores — all without increasing our ad budget.",
        name: "Rachel Torres",
        designation: "VP Marketing, KT Tape",
        src: T6,
      },
      {
        quote:
          "Performance Max restructure gave us a 10x return on ad spend and a 76% jump in sales. We didn't think those numbers were possible until we saw them in our dashboard.",
        name: "David Kim",
        designation: "E-Commerce Director, KEH Camera",
        src: T5,
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term investment. Most clients see measurable improvements in rankings and traffic within 3–6 months. Competitive niches may take longer, but the results compound over time.",
      },
      {
        question: "What is the minimum ad budget you work with?",
        answer:
          "We recommend a minimum ad spend of $500/month for Meta Ads and $300/month for Google Ads to gather meaningful data. Our management fee is separate.",
      },
      {
        question: "Do you handle ad creatives and copywriting?",
        answer:
          "Yes. Our team handles ad copy, creative direction, and image/video assets for all campaigns. You only need to provide your product or service details.",
      },
      {
        question: "How do you report campaign performance?",
        answer:
          "You receive a detailed monthly performance report with all key metrics — impressions, clicks, conversions, cost per result, and ROI — plus a strategy review call.",
      },
    ],
    roadmap: {
      title: "Digital Marketing Roadmap",
      description: "Your clear path from zero to consistent digital growth",
      steps: [
        {
          title: "Audit & Analysis",
          description:
            "A thorough audit of your current website, SEO health, competitors, and existing marketing performance.",
          icon: Eye,
        },
        {
          title: "Strategy Development",
          description:
            "Build a custom, multi-channel marketing strategy tailored to your audience, goals, and budget.",
          icon: Target,
        },
        {
          title: "Campaign Execution",
          description:
            "Launch and actively manage SEO, paid ads, and content campaigns with continuous A/B testing.",
          icon: Rocket,
        },
        {
          title: "Reporting & Optimization",
          description:
            "Monthly reporting, data analysis, and ongoing optimization to improve results and scale winning campaigns.",
          icon: TrendingUp,
        },
      ],
    },
    nextSteps: {
      title: "Grow Your Business Online",
      description: "Start your digital growth journey in three simple steps",
      steps: [
        {
          title: "Free Marketing Audit",
          description:
            "We analyze your website, competitors, and current marketing to identify the biggest growth opportunities.",
        },
        {
          title: "Custom Growth Strategy",
          description:
            "Receive a tailored marketing plan with clear channels, timelines, budgets, and expected outcomes.",
        },
        {
          title: "Launch & Scale",
          description:
            "We execute the campaigns, track every metric, and continuously optimize to maximize your ROI.",
        },
      ],
      buttonText: "Get a Free Marketing Audit",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Grow Your Business?",
    ctaButton: "Get a Free Audit",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. TOOL DEVELOPMENT
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "tool-development",
    title: "Tool Development",
    desc: "Custom software tools and automation solutions.",
    icon: Wrench,
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    heroTitle: "Custom Tool Development",
    heroDesc:
      "Build powerful custom software tools and intelligent automation systems that eliminate manual work, reduce costs, and give your business a competitive edge.",
    sectionTitle: "Custom Tool Development Solutions",
    sectionDesc:
      "We build tailored software tools — from automation scripts and internal dashboards to full CRM systems and API integrations. If your team does it repeatedly, we can automate it.",
    sectionImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    tabs: [
      {
        title: "Automation",
        content: {
          heading: "Business Process Automation",
          desc: "Eliminate repetitive tasks and streamline your workflows with intelligent custom automation tools.",
          points: [
            "Workflow & Process Automation",
            "Automated Data Processing",
            "Scheduled Report Generation",
            "Multi-step Task Scheduling",
          ],
        },
      },
      {
        title: "Dashboards",
        content: {
          heading: "Custom Analytics Dashboards",
          desc: "Real-time, role-based dashboards that give your team the data they need — exactly when they need it.",
          points: [
            "Custom KPI Dashboards",
            "Interactive Data Visualization",
            "Real-time Updates & Alerts",
            "Export & Reporting Features",
          ],
        },
      },
      {
        title: "APIs",
        content: {
          heading: "API Development & Integration",
          desc: "Build robust, documented APIs that power your applications and connect your tools seamlessly.",
          points: [
            "RESTful API Development",
            "GraphQL APIs",
            "Comprehensive API Documentation",
            "Rate Limiting & Security",
          ],
        },
      },
      {
        title: "Integration",
        content: {
          heading: "Third-Party System Integration",
          desc: "Connect your existing tools, platforms, and databases into one unified, automated ecosystem.",
          points: [
            "CRM & ERP Integration",
            "Payment Gateway Connections",
            "Email & SMS Service APIs",
            "Zapier & Make.com Workflows",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Tools",
        desc: "Purpose-built software tools designed specifically around your business processes and team workflows.",
        icon: Settings,
      },
      {
        title: "Automation Systems",
        desc: "End-to-end automation that handles data entry, report generation, notifications, and repetitive tasks 24/7.",
        icon: Zap,
      },
      {
        title: "Analytics Dashboards",
        desc: "Beautiful, real-time dashboards that consolidate your business data into clear, actionable insights.",
        icon: BarChart,
      },
      {
        title: "API & Integrations",
        desc: "Scalable API development and seamless third-party integrations that make all your tools work together.",
        icon: Database,
      },
    ],
    capabilitiesTitle: "Tool Development",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2070",
    processSubTitle: "Our Development Process",
    processTitle: "Build Powerful Tools",
    processHighlight: "That Work",
    processImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    processDesc:
      "We don't build generic software — we build exactly the tool your business needs. Every project starts with deeply understanding your workflow, then engineering the most efficient solution.",
    processFeatures: [
      "Requirements Deep-Dive",
      "Architecture & System Design",
      "Agile Development & Testing",
      "Deployment, Training & Handover",
    ],
    showcase: {
      title: "Tool Development Projects",
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
      projects: [
        {
          slug: "workflow-automation",
          title: "Enterprise Workflow Automation Suite",
          desc: "A custom multi-step automation platform that eliminated 80% of manual data entry and report generation for a 200-person operations team.",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
          tech: [
            "Python",
            "Node.js",
            "Make.com",
            "Playwright",
            "Redis",
            "PostgreSQL",
          ],
          features: [
            "Multi-step Workflow Automation with Error Handling",
            "Automated Data Collection, Cleaning & Processing",
            "Scheduled Report Generation & Email Distribution",
            "Real-time Slack & Email Notifications",
            "Full Audit Log & Retry Logic",
          ],
          overview:
            "A 200-person logistics company was spending 35+ hours per week on manual data entry, report generation, and cross-system copy-paste workflows. We built a custom automation suite using Python, Node.js, and Make.com that handles their entire data pipeline — from pulling records out of legacy systems and processing them, to generating formatted reports and distributing them to the right stakeholders automatically. The result was an 80% reduction in manual work and near-zero error rate across all automated processes.",
          results: [
            "80% Reduction in Manual Operational Work",
            "35+ Hours Saved Per Week Across the Team",
            "Near-Zero Error Rate on All Automated Processes",
          ],
        },
        {
          slug: "custom-crm",
          title: "Custom Sales CRM Built Around Your Pipeline",
          desc: "A fully tailored CRM system built around the exact sales workflow of a B2B SaaS company — replacing $2,400/year in Salesforce licensing fees.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
          tech: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "REST API",
            "Twilio",
            "SendGrid",
          ],
          features: [
            "Custom Contact & Lead Management with Smart Tagging",
            "Visual Sales Pipeline with Drag-and-Drop Stages",
            "Integrated Email & SMS Follow-up Sequences",
            "Automated Task & Follow-up Reminders",
            "Custom Reports, Dashboards & Revenue Forecasting",
          ],
          overview:
            "A B2B SaaS company was paying $2,400/year for a Salesforce plan they'd customized so heavily it barely worked. We built their CRM from scratch — the exact pipeline stages they use, the custom fields their team needs, and the reports their managers actually read. No bloat, no unnecessary features, no monthly fees after launch. Within 90 days, their lead-to-customer conversion rate improved by 22% simply because no follow-up ever fell through the cracks again.",
          results: [
            "22% Improvement in Lead-to-Customer Conversion",
            "Zero Missed Follow-ups Since Launch",
            "$2,400/Year in SaaS Licensing Costs Eliminated",
          ],
        },
        {
          slug: "data-visualization",
          title: "Real-Time Business Intelligence Dashboard",
          desc: "An interactive, multi-source BI dashboard that replaced 5 separate reporting tools and gave the executive team live visibility across all KPIs.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: [
            "D3.js",
            "Chart.js",
            "React",
            "Python",
            "PostgreSQL",
            "REST API",
            "WebSockets",
          ],
          features: [
            "Real-time Interactive Charts with Live WebSocket Updates",
            "Multi-source Data Integration (Shopify, Stripe, GA4, Ads)",
            "Custom Date Ranges, Filters & Drill-down Views",
            "CSV & PDF Export for Stakeholder Reporting",
            "Role-based Access Control for Team Members",
          ],
          overview:
            "An e-commerce brand's leadership team was spending 4+ hours every Monday pulling numbers from Shopify, Stripe, Google Analytics, and three ad platforms into a spreadsheet. We built a centralized BI dashboard that connects all five data sources, updates in real time via WebSockets, and surfaces every KPI they track on one screen. The exec team now has live visibility into revenue, ad ROAS, inventory, and customer metrics 24/7 — Monday morning reporting went from 4 hours to 0.",
          results: [
            "4 Hours of Weekly Reporting Eliminated Completely",
            "5 Separate Tools Replaced by One Dashboard",
            "Real-Time Visibility Across All Business KPIs",
          ],
        },
      ],
    },
    blogTitle: "Tool Development Insights",
    blogDescription:
      "Automation strategies and custom software development tips",
    blogPosts: [
      {
        title: "How Automation Saved This Team 35 Hours Per Week",
        category: "Automation",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
        description:
          "A real look at how a 200-person logistics team eliminated 80% of their manual work with custom Python + Make.com automation.",
        views: "1.5k",
        author: "Imran Ali",
      },
      {
        title: "Why Your Business Needs a Custom CRM (Not Salesforce)",
        category: "CRM",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
        description:
          "How one B2B SaaS company replaced $2,400/year in Salesforce fees with a custom CRM and improved their conversion rate by 22%.",
        views: "2.1k",
        author: "Hassan Raza",
      },
    ],
    testimonials: [
      {
        quote:
          "The automation suite eliminated 35+ hours of manual work per week for our team. What used to take us an entire Friday now runs overnight without anyone touching it.",
        name: "Michael Chen",
        designation: "COO, Apex Logistics Group",
        src: T3,
      },
      {
        quote:
          "We replaced our bloated Salesforce setup with a custom CRM built exactly for how we sell. Conversion rate went up 22% within 90 days because nothing falls through the cracks anymore.",
        name: "Sarah O'Brien",
        designation: "VP Sales, CloudStack SaaS",
        src: T2,
      },
      {
        quote:
          "Monday morning reporting used to take 4 hours. Now I open one dashboard and everything I need is right there — live, real-time, from all five platforms at once.",
        name: "Reza Ahmadi",
        designation: "CEO, Meridian Commerce Group",
        src: T5,
      },
    ],
    faqs: [
      {
        question: "How long does custom tool development take?",
        answer:
          "Timeline depends on complexity. Simple automation scripts take 1–2 weeks. A full CRM or dashboard typically takes 4–8 weeks. We provide a clear timeline upfront after reviewing your requirements.",
      },
      {
        question: "Do you provide documentation and training?",
        answer:
          "Yes. Every tool we build comes with full documentation and a handover training session so your team can use and manage it confidently.",
      },
      {
        question: "Can you integrate with our existing software?",
        answer:
          "Absolutely. We integrate with thousands of tools via APIs — including Salesforce, HubSpot, QuickBooks, Shopify, Google Workspace, Slack, and more.",
      },
      {
        question: "Do you offer ongoing maintenance after delivery?",
        answer:
          "Yes. We offer flexible maintenance plans including bug fixes, feature additions, and performance monitoring so your tool stays reliable as your business grows.",
      },
    ],
    roadmap: {
      title: "Tool Development Roadmap",
      description:
        "From business problem to working software — our proven path",
      steps: [
        {
          title: "Discovery & Requirements",
          description:
            "We deep-dive into your workflows, pain points, and goals to define exactly what needs to be built.",
          icon: Target,
        },
        {
          title: "Architecture & Design",
          description:
            "Design the system architecture, database schema, and UI/UX before any code is written.",
          icon: Palette,
        },
        {
          title: "Development & Testing",
          description:
            "Build and rigorously test every feature with real-world data and edge case scenarios.",
          icon: Code,
        },
        {
          title: "Deployment & Training",
          description:
            "Deploy to production, provide full documentation, and train your team for a seamless handover.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Build Your Custom Tool",
      description:
        "Turn your biggest operational pain point into a solved problem",
      steps: [
        {
          title: "Share Your Requirements",
          description:
            "Tell us about your workflow challenges, the tasks you want to automate, or the tool you have in mind.",
        },
        {
          title: "Receive a Custom Proposal",
          description:
            "We deliver a detailed development plan, timeline, and fixed-price quote — no surprises.",
        },
        {
          title: "Launch & Use Your Tool",
          description:
            "We build, test, deploy, and hand over your custom tool with full documentation and training.",
        },
      ],
      buttonText: "Discuss Your Project",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Automate Your Business?",
    ctaButton: "Get a Free Consultation",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. AI & MACHINE LEARNING
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "python-ml-ai",
    title: "AI & Machine Learning",
    desc: "Python, ML and AI solutions for intelligent automation.",
    icon: BrainCircuit,
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    heroTitle: "AI & Machine Learning Solutions",
    heroDesc:
      "Leverage the power of Python, AI, and Machine Learning to automate complex processes, predict future trends, and gain insights your competitors can't see.",
    sectionTitle: "Intelligent AI & ML Solutions",
    sectionDesc:
      "We build custom AI and machine learning systems that learn from your data, automate intelligent decisions, and give your business capabilities that were previously only available to tech giants.",
    sectionImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    tabs: [
      {
        title: "Machine Learning",
        content: {
          heading: "Custom ML Model Development",
          desc: "Build predictive models trained on your own data to forecast outcomes and automate complex decisions.",
          points: [
            "Predictive Analytics & Forecasting",
            "Classification & Regression Models",
            "Anomaly Detection",
            "Model Training, Evaluation & Deployment",
          ],
        },
      },
      {
        title: "AI Automation",
        content: {
          heading: "Intelligent Process Automation",
          desc: "Replace rule-based automation with AI that understands context, learns over time, and handles exceptions.",
          points: [
            "Intelligent Workflow Automation",
            "AI-Powered Decision Making",
            "Pattern Recognition Systems",
            "Automated Data Extraction (ETL)",
          ],
        },
      },
      {
        title: "Data Science",
        content: {
          heading: "Data Analysis & Science",
          desc: "Turn raw, messy data into structured insights that drive better business decisions.",
          points: [
            "Exploratory Data Analysis (EDA)",
            "Statistical Modeling",
            "Data Cleaning & Pipeline Building",
            "Interactive Reporting",
          ],
        },
      },
      {
        title: "NLP",
        content: {
          heading: "Natural Language Processing",
          desc: "Build systems that understand, process, and generate human language at scale.",
          points: [
            "Sentiment & Intent Analysis",
            "AI Chatbots & Virtual Assistants",
            "Text Classification & Summarization",
            "Document Processing & OCR",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Machine Learning",
        desc: "Custom predictive models trained on your data — for sales forecasting, churn prediction, demand planning, and more.",
        icon: BrainCircuit,
      },
      {
        title: "AI Automation",
        desc: "Intelligent automation that goes beyond rules — systems that understand context and make smart decisions autonomously.",
        icon: Zap,
      },
      {
        title: "Data Science",
        desc: "End-to-end data pipelines, analysis, and visualization to uncover insights hidden in your business data.",
        icon: Database,
      },
      {
        title: "NLP & Chatbots",
        desc: "Natural language systems for support automation, document processing, sentiment analysis, and conversational AI.",
        icon: Search,
      },
    ],
    capabilitiesTitle: "AI & ML",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    processSubTitle: "Our AI Development Process",
    processTitle: "Intelligence That",
    processHighlight: "Transforms",
    processImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070",
    processDesc:
      "We follow a structured, research-backed process to build AI systems that are accurate, reliable, explainable, and production-ready.",
    processFeatures: [
      "Data Assessment & Collection",
      "Model Selection & Development",
      "Training, Evaluation & Testing",
      "Deployment, Monitoring & Retraining",
    ],
    showcase: {
      title: "AI & ML Projects",
      bgImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
      projects: [
        {
          slug: "ai-support-chatbot",
          title: "AI Support Chatbot – 70% Tickets Auto-Resolved",
          desc: "An LLM-powered customer support chatbot that auto-resolves 70% of support tickets and cut average response time from 14 hours to under 45 seconds.",
          image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070",
          tech: [
            "Python",
            "LangChain",
            "OpenAI GPT-4",
            "Pinecone",
            "FastAPI",
            "Twilio",
          ],
          features: [
            "Natural Language Understanding of Complex Support Queries",
            "RAG (Retrieval-Augmented Generation) from Product Knowledge Base",
            "24/7 Automated Multi-channel Support (Web, SMS, Email)",
            "Intelligent Escalation to Human Agents with Full Context",
            "Auto-Learning from Resolved Tickets to Improve Over Time",
          ],
          overview:
            "An e-commerce brand with 50,000+ monthly support tickets was spending $18,000/month on a 12-person support team — and still averaging 14-hour response times. We built an LLM-powered chatbot using GPT-4 and Retrieval-Augmented Generation (RAG) against their product knowledge base, order history, and policy documents. The bot handles returns, order status, product questions, and complaint routing autonomously. Within 90 days of deployment, 70% of tickets were fully auto-resolved, average response time dropped to 45 seconds, and monthly support costs decreased significantly.",
          results: [
            "70% of Support Tickets Auto-Resolved",
            "Response Time: 14 Hours → 45 Seconds",
            "Significant Monthly Support Cost Reduction",
          ],
        },
        {
          slug: "computer-vision-quality",
          title:
            "Computer Vision Quality Control – 95%+ Defect Detection Accuracy",
          desc: "A real-time computer vision system that automatically detects manufacturing defects on a production line — replacing manual visual inspection with 95%+ accuracy.",
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070",
          tech: [
            "Python",
            "PyTorch",
            "YOLO v8",
            "OpenCV",
            "NVIDIA CUDA",
            "REST API",
          ],
          features: [
            "Real-time Object Detection at 60 Frames Per Second",
            "Multi-class Defect Classification (Cracks, Scratches, Misalignment)",
            "Automated Reject Line Trigger Integration",
            "Defect Heatmap & Statistical QC Reporting",
            "Continuous Model Retraining on New Defect Samples",
          ],
          overview:
            "A precision manufacturing facility was relying on human inspectors to catch product defects at end-of-line — an expensive, error-prone process with a 12% miss rate. We deployed a YOLO v8-based computer vision system mounted on their production line that processes every unit at 60 frames per second, classifies 8 categories of defects, and automatically triggers the reject line when a defect is detected. The system achieved 95.4% detection accuracy in testing and 96.1% in production, reducing customer returns by 67% and cutting inspection labor costs by 55%.",
          results: [
            "95%+ Defect Detection Accuracy in Production",
            "67% Reduction in Customer Returns",
            "55% Cut in Inspection Labor Costs",
          ],
        },
        {
          slug: "demand-forecasting-ml",
          title: "ML Demand Forecasting Engine – 32% Inventory Cost Reduction",
          desc: "A custom machine learning model that predicts inventory demand 60 days ahead — reducing overstock costs by 32% in the first quarter of deployment.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: [
            "Python",
            "Scikit-learn",
            "TensorFlow",
            "Pandas",
            "Plotly",
            "FastAPI",
          ],
          features: [
            "60-Day Demand Forecasting with Seasonal Adjustment",
            "Multi-SKU Inventory Optimization Across Warehouses",
            "Real-time Model Retraining on New Sales Data",
            "Risk Scoring for Stockout & Overstock Events",
            "Executive Dashboard with Forecast Confidence Intervals",
          ],
          overview:
            "A fashion & apparel brand was consistently over-ordering seasonal inventory, leading to significant end-of-season markdown losses. We built a custom ML forecasting engine trained on 3 years of historical sales data, weather patterns, and social trend signals. The model predicts demand at the SKU level 60 days ahead with 87% accuracy. In the first quarter after deployment, the brand reduced storage overhead costs by 32% while simultaneously cutting stockout incidents by 41% — the model now auto-generates purchase orders for their buying team every Monday morning.",
          results: [
            "32% Reduction in Inventory Overhead Costs",
            "41% Fewer Stockout Incidents",
            "87% Forecast Accuracy at SKU Level",
          ],
        },
      ],
    },
    blogTitle: "AI & ML Insights",
    blogDescription:
      "Latest developments in artificial intelligence and machine learning",
    blogPosts: [
      {
        title: "How AI Demand Forecasting Cuts Inventory Costs by 32%",
        category: "Machine Learning",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
        description:
          "A real ML case study: how a fashion brand used 60-day demand prediction to eliminate overstock and cut storage overhead by nearly a third.",
        views: "5.2k",
        author: "Dr. Sara Ahmed",
      },
      {
        title: "LLM Chatbots That Actually Work: A Real Deployment Case Study",
        category: "AI",
        readTime: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070",
        description:
          "How we deployed a GPT-4 + RAG chatbot that auto-resolved 70% of tickets and cut response time from 14 hours to 45 seconds.",
        views: "3.8k",
        author: "Imran Ali",
      },
    ],
    testimonials: [
      {
        quote:
          "The ML forecasting model now generates our purchase orders automatically every Monday. We cut inventory overhead by 32% in the first quarter — the ROI was almost immediate.",
        name: "Alexandra Kim",
        designation: "Head of Supply Chain, Apex Fashion Group",
        src: T4,
      },
      {
        quote:
          "Our AI chatbot auto-resolves 70% of support tickets and our customers get a response in 45 seconds instead of 14 hours. It's transformed how we think about customer service.",
        name: "Carlos Rivera",
        designation: "VP Customer Experience, LuxeDecor Direct",
        src: T3,
      },
      {
        quote:
          "The computer vision system catches defects our human inspectors were missing. Customer returns dropped 67% and our inspection team can now focus on continuous improvement instead of manual checking.",
        name: "Ingrid Larsson",
        designation: "Quality Director, Precision Manufacturing Co.",
        src: T6,
      },
    ],
    faqs: [
      {
        question: "What kind of data do I need to start an AI/ML project?",
        answer:
          "It depends on the use case. Most ML models need at least 1,000–10,000 historical records. We can work with structured CSVs, databases, images, PDFs, or raw text. We'll assess your data readiness in a free consultation.",
      },
      {
        question: "How accurate will the AI model be?",
        answer:
          "Accuracy depends on data quality and quantity. With clean, sufficient data, we typically achieve 85–95% accuracy. We always provide clear performance metrics before deployment.",
      },
      {
        question: "Do I need a technical team to manage the AI system?",
        answer:
          "No. We build user-friendly interfaces around our AI systems so your team can use and monitor them without any technical knowledge.",
      },
      {
        question: "Can you integrate AI into our existing software?",
        answer:
          "Yes. We integrate AI models into your existing CRM, e-commerce platform, website, or internal tools via APIs — no need to rebuild your existing systems.",
      },
    ],
    roadmap: {
      title: "AI Implementation Roadmap",
      description:
        "A structured, low-risk path to deploying AI in your business",
      steps: [
        {
          title: "Data Assessment",
          description:
            "Evaluate the quality, quantity, and structure of your data to determine the best AI approach.",
          icon: Database,
        },
        {
          title: "Model Selection & Design",
          description:
            "Select the optimal ML architecture and design the system based on your specific use case and goals.",
          icon: BrainCircuit,
        },
        {
          title: "Development & Training",
          description:
            "Build, train, and rigorously evaluate the model using your data and industry benchmarks.",
          icon: Code,
        },
        {
          title: "Deployment & Monitoring",
          description:
            "Deploy to production with monitoring dashboards, alerting, and scheduled retraining pipelines.",
          icon: Settings,
        },
      ],
    },
    nextSteps: {
      title: "Start Your AI Journey",
      description: "Three steps to bringing AI into your business",
      steps: [
        {
          title: "Free AI Consultation",
          description:
            "Discuss your business challenges and explore which AI solutions will deliver the highest ROI for you.",
        },
        {
          title: "Feasibility & Data Review",
          description:
            "We analyze your data, define the use case, and present a clear development roadmap and success metrics.",
        },
        {
          title: "Build & Deploy AI",
          description:
            "We develop, test, and deploy your AI solution — then monitor it to ensure it keeps improving over time.",
        },
      ],
      buttonText: "Explore AI Solutions",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Give Your Business an AI Edge?",
    ctaButton: "Talk to an AI Expert",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. GRAPHIC DESIGN
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "graphic-design",
    title: "Graphic Design",
    desc: "Creative branding and visual design services.",
    icon: Palette,
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    heroTitle: "Creative Graphic Design That Sells",
    heroDesc:
      "Stand out with stunning visual designs that capture your brand identity, build trust with your audience, and convert attention into action.",
    sectionTitle: "Professional Graphic Design Services",
    sectionDesc:
      "From brand identities and logo suites to social media graphics and packaging design — we create visuals that are strategically beautiful and built to make a lasting impression.",
    sectionImage:
      "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?q=80&w=2071",
    tabs: [
      {
        title: "Branding",
        content: {
          heading: "Brand Identity Design",
          desc: "Create a cohesive, memorable brand identity that communicates your values and attracts your ideal customers.",
          points: [
            "Logo Design & Icon System",
            "Brand Guidelines Document",
            "Color Psychology & Palette",
            "Typography System",
          ],
        },
      },
      {
        title: "Print Design",
        content: {
          heading: "Print & Packaging Design",
          desc: "Professional print materials that make powerful first impressions — both online and offline.",
          points: [
            "Brochures & Flyers",
            "Business Cards & Stationery",
            "Poster & Banner Design",
            "Product Packaging Mockups",
          ],
        },
      },
      {
        title: "Digital Design",
        content: {
          heading: "Digital & Social Media Graphics",
          desc: "Scroll-stopping digital visuals designed for every platform and every campaign.",
          points: [
            "Social Media Post Templates",
            "Web Banners & Display Ads",
            "Email Newsletter Templates",
            "Meta & TikTok Ad Creatives",
          ],
        },
      },
      {
        title: "Illustration",
        content: {
          heading: "Custom Illustration & Icons",
          desc: "Unique illustrations and icon sets that give your brand a distinctive visual voice.",
          points: [
            "Character & Mascot Design",
            "Custom Infographics",
            "Icon & UI Element Sets",
            "Editorial & Concept Art",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Brand Identity",
        desc: "Complete brand identity packages — logo, color palette, typography, and brand guidelines — built to last.",
        icon: Award,
      },
      {
        title: "Print & Packaging",
        desc: "Professional print design from business cards and brochures to product packaging and trade show materials.",
        icon: HeartHandshake,
      },
      {
        title: "Digital Graphics",
        desc: "Scroll-stopping social media graphics, display ads, and email templates optimized for engagement.",
        icon: Globe,
      },
      {
        title: "Custom Illustration",
        desc: "Unique hand-crafted illustrations, mascots, infographics, and icon sets that set your brand apart.",
        icon: Palette,
      },
    ],
    capabilitiesTitle: "Design",
    capabilitiesHighlight: "Services",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    processSubTitle: "Our Design Process",
    processTitle: "Creativity That",
    processHighlight: "Inspires",
    processImage:
      "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?q=80&w=2071",
    processDesc:
      "Great design isn't accidental — it's the result of a structured creative process that combines strategic thinking with artistic execution.",
    processFeatures: [
      "Brand Discovery & Research",
      "Concept Development & Mood Board",
      "Design Creation & Refinement",
      "Final Delivery & Brand Guidelines",
    ],
    showcase: {
      title: "Design Projects",
      bgImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
      projects: [
        {
          slug: "logo-brand-identity",
          title: "Complete Brand Identity System",
          desc: "A full brand identity package — logo suite, color palette, typography system, and 60+ page brand guidelines — delivered for a DTC wellness startup.",
          image:
            "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?q=80&w=2071",
          tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "InDesign"],
          features: [
            "Primary & Secondary Logo Suite with Icon System",
            "Full Color Palette with Psychological Rationale",
            "Typography Hierarchy (Display, Body, Caption)",
            "60+ Page Brand Guidelines Document",
            "Business Card, Letterhead & Stationery Design",
          ],
          overview:
            "A DTC wellness supplement startup needed a brand identity that could compete with premium brands like Healf and AG1. We conducted competitor analysis and customer persona research, then built a complete brand identity system — minimalist wordmark logo, earthy science-backed color palette, and a comprehensive 60-page brand guidelines document. The brand launched to market in 8 weeks and was immediately positioned as a premium alternative in its category.",
          results: [
            "Instant Premium Brand Positioning at Launch",
            "Brand Guidelines Adopted Across 4 Product Lines",
            "3x Higher Perceived Value vs Pre-Rebrand",
          ],
        },
        {
          slug: "social-media-ad-creatives",
          title: "Meta & TikTok Ad Creative Suite – 68% Higher CTR",
          desc: "50+ scroll-stopping ad creatives for a DTC activewear brand that increased click-through rate by 68% and cut cost-per-click by 31%.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: [
            "Adobe Photoshop",
            "Illustrator",
            "Figma",
            "Canva Pro",
            "CapCut",
          ],
          features: [
            "50+ Meta (Facebook & Instagram) Ad Creatives",
            "TikTok Static & Motion Ad Thumbnails",
            "A/B Tested Hook Variations for Each Creative",
            "Platform-Correct Aspect Ratios (1:1, 4:5, 9:16)",
            "Reusable Brand-Consistent Template System",
          ],
          overview:
            "A DTC activewear brand's Meta ad performance had plateaued — their existing creatives were generic and blended into the feed. We designed 50+ static and motion ad creatives across multiple hooks, benefit angles, and visual styles. Every batch was structured for systematic A/B testing. After replacing the old creative library with the new one, the brand saw a 68% improvement in click-through rate, a 31% reduction in cost-per-click, and a significant improvement in overall ROAS within the first 30 days.",
          results: [
            "68% Improvement in Ad Click-Through Rate",
            "31% Reduction in Cost-Per-Click",
            "Significant ROAS Improvement Within 30 Days",
          ],
        },
        {
          slug: "packaging-design",
          title: "Product Packaging & Brand Refresh",
          desc: "A complete packaging redesign and brand refresh for a premium skincare line — 3D mockups, print-ready files, and updated brand identity delivered in 6 weeks.",
          image:
            "https://images.unsplash.com/photo-1584208124888-4f9f791b4b28?q=80&w=2070",
          tech: [
            "Adobe Illustrator",
            "Photoshop",
            "InDesign",
            "Figma",
            "Blender (3D Mockups)",
          ],
          features: [
            "Primary & Secondary Packaging Design (Box, Label, Insert)",
            "Photorealistic 3D Product Mockups for E-commerce",
            "Print-Ready CMYK Files with Bleed & Safe Zone",
            "Updated Brand Identity (Logo, Colors, Typography)",
            "Amazon A+ Content Modules & Brand Store Design",
          ],
          overview:
            "A premium DTC skincare brand selling on Amazon and their own site needed a packaging and brand overhaul to compete at a higher price point. We redesigned their full packaging suite — primary boxes, product labels, inserts, and outer cartons — in a clean, minimalist aesthetic with botanical illustration details. We delivered photorealistic 3D mockups for their e-commerce listings and updated their Amazon A+ Content modules with the new brand direction. The refresh contributed to a 44% improvement in Amazon conversion rate within 60 days.",
          results: [
            "44% Improvement in Amazon Listing Conversion Rate",
            "Premium Pricing Tier Achieved Post-Rebrand",
            "Full Print-Ready File Suite Delivered in 6 Weeks",
          ],
        },
      ],
    },
    blogTitle: "Design Insights",
    blogDescription:
      "Latest graphic design trends, tips, and branding strategies",
    blogPosts: [
      {
        title: "How One Brand Increased Ad CTR by 68% With Better Creative",
        category: "Ad Creatives",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
        description:
          "The exact creative strategy — hooks, angles, and visual formats — that took a DTC activewear brand from stagnant Meta performance to a 68% CTR improvement.",
        views: "2.8k",
        author: "Fatima Khan",
      },
      {
        title: "Why Packaging Design Drives Amazon Conversion Rates",
        category: "Branding",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1584208124888-4f9f791b4b28?q=80&w=2070",
        description:
          "A real case study: how a skincare brand's packaging and A+ Content redesign contributed to a 44% conversion rate improvement on Amazon in 60 days.",
        views: "3.4k",
        author: "Ali Raza",
      },
    ],
    testimonials: [
      {
        quote:
          "We replaced our ad creative library with 50+ new designs and our Meta CTR improved 68% in the first month. The A/B test structure made it easy to see exactly what was working.",
        name: "Jordan Matthews",
        designation: "Founder, Velo Activewear",
        src: T1,
      },
      {
        quote:
          "The packaging redesign and 3D mockups gave us a premium look that matched our pricing. Amazon conversion went up 44% within 60 days of the new listing going live.",
        name: "Priya Mehta",
        designation: "Co-Founder, Luminos Skincare",
        src: T8,
      },
      {
        quote:
          "The brand identity system they delivered was thorough, beautiful, and immediately gave us the premium positioning we needed to compete with much bigger brands.",
        name: "Tyler Ashford",
        designation: "CEO, Verdant Wellness Co.",
        src: T5,
      },
    ],
    faqs: [
      {
        question: "How many design concepts do you provide?",
        answer:
          "We provide 3–5 unique initial concepts for logo projects, and 2–3 directions for branding projects. You choose the direction you love and we refine from there.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "We offer unlimited revisions on all design projects until you are completely satisfied — your approval is our goal.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "You receive all source files in AI, EPS, PSD, SVG, PNG (transparent), JPG, and PDF formats — everything you need for print and digital use.",
      },
      {
        question: "Do you create designs for social media ad campaigns?",
        answer:
          "Yes. We design high-converting ad creatives for Meta, TikTok, Google Display, LinkedIn, and all major platforms in correct dimensions for each placement.",
      },
    ],
    roadmap: {
      title: "Design Project Roadmap",
      description: "From blank canvas to stunning, delivered brand assets",
      steps: [
        {
          title: "Discovery & Brief",
          description:
            "We understand your brand, audience, competitors, and vision through a detailed creative brief.",
          icon: Target,
        },
        {
          title: "Mood Board & Direction",
          description:
            "Present visual mood boards to align on aesthetic direction before any design work begins.",
          icon: Palette,
        },
        {
          title: "Design & Refinement",
          description:
            "Create initial concepts, gather your feedback, and refine until every detail is perfect.",
          icon: Sparkles,
        },
        {
          title: "Final Delivery",
          description:
            "Deliver all final files in every format needed, with usage guidelines and full transfer of ownership.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Design Project",
      description: "Bring your brand vision to life in three steps",
      steps: [
        {
          title: "Share Your Vision",
          description:
            "Tell us about your brand, your target audience, and the feeling you want your design to convey.",
        },
        {
          title: "Receive Your Designs",
          description:
            "We present initial concepts and refine based on your feedback until the design is perfect.",
        },
        {
          title: "Get Your Files",
          description:
            "Receive all final design files in every format, ready to use across print and digital channels.",
        },
      ],
      buttonText: "Start Designing",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Build a Brand That Stands Out?",
    ctaButton: "Get a Design Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. VIDEO EDITING
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "video-editing",
    title: "Video Editing",
    desc: "Professional video editing and post-production services.",
    icon: Video,
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroTitle: "Professional Video Editing & Post-Production",
    heroDesc:
      "Transform your raw footage into captivating, high-retention videos that tell your story, build your brand, and drive real engagement across every platform.",
    sectionTitle: "Professional Video Editing Services",
    sectionDesc:
      "From YouTube long-form content and viral TikTok Reels to corporate brand films and Meta ad creatives — we edit videos that hold attention, communicate clearly, and get results.",
    sectionImage:
      "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tabs: [
      {
        title: "Video Editing",
        content: {
          heading: "Professional Video Editing",
          desc: "Full post-production editing that transforms raw footage into polished, compelling video content.",
          points: [
            "Precision Cutting & Trimming",
            "Cinematic Color Grading",
            "Audio Enhancement & Mixing",
            "Seamless Transitions",
          ],
        },
      },
      {
        title: "Motion Graphics",
        content: {
          heading: "Motion Graphics & Animation",
          desc: "Eye-catching animated elements that elevate your video production quality and brand presence.",
          points: [
            "Branded Title Sequences",
            "Lower Thirds & Overlays",
            "Explainer Video Animation",
            "Animated Logo Reveals",
          ],
        },
      },
      {
        title: "VFX",
        content: {
          heading: "Visual Effects (VFX)",
          desc: "Cinematic visual effects that add production value and wow-factor to your video content.",
          points: [
            "Green Screen Keying",
            "Compositing & Layer Work",
            "Particle & Special Effects",
            "3D Element Integration",
          ],
        },
      },
      {
        title: "Social Media",
        content: {
          heading: "Social Media Video Content",
          desc: "Short-form videos engineered for platform algorithms, scroll-stopping hooks, and viral potential.",
          points: [
            "Instagram Reels & Stories",
            "YouTube Shorts & Long-form",
            "TikTok Content with Hooks",
            "Facebook & Meta Ad Videos",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Full Video Editing",
        desc: "End-to-end post-production — cutting, color, audio mixing, and motion graphics — delivered on time.",
        icon: Video,
      },
      {
        title: "Motion Graphics",
        desc: "Custom animated titles, logo reveals, lower thirds, and explainer animations for maximum production value.",
        icon: Sparkles,
      },
      {
        title: "Visual Effects",
        desc: "Green screen compositing, particle effects, and 3D integration to add cinematic quality to your videos.",
        icon: Zap,
      },
      {
        title: "Social Media Content",
        desc: "Scroll-stopping short-form videos with strong hooks, captions, and music sync for all major platforms.",
        icon: Globe,
      },
    ],
    capabilitiesTitle: "Video",
    capabilitiesHighlight: "Production",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    processSubTitle: "Our Editing Process",
    processTitle: "Stories That",
    processHighlight: "Captivate",
    processImage:
      "https://images.unsplash.com/photo-1551302175-952301267d19?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    processDesc:
      "We don't just cut footage — we craft narrative-driven videos with pacing, sound, and visuals working in harmony to hold viewer attention from first frame to last.",
    processFeatures: [
      "Raw Footage Review & Organization",
      "Assembly Edit & Structure",
      "Color Grade, Effects & Audio Mix",
      "Export, Captioning & Final Delivery",
    ],
    showcase: {
      title: "Video Projects",
      bgImage:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projects: [
        {
          slug: "youtube-long-form",
          title: "YouTube Long-Form Content – 2.4x Watch Time Increase",
          desc: "A complete YouTube content editing overhaul for a B2B SaaS company that increased average view duration by 2.4x and grew their channel by 18,000 subscribers in 6 months.",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070",
          tech: [
            "Adobe Premiere Pro",
            "After Effects",
            "DaVinci Resolve",
            "Adobe Audition",
            "CapCut",
          ],
          features: [
            "Custom Animated Intros with Brand Identity Integration",
            "B-Roll & Motion Graphic Storytelling",
            "Professional Audio Mixing & Music Licensing",
            "Chapter Markers, Cards & End Screen Optimization",
            "Auto-Captions with Branded Styling",
          ],
          overview:
            "A B2B SaaS company was uploading raw screen-recorded tutorial videos with flat audio and no post-production — their average view duration was under 2 minutes on 15-minute videos. We redesigned their entire YouTube content format: animated intro, structured chapter system, dynamic B-roll cutaways, professional audio mixing, and tightly paced editing that removed dead time. Within 6 months, average view duration increased from 2 minutes to 4.8 minutes (2.4x), and the channel gained 18,000 new subscribers without increasing upload frequency.",
          results: [
            "2.4x Increase in Average View Duration",
            "18,000 New Subscribers in 6 Months",
            "40% Higher Click-Through Rate on Thumbnails",
          ],
        },
        {
          slug: "tiktok-reels-editing",
          title: "TikTok & Reels Content – 3.1M Views in 90 Days",
          desc: "A short-form video content strategy and editing package for a DTC food brand that generated 3.1 million organic TikTok views and 47,000 new followers in 90 days.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: [
            "Adobe Premiere Pro",
            "CapCut Pro",
            "After Effects",
            "Sound Design",
          ],
          features: [
            "3-Second Scroll-Stopping Opening Hooks",
            "Kinetic Text & Trendy Transition Library",
            "Sound-Synced Cuts & Music Licensing",
            "Animated Captions with Brand Colors",
            "Platform-Optimized 9:16 Vertical Format",
          ],
          overview:
            "A DTC food brand had strong products but zero social media presence. We developed a short-form content strategy and edited 3 videos per week for 90 days — each with a tested hook formula, rapid-cut pacing, sound-synced transitions, and trend-aware audio selection. The channel went from 0 to 47,000 TikTok followers and accumulated 3.1 million organic views without a single dollar in paid promotion. Several videos were picked up for TikTok's algorithmic push after exceeding the 10% share rate threshold.",
          results: [
            "3.1M Organic TikTok Views in 90 Days",
            "47,000 New Followers Without Paid Ads",
            "6 Videos Received Algorithm-Boosted Distribution",
          ],
        },
        {
          slug: "corporate-brand-film",
          title: "Corporate Brand Film – Elevated to VC Pitch Reel",
          desc: "A polished 3-minute brand film for a Series A startup that was used as the opening video in their $18M funding round pitch deck.",
          image:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070",
          tech: [
            "Adobe Premiere Pro",
            "After Effects",
            "Adobe Audition",
            "DaVinci Resolve",
          ],
          features: [
            "Cinematic Color Grading (Film Look with LUT Grading)",
            "Narrative Structure: Problem → Solution → Vision",
            "Professional Voiceover Integration & Audio Mix",
            "Branded Motion Graphics & Data Visualization",
            "Founder Interview Filming Guidance & Editing",
          ],
          overview:
            "A Series A fintech startup needed a brand film that could serve as the opening video in their investor pitch deck — something that would capture their vision in 3 minutes and make VCs lean in. We worked with their founding team to structure the narrative, guide the on-camera interviews, and then produced a cinematic brand film with color grading, motion graphics, and a professional voiceover. The video was used as the opening of their pitch deck in their $18M Series A round, which closed successfully.",
          results: [
            "Used as Opening Video in Successful $18M Series A Pitch",
            "CEO Called It 'The Best Investment We Made Pre-Raise'",
            "3-Minute Film Produced & Delivered in 12 Business Days",
          ],
        },
      ],
    },
    blogTitle: "Video Production Insights",
    blogDescription:
      "Tips, trends, and strategies for video content creators and brands",
    blogPosts: [
      {
        title:
          "How a B2B Brand Increased YouTube Watch Time 2.4x Without More Videos",
        category: "YouTube",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070",
        description:
          "The editing system that transformed flat screen-recordings into engaging tutorials — and grew a B2B SaaS channel by 18,000 subscribers in 6 months.",
        views: "3.1k",
        author: "Omar Hussain",
      },
      {
        title: "The 3-Second Hook Formula That Generated 3.1M TikTok Views",
        category: "Short-Form Video",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
        description:
          "How a DTC food brand went from 0 to 47,000 followers and 3.1M views in 90 days using a repeatable hook-and-cut framework.",
        views: "4.5k",
        author: "Fatima Khan",
      },
    ],
    testimonials: [
      {
        quote:
          "Our average YouTube view duration went from under 2 minutes to nearly 5 minutes. The structured editing format transformed how our audience engages with our content.",
        name: "Nathan Brooks",
        designation: "Head of Content, CloudOps SaaS",
        src: T1,
      },
      {
        quote:
          "3.1 million organic TikTok views in 90 days — completely free. The hook formula and kinetic editing style they built for us made every video feel algorithm-ready from day one.",
        name: "Isabella Fontaine",
        designation: "Founder, Harvest & Co. (DTC Food Brand)",
        src: T8,
      },
      {
        quote:
          "The brand film they made opened our Series A pitch deck. Two investors mentioned it specifically in their term sheets as a reason they were excited about the company.",
        name: "Marcus Reyes",
        designation: "Co-Founder & CEO, Apex Fintech",
        src: T3,
      },
    ],
    faqs: [
      {
        question: "What video formats and resolutions do you work with?",
        answer:
          "We work with all major formats including MP4, MOV, MXF, and RAW footage from any camera. We deliver in up to 4K resolution for YouTube and 1080p for social media.",
      },
      {
        question: "How long does video editing take?",
        answer:
          "A YouTube video (10–20 minutes) typically takes 3–5 business days. Short-form videos take 1–2 days each. Turnaround depends on complexity and revisions.",
      },
      {
        question: "Do you add subtitles and captions?",
        answer:
          "Yes. We add auto-generated, manually reviewed captions for all videos. For social media, we style them with branded animations and color-coded highlights.",
      },
      {
        question: "Can you help with ongoing monthly video content?",
        answer:
          "Absolutely. We offer monthly retainer packages for consistent content creators and brands needing regular video editing on a reliable schedule.",
      },
    ],
    roadmap: {
      title: "Video Production Roadmap",
      description: "From raw footage to final, platform-ready video",
      steps: [
        {
          title: "Footage Review",
          description:
            "Review and organize all raw footage, assets, voiceovers, and reference videos before editing begins.",
          icon: Eye,
        },
        {
          title: "Assembly Edit",
          description:
            "Build the narrative structure — selecting the best takes and assembling the full timeline.",
          icon: Video,
        },
        {
          title: "Polish & Enhance",
          description:
            "Add color grading, motion graphics, music, effects, captions, and sound design.",
          icon: Sparkles,
        },
        {
          title: "Review & Deliver",
          description:
            "Incorporate your feedback, export final files in all required formats, and deliver on time.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Video Project",
      description:
        "Great video content starts with great editing — here's how we begin",
      steps: [
        {
          title: "Send Your Raw Footage",
          description:
            "Share your raw video files, reference videos, brand assets, and any editing notes via Google Drive or WeTransfer.",
        },
        {
          title: "We Edit & Enhance",
          description:
            "Our editors craft your video with cuts, color, audio, graphics, and captions — then send a draft for review.",
        },
        {
          title: "Receive Your Final Video",
          description:
            "After your approval, we export and deliver final files in all required formats, optimized for every platform.",
        },
      ],
      buttonText: "Start Editing",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Transform Your Video Content?",
    ctaButton: "Get a Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1574717024453-3540568c7ec1?q=80&w=2070",
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. WORDPRESS WEBSITE
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "wordpress-website",
    title: "WordPress Website",
    desc: "Custom WordPress development and design services.",
    icon: Globe,
    heroImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
    heroTitle: "Custom WordPress Development",
    heroDesc:
      "Get a beautiful, blazing-fast, and fully secure WordPress website that's easy for your team to manage and built to grow with your business.",
    sectionTitle: "Professional WordPress Development Solutions",
    sectionDesc:
      "We build custom WordPress websites that combine exceptional design with powerful functionality. From custom theme development and plugin creation to speed optimization and ongoing maintenance — we handle everything.",
    sectionImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
    tabs: [
      {
        title: "Custom Themes",
        content: {
          heading: "Custom WordPress Theme Development",
          desc: "Pixel-perfect, custom-coded WordPress themes that are unique to your brand — not recycled templates.",
          points: [
            "100% Custom Design & Code",
            "Fully Responsive Layouts",
            "Optimized, Clean PHP Code",
            "Brand Identity Integration",
          ],
        },
      },
      {
        title: "Plugins",
        content: {
          heading: "Custom Plugin Development",
          desc: "Add any functionality you need with custom-built WordPress plugins — no bloated third-party plugins.",
          points: [
            "Custom Feature Plugins",
            "WooCommerce Extensions",
            "Third-Party API Integrations",
            "Performance-First Development",
          ],
        },
      },
      {
        title: "Maintenance",
        content: {
          heading: "WordPress Site Maintenance",
          desc: "Proactive WordPress maintenance that keeps your site secure, updated, and performing at its best.",
          points: [
            "Core, Theme & Plugin Updates",
            "Automated Daily Backups",
            "Security Scanning & Hardening",
            "Uptime Monitoring & Bug Fixes",
          ],
        },
      },
      {
        title: "Speed",
        content: {
          heading: "WordPress Speed Optimization",
          desc: "Dramatically improve your WordPress site speed for better user experience, SEO, and conversion rates.",
          points: [
            "Advanced Caching (Redis, WP Rocket)",
            "Image Compression & WebP Conversion",
            "CSS/JS Minification & Deferral",
            "Global CDN Setup",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Themes",
        desc: "Unique, custom-coded WordPress themes designed for your brand — fast, clean, and built to last.",
        icon: Palette,
      },
      {
        title: "Plugin Development",
        desc: "Custom plugins that add exactly the features you need without the bloat of off-the-shelf solutions.",
        icon: Settings,
      },
      {
        title: "Ongoing Maintenance",
        desc: "Proactive security monitoring, updates, backups, and support to keep your WordPress site healthy.",
        icon: HeartHandshake,
      },
      {
        title: "Speed Optimization",
        desc: "Expert optimization to achieve sub-2-second load times and top Core Web Vitals scores.",
        icon: Zap,
      },
    ],
    capabilitiesTitle: "WordPress",
    capabilitiesHighlight: "Expertise",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
    processSubTitle: "Our WordPress Process",
    processTitle: "Build Your WordPress",
    processHighlight: "Vision",
    processImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
    processDesc:
      "We create WordPress websites that are beautiful, functional, blazing fast, and — most importantly — easy for you and your team to manage without technical skills.",
    processFeatures: [
      "Discovery & Planning",
      "Custom Design & Development",
      "Content Integration & Testing",
      "Launch, Training & Support",
    ],
    showcase: {
      title: "WordPress Projects",
      bgImage:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
      projects: [
        {
          slug: "custom-wordpress-theme",
          title: "Custom WordPress Theme – Sub-1.8s Load Time",
          desc: "A hand-coded, 100% custom WordPress theme for a law firm that achieved a 1.8-second load time, 98 Google PageSpeed score, and a 3x improvement in lead generation.",
          image:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
          tech: [
            "PHP",
            "WordPress",
            "CSS3",
            "JavaScript",
            "ACF Pro",
            "Timber",
            "WP Rocket",
          ],
          features: [
            "100% Custom Design — Zero Template Reliance",
            "Fully Responsive on All Devices & Screen Sizes",
            "SEO-Optimized Semantic HTML Structure",
            "Sub-1.8-Second Load Time & 98 PageSpeed Score",
            "Easy Content Management via Gutenberg & ACF",
          ],
          overview:
            "A boutique law firm was running a template-based WordPress site with 5+ second load times and a PageSpeed score of 42 — hemorrhaging potential clients who bounced before the page loaded. We hand-coded a 100% custom WordPress theme from scratch, optimized every asset, implemented Redis caching, and set up global CDN delivery. The new site loads in 1.8 seconds, scores 98 on Google PageSpeed, and the firm's monthly contact form submissions tripled within the first 60 days due to the improved user experience.",
          results: [
            "98 Google PageSpeed Score (Up from 42)",
            "1.8s Load Time (Down from 5.2s)",
            "3x More Contact Form Submissions in 60 Days",
          ],
        },
        {
          slug: "wordpress-security-maintenance",
          title: "WordPress Security Recovery & Ongoing Maintenance",
          desc: "Emergency malware removal and security hardening for a hacked WooCommerce store — restored in 6 hours with zero data loss, then secured on an ongoing maintenance plan.",
          image:
            "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070",
          tech: [
            "WordPress",
            "Wordfence",
            "UpdraftPlus",
            "WP Rocket",
            "Cloudflare",
            "ManageWP",
          ],
          features: [
            "Emergency Malware Removal & Site Restore",
            "Security Hardening (Firewall Rules, 2FA, Login Protection)",
            "Daily Automated Off-site Backups (30-Day Retention)",
            "Real-time Security Monitoring & Threat Alerts",
            "Weekly Core, Theme & Plugin Updates",
          ],
          overview:
            "A WooCommerce store owner woke up to find their site flagged by Google as malware-infected — traffic had dropped to zero and the site was suspended by their host. We performed emergency malware removal, restored a clean backup, and had the site back online and de-indexed from Google's blocklist within 6 hours with zero data loss. We then implemented a comprehensive security hardening suite and enrolled the site in our ongoing maintenance plan. The store has had zero security incidents in the 18 months since.",
          results: [
            "Site Restored in Under 6 Hours with Zero Data Loss",
            "Removed from Google Malware Blocklist Same Day",
            "Zero Security Incidents in 18+ Months Since",
          ],
        },
        {
          slug: "elementor-business-website",
          title: "Elementor Pro Business Website – Team-Editable",
          desc: "A professional, fast-loading WordPress + Elementor Pro website for a 50-person professional services firm, fully editable by their non-technical marketing team.",
          image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
          tech: [
            "WordPress",
            "Elementor Pro",
            "Elementor Theme Builder",
            "WooCommerce",
            "CSS",
          ],
          features: [
            "Custom Elementor Page & Template Designs",
            "Dynamic Content & Custom Post Types",
            "Advanced Popup & Lead Capture Forms",
            "Full Marketing Team Editing Independence",
            "Training Session + Video Documentation Delivered",
          ],
          overview:
            "A 50-person professional services firm needed a polished website their marketing coordinator could update independently — no developer dependency for blog posts, team member updates, or service page edits. We built their full site in Elementor Pro with a custom theme builder setup, global design system, and a reusable template library. We delivered a full training video library and a live onboarding session. Within 2 weeks of launch, the marketing team had published 8 new blog posts, updated 3 service pages, and added 5 new team members — all without a single developer request.",
          results: [
            "Full Team Editing Independence Achieved at Launch",
            "8 Blog Posts Published in First 2 Weeks Without Developer",
            "65% Faster Content Update Cycle vs Previous Site",
          ],
        },
      ],
    },
    blogTitle: "WordPress Insights",
    blogDescription:
      "WordPress tips, tutorials, and best practices for business owners",
    blogPosts: [
      {
        title: "How We Got a WordPress Site to 1.8s Load Time & 98 PageSpeed",
        category: "Speed Optimization",
        readTime: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
        description:
          "The exact technical changes — caching, CDN, image optimization, and code cleanup — that took a law firm's site from 42 to 98 on Google PageSpeed.",
        views: "4.5k",
        author: "Hassan Raza",
      },
      {
        title:
          "What Happens When Your WordPress Site Gets Hacked (And How to Fix It)",
        category: "Security",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070",
        description:
          "A real malware recovery case study: how we restored a hacked WooCommerce store in 6 hours and secured it against future attacks.",
        views: "3.2k",
        author: "Ali Raza",
      },
    ],
    testimonials: [
      {
        quote:
          "Our site went from a 42 to a 98 PageSpeed score and loads in under 2 seconds. Monthly leads tripled within 60 days of launch — we should have done this years ago.",
        name: "Jennifer Walsh",
        designation: "Managing Partner, Walsh & Associates Law",
        src: T2,
      },
      {
        quote:
          "They restored our hacked WooCommerce store in under 6 hours with zero data loss. The security plan they set up since has been bulletproof — zero incidents in 18 months.",
        name: "Tom Nakamura",
        designation: "Founder, Artisan Goods Co.",
        src: T7,
      },
      {
        quote:
          "Our marketing coordinator now updates the website herself — blog posts, team pages, service updates — without ever asking a developer. The Elementor training was excellent.",
        name: "Claire Dubois",
        designation: "Marketing Director, Summit Advisory Group",
        src: T4,
      },
    ],
    faqs: [
      {
        question:
          "Can you redesign my existing WordPress site without losing my content?",
        answer:
          "Yes. We handle full WordPress redesigns while preserving all your existing content, SEO rankings, and URL structure. No data loss, no broken links.",
      },
      {
        question:
          "Do you provide training so we can manage the site ourselves?",
        answer:
          "Absolutely. After launch, we provide a recorded video tutorial and a live training session so your team can confidently add pages, update content, and manage media without needing a developer.",
      },
      {
        question: "How do you handle WordPress security?",
        answer:
          "All our WordPress builds include hardened security configurations, brute-force protection, SSL setup, and firewall rules. For maintenance clients, we also include real-time malware scanning.",
      },
      {
        question: "What if I need new features added after launch?",
        answer:
          "No problem. We're always available for post-launch additions — new pages, new functionality, plugin integrations, or WooCommerce expansions. We can work on a project basis or a monthly retainer.",
      },
    ],
    roadmap: {
      title: "WordPress Development Roadmap",
      description:
        "A clear, structured path from your vision to a live website",
      steps: [
        {
          title: "Discovery & Planning",
          description:
            "Define your site structure, features, integrations, and content strategy before design begins.",
          icon: Target,
        },
        {
          title: "Design & Development",
          description:
            "Create custom designs, develop the WordPress theme or Elementor build, and integrate all functionality.",
          icon: BsPalette2,
        },
        {
          title: "Content & Testing",
          description:
            "Load all content, run cross-browser/device testing, and perform speed and SEO checks before launch.",
          icon: Code,
        },
        {
          title: "Launch & Training",
          description:
            "Deploy to live hosting, submit to Google, and deliver a full training session to your team.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Start Your WordPress Project",
      description: "Your dream website is three steps away",
      steps: [
        {
          title: "Share Your Vision",
          description:
            "Tell us about your business, your design preferences, and the features you need in your website.",
        },
        {
          title: "We Design & Build",
          description:
            "We create your custom WordPress website and keep you involved at every stage of the process.",
        },
        {
          title: "Launch & Grow",
          description:
            "We go live, hand over the keys with full training, and you start growing your online presence.",
        },
      ],
      buttonText: "Start Your Website",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Launch Your WordPress Website?",
    ctaButton: "Get a Free Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
  },
];
