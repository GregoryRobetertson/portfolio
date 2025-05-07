import Image from "next/image";
import React from "react";

export default function Projects({ title, text, src, link, skills = [] }) {
  return (
    <>
      <div className="grid max-w-sm grid-row-[auto_1fr_auto] bg-white">
        <div className="md:col-span-1">
          <Image
            src={src}
            width={300}
            height={300}
            alt="title"
            className="w-full height-60 object-cover rounded-xl"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
          <p className="text-black">{text}</p>
        </div>
        <div>
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-sm text-white px-2 py-1 rounded-md gap6 hover:cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="px-6 py-4">
          <a href={link} className="text-black">
            View Website
          </a>
        </div>
      </div>
    </>
  );
}
