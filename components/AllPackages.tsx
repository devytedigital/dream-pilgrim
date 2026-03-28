"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const allPackages = [
  {
    id: 1,
    title: "Uluwatu",
    location: "Badung Regency, Bali",
    price: "95.50",
    type: "Open Trip",
    date: "12-14 August",
    slots: "4 Slot left",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774548397/rajasthan_1_awrtri.jpg",
  },
  {
    id: 2,
    title: "Toba Lake",
    location: "Sumatra",
    price: "450",
    type: "Private",
    date: "Request-based",
    slots: "2 Slot left",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774544709/lalo-hernandez-Amo081zdJsI-unsplash_hclgub.jpg",
  },
  {
    id: 3,
    title: "Sumba Adventure",
    location: "West Sumba",
    price: "1200",
    type: "Open Trip",
    date: "12-14 August",
    slots: "2 Slot left",
    image:
      "https://res.cloudinary.com/ditmvxlon/image/upload/v1774545548/beautiful-shot-top-mountain_1_zw8qrs.jpg",
  },
  {
    id: 4,
    title: "Lombok Sunset",
    location: "Senggigi, Lombok",
    price: "185",
    type: "Open Trip",
    date: "20-22 August",
    slots: "8 Slot left",
    image:
      "https://as2.ftcdn.net/v2/jpg/01/12/42/99/1000_F_112429921_UGaUh0fzCsKf36NLHLycnu8U9Yx5R4Im.jpg",
  },
  {
    id: 5,
    title: "Merapi Trek",
    location: "Yogyakarta",
    price: "75",
    type: "Private",
    date: "Daily",
    slots: "Bookings Open",
    image:
      "https://images.squarespace-cdn.com/content/v1/59b167e71f318d0ea9cf9198/1511704916445-052141ZEN7SWUV3PU9PH/2016-08-19%2C07-56-27.jpg",
  },
  {
    id: 6,
    title: "Komodo Adventure",
    location: "Labuan Bajo",
    price: "850",
    type: "Open Trip",
    date: "05-09 Sept",
    slots: "6 Slot left",
    image:
      "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=390,height=400,dpr=2/tour_img/2263622804ce8dcb3ef57c1612ca6fc151ca5acfe37462bd556d5be3cecfdf93.jpeg",
  },
  {
    id: 7,
    title: "Lombok Sunset",
    location: "Senggigi, Lombok",
    price: "185",
    type: "Open Trip",
    date: "20-22 August",
    slots: "8 Slot left",
    image:
      "https://as2.ftcdn.net/v2/jpg/01/12/42/99/1000_F_112429921_UGaUh0fzCsKf36NLHLycnu8U9Yx5R4Im.jpg",
  },
  {
    id: 8,
    title: "Merapi Trek",
    location: "Yogyakarta",
    price: "75",
    type: "Private",
    date: "Daily",
    slots: "Bookings Open",
    image:
      "https://images.squarespace-cdn.com/content/v1/59b167e71f318d0ea9cf9198/1511704916445-052141ZEN7SWUV3PU9PH/2016-08-19%2C07-56-27.jpg",
  },
  {
    id: 9,
    title: "Komodo Adventure",
    location: "Labuan Bajo",
    price: "850",
    type: "Open Trip",
    date: "05-09 Sept",
    slots: "6 Slot left",
    image:
      "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=390,height=400,dpr=2/tour_img/2263622804ce8dcb3ef57c1612ca6fc151ca5acfe37462bd556d5be3cecfdf93.jpeg",
  },
];

