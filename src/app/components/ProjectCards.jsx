import React from "react";
import Projects from "./Projects";

export default function ProjectCards() {
  return (
    <>
      <div className="p-6 my-24" id="Projects">
        <h1 className="text-3xl font-bold text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Projects
            title="Forecast Pro - Weather App"
            text="App that lets people check the weather by searching a city name."
            src="/images/weather.png"
            link="https://forecastpro.netlify.app/"
          />
          <Projects
            title="GlobalSphere Connect - Social Media Platform"
            text="A Social platform that focuses on the news, weather, and lets people post blogs and connect with each other."
            src="/images/globalsphereconnect.png"
            link="https://globalsphereconnect.netlify.app/"
            skills={["NextJS", "React"]}
          />
          <Projects
            title="Sunrisesip - Coffee Shop E commerce site "
            text="A online coffee shop for users to shop cofee products online."
            src="/images/coffeeshop.png"
            link="https://sunrisesip.netlify.app/"
          />
        </div>
      </div>
    </>
  );
}
