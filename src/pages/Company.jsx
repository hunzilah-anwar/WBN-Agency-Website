import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GlowButton from "../components/GlowButton";
import ProjectCards from "../components/ProjectCards";
import {
  ChevronLeft,
  ChevronRight,
  Binary,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

/* ================= IMAGE SLIDER ================= */
const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="relative h-105 md:h-150 rounded-3xl overflow-hidden border border-white/10 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-t from-[#00042A] via-transparent to-transparent" />

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 bottom-4 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-cyan-500 hover:text-black transition"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 bottom-4 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-cyan-500 hover:text-black transition"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

/* ================= MAIN ================= */
const Company = () => {
  const servicesData = [
    {
      id: 1,
      title: "Software Engineering",
      category: "ENTERPRISE",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      desc: "High-performance backend systems designed for scale and reliability.",
      tech: ["Rust", "Python", "Docker"],
    },
    {
      id: 2,
      title: "SaaS Platforms",
      category: "PRODUCT",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      desc: "Multi-tenant SaaS products with secure billing and analytics.",
      tech: ["Next.js", "AWS", "Stripe"],
    },
    {
      id: 3,
      title: "Web Experience",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      desc: "Fast, modern and interactive web applications.",
      tech: ["React", "GSAP", "Tailwind"],
    },
    {
      id: 4,
      title: "AI Systems",
      category: "INTELLIGENCE",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      desc: "LLM-based automation, prediction systems and AI pipelines.",
      tech: ["OpenAI", "PyTorch", "LangChain"],
    },
  ];

  const showcaseImages = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  ];

  return (
    <main className="bg-[#00042A] text-white">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* TEXT */}
          <div className="space-y-8">
            <p className="text-cyan-500 text-[11px] tracking-[0.4em] uppercase">
              Engineering Studio
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              BUILDING <br />
              <span className="text-cyan-400">DIGITAL SYSTEMS</span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              We design scalable systems, AI infrastructure, and modern web
              platforms for real-world production environments.
            </p>

            <div className="flex gap-6 items-center">
              <GlowButton name="Start Project" href="/contact" />
              <button className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition flex items-center gap-2">
                Explore <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              className="rounded-3xl h-[520px] w-full object-cover border border-white/10"
            />

            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
              <p className="text-xs text-zinc-400">System Status</p>
              <p className="text-cyan-400 font-bold">Operational</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-5xl md:text-7xl font-black">Capabilities</h2>

          <ProjectCards projects={servicesData} />
        </div>
      </section>

      {/* ================= LAB ================= */}
      <section className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.08),transparent_60%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* ================= TEXT SIDE ================= */}
          <div className="space-y-8">
            {/* ICON */}

            {/* TITLE */}
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
              Engineering <br />
              <span className="text-cyan-400">Research Lab</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              A dedicated R&D environment where we design, simulate, and
              stress-test large-scale systems before production deployment.
              Every architecture goes through performance, security, and
              scalability validation.
            </p>

            {/* TECH HIGHLIGHTS */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Zap size={16} className="text-cyan-400" />
                <span className="font-medium">
                  High-Performance Distributed Systems
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <ShieldCheck size={16} className="text-cyan-400" />
                <span className="font-medium">
                  Zero-Trust Security Architecture
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Cpu size={16} className="text-cyan-400" />
                <span className="font-medium">
                  AI & Real-Time Data Processing Pipelines
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Layers size={16} className="text-cyan-400" />
                <span className="font-medium">
                  Microservices & Cloud-Native Infrastructure
                </span>
              </div>
            </div>
          </div>

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">
            <ImageSlider images={showcaseImages} />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-40 text-center relative">
        <div className="absolute inset-0 bg-cyan-500/10 blur-[120px]" />

        <div className="relative space-y-10 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black">START <span className="text-secondery">BUILDING</span></h2>

          <p className="text-zinc-400 text-lg">
            Let’s build scalable systems that actually matter.
          </p>

          <GlowButton name="Contact Us" href="/contact" />
        </div>
      </section>
    </main>
  );
};

export default Company;