const AllPackages = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F9FAFB] text-[#111111]">
      <div className="w-full px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mb-16 md:mb-24 px-1">
          <div className="text-center lg:text-left">
            <h2 className="text-[clamp(3rem,9vw,6.5rem)] font-normal leading-[0.85] tracking-tight font-spectral uppercase text-[#111111]">
              Pick <br className="hidden md:block" /> your place
            </h2>
          </div>
          <div className="max-w-sm text-center lg:text-right">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-manrope font-light">
              Architecting curated journeys across hidden corners of Indonesia.
              Explore our monolithic collection of escapes.
            </p>
          </div>
        </div>

        {/* Filters Bar Row - High-End Redesign */}
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-4 md:p-3 mb-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-stretch md:items-center gap-2 md:pl-10">
          {/* Destination */}
          <div className="flex-1 group p-4 md:p-0">
            <label className="block text-[10px]  tracking-[0.2em] text-gray-400 mb-2 font-manrope font-black group-focus-within:text-[#111111] transition-colors">
              Destination
            </label>
            <input
              type="text"
              placeholder="Find a hideaway..."
              className="w-full text-base md:text-sm font-semibold text-[#111111] outline-none placeholder:text-gray-200 bg-transparent font-manrope pr-4"
            />
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gray-100 mx-4" />
          <div className="md:hidden h-[1px] w-full bg-gray-50 my-2" />

          {/* Category */}
          <div className="flex-1 group p-4 md:p-0">
            <label className="block text-[10px]  tracking-[0.2em] text-gray-400 mb-2 font-manrope font-black group-focus-within:text-[#111111] transition-colors">
              Type
            </label>
            <select className="w-full text-base md:text-sm font-semibold text-[#111111] outline-none bg-transparent font-manrope cursor-pointer appearance-none">
              <option>Select type</option>
              <option>Nature</option>
              <option>Culture</option>
              <option>Adventure</option>
            </select>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gray-100 mx-4" />
          <div className="md:hidden h-[1px] w-full bg-gray-50 my-2" />

          {/* Date */}
          <div className="flex-1 group p-4 md:p-0">
            <label className="block text-[10px]  tracking-[0.2em] text-gray-400 mb-2 font-manrope font-black group-focus-within:text-[#111111] transition-colors">
              Timeline
            </label>
            <select className="w-full text-base md:text-sm font-semibold text-[#111111] outline-none bg-transparent font-manrope cursor-pointer appearance-none">
              <option>Anytime</option>
              <option>Next 30 Days</option>
              <option>Peak Season</option>
            </select>
          </div>

          {/* Discover Button */}
          <div className="mt-4 md:mt-0 p-1 md:p-0">
            <button className="w-full md:w-auto px-12 py-5 bg-[#111111] text-white rounded-full md:rounded-[1.8rem] text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl font-manrope">
              Discovery
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-8 md:gap-y-16">
          {allPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-[2.5rem] p-4 md:p-5 shadow-2xl shadow-gray-200/50 border border-gray-100 group cursor-pointer transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] active:scale-[0.98]"
            >
              {/* HEADER */}
              <div className="flex justify-between items-start mb-6 px-1.5 pt-1">
                <div className="flex-1 pr-4">
                  <h4 className="text-lg md:text-2xl font-bold tracking-tight text-[#111111] truncate font-spectral uppercase">
                    {pkg.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm mt-0.5 md:mt-1 font-manrope font-light truncate">
                    {pkg.location}
                  </p>
                </div>

                <div className="px-3 py-1.5 border border-gray-100 rounded-full flex items-center gap-1.5 bg-gray-50/50 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                  <span className="text-[8px] md:text-[10px] font-bold text-[#111111] font-manrope  tracking-wider">
                    {pkg.slots}
                  </span>
                </div>
              </div>

              {/* IMAGE ARCHITECTURE */}
              <div className="relative aspect-[4/3.8] rounded-[1.8rem] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* DYNAMIC TYPE BUTTON */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/20 text-[8px] md:text-[9px] font-medium text-white uppercase tracking-widest shadow-xl">
                    {pkg.type}
                  </div>
                </div>

                {/* NEW CLEAN BOTTOM BAR: MOBILE OPTIMIZED */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 flex items-center justify-between bg-white/10 backdrop-blur-xl rounded-full px-4 py-2.5 md:px-6 md:py-3.5 border border-white/20 shadow-2xl transition-all duration-500 group-hover:bg-white/20">
                  {/* DATE */}
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/60 font-manrope font-black">
                      Date
                    </span>
                    <span className="text-white text-[11px] md:text-sm font-semibold font-manrope tracking-tight">
                      {pkg.date}
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="text-right flex flex-col items-end">
                    <span className="text-white text-sm md:text-base font-bold font-manrope tracking-tight">
                      ₹{pkg.price}
                    </span>
                  </div>
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / Navigation */}
        <div className="flex justify-center md:justify-end mt-16 md:mt-24">
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-2xl overflow-hidden border border-gray-200/50">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-2xl text-[9px] md:text-[10px] font-[#111111] uppercase tracking-widest text-gray-400 hover:text-[#111111] transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Prev
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white rounded-2xl text-[9px] md:text-[10px] font-[#111111] uppercase tracking-widest text-[#111111] shadow-lg shadow-gray-200/50 transition-all active:scale-95">
              Next
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPackages;
