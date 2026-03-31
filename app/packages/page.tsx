import Navbar from "@/components/Navbar";
import AllPackages from "@/components/AllPackages";
import Footer from "@/components/Footer";

export default function PackagesPage() {
  return (
    <main className="w-full min-h-screen bg-[#F9FAFB]">
      <Navbar variant="dark" />
      {/* Spacer for fixed Navbar */}
      <div className="pt-24 md:pt-32">
        <AllPackages />
      </div>
      <Footer />
    </main>
  );
}
