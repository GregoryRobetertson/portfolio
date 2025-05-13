import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const text = "Hi I'm Gregory Robertson";

  // Split the text into individual letters
  const letters = text.split("");

  return (
    <section className="mt-24 flex px-32 items-center justify-between max-lg:flex-col max-lg:px-8">
      <div className="space-y-6">
        <motion.h1 className="text-5xl font-bold">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1, // Delay based on the index to stagger the letters
                duration: 0.6, // Duration for each letter to appear
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: letters.length * 0.1 + 0.5, // Delay after the h1 animation ends
            duration: 0.6,
          }}
        >
          I build custom websites and web applications designed to meet your
          needs and help you achieve your goals.
        </motion.p>
        <div className=" flex gap-4">
          <a
            href="/"
            className="bg-white text-black rounded-lg px-6 py-3 hover:bg-gray-600"
          >
            Download Resume
          </a>
          <a
            href="#Contact"
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
