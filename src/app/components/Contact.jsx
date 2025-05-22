"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";

export default function Contact() {
  const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publickey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const form = useRef(null);

  const [status, setStatus] = useState(""); // for showing success/error message

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(service, template, form.current, publickey);
      setStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      setStatus("Failed to send message. Try again.");
      console.error("Error sending message!", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      className="bg-zinc-950 py-16 px-4 sm:px-6 lg:px-20"
    >
      <h2 className="text-center text-4xl font-extrabold text-white mb-12">
        <span className="text-blue-700">Contact</span> Me
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-black bg-opacity-70 rounded-2xl shadow-xl p-8 flex flex-col space-y-6 text-white"
          id="Contact"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="self-start bg-blue-600 hover:bg-blue-700 transition rounded-lg px-8 py-3 font-semibold shadow-md"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`mt-2 text-sm ${
                status.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white flex flex-col justify-center space-y-8"
        >
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-zinc-300 max-w-md">
            Feel free to reach out for collaborations, Hire Me, projects, or
            just to say hello! I usually respond within 24 hours.
          </p>

          <div className="space-y-4 text-zinc-400">
            <div>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:gregoryrobertson.dev@gmail.com"
                className="text-blue-500 hover:underline"
              >
                gregoryrobertson.dev@gmail.com
              </a>
            </div>
            <div>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:underline"
              >
                +1 (225) 460-0814
              </a>
            </div>
            <div>
              <strong>Location:</strong> Amite, Louisiana
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
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
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
