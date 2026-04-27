import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "../components/GlowButton";
import {
  Cloud,
  Server,
  Layers,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Terminal,
  ShieldCheck,
  Binary,
  Database,
  Infinity as InfinityIcon,
  Activity,
  Contact,
  Check,
} from "lucide-react";
import {
  Brain,
  LineChart,
  Cpu,
  Microscope,
  Search,
  Bot,
  DatabaseZap,
  Network,
} from "lucide-react";
import CircularTestimonials from "../components/CircularTestimonials";
import HeroBg from "../assets/hero-bg.webp";
import FAQ from "../components/FAQ";

/* ================= ENHANCED SHOWCASE SLIDER ================= */
const ProjectSlider = ({ projects }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % projects.length);
  const prev = () =>
    setIndex((p) => (p - 1 + projects.length) % projects.length);

  return (
    <div className="relative w-full rounded-4xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl">
      <div className="grid lg:grid-cols-2">
        <div className="h-75 lg:h-125 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={projects[index].image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </AnimatePresence>
        </div>

        <div className="p-12 flex flex-col justify-center space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="sm:text-4xl text-2xl font-black uppercase tracking-tighter text-white">
                {projects[index].title}
              </h3>
              <p className="text-zinc-400 sm:text-lg text-xs leading-relaxed italic">
                "{projects[index].desc}"
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {projects[index].tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-bold rounded-full text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 pt-10">
            <button
              onClick={prev}
              className="p-4 rounded-full border border-white/10 hover:bg-cyan-500 transition-all text-white hover:text-black"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full border border-white/10 hover:bg-cyan-500 transition-all text-white hover:text-black"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const AIDataScience = () => {
  const [active, setActive] = useState(0);
  const services = [
    {
      title: "Predictive Analytics",
      desc: "Forecast future trends using machine learning models trained on historical business data.",
      icon: LineChart,
    },
    {
      title: "AI Automation",
      desc: "Automate repetitive workflows using intelligent bots and AI-driven decision systems.",
      icon: Bot,
    },
    {
      title: "Computer Vision",
      desc: "Enable machines to interpret images and videos for detection, tracking, and analysis.",
      icon: Search,
    },
    {
      title: "Deep Learning",
      desc: "Build advanced neural networks for complex pattern recognition and large-scale intelligence.",
      icon: Brain,
    },
  ];

  const projects = [
    {
      title: "AI Fraud Detection System",
      desc: "Developed a real-time fraud detection engine using anomaly detection, reducing financial risk by 85%.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
      tech: ["Python", "TensorFlow", "Kafka", "AWS"],
    },
    {
      title: "Smart Healthcare AI",
      desc: "Built an AI-powered diagnosis assistant improving early disease detection accuracy by 94%.",
      image:
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=2070",
      tech: ["PyTorch", "OpenCV", "CUDA", "FastAPI"],
    },
    {
      title: "Recommendation Engine",
      desc: "Created a personalized recommendation system boosting user engagement by 60%.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      tech: ["ML", "Python", "BigQuery", "Scikit-learn"],
    },
  ];

  const yourData = [
    {
      quote:
        "Their AI models transformed our business operations — we now predict demand with incredible accuracy.",
      name: "Ali Raza",
      designation: "CTO @ RetailTech",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374",
    },
    {
      quote:
        "From raw data to real intelligence — the results exceeded our expectations in every way.",
      name: "Fatima Khan",
      designation: "Head of Data @ Fintech",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1374",
    },
    {
      quote:
        "Our automation pipeline reduced manual work by 70%. AI integration was seamless.",
      name: "Usman Tariq",
      designation: "CEO @ AI Solutions",
      src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1374",
    },
  ];

  const tabs = [
    {
      title: "Data Collection",
      content: {
        heading: "Data Acquisition",
        desc: "Gathering structured and unstructured data from multiple sources.",
        points: [
          "API & Sensor Data Collection",
          "Data Warehousing",
          "Data Cleaning",
          "Labeling & Annotation",
        ],
      },
    },
    {
      title: "Data Engineering",
      content: {
        heading: "Pipeline Development",
        desc: "Designing scalable data pipelines for processing and transformation.",
        points: [
          "ETL/ELT Pipelines",
          "Real-time Streaming",
          "Data Lakes",
          "Data Transformation",
        ],
      },
    },
    {
      title: "Model Training",
      content: {
        heading: "AI Model Development",
        desc: "Training machine learning and deep learning models.",
        points: [
          "Supervised & Unsupervised Learning",
          "Neural Networks",
          "Hyperparameter Tuning",
          "Model Evaluation",
        ],
      },
    },
    {
      title: "Deployment",
      content: {
        heading: "AI Deployment",
        desc: "Deploying models into production environments.",
        points: [
          "API Integration",
          "MLOps Pipelines",
          "Monitoring & Logging",
          "Auto Scaling Systems",
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build an AI model?",
      answer:
        "A basic model can take 2–4 weeks, while enterprise-grade AI systems typically take 2–6 months depending on complexity and data.",
    },
    {
      question: "Do I need large datasets for AI?",
      answer:
        "Not always. We use transfer learning and data augmentation techniques to work effectively with smaller datasets.",
    },
    {
      question: "Can AI integrate with my existing system?",
      answer:
        "Yes. We design APIs and microservices that integrate seamlessly with your current applications and infrastructure.",
    },
    {
      question: "Is my business data secure?",
      answer:
        "Absolutely. We follow strict security protocols and deploy within secure cloud environments or private servers.",
    },
  ];

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <main className="bg-[#00042A] text-white selection:bg-cyan-500 selection:text-black mt-20">
      {/* SECTION 1 (ODD): HERO - #00042A */}
      <section
        className="relative w-full min-h-screen bg-cover bg-position-[95%]
            before:content-[''] before:absolute before:inset-0 
            before:bg-[linear-gradient(90deg,rgba(23,33,46,0.92)_40%,rgba(0,0,0,0)_100%)] 
            before:pointer-events-none flex items-center px-6 md:px-12"
        style={{
          backgroundImage: `url("https://www.outerboxdesign.com/wp-content/uploads/2026/03/custom-web-design-services.webp")`,
        }}
      >
        <div className="z-50 max-w-2xl w-full">
          <h1 className="font-sans text-white text-3xl md:text-5xl font-black leading-tight">
            AI & Data <span className="text-secondery">Science Solutions</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base sm:max-w-xl max-w-sm font-sans">
            Transform your business with intelligent AI systems, data-driven
            insights, and scalable machine learning solutions tailored to your
            needs.
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
            <img
              src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/Inc.-5000-Color-Medallion-Logo.webp"
              alt=""
              className="h-8 md:h-10"
            />
            <img
              src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/google-premier-partner-26-sm.webp"
              alt=""
              className="h-8 md:h-10"
            />
            <img
              src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/clutch-logo-24-white.webp"
              alt=""
              className="h-8 md:h-10"
            />
            <img
              src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/Forbes-advisor-white-2025-sm.webp"
              alt=""
              className="h-8 md:h-10"
            />
            <img
              src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/us-agency-award-white.webp"
              alt=""
              className="h-8 md:h-10"
            />
            <img
              src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/microsoft-select-partner.webp"
              alt=""
              className="h-8 md:h-10"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#00042A] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex lg:flex-row flex-col lg:gap-12 lg:mb-0 mb-10">
            <div className="mb-20 text-left">
              <h2 className="text-2xl md:text-4xl font-black mb-6">
                What’s Included With Our Custom Web Design
              </h2>
              <p className="text-zinc-400 max-w-xl">
                A complete end-to-end web design and development process built
                for performance, scalability, and growth.
              </p>
            </div>
            <div>
              <img
                src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/custom-web-development-2up.webp"
                alt=""
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 border border-white/10 overflow-hidden">
            {/* LEFT: TABS */}
            <div className="flex flex-col">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left px-6 py-5 cursor-pointer border transition-all duration-300
                ${
                  active === i
                    ? "bg-cyan-500 text-black border-cyan-500"
                    : "bg-white/5 border-white/10 hover:border-cyan-500"
                }
                `}
                >
                  <span className="font-bold tracking-wide uppercase text-sm">
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>

            {/* RIGHT: CONTENT */}
            <div className="relative lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 md:p-6 h-full"
                >
                  <h3 className="text-3xl font-black mb-4">
                    {tabs[active].content.heading}
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    {tabs[active].content.desc}
                  </p>

                  <ul className="space-y-3">
                    {tabs[active].content.points.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <span className="w-2 h-2 mt-2 bg-cyan-500 rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 (EVEN): CAPABILITIES - FIXED IMAGE BG */}
      <section
        className="relative py-40 px-6 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2074')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-24">
            <h2 className="text-2xl md:text-6xl font-black tracking-tighter uppercase leading-none text-white">
              Sovereign <br />{" "}
              <span className="text-cyan-500 italic">Infrastructure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/3 border border-white/10 rounded-4xl backdrop-blur-md group hover:border-cyan-500/50 transition-all"
              >
                <s.icon
                  className="text-cyan-400 mb-6 group-hover:scale-125 transition-transform"
                  size={32}
                />
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed italic">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 (ODD): THE PROCESS - #00042A */}
      <section className="py-40 px-6 bg-[#00042A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:items-center text-white">
          <div className="lg:w-1/2">
            <div className="relative p-1 bg-linear-to-br from-cyan-500/20 to-purple-500/20">
              <img
                src="https://www.outerboxdesign.com/wp-content/uploads/2026/03/outerbox-digital-marketing-agency-16.webp"
                className="h-100 w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Cloud Server"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-2">
            <h3 className="text-xl text-secondery font-['Roboto'] font-black">
              Meet OuterBox
            </h3>
            <h2 className="md:text-5xl sm:text-3xl text-xl font-black italic uppercase tracking-tighter leading-[0.8] mb-8">
              The <br />{" "}
              <span className="text-cyan-500 font-serif">Deployment</span>
            </h2>
            <p className="text-zinc-400 sm:text-lg text-xs leading-relaxed italic border-l border-white/10 pl-4">
              Since 2004, OuterBox has partnered with startups through Fortune
              500 companies to design, develop, and grow high-performing
              websites. We are platform-agnostic and strategy-led, delivering
              custom UX/UI, SEO-optimized architecture, and measurable business
              outcomes. Highlights: 20+ years in business, 1000+ client
              relationships, 1000+ custom features delivered, recognized as a
              Google Premier Partner and Microsoft Advertising Select Partner,
              and a 4.8/5 average rating from 867+ reviews across
              FeaturedCustomers and Clutch.
            </p>
            <ul className="mt-6 md:mt-8 pl-2 flex flex-col gap-4 md:gap-6 max-w-full md:max-w-100">
              {[
                "Digital Marketing To Generate Growth",
                "Web Design Solutions To Drive Conversions",
                "Branding Strategies To Drive Engagement",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={fadeLeft}
                  custom={i + 1}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <Check size={24} className="text-secondery mt-1" />
                  <h2 className="text-base md:text-xl font-bold leading-tight">
                    {text.split("To")[0]}{" "}
                    <span className="text-secondery">
                      To {text.split("To")[1]}
                    </span>
                  </h2>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 (EVEN): SHOWCASE - FIXED IMAGE BG */}
      <section
        className="relative py-48 px-6 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="sm:text-4xl text-xl font-black text-center mb-16 tracking-widest uppercase italic text-white">
            Network Expansion History
          </h2>
          <ProjectSlider projects={projects} />
        </div>
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

      {/* SECTION 5 (ODD): STACK & CTA - #00042A */}
      <section
        className="relative py-40 px-6 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2074')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
        <div className="max-w-7xl mx-auto text-center space-y-20 relative z-10">
          <div className="space-y-12">
            <div className="flex justify-center">
              <Database className="text-cyan-500" size={48} />
            </div>
            <h3 className="text-xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Ready to Secure your Node?
            </h3>
            <GlowButton name="Contact Us" href="/contact" />
          </div>
        </div>

        {/* Subtle Scanline Animation */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
      </section>
      <FAQ faqs={faqs} />
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
        }
      `}</style>
    </main>
  );
};

export default AIDataScience;
