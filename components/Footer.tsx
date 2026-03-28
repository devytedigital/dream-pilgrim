"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111]  text-white pt-20 md:pt-32 pb-10 md:pb-12 px-6 md:px-12 font-manrope overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Top Section: Hero Heading & Nav Links Split */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-12 lg:gap-24 mb-20 md:mb-32">
          {/* Brand Identity - Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-normal font-spectral tracking-tight leading-[0.85] text-white whitespace-nowrap">
              Dream <br /> Pilgrim
            </h2>
          </div>

          {/* SITEMAP & SOCIALS - MOBILE FRIENDLY GRID */}
          <div className="grid grid-cols-2 gap-x-12 sm:gap-x-24 gap-y-12 lg:pt-32 w-full lg:w-auto">
            {/* Sitemap Column */}
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 font-manrope">
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Packages", href: "/packages" },
                  { name: "About", href: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[15px] font-light opacity-60 hover:opacity-100 transition-opacity font-manrope block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Column */}
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 font-manrope">
                Connect
              </h4>
              <ul className="space-y-3">
                {["Instagram", "Youtube", "Twitter"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[15px] font-light opacity-60 hover:opacity-100 transition-opacity font-manrope block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center sm:items-start md:items-center gap-8 text-[10px] tracking-[0.1em] text-white/30 pt-10 border-t border-white/5 font-manrope">
          <div className="text-center md:text-left">
            Copyright {currentYear} © Dream Pilgrim, All rights reserved
          </div>
          <div className="flex gap-8 justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors">
              Terms and conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
