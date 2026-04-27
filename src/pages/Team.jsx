import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Zap, Globe } from "lucide-react";
import GlowButton from "../components/GlowButton";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

/* ================= TEAM DATA ================= */
const coreTeam = [
  {
    id: 1,
    name: "Mr. Abdul Ahad",
    role: "Manager & Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Mr. Muhammad Sami",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Mr. Muhammad Tauseef",
    role: "Marketing & Shopify Expert",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Mr. M Fassih Ud Din",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 5,
    name: "Mr. Babur Ali",
    role: "Python Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    name: "Mr. Zohiab Jutt",
    role: "SEO Expert",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

/* ================= SUB-COMPONENTS ================= */
const TeamCard = ({ member }) => (
  <motion.div className="relative group">
    <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-white/10">
      <img
        src={member.image || member.img}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#00042A] via-transparent to-transparent opacity-60" />
    </div>

    <div className="absolute bottom-5 left-0 right-0 mx-4 mt-6 p-6 bg-white/3 backdrop-blur-xl border border-white/5 rounded-2xl">
      <h4 className="text-lg font-black tracking-tight text-white">
        {member.name}
      </h4>
      <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold mt-1">
        {member.role}
      </p>
    </div>
  </motion.div>
);

/* ================= MAIN COMPONENT ================= */
const Team = () => {
  return (
    <main className="bg-[#00042A] text-white selection:bg-cyan-500 selection:text-black pt-24">
      {/* SECTION 1 (ODD): HERO - #00042A */}
      <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black italic leading-[0.8] tracking-tighter uppercase mb-10">
              OUR{" "}
              <span className="text-transparent stroke-text italic font-serif">
                TEAM.
              </span>
            </h1>
            <p className="text-zinc-500 text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
              "The innovators, creators, and dreamers architecting the digital
              backbone of the next century."
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 (EVEN): CEO - FIXED BG */}
      <section
        className="relative py-48 px-6 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition duration-1000" />
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                className="relative rounded-full w-full aspect-square object-cover border-8 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                alt="CEO"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase">
                Founder & CEO
              </h3>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Abdul Bari <br />{" "}
                <span className="text-transparent stroke-text italic font-serif">
                  Afzal
                </span>
              </h2>
              <p className="text-zinc-300 text-2xl font-light italic leading-relaxed border-l-4 border-cyan-500 pl-8">
                "Consistently producing localized systems while saving time and
                energy for our global partners is our prime protocol."
              </p>
              <div className="flex gap-6">
                {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 cursor-pointer rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 (ODD): CORE TEAM GRID - #00042A */}
      <section className="py-40 px-6 bg-[#00042A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Team Members
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {coreTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 (ODD): JOIN THE PIPELINE */}
      <section
        className="relative py-48 bg-fixed bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')`,
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-5xl mx-auto px-6 space-y-12 z-10 text-white">
          {/* small label */}
          <div className="flex justify-center items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-bold">
            <span className="w-10 h-px bg-cyan-500" />
            Join The Network
          </div>

          {/* heading */}
          <motion.div
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8]">
              BUILD THE <br />
              <span className="text-transparent stroke-text">FUTURE.</span>
            </h2>
          </motion.div>

          {/* description */}
          <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We’re assembling a high-performance engineering team focused on AI,
            distributed systems, and next-generation products. If you think in
            systems and build with precision, you’ll fit right in.
          </p>

          {/* actions */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
            <GlowButton name="Let's Connect" href="/careers" />
          </div>
        </div>
      </section>
      {/* stroke style */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #06b6d4;
          color: transparent;
        }
      `}</style>
    </main>
  );
};

export default Team;
