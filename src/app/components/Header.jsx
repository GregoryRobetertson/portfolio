import React from "react";

export default function Header() {
  return (
    <div className="pt-12 bg-black text-white">
      <div className="container mx-auto px-4 flex relative">
        <div className="ml-10">
          <a href="/" className="text-2xl font-semibold">
            <span className="text-red-700 font-extrabold">G</span>regory
          </a>
        </div>
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8">
            <li className="transition-all duration-200 ease-in-out p-2 rounded-md cursor-pointer">
              <a href="#about" className="hover:text-red-700">
                About
              </a>
            </li>
            <li className="transition-all duration-200 ease-in-out  p-2 rounded-md cursor-pointer">
              <a href="#Services" className="hover:text-red-700">
                Services
              </a>
            </li>
            <li className="transition-all duration-200 ease-in-out  p-2 rounded-md cursor-pointer">
              <a href="#Projects" className="hover:text-red-700">
                Projects
              </a>
            </li>
            <li className="  transition-all duration-200 ease-in-out p-2 rounded-md cursor-pointer">
              <a href="#" className="hover:text-red-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
