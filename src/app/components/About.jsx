"use client";
import { motion } from "framer-motion";
import React from "react";
export default function About() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
        transition={{
          delay: 0.4,
          duration: 1.5, // slow and smooth
          ease: "easeOut",
        }}
        className="bg-zinc-950"
        id="about"
      >
        <div className="max-w-6xl mx-auto px-4 py-16 ">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Intro Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black shadow-lg rounded-xl p-6 border relative">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                My Introduction
              </h3>
              <p className="text-white mb-6 text-lg leading-relaxed">
                I’m{" "}
                <span className="text-blue-400 font-semibold">Gregory.</span> a
                developer who loves turning ideas into smooth digital
                experiences, I approach development with the same determination
                and work ethic that shaped me growing up. My design philosophy
                is rooted in empathy; I believe truly great solutions aren't
                just about what I think works, but about understanding the
                people who will interact with them. It's about stepping into
                their shoes, identifying their needs and pain points, and then
                crafting solutions that are not just elegant, but inherently
                intuitive and genuinely helpful. I love coding because it pushes
                me to be more creative and makes me feel like I can build
                anything I set my mind to. I'm passionate about solving problems
                efficiently and creating solutions that are both functional and
                elegant for the end-user. Continuous learning is important to
                me, and I stay up to date with the latest technologies to keep
                my skills sharp and relevant. Outside of development, I'm
                committed to personal and professional growth. In my downtime, I
                enjoy playing drums and gaming both help me recharge and stay
                balanced. I'm excited to collaborate with teams that value
                dedication, integrity, and meaningful work. I'm currently open
                to full-time roles and also take on freelance projects.
              </p>

              {/* Visual Connection Line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 w-16 bg-blue-500 rounded-full"></div>
            </div>

            {/* Right Column - Tech Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="bg-black rounded-2xl border pt-8 relative">
                {/* Visual Connection Indicator */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-blue-500 rounded-full"></div>
                <h4 className="font-semibold mb-3 text-white p-6">Frontend</h4>
                <div className="flex flex-wrap gap-2 cursor-pointer p-6 pt-0">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Bootstrap",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer border border-zinc-700 hover:outline-none hover:border-blue-700 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-black rounded-xl border pt-8 relative">
                {/* Visual Connection Indicator */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-green-500 rounded-full"></div>
                <h4 className="font-semibold mb-3 text-white p-6">Backend</h4>
                <div className="flex flex-wrap gap-2 cursor-pointer p-6 pt-0">
                  {["Node.js", "Express", "Firebase", "APIs", "Jest"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer border border-zinc-700 hover:outline-none hover:border-blue-700 hover:scale-105"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Database */}
              <div className="bg-black rounded-xl border">
                <h4 className="font-semibold mb-3 text-white p-6">Database</h4>
                <div className="flex flex-wrap gap-2 cursor-pointer p-6">
                  {["MySQL", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer border border-zinc-700 hover:outline-none hover:border-blue-700 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-black rounded-xl border">
                <h4 className="font-semibold mb-3 text-white p-6">Tools</h4>
                <div className="flex flex-wrap gap-2 cursor-pointer p-6">
                  {["API", "Git", "VS Code"].map((tool) => (
                    <span
                      key={tool}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer border border-zinc-700 hover:outline-none hover:border-blue-700 hover:scale-105"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
