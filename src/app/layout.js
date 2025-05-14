import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Gregory Robertson's Portfolio",
  description: "Designed and built by Gregory Robertson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-gradient-to-r from-[#1c2431] to-[#0c0f14] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
