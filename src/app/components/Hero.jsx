import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const text = "Hi I'm Gregory Robertson";
  const letters = text.split("");

  return (
    <section className="relative h-screen w-full text-white bg-cover bg-no-repeat bg-center bg-[url(/images/herobg.png)]">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-32 max-lg:flex-col max-lg:pt-32 max-lg:px-8">
        {/* Left Text */}
        <div className="space-y-6 max-w-xl">
          <motion.h1 className="text-5xl font-bold leading-tight">
            {letters.map((letter, index) => {
              const nameStart = text.indexOf("Gregory Robertson");
              const nameEnd = nameStart + "Gregory Robertson".length;
              const isName = index >= nameStart && index < nameEnd;

              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                  }}
                  className={isName ? "text-blue-700" : ""}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: letters.length * 0.05 + 0.4,
              duration: 0.6,
            }}
          >
            I build custom websites and web applications designed to meet your
            needs and help you achieve your goals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
            transition={{
              delay: 0.4,
              duration: 1.5, // slow and smooth
              ease: "easeOut",
            }}
            className="flex gap-4"
          >
            <a
              href="/"
              className="bg-white text-black rounded-lg px-6 py-3 hover:bg-gray-600"
            >
              Download Resume
            </a>
            <a
              href="#Contact"
              className="bg-blue-700 text-white rounded-lg px-6 py-3 hover:bg-blue-800"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="mt-8 max-lg:mt-12">
          <Image
            src="/images/profile.png"
            alt="profile image"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
