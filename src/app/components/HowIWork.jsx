"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";

const steps = [
  {
    title: "Discovery",
    description:
      "Understanding vision, goals, and target audience to shape a tailored solution.",
  },
  {
    title: "Wireframing",
    description:
      "Sketching layouts, user flows, and features for a smooth user experience.",
  },
  {
    title: "Development",
    description:
      "Building the frontend and backend using modern, scalable technologies.",
  },
  {
    title: "Launch",
    description:
      "Testing, deploying, and optimizing my app or website for real-world users.",
  },
  {
    title: "Maintenance",
    description:
      "Ongoing support, updates, and improvements to keep everything running smoothly.",
  },
];

export default function HowIWork() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-zinc-950 py-16 px-4"
      id="how-i-work"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          How I <span className="text-blue-700">Work</span>
        </h2>

        <div className="relative border-l border-zinc-700 pl-16 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-14 top-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {step.title}
              </h3>
              <p className="text-zinc-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
