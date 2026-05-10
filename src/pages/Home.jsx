import React, { useEffect, useState } from "react";
import HeroBg from "../assets/hero-bg.webp";
import GlowButton from "../components/GlowButton";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckIcon, ArrowUpRight, X } from "lucide-react";

import TrophyImage from "../assets/web-designs-trophy.png";
import FeaturedWork from "../components/FeaturedWork";
import AgencyServices from "../components/AgencyServices";
import PartnerSection from "../components/PartnerSection";
import WhitepaperSection from "../components/WhitepaperSection";
import ProjectCards from "../components/ProjectCards";
import CircularTestimonials from "../components/CircularTestimonials";
import FAQ from "../components/FAQ";
import BlogCard from "../components/BlogCard";
import FeaturedProjectImg from "../assets/featured-project.webp";
import BlogBg from "../assets/blog-bg.jpg";

import WebDevImg from "../assets/web-dev.png";
import DigitalMarketingImg from "../assets/digital-marketing.png";
import TiktokImg from "../assets/tiktok.png";
import YoutubeImg from "../assets/youtube.png";
import VideoEditing from "../assets/video-editing.png";
import Amazon from "../assets/amazon.png";

const Home = () => {
  const logos = [
    WebDevImg,
    DigitalMarketingImg,
    TiktokImg,
    YoutubeImg,
    VideoEditing,
    Amazon,
  ];

  // We duplicate the array to ensure a seamless infinite loop
  const duplicatedLogos = Array(5).fill(logos).flat();
  const [selected, setSelected] = useState(null);

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  // const projects = [
  //   {
  //     title: "Andersen Global",
  //     category: "Web Design",
  //     desc: "Corporate finance & consulting platform with modern UX focused on clarity, trust, and performance.",
  //     image: "https://www.loungelizard.com/wp-content/uploads/Andersen_CS.png",
  //     tags: ["Finance", "Corporate", "UX Design"],
  //     tech: ["React", "UI/UX", "Tailwind"],
  //     duration: "3 Months",
  //     link: "#",
  //     featured: true,
  //   },
  //   {
  //     title: "Colorado Rafting",
  //     category: "Development",
  //     desc: "Adventure booking platform with immersive booking flow and smooth user experience for travelers.",
  //     image:
  //       "https://www.loungelizard.com/wp-content/uploads/ll_portfolio-ava.jpg",
  //     tags: ["Travel", "Booking System", "UI Design"],
  //     tech: ["Next.js", "Node.js", "MongoDB"],
  //     duration: "2.5 Months",
  //     link: "#",
  //     featured: false,
  //   },
  //   {
  //     title: "E-Commerce Store",
  //     category: "Shopify",
  //     desc: "High converting online store with optimized checkout flow and conversion-focused UI design.",
  //     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  //     tags: ["E-Commerce", "Shopify", "Conversion"],
  //     tech: ["Shopify", "Liquid", "JS"],
  //     duration: "4 Months",
  //     link: "#",
  //     featured: true,
  //   },
  // ];
  const yourData = [
    {
      quote:
        "The integration of Meta AI into the classic Wayfarer silhouette is seamless. It’s the first time wearable tech actually feels like a fashion statement rather than a gadget.",
      name: "Elena Rodriguez",
      designation: "Creative Director @ Vogue",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop",
    },
    {
      quote:
        "In-lens intelligence during my training sessions is a total game changer. Having my stats visible without breaking my stride is exactly what the future of performance looks like.",
      name: "Marcus Chen",
      designation: "Pro Ironman Athlete",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    },
    {
      quote:
        "We've been waiting for hands-free connectivity that doesn't look bulky. These glasses are a masterpiece of engineering and style. Digital Silk really captured the essence.",
      name: "Julian Vane",
      designation: "Tech Entrepreneur",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    },
    {
      quote:
        "The audio quality and voice command responsiveness are incredible. I can manage my entire digital life while keeping my phone in my pocket. Pure freedom.",
      name: "Sarah Jenkins",
      designation: "Digital Nomad",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1374&auto=format&fit=crop",
    },
  ];
  const posts = [
    {
      id: 1,
      title: "AI is Changing the Future of Web Development",
      category: "AI",
      imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
      views: "12K",
      readTime: 5,
      author: "Hassan Ali",
      rating: 5,
      description:
        "AI tools are transforming how developers build modern applications.",
      content:
        "Artificial Intelligence is rapidly changing the landscape of web development. From code generation to UI design, AI is now part of every modern workflow. Developers are becoming more productive and creative than ever before...",
    },
    {
      id: 2,
      title: "Modern UI/UX Design Trends in 2026",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      views: "8.2K",
      readTime: 4,
      author: "Sara Khan",
      rating: 4,
      description:
        "Minimal, glassmorphism and motion UI are dominating design world.",
      content:
        "UI/UX design is evolving rapidly. In 2026, we see a strong shift towards glassmorphism, micro-interactions, and motion-based interfaces that enhance user experience...",
    },
    {
      id: 3,
      title: "Building Scalable SaaS Applications",
      category: "SaaS",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      views: "10K",
      readTime: 6,
      author: "Ahmed Raza",
      rating: 5,
      description: "Learn how to build scalable SaaS apps using modern stacks.",
      content:
        "Scalable SaaS architecture requires proper planning, microservices, and cloud infrastructure. Tools like AWS, Docker, and Kubernetes make scaling easier...",
    },
    {
      id: 4,
      title: "React Performance Optimization Tips",
      category: "Development",
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
      views: "9K",
      readTime: 7,
      author: "Ali Hassan",
      rating: 5,
      description: "Improve React app performance with simple techniques.",
      content:
        "React performance can be improved using memoization, lazy loading, and efficient state management. Avoid unnecessary re-renders...",
    },
    {
      id: 5,
      title: "Future of JavaScript Frameworks",
      category: "Tech",
      imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      views: "11K",
      readTime: 5,
      author: "Usman Tariq",
      rating: 4,
      description: "Which JS framework will dominate the future?",
      content:
        "JavaScript ecosystem is growing fast. React, Vue, and Svelte are competing, but new frameworks are also emerging with better performance...",
    },
    {
      id: 6,
      title: "Cybersecurity in Modern Web Apps",
      category: "Security",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      views: "7.5K",
      readTime: 6,
      author: "Zain Malik",
      rating: 5,
      description: "Protect your apps from modern cyber threats.",
      content:
        "Security is one of the most important aspects of modern web development. HTTPS, encryption, and secure authentication are essential...",
    },
  ];
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide web development, SaaS applications, AI solutions, and custom software tailored to your needs.",
    },
    {
      question: "How long does a project take?",
      answer:
        "It depends on complexity, but most projects are completed within 2–6 weeks.",
    },
    {
      question: "Do you provide support after delivery?",
      answer:
        "Yes, we offer ongoing support, maintenance, and updates after project completion.",
    },
    {
      question: "Can I request custom features?",
      answer:
        "Absolutely! We specialize in building fully customized solutions based on your requirements.",
    },
  ];
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };
  return (
    <>
      <section
        className="relative w-full min-h-screen bg-cover bg-position-[75%]
      before:content-[''] before:absolute before:inset-0 
      before:bg-[linear-gradient(90deg,rgba(23,33,46,0.92)_40%,rgba(0,0,0,0)_100%)] 
      before:pointer-events-none flex items-center px-6 md:px-12 pt-24"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="z-50 max-w-2xl w-full">
          <h1 className="font-sans text-white text-3xl md:text-5xl font-black leading-tight flex flex-col justify-start">
            Digital Growth Solutions{" "}
            <span className="text-secondery">for Modern Brands</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:max-w-xl max-w-sm font-sans">
            Drive long-term success for your business with powerful end-to-end
            digital services. From web development and digital marketing to AI
            solutions and content creation, we craft customized strategies
            tailored to your brand’s unique goals and vision. No generic
            formulas — only smart, results-driven solutions designed
            specifically for your growth journey.
          </p>
          <form className="relative flex items-center justify-start group/form max-w-xl mt-8">
            <div className="rounded-full relative flex w-full bg-white border border-gray-200 shadow-xl overflow-hidden">
              {/* Email Icon */}
              <div className="flex items-center justify-center sm:pl-4 pl-2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Input Field */}
              <input
                type="email"
                required
                placeholder="Enter your business email"
                className="w-full bg-transparent sm:px-4 px-2 sm:py-4 py-3 md:py-5 sm:text-sm text-xs text-gray-900 outline-none placeholder:text-gray-400 font-medium"
              />

              {/* Modern Action Button */}
              <button className="rounded-full group/btn relative sm:px-6 px-1 sm:py-5 py-3 bg-black text-white text-[10px] sm:text-xs sm:font-black uppercase tracking-widest overflow-hidden transition-all duration-300 whitespace-nowrap cursor-pointer w-45">
                {/* 45-Degree Hover Layer (Violet) */}
                <div className="absolute top-[-80%] left-[-80%] w-[200%] h-[300%] z-0 bg-secondery rotate-45 translate-y-[150%] group-hover/btn:translate-y-[-30%] transition-transform duration-500 ease-out" />

                {/* Shine Wave Animation */}
                <div className="absolute inset-0 z-10 overflow-hidden">
                  <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-white/20 group-hover/btn:animate-shine-wave" />
                </div>

                {/* Button Text */}
                <span className="relative z-20">Get a Quota</span>
              </button>
            </div>

            {/* CSS for Shine Wave */}
            <style>
              {`
                @keyframes shine-wave {
                  0% { left: -100%; opacity: 0; }
                  50% { opacity: 0.5; }
                  100% { left: 100%; opacity: 0; }
                }
                .group-hover\\/btn\\:animate-shine-wave {
                  animation: shine-wave 0.8s ease-in-out forwards;
                }
              `}
            </style>
          </form>
          <div className="flex flex-wrap justify-start items-center gap-6 mt-10">
            <img src={WebDevImg} alt="" className="h-12 md:h-20" />
            <img src={DigitalMarketingImg} alt="" className="h-12 md:h-18" />
            <img src={TiktokImg} alt="" className="h-12 md:h-20" />
            <img src={YoutubeImg} alt="" className="h-12 md:h-20" />
            <img src={VideoEditing} alt="" className="h-12 md:h-20" />
          </div>
        </div>
      </section>
      <section className="bg-[#00042A]">
        <AgencyServices />
      </section>
      <section
        className="relative py-28 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${FeaturedProjectImg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondery">
                Why Choose Us
              </p>

              <h2 className="text-2xl md:text-4xl font-black text-white leading-[0.95] tracking-tighter uppercase flex flex-col gap-2 mb-6">
                We Follow a Proven
                <span className="text-secondery">Creative Process</span>
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-12 max-w-xl">
                Our workflow is designed to deliver high-quality digital
                solutions with creativity, strategy, and performance at every
                stage of the project lifecycle.
              </p>

              {/* POINTS */}
              <div className="space-y-8">
                {[
                  {
                    title: "Planning & Strategy",
                    desc: "We analyze business goals, market trends, and user needs to create a strong project roadmap before development starts.",
                  },
                  {
                    title: "Modern UI/UX Design",
                    desc: "Our team creates visually stunning and user-friendly interfaces focused on engagement and smooth user experience.",
                  },
                  {
                    title: "Clean Development",
                    desc: "We develop scalable, secure, and optimized solutions using modern technologies and industry best practices.",
                  },
                  {
                    title: "Testing & Launch",
                    desc: "Every project goes through detailed testing and optimization to ensure flawless performance before deployment.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    {/* Number */}
                    <div className="min-w-[50px] h-[50px] bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      0{i + 1}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-all duration-300">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src={TrophyImage}
                  alt="Team Work"
                  className="w-full h-[500px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4">
                <h3 className="text-2xl font-bold text-cyan-400">99%</h3>
                <p className="text-white text-sm">Project Success</p>
              </div>

              <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4">
                <h3 className="text-2xl font-bold text-cyan-400">250+</h3>
                <p className="text-white text-sm">Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-[#03042a] overflow-hidden">
        {/* The Wrapper with Faded Edges */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex flex-none gap-16 items-center"
            animate={{
              x: ["0%", "-20%"], // Move from start to half (since it's duplicated)
            }}
            transition={{
              ease: "linear",
              duration: 10, // Adjust speed here (higher = slower)
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-none w-25 flex justify-center items-center"
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index}`}
                  className="h-16 w-full object-contain scale-80 hover:scale-100 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <FeaturedWork />
      <PartnerSection />
      <section
        className={`relative w-full overflow-hidden bg-no-repeat bg-cover bg-fixed`}
        style={{
          backgroundImage: `url(${BlogBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <BlogCard
          title="Latest Blogs"
          description="Explore our latest thoughts, ideas, and innovations shaping the future."
          posts={posts}
          onPostClick={handlePostClick}
        />
        {selectedPost && (
          <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            {/* MODAL BOX */}
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b0b0b] border border-white/10 shadow-2xl">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white cursor-pointer hover:text-black transition flex items-center justify-center"
              >
                ✕
              </button>

              {/* IMAGE */}
              <div
                className="h-72 md:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedPost.imageUrl})` }}
              />

              {/* CONTENT */}
              <div className="p-6 md:p-10 space-y-6 text-white">
                {/* CATEGORY */}
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/10 border border-white/20 rounded-full">
                  {selectedPost.category}
                </span>

                {/* TITLE */}
                <h2 className="text-2xl md:text-4xl font-black leading-tight">
                  {selectedPost.title}
                </h2>

                {/* META */}
                <div className="flex flex-wrap gap-4 text-xs text-white/60">
                  <span>{selectedPost.views} views</span>
                  <span>{selectedPost.readTime} min read</span>
                  <span>Author: {selectedPost.author}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  {selectedPost.description}
                </p>

                {/* LONG CONTENT (optional) */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {selectedPost.content}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="bg-[#00042A]">
        <CircularTestimonials
          testimonials={yourData}
          autoplay={true}
          colors={{
            arrowBackground: "#050505",
            arrowHoverBackground: "#009cff", // Your Secondary
          }}
        />
      </section>
      <WhitepaperSection />
      <FAQ faqs={faqs} />
    </>
  );
};

export default Home;
