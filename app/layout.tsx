import type { Metadata } from "next";
import { Manrope, Spectral } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dream Pilgrim | Luxury Travel Experiences",
  description: "Curated luxury travel for the discerning explorer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spectral.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
