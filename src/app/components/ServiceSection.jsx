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
  {
    icon: " 🧱",
    title: "Custom Web Applications",
    description: "Fully functional apps tailored to a client's needs.",
  },
  {
    icon: " 📆",
    title: "Booking and Scheduling Systems",
    description:
      "Especially useful for gyms, salons, clinics, freelancers, and consultants.",
  },
  {
    icon: "🔐 ",
    title: "Authentication & User Management",
    description: "Secure logins with role-based permissions and user profiles.",
  },
  {
    icon: "🚀",
    title: "Landing Pages & Marketing Sites",
    description:
      "Fast, beautiful, and optimized pages for products or services.",
  },
  {
    icon: "⚙️",
    title: "Performance Optimization & SEO",
    description: "Make sites fast and Google-friendly.",
  },
];

export default function ServiceSection() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-16" id="Services">
      <h2 className="text-3xl text-center font-bold mb-12">Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
