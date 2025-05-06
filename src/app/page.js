import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCards from "./components/ProjectCards";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceSection />
        <ProjectCards />
      </main>
    </>
  );
}
