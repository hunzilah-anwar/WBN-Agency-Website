import React from "react";
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
import Counter from "../components/Counter";
const Home = () => {
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
  const faqs = [
    {
      question:
        "1. What makes your agency’s approach different from individual freelancers? ",
      answer: `We operate as a multi-disciplinary team, meaning your project benefits from a collective of experts. While a freelancer might excel in one area, we provide a holistic "Strategy-to-Launch" workflow. This ensures that your design, functionality, and marketing strategy are perfectly synchronized for growth rather than being handled in isolation.`,
    },
    {
      question:
        "2. How do you ensure the project aligns with my specific brand vision?",
      answer: `Our process begins with a "Visionary Mapping" phase. We don't just start building; we conduct a deep dive into your business goals and market positioning. By establishing a clear strategic roadmap and providing conceptual models for your review, we guarantee the final product is a perfect reflection of your brand identity.`,
    },
    {
      question:
        "3. Will the final solution be easy for me to manage after delivery?",
      answer: `Absolutely. We prioritize "Clean Development" and user-centric architecture. Whether we are delivering a website or a custom tool, we ensure the backend is intuitive. We also provide a comprehensive handover and a brief walkthrough to ensure you feel confident managing and scaling your new digital asset.`,
    },
    {
      question: "4. How do you handle project timelines and communication?",
      answer: `Transparency is our standard. We follow a strict 4-step framework—Planning, Design, Development, and Testing—to keep the project on track. You will receive regular milestone updates, and we maintain open lines of communication to ensure feedback is integrated quickly and efficiently.`,
    },
    {
      question: "5. Do you offer post-launch support and optimization?",
      answer: `Yes. We believe a project’s success is measured by its performance after the debut. Our "Launch Excellence" phase includes rigorous testing to ensure everything is bug-free. Beyond delivery, we offer optimization support to help you analyze results and make data-driven adjustments for long-term scalability.`,
    },
  ];
  // Background for even sections
  const fixedBgStyle = {
    backgroundColor: "#03042a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <section
        className="relative overflow-hidden w-full sm:min-h-screen bg-cover sm:bg-position-[85%] bg-position-[78%]
      before:content-[''] before:absolute before:inset-0 
      before:bg-[linear-gradient(90deg,rgba(23,33,46,0.92)_40%,rgba(0,0,0,0)_100%)] 
      before:pointer-events-none flex items-center px-4 sm:px-12 sm:py-24 pt-40 py-20"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="z-50 max-w-2xl w-full">
          <h1 className="font-sans text-white text-2xl md:text-5xl font-black leading-tight flex flex-col justify-start">
            Where Creativity Meets{" "}
            <span className="text-secondery">Computational Power</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:max-w-xl max-w-sm font-sans">
            From stunning web experiences and high-end graphics to custom tool
            development and advanced machine learning models, we provide the
            full-stack solutions your business needs to scale in the digital
            age.
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
        </div>
      </section>
      <section
        style={fixedBgStyle}
        className="relative sm:py-20 py-10 sm:px-6 px-4 border-y-2 border-[#03042a]"
      >
        {/* Light Overlay for text readability */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          <Counter value="120+" label="Systems Architected" light={false} />
          <Counter value="98%" label="Success Rate" light={false} />
          <Counter value="50+" label="Global Partners" light={false} />
          <Counter value="10M" label="Active Users" light={false} />
        </div>
      </section>
      <section
        className=" bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${FeaturedProjectImg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/90"></div>
        <AgencyServices />
      </section>
      <section className="bg-[#00042A] sm:py-28 py-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto sm:px-6 px-4">
          <div className="">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondery">
              WBN Agency Performance
            </p>

            <h2 className="text-2xl md:text-4xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-6">
              Trusted Digital Agency With{" "}
              <span className="text-secondery">High Success Rates</span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-12">
              WBN Agency is a results-driven digital agency dedicated to helping
              businesses build a strong online presence through innovative
              technology, creative strategies, and high-performance digital
              solutions. We specialize in web development, e-commerce solutions,
              AI & machine learning, digital marketing, custom tool development,
              graphic design, video editing, and professional WordPress websites
              tailored to modern business needs. Our team focuses on delivering
              visually engaging, scalable, and conversion-focused solutions that
              not only enhance brand identity but also improve customer
              experience, generate leads, and drive long-term business growth.
              From startups to established companies, WBN Agency combines
              creativity, strategy, and advanced technologies to transform ideas
              into impactful digital experiences with measurable success and
              outstanding client satisfaction.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              {[
                {
                  title: "Web Development",
                  desc: "Building fast, scalable, and responsive websites with modern technologies for outstanding business performance.",
                },
                {
                  title: "E-Commerce",
                  desc: "Creating high-converting online stores optimized for sales growth, customer experience, and secure transactions.",
                },
                {
                  title: "Digital Marketing",
                  desc: "Driving traffic, leads, and brand awareness through SEO, social media, and targeted advertising campaigns.",
                },
                {
                  title: "Tool Development",
                  desc: "Developing custom tools and automation systems that improve workflow efficiency and business productivity.",
                },
                {
                  title: "AI & Machine Learning",
                  desc: "Delivering smart AI-powered solutions, automation, and intelligent systems for modern digital businesses.",
                },
                {
                  title: "Graphic Design",
                  desc: "Designing professional branding, social media creatives, and visual identities that leave lasting impressions.",
                },
                {
                  title: "Video Editing",
                  desc: "Producing engaging and high-quality video content optimized for marketing, YouTube, and social platforms.",
                },
                {
                  title: "WordPress Website",
                  desc: "Creating secure, SEO-friendly, and fully customized WordPress websites tailored to business goals.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  {/* NUMBER */}
                  <div className="min-w-13.75 h-13.75 bg-linear-to-br from-secondery to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    0{i + 1}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="sm:text-xl text-md font-semibold text-white mb-1 group-hover:text-secondery transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* RIGHT IMAGE */}
            <div className="relative">
              {/* MAIN IMAGE */}
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src={TrophyImage}
                  alt="WBN Agency Success"
                  className="w-full h-120 object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-[#020817] via-transparent to-transparent"></div>
              </div>

              {/* FLOATING STATS */}
              <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2">
                <h3 className="text-2xl font-bold text-secondery">99%</h3>
                <p className="text-white text-xs">Client Satisfaction</p>
              </div>

              <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2">
                <h3 className="text-2xl font-bold text-secondery">500+</h3>
                <p className="text-white text-xs">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedWork />
      <PartnerSection />
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
