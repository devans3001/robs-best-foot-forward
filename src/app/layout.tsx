import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rob's Best Foot Forward — Shoe Repair Toronto | 4.9★ (172 Reviews)",
  description:
    "Toronto's 4.9-star shoe repair shop. 30+ years of resoles, heel repair, handbag restoration & Saphir shoe care at 20 Toronto St. Call (416) 360-7463.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
