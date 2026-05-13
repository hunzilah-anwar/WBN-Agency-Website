import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GlowButton from "../components/GlowButton";
import { Star, Zap, ExternalLink } from "lucide-react";
import WebDevImg from "../assets/web-dev.png";
import DigitalMarketingImg from "../assets/digital-marketing.png";
import TiktokImg from "../assets/tiktok.png";
import YoutubeImg from "../assets/youtube.png";
import VideoEditing from "../assets/video-editing.png";
import Amazon from "../assets/amazon.png";
import { servicesData } from "../data/serviceData";
import { Link } from "react-router-dom";

// Background for even sections
const fixedBgStyle = {
  backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070')`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? servicesData
      : servicesData.filter((p) => p.title === activeFilter);

  const categories = ["All", ...new Set(servicesData.map((s) => s.title))];

  const logos = [
    WebDevImg,
    DigitalMarketingImg,
    TiktokImg,
    YoutubeImg,
    VideoEditing,
    Amazon,
  ];
  const duplicatedLogos = Array(5).fill(logos).flat();

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
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.8]"
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

            <div className="pt-4">
              <GlowButton name="Explore More" to="/contact" />
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
      <section className="py-8 relative bg-secondery overflow-hidden">
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
      {/* SECTION 3: GRID (ODD - #00042A) */}
      <section className="bg-[#00042A] text-white pb-28 pt-16">
        {/* Sticky Filter */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col justify-between gap-10">
            <div className="flex items-center gap-3 text-white">
              <span className="text-4xl uppercase font-bold tracking-widest">
                Engineering
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
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
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24">
          <motion.div
            layout
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-10"
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
                  <div className="relative aspect-4/5 overflow-hidden mb-8 bg-zinc-900 border border-white/5">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#00042A] via-transparent to-transparent opacity-60" />

                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      {project.tabs?.map((tab, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest rounded-full"
                        >
                          {tab.title}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/services/${project.slug}`}
                      className="absolute bottom-5 right-5 p-4 bg-cyan-500 rounded-full text-black cursor-pointer transition-all duration-500 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.sectionTitle}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light line-clamp-2">
                      {project.sectionDesc}
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
        <div className="absolute inset-0 bg-black/60" />{" "}
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

          <p className="text-zinc-300 text-lg font-light max-w-lg mx-auto">
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
