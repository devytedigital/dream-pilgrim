"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const row1 = [
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774544709/lalo-hernandez-Amo081zdJsI-unsplash_hclgub.jpg",
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774548397/rajasthan_1_awrtri.jpg",
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774545548/beautiful-shot-top-mountain_1_zw8qrs.jpg",
  "https://images.squarespace-cdn.com/content/v1/59b167e71f318d0ea9cf9198/1511704916445-052141ZEN7SWUV3PU9PH/2016-08-19%2C07-56-27.jpg",
  "https://as2.ftcdn.net/v2/jpg/01/12/42/99/1000_F_112429921_UGaUh0fzCsKf36NLHLycnu8U9Yx5R4Im.jpg",
];

const row2 = [
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774544709/lalo-hernandez-Amo081zdJsI-unsplash_hclgub.jpg",
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774548397/rajasthan_1_awrtri.jpg",
  "https://res.cloudinary.com/ditmvxlon/image/upload/v1774545548/beautiful-shot-top-mountain_1_zw8qrs.jpg",
  "https://images.squarespace-cdn.com/content/v1/59b167e71f318d0ea9cf9198/1511704916445-052141ZEN7SWUV3PU9PH/2016-08-19%2C07-56-27.jpg",
  "https://as2.ftcdn.net/v2/jpg/01/12/42/99/1000_F_112429921_UGaUh0fzCsKf36NLHLycnu8U9Yx5R4Im.jpg",
];

const MarqueeRow = ({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) => {
  return (
    <div className="flex overflow-hidden group">
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-4 md:gap-6 shrink-0"
      >
        {/* Render images twice for seamless loop */}
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative w-[280px] md:w-[400px] aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#111111]/5"
          >
            <Image
              src={src}
              alt={`Gallery Image ${i}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 400px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const GalleryMarquee = () => {
  return (
    <section className="pt-40 md:pt-60 pb-24 md:pb-32 bg-[#F9FAFB] overflow-hidden flex flex-col gap-12 md:gap-16">
      <div className="w-full px-6 md:px-12">
        <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-normal leading-[1.05] tracking-tight font-outfit text-[#111111] max-w-2xl text-left">
          From Our <br />
          Travel <br />
          Community
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        <MarqueeRow images={row1} />
        <MarqueeRow images={row2} reverse />
      </div>
    </section>
  );
};

export default GalleryMarquee;
