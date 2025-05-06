import React from "react";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-black rounded-xl p-6 text-center">
      <div>{icon}</div>
      <h3 className="text-white text-3xl ">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}
