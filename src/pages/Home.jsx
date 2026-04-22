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
const Home = () => {
  const logos = [
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/xerox_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/PG_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/nyc_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/nfl_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/mcds_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png",
    "https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png",
  ];

  // We duplicate the array to ensure a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];
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

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const [selected, setSelected] = useState(null);

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  const projects = [
    {
      title: "Andersen Global",
      category: "Web Design",
      desc: "Corporate finance & consulting platform with modern UX focused on clarity, trust, and performance.",
      image: "https://www.loungelizard.com/wp-content/uploads/Andersen_CS.png",
      tags: ["Finance", "Corporate", "UX Design"],
      tech: ["React", "UI/UX", "Tailwind"],
      duration: "3 Months",
      link: "#",
      featured: true,
    },
    {
      title: "Colorado Rafting",
      category: "Development",
      desc: "Adventure booking platform with immersive booking flow and smooth user experience for travelers.",
      image:
        "https://www.loungelizard.com/wp-content/uploads/ll_portfolio-ava.jpg",
      tags: ["Travel", "Booking System", "UI Design"],
      tech: ["Next.js", "Node.js", "MongoDB"],
      duration: "2.5 Months",
      link: "#",
      featured: false,
    },
    {
      title: "E-Commerce Store",
      category: "Shopify",
      desc: "High converting online store with optimized checkout flow and conversion-focused UI design.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      tags: ["E-Commerce", "Shopify", "Conversion"],
      tech: ["Shopify", "Liquid", "JS"],
      duration: "4 Months",
      link: "#",
      featured: true,
    },
  ];

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
            Full-Service Performance{" "}
            <span className="text-secondery">Marketing Agency</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base sm:max-w-xl max-w-sm font-sans">
            Achieve durable growth for your brand via end-to-end solutions
            across the entire digital marketing landscape. We'll meet you where
            you are in your marketing journey and develop a one-size-fits-one
            approach specific to your needs.
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
      <section className="py-10 bg-[#03042a] overflow-hidden">
        {/* The Wrapper with Faded Edges */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex flex-none gap-8 items-center"
            animate={{
              x: ["0%", "-50%"], // Move from start to half (since it's duplicated)
            }}
            transition={{
              ease: "linear",
              duration: 25, // Adjust speed here (higher = slower)
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
                  className="h-8 w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section
        className="relative text-white w-full min-h-screen bg-[#00042A] overflow-hidden py-20 md:py-24 px-6 md:px-20"
        style={{
          backgroundImage:
            "radial-gradient(circle 750px at 20% -10%, rgba(136, 66, 220, 0.15) 0, transparent 80%)",
        }}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-start justify-center"
          >
            <motion.h1
              variants={fadeLeft}
              custom={0}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              <span className="text-secondery">Web Design Agency</span>{" "}
              Delivering Custom Solutions
            </motion.h1>

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

            <motion.p
              variants={fadeLeft}
              custom={4}
              className="mt-6 md:mt-8 max-w-full md:max-w-130 text-sm md:text-[16px] opacity-90"
            >
              Our award-winning company handles the full process, including
              strategy, UX, design, development, branding, marketing and ongoing
              optimization after launch.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeRight}
            className="flex justify-center md:justify-end"
          >
            <img
              src={TrophyImage}
              alt=""
              className="w-[80%] sm:w-[60%] md:w-[90%] max-w-125 object-contain"
            />
          </motion.div>
        </div>
      </section>
      <FeaturedWork />
      <section className="bg-[#00042A]">
        <AgencyServices />
      </section>
      <WhitepaperSection />
      <PartnerSection />
      <section className={`relative w-full py-28 overflow-hidden bg-[url("https://www.digitalsilk.com/wp-content/uploads/2023/05/San-francisco-web-design-technology-stack.jpg")] bg-no-repeat bg-cover bg-fixed`} >
        <div className="absolute inset-0 bg-black/60" />

        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-5xl font-bold text-white uppercase tracking-tighter"
          >
            Featured <span className="text-secondery">Projects</span>
          </motion.h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm">
            A selection of our latest work that combines creativity,
            performance, and modern UI design.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ProjectCards projects={projects} setSelected={setSelected} />
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button className="relative px-10 sm:py-5 py-3 bg-white text-black font-bold uppercase text-sm cursor-pointer tracking-widest overflow-hidden group">
            <span className="relative z-10 tracking-tight">
              View All Projects
            </span>
            <div className="absolute inset-0 bg-secondery translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.85, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 30 }}
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl"
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 cursor-pointer rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition z-10"
                >
                  <X size={18} />
                </button>

                {/* IMAGE */}
                <div className="h-80 md:h-105 overflow-hidden">
                  <img
                    src={selected?.image}
                    alt={selected?.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 space-y-2">
                  <p className="text-secondery text-xs uppercase tracking-widest">
                    {selected?.category}
                  </p>

                  <h2 className="text-2xl uppercase font-bold text-white">
                    {selected?.title}
                  </h2>

                  <p className="text-white/70 text-sm">{selected?.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Home;
