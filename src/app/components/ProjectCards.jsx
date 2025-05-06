import React from "react";
import Projects from "./Projects";

export default function ProjectCards() {
  return (
    <>
      <h1>Projects</h1>
      <div>
        <Projects
          title="Forecast Pro"
          text="App that lets people check the weather by searching a city name."
          src="/images/weather.png"
          link="https://forecastpro.netlify.app/"
        />
        <Projects
          title="GlobalSphere Connect"
          text="A Social platform that focuses on the news, weather, and lets people post blogs and connect with each other."
          src="/globalsphereconnect.png"
          link="https://globalsphereconnect.netlify.app/"
        />
        <Projects
          title="GlobalGlimpseNews"
          text="A website that lets people check the news worldwide and local."
          src="/globalglimpsenews.png"
          link="https://globalglimpsenews.netlify.app/"
        />
      </div>
    </>
  );
}
