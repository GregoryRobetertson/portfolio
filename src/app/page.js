"use client";

import About from "./components/About";
import Contact from "./components/Contact";

import Header from "./components/Header";
import Hero from "./components/Hero";
import NowStatus from "./components/NowStatus";
import ProjectCards from "./components/ProjectCards";
import ServiceSection from "./components/ServiceSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceSection />
        <ProjectCards />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
