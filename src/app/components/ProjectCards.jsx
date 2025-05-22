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
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
        transition={{
          duration: 1.5, // slow and smooth
          ease: "easeOut",
        }}
        className="p-6 my-24"
        id="Projects"
      >
        <h1 className="text-3xl font-bold text-center mb-12">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Projects
            title="Forecast Pro - Weather App"
            text="App that lets people check the weather by searching a city name."
            src="/images/weather.webp"
            link="https://forecastpro.netlify.app/"
            skills={["NextJS", "React", "Tailwind Css", "Bootstrap"]}
          />
          <Projects
            title="GlobalSphere Connect - Social Media Platform"
            text="A Social platform that focuses on the news, weather, and lets people post blogs and connect with each other."
            src="/images/globalsphereconnect.webp"
            link="https://globalsphereconnect.netlify.app/"
            skills={["NextJS", "React", "Firebase", "MongoDB", "Tailwind Css"]}
          />
          <Projects
            title="Sunrisesip - Coffee Shop E commerce site "
            text="A online coffee shop for users to shop cofee products online."
            src="/images/coffeeshop.webp"
            github="https://github.com/GregoryRobetertson/coffee-shop-frontend"
            backend="https://github.com/GregoryRobetertson/coffee-shop-backend/tree/main"
            link="https://sunrisesip.netlify.app/"
            skills={[
              "React",
              "Express",
              "NextJs",
              "Context API",
              "Tailwind Css",
              "Bootstrap",
              "Cloudinary",
              "MongoDB",
            ]}
          />
          <Projects
            title="Kick Cartel - Coffee Shop E commerce Sneaker Shop "
            text="A online Sneaker shop for users to sneakers online."
            src="/images/kickcartel.webp"
            github="https://github.com/GregoryRobetertson/kick-cartel"
            backend="https://github.com/GregoryRobetertson/kick-cartel-backend"
            link="https://kickcartel.netlify.app/"
            skills={[
              "React",
              "Express",
              "NextJs",
              "Context API",
              "Tailwind Css",
              "Bootstrap",
              "Cloudinary",
              "MongoDB",
            ]}
          />
          <Projects
            title="Snakeio - A Video Game "
            text=" A classic snake game where the player controls a growing snake on a grid, collecting food to increase score and speed, while avoiding collisions with walls or itself."
            src="/images/snakeio.webp"
            github="https://github.com/GregoryRobetertson/snakeGame"
            link="https://snakeiogame.netlify.app/"
            skills={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </motion.div>
    </>
  );
}
