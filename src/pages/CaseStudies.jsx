import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import GlowButton from "../components/GlowButton";
import { ArrowDown, Star, Filter, Zap, ExternalLink } from "lucide-react";

const agencyProjects = [
  {
    id: 1,
    title: "Global Fintech Cloud Transformation",
    category: "Cloud",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
    desc: "Re-architected legacy banking systems into a multi-region AWS infrastructure handling 5M+ transactions daily.",
    views: "18k",
    rating: 5,
    tech: ["AWS", "Terraform", "Kubernetes"],
  },
  {
    id: 2,
    title: "AI Threat Detection Engine",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop",
    desc: "Built a real-time AI cybersecurity platform detecting anomalies across distributed enterprise networks.",
    views: "12k",
    rating: 5,
    tech: ["Python", "PyTorch", "Kafka"],
  },
  {
    id: 3,
    title: "Smart Logistics IoT Platform",
    category: "IoT",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
    desc: "Connected 50,000+ devices to track shipments globally with real-time analytics and predictive routing.",
    views: "9.4k",
    rating: 4,
    tech: ["Node.js", "MQTT", "Azure IoT"],
  },
  {
    id: 4,
    title: "Healthcare Data Intelligence System",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
    desc: "Designed advanced dashboards for hospitals improving patient decision-making using real-time insights.",
    views: "15k",
    rating: 5,
    tech: ["React", "D3.js", "GraphQL"],
  },
  {
    id: 5,
    title: "Next-Gen E-Commerce Infrastructure",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
    desc: "Built a scalable commerce engine handling 1M+ daily users with microservices architecture.",
    views: "7.2k",
    rating: 5,
    tech: ["Go", "Docker", "Kubernetes"],
  },
  {
    id: 6,
    title: "AI Workflow Automation SaaS",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1470&auto=format&fit=crop",
    desc: "Created an AI-driven SaaS platform automating enterprise workflows using LLM integrations.",
    views: "21k",
    rating: 5,
    tech: ["Next.js", "OpenAI", "LangChain"],
  },
];

const Counter = ({ value, label, light = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ""));
      if (start === end) return;
      let totalMilis = 2000;
      let incrementTime = totalMilis / end;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="space-y-1 text-center">
      <h3
        className={`text-5xl font-black tracking-tighter ${light ? "text-black" : "text-white"}`}
      >
        {count}
        {value.replace(/[0-9]/g, "")}
      </h3>
      <p
        className={`text-[10px] uppercase tracking-[0.3em] font-bold ${light ? "text-zinc-600" : "text-zinc-400"}`}
      >
        {label}
      </p>
    </div>
  );
};

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = agencyProjects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );

  // Background for even sections
  const fixedBgStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070')`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className="selection:bg-cyan-500 selection:text-white">
      {/* SECTION 1: HERO (ODD - #00042A) */}
      <section className="relative min-h-screen pt-40 pb-20 px-6 bg-[#03042a] text-white flex items-center overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-purple-600/20 blur-[140px]" />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <span className="w-16 h-0.5 bg-cyan-400" />
              <p className="uppercase tracking-[0.4em] text-cyan-400 text-xs font-bold">
                Case Studies
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-black leading-[0.8]"
            >
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                IMPACT
              </span>
            </motion.h1>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              We engineer scalable platforms, AI systems, and cloud
              architectures that power modern digital ecosystems.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <GlowButton name="Explore More" href="#projects" />
              <span className="text-xs uppercase tracking-widest text-zinc-500">
                120+ Projects Delivered
              </span>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative group rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
                alt="Hero Visual"
                className="w-full h-125 object-cover scale-105 group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#03042a] via-transparent to-transparent" />

              {/* floating stats */}
              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
                <p className="text-xs text-zinc-400">Active Systems</p>
                <p className="text-xl font-bold">10M+</p>
              </div>

              <div className="absolute top-6 right-6 bg-cyan-500 text-black px-4 py-2 text-xs font-bold rounded-full">
                AI Powered
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STATS (EVEN - FIXED BG) */}
      <section style={fixedBgStyle} className="relative py-32 px-6">
        <div className="absolute inset-0 bg-[#00042A]/90 backdrop-blur-sm" />{" "}
        {/* Light Overlay for text readability */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          <Counter value="120+" label="Systems Architected" light={false} />
          <Counter value="98%" label="Success Rate" light={false} />
          <Counter value="50+" label="Global Partners" light={false} />
          <Counter value="10M" label="Active Users" light={false} />
        </div>
      </section>

      {/* SECTION 3: GRID (ODD - #00042A) */}
      <section className="bg-[#00042A] text-white pb-32">
        {/* Sticky Filter */}
        <div className="sticky top-0 z-50 bg-[#00042A]/80 backdrop-blur-2xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-cyan-500">
              <span className="text-2xl uppercase font-bold tracking-widest">
                Engineering
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {["All", "AI", "Cloud", "Security", "IoT", "Development"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-6 py-2 text-[10px] cursor-pointer uppercase font-bold tracking-widest rounded-full border transition-all duration-500 ${
                      activeFilter === cat
                        ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        : "bg-transparent text-zinc-400 border-white/10 hover:border-white/40"
                    }`}
                  >
                    {cat}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl mb-8 bg-zinc-900 border border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#00042A] via-transparent to-transparent opacity-60" />

                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      {project.tech?.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button className="absolute bottom-5 right-5 p-4 bg-cyan-500 rounded-full text-black translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ExternalLink size={20} />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500">
                      <span>{project.category}</span>
                      <span className="flex items-center gap-1">
                        <Star size={12} className="fill-cyan-500" />{" "}
                        {project.rating}.0
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold leading-tight tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CTA (EVEN - FIXED BG) */}
      <section
        style={fixedBgStyle}
        className="relative py-48 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#00042A]/90 backdrop-blur-md" />{" "}
        {/* Dark Overlay for high impact */}
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-white">
          <motion.div
            whileInView={{ scale: [0.8, 1.1, 1], opacity: [0, 1] }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8"
          >
            <Zap className="text-cyan-400" size={32} />
          </motion.div>

          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
            Ready to <br />{" "}
            <span className="text-transparent stroke-text-white italic">
              Innovate?
            </span>
          </h2>

          <p className="text-zinc-400 text-lg font-light max-w-lg mx-auto">
            Currently accepting high-impact projects for 2024. Let’s build
            something that moves the needle.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center pt-6">
            <GlowButton name="Start Project" href="/contact" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
        }
        .stroke-text-white {
          -webkit-text-stroke: 1.5px #06b6d4;
        }
      `}</style>
    </main>
  );
};

export default CaseStudies;
