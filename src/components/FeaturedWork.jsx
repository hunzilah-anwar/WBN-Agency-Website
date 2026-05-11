import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlowButton from "./GlowButton";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
const FeaturedWork = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, current]);

  const next = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center py-20 px-6 font-sans">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-40 grayscale bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070')`,
          backgroundSize: "cover",
          filter: "blur(8px)",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* HEADER */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col justify-between items-center gap-6 mb-16 pb-20">
        <h2 className="sm:text-5xl text-3xl font-black text-white uppercase tracking-tighter italic">
          Featured Work
        </h2>
        <p className="max-w-md text-white text-center text-sm leading-relaxed font-medium">
          We are dedicated to delivering innovative, responsive, and high-performance digital solutions. By merging visually compelling design with feature-rich functionality, we craft strategic web experiences and marketing campaigns that accelerate business growth.
        </p>
      </div>

      <div className="relative">
        {/* ARROWS */}
        <div className="absolute right-0 -top-20 flex gap-1">
          <button
            onClick={prev}
            className="w-14 h-14 border border-white/20 bg-black/40 text-white flex items-center justify-center hover:bg-secondery z-20 transition ease-in-out duration-300 cursor-pointer"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={next}
            className="w-14 h-14 border border-white/20 bg-black/40 text-white flex items-center justify-center hover:bg-secondery z-20 transition ease-in-out duration-300 cursor-pointer"
          >
            <ChevronRight size={30} />
          </button>
        </div>
        {/* SLIDER WRAPPER */}
        <div
          className="relative z-10 w-full max-w-5xl overflow-hidden pb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* SLIDER TRACK */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* LEFT SIDE */}
                <div className="lg:col-span-4 flex flex-col items-start gap-6">
                  <h3 className="sm:text-3xl text-xl font-semibold text-white uppercase tracking-wider leading-none">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-col gap-3">
                    {/* WEBSITE DETAIL PAGE */}
                    <Link to={`/project/${project.slug}`}>
                      <GlowButton
                        name="View Website"
                        className="w-full bg-secondery cursor-pointer"
                      />
                    </Link>

                    {/* CASE STUDY PAGE */}
                    <Link to={`/casestudies`}>
                      <button className="w-full py-3 border border-white text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition ease-in-out duration-300 cursor-pointer">
                        View Case Study
                      </button>
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-8 relative flex justify-center items-center">
                  <div className="relative w-full max-w-4xl border-12 border-[#1a1a1a] bg-black shadow-2xl overflow-hidden aspect-video">
                    <img
                      src={project.desktopImg}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* STAND */}
                  <div className="absolute -bottom-34 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div
                      className="relative sm:w-44 w-25 h-32 border-x border-black/10 shadow-lg"
                      style={{
                        background:
                          "linear-gradient(to right, #9ca3af 0%, #f3f4f6 50%, #9ca3af 100%)",
                      }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-7 bg-[#0a0a0a] rounded-b-full shadow-inner" />
                    </div>
                    <div className="w-[150%] h-4 bg-black/40 blur-xl -mt-2 rounded-[100%]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="relative z-10 mt-20 flex gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all duration-500 ${
              current === i ? "bg-secondery w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
