"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774544709/lalo-hernandez-Amo081zdJsI-unsplash_hclgub.jpg",
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774545548/beautiful-shot-top-mountain_1_zw8qrs.jpg",
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774548397/rajasthan_1_awrtri.jpg",
];

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % IMAGES.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center text-white"
    >
      {/* Persistent Background Stack */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {IMAGES.map((src, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ 
              opacity: index === currentImg ? 1 : 0,
              scale: index === currentImg ? 1.05 : 1
            }}
            transition={{ 
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Experience ${index + 1}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-transparent to-[#111111]/60" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-[1000px] px-8 flex flex-col items-center gap-6 drop-shadow-xl overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
          className="text-[clamp(6rem,18vw,16rem)] leading-[0.85] tracking-[-0.04em] font-spectral drop-shadow-2xl uppercase"
        >
          Travel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          className="text-xl md:text-2xl font-normal max-w-[700px] font-manrope leading-7 opacity-90 drop-shadow-lg"
        >
          Travel with Dream Pilgrim. Discover retreats, active adventures, and
          boutique stays all in one place.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
