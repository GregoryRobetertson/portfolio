"use client";
import { motion } from "framer-motion";
import React from "react";
motion;
export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: 0.4,
        duration: 1.5,
        ease: "easeOut",
      }}
      className="bg-[#141A23] rounded-xl p-6 text-center"
    >
      <div>{icon}</div>
      <h3 className="text-white text-3xl">{title}</h3>
      <p className="text-white">{description}</p>
    </motion.div>
  );
}
