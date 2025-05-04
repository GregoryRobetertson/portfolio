import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="mt-24 flex px-32 items-center justify-between max-lg:flex-col max-lg:px-8 ">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold">Hi I'm Gregory Robertson</h1>
        <p className="text-lg">
          I build custom websites and web applications designed to meet your
          needs and help you achieve your goals.
        </p>
        <div className=" flex gap-4">
          <a
            href="/"
            className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-600"
          >
            Download Resume
          </a>
          <a
            href="/"
            className="bg-red-700 text-white rounded-lg px-6 py-3 hover:bg-gray-600"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="mt-8 max-lg:mt-12">
        <Image
          src="/images/profile.png"
          alt="profile image"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
