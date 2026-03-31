"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LuxuryBanner = () => {
  return (
    <section id="luxury-banner" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/ditmvxlon/image/upload/v1774636524/emilio-garcia-eQfMpQ3WcVY-unsplash_zuofg7.jpg"
          alt="Luxury Pool View"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 md:px-12 w-full max-w-5xl mx-auto flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-normal tracking-tight font-playfair leading-[1.1] text-white drop-shadow-2xl"
        >
          Exclusive and Luxury Trips <br className="hidden md:block" />
          Designed Just For You
        </motion.h2>
      </div>
    </section>
  );
};

export default LuxuryBanner;
