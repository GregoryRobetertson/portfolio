import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🖥️",
    title: "Web Development",
    description:
      "Custom websites and web apps crafted to bring your vision and goals to life.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Build scalable, secure online stores with great user experience.",
  },
];

export default function ServiceSection() {
  return (
    <div>
      <h2>Services</h2>
      <div>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
