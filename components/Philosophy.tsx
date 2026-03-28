"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FDFBF9] overflow-hidden flex items-center py-24 md:py-0">
      <div className="w-full px-6 md:px-12 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col h-full justify-center order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-light tracking-[0.02em] font-spectral leading-[1.2] text-[#111111] uppercase mb-20 md:mb-32 max-w-2xl"
            >
              Dream pilgrim destinations are places to stay, engage and connect
              with yourself, your surroundings, and a new community.
            </motion.h2>

            <div className="space-y-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-sm md:text-base font-manrope max-w-sm leading-relaxed text-[#4A4A4A] font-light"
              >
                Our curated retreats and boutique stays are spaces where
                like-minded individuals come together, connect with a global
                community of conscious explorers, and form meaningful bonds with
                the places they occupy and the destinations they visit.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Arched Image Profile */}
          <div className="relative order-1 md:order-2 flex justify-end">
            <div className="relative w-full max-w-[580px] aspect-[10/14] rounded-t-[500px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] group">
              <Image
                src="https://res.cloudinary.com/ditmvxlon/image/upload/v1774639289/oliver-sjostrom-CihXnvELE00-unsplash_zqr8yj.jpg"
                alt="Dream Pilgrim Experience"
                fill
                priority
                className="object-cover transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#111111]/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
