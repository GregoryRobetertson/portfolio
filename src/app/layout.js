import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Gregory Robertson's Portfolio",
  description: "Designed and built by Gregory Robertson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-r from-[#7F1D1D] to-[#1F0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
