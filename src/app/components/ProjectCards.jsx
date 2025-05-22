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
            github="https://github.com/GregoryRobetertson/weather-app"
            skills={["NextJS", "React", "Tailwind Css", "Bootstrap"]}
          />
          <Projects
            title="GlobalSphere Connect - Social Media Platform"
            text="A social platform I built with Next.js and React that brings blogs, real-time news, and weather updates into one place. Users can sign up, post content, and connect with others. I used Firebase for auth and MongoDB for data. One challenge I faced was a redirect URI mismatch error during Google login, which I fixed by properly configuring the credentials in Google Cloud. The result: a fast, clean, and seamless user experience."
            src="/images/globalsphereconnect.webp"
            link="https://globalsphereconnect.netlify.app/"
            github="https://github.com/GregoryRobetertson/GlobalSphere-connect"
            skills={["NextJS", "React", "Firebase", "MongoDB", "Tailwind Css"]}
          />
          <Projects
            title="Sunrisesip - Coffee Shop E commerce site "
            text="I built a fully functional online coffee shop where users can browse, add items to their cart, and check out — all in one smooth flow. The frontend is built with React, Next.js, Tailwind CSS, and a sprinkle of Bootstrap for structure and styling. On the backend, I used Node.js and Express to create a RESTful API that handles products, cart management, and the entire checkout process. Getting the API and frontend to stay in sync was a solid challenge, but it taught me a lot about building real-world, full-stack apps from scratch."
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
            text="I built an online sneaker shop where users can browse the latest kicks, add their favorites to the cart, and easily check out. The frontend uses React, Next.js, Tailwind CSS, and Bootstrap to create a sleek, responsive design. On the backend, I relied on Node.js and Express to power a RESTful API that manages products, carts, and the checkout flow. "
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
