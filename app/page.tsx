import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPackages from "@/components/FeaturedPackages";
import LuxuryBanner from "@/components/LuxuryBanner";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedPackages />
      <Philosophy />
      <LuxuryBanner />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  );
}
