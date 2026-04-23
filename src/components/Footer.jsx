import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#00042A] pb-10 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-5%] w-60 h-60 md:w-80 md:h-80 bg-purple-600/10 blur-[140px]" />
        <div className="absolute top-0 left-[-10%] w-52 h-52 md:w-72 md:h-72 bg-purple-500/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* ================= MARQUEE ================= */}
      <div className="relative border-y border-white/5 py-4 md:py-6 mb-12 md:mb-20 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(3)
            .fill("LET’S BUILD SOMETHING GREAT • ")
            .map((text, i) => (
              <span
                key={i}
                className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-black uppercase tracking-tighter text-transparent pr-4"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                }}
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 items-start">
          
          {/* ================= LEFT ================= */}
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter uppercase">
                READY TO
                <span className="text-secondery"> START?</span>
              </h2>

              <p className="max-w-sm text-white/70 text-xs sm:text-sm leading-relaxed">
                We take on a limited number of projects each year to ensure deep
                focus, precision, and premium quality execution.
              </p>
            </div>

            {/* CTA BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer flex items-center gap-3 sm:gap-5 bg-white text-black px-1 pr-5 sm:pr-8 py-1 rounded-full"
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-secondery ease-in-out rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition duration-500">
                <ArrowUpRight size={18} />
              </div>

              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">
                Get In Touch
              </span>
            </motion.button>
          </div>

          {/* ================= NAV ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase">
              Pages
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {["Services", "Projects", "Agency", "Journal"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-secondery transition"
                >
                  <span className="w-0 h-px bg-secondery group-hover:w-4 transition-all duration-300" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase">
              Services
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {[
                "Software Development",
                "Saas App Development",
                "Web Development",
                "AI and Data Science",
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-secondery transition"
                >
                  <span className="w-0 h-px bg-secondery group-hover:w-4 transition-all duration-300" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* ================= SERVICES (DUPLICATE) ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase">
              Services
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {[
                "Software Development",
                "Saas App Development",
                "Web Development",
                "AI and Data Science",
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-secondery transition"
                >
                  <span className="w-0 h-px bg-secondery group-hover:w-4 transition-all duration-300" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 md:mt-24 pt-6 md:pt-8 border-t border-white/5">
          <p className="text-center text-xs sm:text-sm text-white">
            &copy; {currentYear} Your Company. All rights reserved.
          </p>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;