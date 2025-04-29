import React from "react";

export default function Header() {
  return (
    <div className="pt-12">
      <div className="container mx-auto px-4 flex relative">
        <div className="ml-10">
          <a href="/" className="text-lg font-semibold">
            <span className="text-red-700 font-extrabold">G</span>regory
          </a>
        </div>
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8">
            <li className="hover:bg-red-700 transition-all duration-200 ease-in-out hover:text-white p-2 rounded-md cursor-pointer">
              <a href="#">About Me</a>
            </li>
            <li className="hover:bg-red-700 transition-all duration-200 ease-in-out hover:text-white p-2 rounded-md cursor-pointer">
              <a href="#">Work</a>
            </li>
            <li className="hover:bg-red-700 transition-all duration-200 ease-in-out hover:text-white p-2 rounded-md cursor-pointer">
              <a href="#">Get In Touch</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
