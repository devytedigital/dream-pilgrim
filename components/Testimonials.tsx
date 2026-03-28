"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Olivia Wilson",
    role: "Handpicked Experience",
    text: "Everything was perfectly organized - from the smooth airport transfers to handpicked local experiences we never would've found on our own. I felt relaxed and truly cared for the entire trip!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Liam & Eva",
    role: "Couple Travel",
    text: "Our honeymoon in Bali was beyond magical. Every detail, from the private villa to the candlelit dinner on the beach, felt curated just for us. It was the most memorable trip we've ever taken.",
    image:
      "https://images.unsplash.com/photo-1516192511150-db3f990ef504?q=80&w=1964&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Jonas W.",
    role: "Budget Explorer",
    text: "I booked the trip hoping for a bit of adventure, and it completely exceeded my expectations. Snorkeling, kayaking, and sunset dolphin cruises — every day brought something new and exciting!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Olivia Wilson 2",
    role: "Handpicked Experience",
    text: "Everything was perfectly organized - from the smooth airport transfers to handpicked local experiences we never would've found on our own. I felt relaxed and truly cared for the entire trip!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Liam & Eva 2",
    role: "Couple Travel",
    text: "Our honeymoon in Bali was beyond magical. Every detail, from the private villa to the candlelit dinner on the beach, felt curated just for us. It was the most memorable trip we've ever taken.",
    image:
      "https://images.unsplash.com/photo-1516192511150-db3f990ef504?q=80&w=1964&auto=format&fit=crop",
    stars: 5,
  },
];

const TestimonialCard = ({
  review,
  idx,
}: {
  review: (typeof reviews)[0];
  idx: number;
}) => (
  <div className="bg-white p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-xl shadow-[#111111]/[0.02] border border-gray-50 h-full w-[300px] md:w-[400px] shrink-0">
    <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6 rounded-full overflow-hidden border-4 border-gray-50/50">
      <Image
        src={review.image}
        alt={review.name}
        fill
        className="object-cover"
      />
    </div>

    <div className="flex gap-1 mb-6 md:mb-8">
      {[...Array(review.stars)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#eab308">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>

    <p className="text-gray-500 font-outfit leading-relaxed text-xs md:text-sm mb-8 md:mb-10 flex-grow italic">
      "{review.text}"
    </p>

    <div className="space-y-1">
      <h4 className="text-base md:text-lg font-semibold font-playfair text-[#111111] italic">
        {review.name}
      </h4>
      <p className="text-[9px] md:text-[10px] uppercase font-[#111111] tracking-widest text-gray-300">
        {review.role}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight font-playfair leading-[1.1] text-[#111111]"
          >
            Hear It From Our Clients
          </motion.h2>
        </div>

        {/* Universal Seamless Infinite Marquee */}
        <div className="flex overflow-hidden relative group">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 md:gap-12 shrink-0 px-4 md:px-0"
          >
            {/* Duplicating the entire set for a seamless loop */}
            <div className="flex gap-8 md:gap-12 shrink-0">
              {reviews.map((review, idx) => (
                <TestimonialCard
                  key={`review-1-${idx}`}
                  review={review}
                  idx={idx}
                />
              ))}
            </div>
            <div className="flex gap-8 md:gap-12 shrink-0" aria-hidden="true">
              {reviews.map((review, idx) => (
                <TestimonialCard
                  key={`review-2-${idx}`}
                  review={review}
                  idx={idx}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
