"use client";
import React from "react";
import Projects from "./Projects";
import { motion } from "framer-motion";

export default function ProjectCards() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="p-6 my-24"
        id="Projects"
      >
        <h1 className="text-3xl font-bold text-center mb-12">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Forecast Pro - Weather App",
              text: "App that lets people check the weather by searching a city name.",
              src: "/images/weather.webp",
              link: "https://forecastpro.netlify.app/",
              github: "https://github.com/GregoryRobetertson/weather-app",
              skills: ["NextJS", "React", "Tailwind Css", "Bootstrap"],
            },
            {
              title: "GlobalSphere Connect - Social Media Platform",
              text: "A social platform built with Next.js and React that integrates user blogs, live news feeds, and weather updates into a seamless, real-time experience, allowing users to interact and engage with each other.",
              src: "/images/globalsphereconnect.webp",
              link: "https://globalsphereconnect.netlify.app/",
              github:
                "https://github.com/GregoryRobetertson/GlobalSphere-connect",
              skills: [
                "NextJS",
                "React",
                "Firebase",
                "MongoDB",
                "Tailwind Css",
              ],
            },
            {
              title: "Sunrisesip - Coffee Shop E commerce site ",
              text: "Built a full-stack online coffee shop with React frontend and Node.js/Express backend, featuring browsing, cart, and checkout.",
              src: "/images/coffeeshop.webp",
              github:
                "https://github.com/GregoryRobetertson/coffee-shop-frontend",
              backend:
                "https://github.com/GregoryRobetertson/coffee-shop-backend/tree/main",
              link: "https://sunrisesip.netlify.app/",
              skills: [
                "React",
                "Express",
                "NextJs",
                "Context API",
                "Tailwind Css",
                "Bootstrap",
                "Cloudinary",
                "MongoDB",
              ],
            },
            {
              title: "Kick Cartel - Coffee Shop E commerce Sneaker Shop ",
              text: "I built an online sneaker shop where users can browse the latest kicks, add their favorites to the cart, and easily check out. The frontend uses React, Next.js, Tailwind CSS, and Bootstrap to create a sleek, responsive design. On the backend, I relied on Node.js and Express to power a RESTful API that manages products, carts, and the checkout flow. ",
              src: "/images/kickcartel.webp",
              github: "https://github.com/GregoryRobetertson/kick-cartel",
              backend:
                "https://github.com/GregoryRobetertson/kick-cartel-backend",
              link: "https://kickcartel.netlify.app/",
              skills: [
                "React",
                "Express",
                "NextJs",
                "Context API",
                "Tailwind Css",
                "Bootstrap",
                "Cloudinary",
                "MongoDB",
              ],
            },
            {
              title: "Snakeio - A Video Game ",
              text: " A classic snake game where the player controls a growing snake on a grid, collecting food to increase score and speed, while avoiding collisions with walls or itself.",
              src: "/images/snakeio.webp",
              github: "https://github.com/GregoryRobetertson/snakeGame",
              link: "https://snakeiogame.netlify.app/",
              skills: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "Bookit Easy",
              text: "Bookit Easy is a full stack booking system app that let users book appointments and view them. Users must be signed in to book and view appointments."
              src: "/images/bookiteasy.webp",
              github: "https://github.com/GregoryRobetertson/booking-app",
              link: "https://bookiteasy.netlify.app/",
              skills: ["Nextjs","React","Node","Tailwindcss","Firebase","Mongodb", ],
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + idx * 0.1, ease: "easeOut" }}
              className="flex h-full"
            >
              <Projects {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
