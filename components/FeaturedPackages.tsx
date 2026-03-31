"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const packages = [
  {
    title: "Bangli, East Bali",
    subtitle: "Cultural walk with local guides",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774544709/lalo-hernandez-Amo081zdJsI-unsplash_hclgub.jpg",
    location: "Panglipuran",
  },
  {
    title: "Uluwatu",
    subtitle: "Coastal retreat & surfing",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774548397/rajasthan_1_awrtri.jpg",
    location: "Uluwatu",
  },
  {
    title: "Trunyan Lakeside",
    subtitle: "Ancient traditions & scenic views",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774545548/beautiful-shot-top-mountain_1_zw8qrs.jpg",
    location: "Trunyan",
  },
];

const FeaturedPackages = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id="featured-packages"
      ref={containerRef}
      className="py-20 md:py-32 bg-white md:bg-[#F9FAFB] text-[#111111] overflow-hidden flex flex-col items-center"
    >
      {/* Center Badges - Hidden on Mobile */}
      <div className="hidden md:flex w-full px-6 md:px-12 justify-center gap-4 mb-16 md:mb-20">
        <span className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#111111]/10 text-[10px] md:text-xs font-medium bg-gray-50/50">
          <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
          We are Dream Pilgrim
        </span>

        <span className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#111111]/10 text-[10px] md:text-xs font-medium bg-gray-50/50">
          <span className="text-yellow-500">★</span>
          5K+ People Satisfied
        </span>
      </div>

      {/* Main Heading - Hidden on Mobile */}
      <div className="hidden md:flex w-full px-6 md:px-12 mb-20 md:mb-32 justify-center items-center relative">
        <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-normal leading-[0.9] tracking-tight mb-8 font-outfit text-center md:text-right">
          Dream Pilgrim means <br />
          <span className="font-medium">Going Places</span>
        </h2>
      </div>

      <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 items-start">
        {/* Left Side: Value Prop (Top on Mobile) */}
        <div className="md:col-span-4 flex flex-col gap-8 md:justify-between pt-0 md:pt-12 text-center md:text-left items-center md:items-start order-1">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[40px] md:text-5xl font-normal leading-[1.1] tracking-tight font-spectral md:font-outfit">
              Not Your Boring <br className="hidden md:block" /> Travel Agent
            </h3>
            <p className="text-gray-500 text-[17px] md:text-lg max-w-[320px] md:max-w-[300px] leading-relaxed mx-auto md:mx-0 font-manrope">
              We plan chill, curated trips with good vibes and better people.
            </p>
          </div>

          <button className="group mt-4 md:mt-12 px-10 py-5 md:py-4 bg-[#111111] text-white rounded-[22px] md:rounded-2xl text-sm font-bold w-max transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 shadow-xl shadow-[#111111]/10 font-manrope">
            Book a Seat
          </button>
        </div>

        {/* Right Side: Featured Packages Cards (Bottom on Mobile) */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 order-2 mt-8 md:mt-0">
          {/* Card 1 - High prominence on mobile */}
          <motion.div
            style={{ y: isDesktop ? y1 : 0 }}
            className="flex flex-col gap-4"
          >
            <div className="relative aspect-[4/5] rounded-[40px] md:rounded-[2.5rem] overflow-hidden group shadow-2xl md:shadow-xl shadow-[#111111]/10 md:shadow-[#111111]/5">
              <Image
                src={packages[0].image}
                alt={packages[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <span className="absolute bottom-6 right-6 text-white text-[10px] font-medium px-4 py-2 bg-[#111111]/30 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-widest block">
                {packages[0].location}
              </span>
            </div>
            <div className="px-2 block">
              <h4 className="text-xl md:text-2xl font-semibold tracking-tight mb-1 font-outfit">
                {packages[0].title}
              </h4>
              <p className="text-gray-400 text-sm font-manrope">
                {packages[0].subtitle}
              </p>
            </div>
          </motion.div>

          {/* Other cards - Shown on mobile but styled like standard cards */}
          {/* Card 2 */}
          <motion.div
            style={{ y: isDesktop ? y2 : 0 }}
            className="flex flex-col gap-4 md:pt-12"
          >
            <div className="relative aspect-[4/5] rounded-[40px] md:rounded-[2.5rem] overflow-hidden group shadow-xl shadow-[#111111]/5">
              <Image
                src={packages[1].image}
                alt={packages[1].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <span className="absolute bottom-6 right-6 text-white text-[10px] font-medium px-4 py-2 bg-[#111111]/30 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-widest block">
                {packages[1].location}
              </span>
            </div>
            <div className="px-2 block">
              <h4 className="text-xl md:text-2xl font-semibold tracking-tight mb-1 font-outfit">
                {packages[1].title}
              </h4>
              <p className="text-gray-400 text-sm font-manrope">
                {packages[1].subtitle}
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            style={{ y: isDesktop ? y3 : 0 }}
            className="flex flex-col gap-4 md:pt-24"
          >
            <div className="relative aspect-[4/5] rounded-[40px] md:rounded-[2.5rem] overflow-hidden group shadow-xl shadow-[#111111]/5">
              <Image
                src={packages[2].image}
                alt={packages[2].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <span className="absolute bottom-6 right-6 text-white text-[10px] font-medium px-4 py-2 bg-[#111111]/30 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-widest block">
                {packages[2].location}
              </span>
            </div>
            <div className="px-2 block">
              <h4 className="text-xl md:text-2xl font-semibold tracking-tight mb-1 font-outfit">
                {packages[2].title}
              </h4>
              <p className="text-gray-400 text-sm font-manrope">
                {packages[2].subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
