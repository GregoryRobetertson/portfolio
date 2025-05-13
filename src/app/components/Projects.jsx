import Image from "next/image";
import React from "react";

export default function Projects({ title, text, src, link, skills = [] }) {
  return (
    <>
      <div className="grid max-w-sm grid-row-[auto_1fr_auto] bg-gradient-to-br from-[#400101] to-[#1c0000]">
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
          <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-white">{text}</p>
        </div>
        <div className=" flex flex-wrap gap-3  ">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center bg-black text-white text-sm font-medium px-3 py-1 rounded-xl shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer border border-zinc-700 hover:outline-none hover:border-red-500"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="px-6 py-4">
          <a href={link} className="text-white">
            View Website
          </a>
        </div>
      </div>
    </>
  );
}
