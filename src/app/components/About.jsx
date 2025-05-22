"use client";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
      id="about"
      className="bg-zinc-950 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-2">About Me</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A quick look into who I am, what I do, and the tools I love.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-xl p-8 rounded-3xl"
          >
            <h3 className="text-white text-2xl font-semibold mb-4">
              My Introduction
            </h3>
            <p className="text-zinc-300 text-base leading-7">
              I’m{" "}
              <span className="text-blue-400 font-semibold">
                Gregory Robertson Jr.
              </span>{" "}
              — a frontend and full-stack developer with a passion for
              transforming ideas into intuitive and elegant digital experiences.
              My background and upbringing have shaped a strong work ethic and a
              mindset focused on growth, creativity, and resilience.
              <br />
              <br />
              I believe in building with empathy — crafting solutions based on
              the needs of real people. Clean UI, smart UX, and scalable code
              are my focus. I love coding because it pushes me to solve problems
              in creative ways, and keeps me constantly learning.
              <br />
              <br />
              Outside of work, I enjoy playing drums and gaming to reset. I'm
              always open to opportunities that challenge me and allow me to
              grow — whether in a team setting or as a freelancer.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            {[
              {
                title: "Frontend",
                items: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Bootstrap",
                  "Tailwind CSS",
                ],
                border: "border-blue-500",
              },
              {
                title: "Backend",
                items: ["Node.js", "Express", "Firebase", "APIs", "Jest"],
                border: "border-green-500",
              },
              {
                title: "Database",
                items: ["MongoDB", "MySQL"],
                border: "border-purple-500",
              },
              {
                title: "Tools",
                items: ["API", "Git", "VS Code", "Linux", "CI/CD"],
                border: "border-yellow-500",
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`bg-[#111] rounded-2xl border border-zinc-800 p-6 shadow-md`}
              >
                <h4 className="text-white text-xl font-semibold mb-4">
                  {section.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {section.items.map((tech) => (
                    <span
                      key={tech}
                      className={`text-white bg-black border border-zinc-700 hover:${section.border} px-3 py-1 rounded-full text-sm transition-transform transform hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
