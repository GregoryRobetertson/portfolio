"use client";
import Image from "next/image";
import React from "react";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Mail from "lucide-react/dist/esm/icons/mail";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const NowStatus = dynamic(() => import("./NowStatus"), {});

export default function Hero() {
  const text = "Hi I'm Gregory Robertson";
  const letters = text.split("");

  return (
    <section className="relative h-screen w-full text-white bg-cover bg-no-repeat bg-center bg-[url(/images/hero.webp)]">
      {/*Overlay*/}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between max-lg:justify-start h-full px-12 md:px-20 lg:px-28 xl:px-32 max-lg:flex-col max-lg:pt-32">
        {/* Left Text */}
        <div className="space-y-6 max-w-xl">
          <motion.h1 className="md:text-5xl font-bold leading-tight text-3xl sm:text-4xl">
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
            I’m a full stack developer who loves building clean, responsive
            websites using React, Express, and MongoDB focused on real world
            impact and user experience.
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/resume.zip"
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
          <motion.div
            className="flex gap-6 mt-6 justify-center max-lg:justify-start "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://github.com/GregoryRobetertson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/GregoryRobertsonJr-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:gregoryrobertson.dev@gmail.com"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
          transition={{
            delay: 0.4,
            duration: 1.5, // slow and smooth
            ease: "easeOut",
          }}
          className="fixed top-20 right-4 z-50"
        >
          <NowStatus />
        </motion.div>

        {/* Profile Image */}
        <div className="mt-8 max-lg:mt-12 flex jusitfy-center">
          <Image
            src="/images/profile.webp"
            alt="profile image"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg w-[200px] sm:w-[250px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
