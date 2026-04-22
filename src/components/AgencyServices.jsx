import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Laptop,
  Layers,
  ShoppingCart,
  Fingerprint,
  Search,
  RefreshCcw,
} from "lucide-react";
import GlowButton from "./GlowButton";
import ServicesImage from "../assets/Explore-Services.png";

const services = [
  {
    title: "Custom Web Design",
    desc: "We build custom digital experiences around how your users actually behave. Every layout is grounded in UX research and behavioral data.",
    icon: <Laptop size={32} />,
    color: "#0A1317",
  },
  {
    title: "Web Development",
    desc: "We build on WordPress and other platforms. Our developers write clean code and make sure your website works well on every device.",
    icon: <Layers size={32} />,
    color: "#0A1317",
  },
  {
    title: "eCommerce Development",
    desc: "Creating online stores on Shopify and WooCommerce designed to turn leads into buyers by making checkout simple and smooth.",
    icon: <ShoppingCart size={32} />,
    color: "#0A1317",
  },
  {
    title: "Branding & Identity",
    desc: "Building brand identities from scratch, including logo design, visual systems, messaging and guidelines for consistency.",
    icon: <Fingerprint size={32} />,
    color: "#0A1317",
  },
  {
    title: "SEO & Marketing",
    desc: "SEO best practices go into every project. We handle paid campaigns, social media, and content so your site gets found.",
    icon: <Search size={32} />,
    color: "#0A1317",
  },
  {
    title: "Website Optimization",
    desc: "If your site is underperforming, we audit, keep your SEO safe, and rebuild for speed and modern user experience.",
    icon: <RefreshCcw size={32} />,
    color: "#0A1317",
  },
];

const AgencyServices = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-32 self-start space-y-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[12px] font-black uppercase tracking-[0.4em] text-secondery"
          >
            Why WBN Agency?
          </motion.span>

          <h2 className="text-3xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase">
            WE CREATE WEBSITES FOR EVERY{" "}
            <span className="text-secondery">MAJOR INDUSTRY</span>
          </h2>

          <div className="space-y-6 max-w-md text-white/80">
            <p className="sm:text-[14px] text-[11px]">
              At Digital Silk, we are web design company that handles everything
              related to web design and development, branding and digital
              marketing.
            </p>
            <p className="sm:text-[14px] text-[11px]">
              We begin by taking the time to understand your business, your
              goals, and what success actually looks like for you. From there,
              we build a clear, tailored digital marketing strategy grounded in
              research and real opportunity, not assumptions.
            </p>
            <p className="sm:text-[14px] text-[11px]">
              Once the direction is set, we move into execution. That means
              designing and implementing the right mix of tactics to bring
              qualified people to your site and turn that attention into
              measurable results.
            </p>
            <p className="sm:text-[14px] text-[11px]">
              Everything is handled in-house by our team, so you have full
              alignment, accountability and speed. If it lives in the digital
              space and supports your growth, we can take it on and deliver it.
            </p>
          </div>

          <GlowButton name="More Services" to="/services" />
          <img src={ServicesImage} alt="" className="w-full mt-4 pr-4" />
        </div>

        {/* RIGHT SIDE - GLASS CARDS */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group overflow-hidden p-10 
              bg-white/5 backdrop-blur-2xl 
              border border-white/10 
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              hover:scale-[1.02] hover:border-white/20 
              transition-all duration-500 cursor-pointer"
              style={{
                background: `
                  radial-gradient(circle at 20% 20%, ${service.color}25 0%, transparent 60%),
                  rgba(255,255,255,0.04)
                `,
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.color}30, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col items-start gap-4">
                {/* ICON */}
                <div
                  className="p-4 mb-4 text-white shadow-lg 
                  backdrop-blur-xl border border-white/20 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, rgba(255,255,255,0.1))`,
                  }}
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="sm:text-xl text-[16px] font-bold text-white uppercase tracking-tight">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-white/70 leading-relaxed font-medium max-w-sm sm:text-sm text-[11px]">
                  {service.desc}
                </p>

                {/* CTA */}
                <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-all">
                  Explore Service
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </button>
              </div>

              {/* subtle top shine line */}
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgencyServices;
