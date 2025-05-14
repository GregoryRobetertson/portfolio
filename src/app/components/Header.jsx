import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide ml-2">
          <span className="text-blue-700 font-extrabold">G</span>regory
        </a>

        {/* Navigation */}
        <nav className="scroll-smooth">
          <ul className="flex space-x-6">
            {[
              { name: "About", href: "#about" },
              { name: "Services", href: "#Services" },
              { name: "Projects", href: "#Projects" },
              { name: "Contact", href: "#Contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="px-4 py-2 rounded-md transition duration-200 ease-in-out hover:bg-gradient-to-r from-[#7F1D1D] to-[#1F0A0A]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
