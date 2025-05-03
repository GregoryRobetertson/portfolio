import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Gregory Robertson's Portfolio",
  description: "Designed and built by Gregory Robertson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
