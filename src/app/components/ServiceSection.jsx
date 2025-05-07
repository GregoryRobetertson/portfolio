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
    <div className="px-4 py-12 sm:px-6 lg:px-8" id="Services">
      <h2 className="text-3xl text-center font-bold">Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
