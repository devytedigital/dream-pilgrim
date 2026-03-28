"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-[#F9FAFB]  overflow-hidden min-h-screen selection:bg-[#111111] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative  h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://res.cloudinary.com/ditmvxlon/image/upload/v1774681149/minimalist-green-mountain-landscape-mist_1_dnaxxf.jpg"
            alt="Dream Pilgrim Architect"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-7xl mx-auto pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-[clamp(3rem,12vw,9rem)] font-normal leading-[0.9] tracking-tight text-white font-spectral uppercase"
          >
            About <br /> Pilgrim
          </motion.h1>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#F9FAFB] ">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Story Text */}
            <div className="space-y-12 md:space-y-20 flex flex-col justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-[#111111] font-spectral">
                  Crafting spaces for the <br className="hidden md:block" />
                  concious explorer.
                </h2>
                <div className="space-y-6 max-w-xl">
                  <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed font-manrope font-light">
                    Founded in the pursuit of architectural silence, Dream
                    Pilgrim was born to challenge the vertical pace of modern
                    tourism. We believe travel is not just about the distance
                    covered, but the depth of the discovery.
                  </p>
                  <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed font-manrope font-light">
                    Our curated retreats and boutique stays are sanctuaries
                    where like-minded individuals come together to connect with
                    reality, their surroundings, and a global community of
                    dreamers.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <span className="text-2xl md:text-3xl font-normal text-[#111111] font-spectral">
                    12+
                  </span>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-manrope font-black">
                    Destinations
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-2xl md:text-3xl font-normal text-[#111111] font-spectral">
                    5K+
                  </span>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-manrope font-black">
                    Pilgrims Served
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural Profile Image */}
            <div className="relative order-1 lg:order-2 flex justify-end">
              <motion.div
                initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="relative w-full max-w-[650px] aspect-[4/5] rounded-t-[500px] overflow-hidden shadow-3xl"
              >
                <Image
                  src="https://res.cloudinary.com/ditmvxlon/image/upload/v1774681672/alan-quirvan-dUkF8msWoLs-unsplash_cv1nwt.jpg"
                  alt="Architecture of Discovery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#111111]/5" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Values - Museum Grid */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-[#F9FAFB] border-y border-gray-100">
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 md:mb-32"
          >
            <h3 className="text-[clamp(2.5rem,8vw,5rem)] font-normal leading-[1] tracking-tight text-[#111111] font-spectral uppercase">
              Our Core <br className="hidden md:block" /> Philosophy
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                title: "Curated Depth",
                description:
                  "We don't do mass-market. Every destination and stay is hand-selected for its architectural soul and local character.",
                id: "01",
              },
              {
                title: "Architectural Peace",
                description:
                  "Space dictates mood. We prioritize minimalist, light-filled environments that encourage inward reflection.",
                id: "02",
              },
              {
                title: "Global Bond",
                description:
                  "Beyond tourism lies community. We create moments that foster genuine connections between global travelers and local hosts.",
                id: "03",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group space-y-8 p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all"
              >
                <div className="text-4xl font-normal text-gray-200 group-hover:text-[#111111] transition-colors font-spectral">
                  {value.id}.
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-normal text-[#111111] font-spectral">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-manrope font-light">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Call to Action Image */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/ditmvxlon/image/upload/v1774681867/fadhil-abhimantra-t0dl9hUgHHw-unsplash_v2ebfb.jpg"
          alt="The Journey Begins"
          fill
          className="object-cover grayscale brightness-[0.7]"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h4
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-white text-[clamp(2.5rem,7vw,6.5rem)] font-normal font-spectral leading-none uppercase tracking-tighter max-w-5xl mx-auto"
          >
            Your Pilgrimage <br className="hidden md:block" /> Starts Within.
          </motion.h4>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12"
          >
            <Link href="/packages">
              <button className="px-12 py-5 bg-white text-[#111111] rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-gray-100 active:scale-95 shadow-2xl font-manrope">
                Discover Your Journey
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
