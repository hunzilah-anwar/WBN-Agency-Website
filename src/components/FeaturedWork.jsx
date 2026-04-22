import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlowButton from "./GlowButton";

const projects = [
  {
    title: "Andersen Global",
    desc: "Andersen provides a wide range of tax, valuation, financial advisory, and related consulting services to individuals, families, businesses, and funds.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/Andersen_CS.png",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://andersen.com/",
  },
  {
    title: "Colorado Rafting",
    desc: "AVA Colorado is a leader in outdoor recreation, maintaining a steadfast commitment to high-quality guest experiences and environmental stewardship.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/ll_portfolio-ava.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://www.coloradorafting.net/",
  },
  {
    title: "Night of Mystery",
    desc: "A leading creator of downloadable murder mystery party kits, turning any gathering into an unforgettable, immersive whodunit experience.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/nom-industry-page-slider.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://www.nightofmystery.com/",
  },
  {
    title: "Evolve Bank & Trust",
    desc: "Founded in 1925, Evolve Bank & Trust stands at the intersection of tradition and innovation, providing specialized financial technology services.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/evolve-industry-page-slider.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "http://getevolved.com",
  },
  {
    title: "Imagine Software",
    desc: "The leading provider of medical billing technology, workflow automation, and Artificial Intelligence-driven revenue cycle management platforms.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/tn-imagine.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://imagineteam.com/",
  },
  {
    title: "LAI Speakers",
    desc: "One of the most recognizable names in the speakers bureau industry, connecting world-class talent with global organizations and events.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/laispeakers-industry-page-slider.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://www.leadingauthorities.com/",
  },
  {
    title: "Lantech Packaging",
    desc: "A global leader in packaging equipment, specializing in high-performance stretch wrapping and case handling machines across various industries.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Lantech.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://www.lantech.com/",
  },
  {
    title: "American Camp Association",
    desc: "Dedicated to advancing the camp and advocacy communities across New York and New Jersey through innovation and professional development.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-ACA.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://acanynj.org/",
  },
  {
    title: "Axium Packaging",
    desc: "Next-generation packaging products that combine engineering expertise with sustainable practices to deliver advanced plastic bottle solutions.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/ll_portfolio-axium.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://axiumpackaging.com/",
  },
  {
    title: "MIND GAMES Fragrance",
    desc: "A luxury fragrance line delivering extreme signatures crafted by master perfumers, featuring an award-winning digital branding experience.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Mindgames.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://www.mindgamesfragrance.com/",
  },
  {
    title: "Winspire Philanthropy",
    desc: "Crafting gateways to philanthropic adventure with unmatched travel packages and expert concierge assistance for donor relationships.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Winspire-1.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://www.winspireme.com/",
  },
  {
    title: "Gold Dust West Casinos",
    desc: "A modern, design-forward spin on casino branding and websites for Jacobs Entertainment’s flagship Nevada gaming facilities.",
    desktopImg:
      "https://www.loungelizard.com/wp-content/uploads/ll_portfolio-gdw.jpg",
    mobileImg:
      "https://www.loungelizard.com/wp-content/uploads/LL_Portfolio-Monitor_Mobile.png",
    link: "https://www.gdwcasino.com/reno/",
  },
];

const FeaturedWork = () => {
  const [current, setCurrent] = useState(0);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center py-20 px-6 font-sans">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-40 grayscale"
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
          Our passion is to provide innovative, responsive, highly functional,
          visually appealing, and feature-rich website designs and digital
          marketing campaigns that drive business growth.
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
        <div className="relative z-10 w-full max-w-5xl overflow-hidden pb-20">
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
                    <GlowButton
                      name="View Website"
                      className="w-full bg-secondery cursor-pointer"
                    />
                    <button className="w-full py-3 border border-white text-white text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition ease-in-out duration-300 cursor-pointer">
                      View Case Study
                    </button>
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
                      className="relative w-44 h-32 border-x border-black/10 shadow-lg"
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
