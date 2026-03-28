"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = (variant === "dark" || isScrolled) && !open;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full backdrop-blur-xs flex justify-between items-center px-6 md:px-12 py-5 z-[1000] transition-all duration-500 font-manrope ${
          isDark ? "text-[#111111]" : "text-white"
        }`}
      >
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-medium tracking-tight font-spectral"
        >
          <div
            className={`w-6 h-6 border-2 rounded-full relative transition-all duration-500 ${
              isDark ? "border-[#111111]" : "border-white"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                isDark ? "bg-[#111111]" : "bg-white"
              }`}
            />
          </div>
          Dream Pilgrim
        </a>

        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm  opacity-70 hover:opacity-100 transition-opacity tracking-widest"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-[#111111]/60 z-[1500] backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-[#111111] text-white z-[2000] flex flex-col shadow-2xl overflow-hidden font-manrope"
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col justify-between flex-grow px-8 pb-12 pt-8">
                <div className="flex flex-col gap-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="text-4xl font-light tracking-tight  flex items-center gap-4 group font-spectral"
                      onClick={() => setOpen(false)}
                    >
                      {/* <span className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="space-y-12">
                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-[#111111] text-gray-500">
                      Contact us
                    </p>
                    <div className="space-y-1">
                      <p className="text-lg opacity-90 font-manrope">
                        contact@mvdvisuals.com
                      </p>
                      <p className="text-lg opacity-90 font-manrope">
                        +31 6 24717967
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8">
                    {[
                      {
                        label: "IG",
                        svg: (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        ),
                      },
                      {
                        label: "YT",
                        svg: (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path>
                            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                          </svg>
                        ),
                      },
                      {
                        label: "LN",
                        svg: (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        ),
                      },
                      {
                        label: "X",
                        svg: (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"></path>
                          </svg>
                        ),
                      },
                    ].map((item, i) => (
                      <motion.a
                        key={item.label}
                        href="#"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="opacity-50 hover:opacity-100 transition-opacity"
                      >
                        {item.svg}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 w-[1px] h-full bg-white/5" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
