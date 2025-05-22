import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowIWork from "./components/HowIWork";
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
        <HowIWork />
        <ServiceSection />
        <ProjectCards />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
