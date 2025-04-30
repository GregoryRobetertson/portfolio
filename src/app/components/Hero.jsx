import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/logo.JPG"
          alt="background photo"
          className="w-full h-full object-cover"
        />
        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>{" "}
        {/* Grayish overlay with opacity */}
        {/* Optional gradient fade on top of the gray overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Content on Top (if any) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Your Hero Title</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Add your overlay content here.
        </p>
      </div>
    </section>
  );
}
