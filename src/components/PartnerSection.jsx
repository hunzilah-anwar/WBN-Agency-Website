import React from "react";
import { motion } from "framer-motion";

const brandsRow1 = [
  {
    name: "Sony",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/Sony-1.png",
  },
  {
    name: "IBM",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/ibm.svg",
  },
  {
    name: "Best Buy",
    url: "https://www.digitalsilk.com/wp-content/uploads/2025/04/best_buy_logo-cropped.svg",
  },
  {
    name: "Puma",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/puma.svg",
  },
  {
    name: "Xerox",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/xerox.png",
  },
  {
    name: "Babies R Us",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/babiesrus.png",
  },
  {
    name: "Rollink",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/rollink.svg",
  },
];

const brandsRow2 = [
  {
    name: "Northwestern",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/Northwestern_Qatar_Logo_2_.svg",
  },
  {
    name: "ZipTie",
    url: "https://www.digitalsilk.com/wp-content/uploads/2025/05/logo_white-1.svg",
  },
  {
    name: "Buddha Brands",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg",
  },
  {
    name: "Paul Stuart",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/paul-stuart.png",
  },
  {
    name: "Absolute Dogs",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/12/logo.png",
  },
  {
    name: "Enchant",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/enchant.svg",
  },
  {
    name: "Grenco",
    url: "https://www.digitalsilk.com/wp-content/uploads/2024/01/grenco.png",
  },
];

const PartnerSection = () => {
  return (
    <section className="relative w-full bg-[#00042A] py-32 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-200 h-200 rounded-full bg-[#00042A]/20 blur-[160px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 rounded-full bg-[#00042A]/20 blur-[140px] opacity-40" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[11px] font-bold uppercase tracking-[0.5em] text-secondery"
        >
          Clients Across Industries
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-black text-white leading-[0.9] uppercase mt-6"
        >
          Full-Service <br />
          <span className="text-secondery">Digital Agency</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto text-zinc-400 md:text-[18px] text-sm mt-6"
        >
          From startups to Fortune 500 companies, we create{" "}
          <span className="text-white font-medium">custom solutions</span> that
          grow brands online.
        </motion.p>
      </div>

      {/* MARQUEE ROW 1 */}
      <div className="flex overflow-hidden gap-8">
        <div className="flex min-w-full gap-8 animate-marquee">
          {[...brandsRow1, ...brandsRow1].map((brand, i) => (
            <LogoCard key={i} brand={brand} />
          ))}
        </div>
      </div>

      {/* MARQUEE ROW 2 */}
      <div className="flex overflow-hidden gap-8 mt-10">
        <div className="flex min-w-full gap-8 animate-marquee-reverse">
          {[...brandsRow2, ...brandsRow2].map((brand, i) => (
            <LogoCard key={i} brand={brand} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <button className="relative px-10 py-5 bg-white text-black font-bold uppercase text-sm cursor-pointer tracking-widest overflow-hidden group">
          <span className="relative z-10">Explore Our Services</span>
          <div className="absolute inset-0 bg-secondery translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

/* FIXED MODERN GLASS LOGO CARD */
const LogoCard = ({ brand }) => (
  <div className="items-center gap-3 group">
    {/* GLASS CARD */}
    <div className="relative flex items-center justify-center h-28 w-60 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-secondery group p-4">
      {/* shine */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <img
        src={brand.url}
        alt={brand.name}
        className="max-h-12 object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  </div>
);

export default PartnerSection;
