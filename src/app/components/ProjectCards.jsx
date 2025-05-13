import React from "react";
import Projects from "./Projects";

export default function ProjectCards() {
  return (
    <>
      <div className="p-6 my-24" id="Projects">
        <h1 className="text-3xl font-bold text-center mb-12">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Projects
            title="Forecast Pro - Weather App"
            text="App that lets people check the weather by searching a city name."
            src="/images/weather.png"
            link="https://forecastpro.netlify.app/"
            skills={["NextJS", "React", "Tailwind Css", "Bootstrap"]}
          />
          <Projects
            title="GlobalSphere Connect - Social Media Platform"
            text="A Social platform that focuses on the news, weather, and lets people post blogs and connect with each other."
            src="/images/globalsphereconnect.png"
            link="https://globalsphereconnect.netlify.app/"
            skills={["NextJS", "React", "Firebase", "MongoDB", "Tailwind Css"]}
          />
          <Projects
            title="Sunrisesip - Coffee Shop E commerce site "
            text="A online coffee shop for users to shop cofee products online."
            src="/images/coffeeshop.png"
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
        </div>
      </div>
    </>
  );
}
