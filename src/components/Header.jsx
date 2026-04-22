import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  Cloud,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import GlowButton from "./GlowButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const location = useLocation();

  const services = [
    { title: "Software Development", to: "/web", desc: "Custom web & mobile apps", icon: <Code size={20} /> },
    { title: "Cloud Solutions", to: "/cloud", desc: "AWS, Azure & Google Cloud", icon: <Cloud size={20} /> },
    { title: "Cybersecurity", to: "/security", desc: "Advanced threat protection", icon: <ShieldCheck size={20} /> },
    { title: "AI & Data Science", to: "/ai", desc: "Modern machine learning", icon: <Cpu size={20} /> },
  ];

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Case Studies", to: "/case-studies" },
    { name: "Company", to: "/company" },
  ];

  // Animation Variants
  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } },
    open: { opacity: 1, height: "auto", transition: { when: "beforeChildren", staggerChildren: 0.08 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  const logo = "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg";

  return (
    <header className="fixed top-0 left-0 w-full z-1000 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-20" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-secondery" : "text-gray-700 hover:text-secondery"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-secondery"
                  />
                )}
              </Link>
            );
          })}

          {/* SERVICES MEGA MENU */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-5 py-2 text-[13px] font-bold uppercase tracking-wider text-gray-700 group-hover:text-secondery transition-colors cursor-pointer">
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown Card */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white border border-gray-200 shadow-2xl w-130 overflow-hidden">
                <div className="p-4 grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.to}
                      className="group/item flex items-start gap-4 p-4 hover:bg-gray-50 transition-all border border-gray-300"
                    >
                      <div className="p-2 bg-gray-100 text-gray-600 group-hover/item:bg-black group-hover/item:text-white transition ease-in-out duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase text-gray-900">{service.title}</h4>
                        <p className="text-[10px] text-gray-500 mt-1">{service.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <GlowButton name="Contact Us" to="/contact" />
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden p-2 text-gray-900 hover:text-secondery transition ease-in-out duration-300 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="px-8 py-10 flex flex-col gap-2 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div key={link.to} variants={itemVariants}>
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-xl font-bold uppercase tracking-tighter border-b border-white/10 mt-2 ${
                        isActive ? "text-secondery" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* MOBILE SERVICES ACCORDION */}
              <motion.div variants={itemVariants} className=" border-b border-white/10 mt-2">
                <button
                  onClick={() => setOpenServices(!openServices)}
                  className="w-full flex items-center justify-between py-6 text-xl font-bold uppercase tracking-tighter text-white"
                >
                  <span className={openServices ? "text-secondery" : ""}>Services</span>
                  <motion.div animate={{ rotate: openServices ? 180 : 0 }}>
                    <ChevronDown size={24} className="text-secondery" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-secondery mb-6"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.to}
                          onClick={() => setIsOpen(false)}
                          className="text-white py-1 text-sm font-bold uppercase tracking-widest hover:text-secondery transition ease-in-out duration-300"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6 flex justify-center items-center">
                <GlowButton name="Get a Quote" to="/contact" className="" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;