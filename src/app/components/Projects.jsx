import Image from "next/image";
import React from "react";

export default function Projects({
  title,
  text,
  src,
  github,
  backend,
  link,
  skills = [],
}) {
  return (
    <>
      <section id="Projects">
        <div className="grid max-w-sm grid-row-[auto_1fr_auto] bg-black">
          <div className="md:col-span-1">
            <Image
              src={src}
              alt={title}
              width={200}
              height={200}
              loading="lazy"
              className="w-full height-60 object-cover rounded-xl"
            />
          </div>
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
            <p className="text-white">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 px-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center bg-black text-white text-sm font-medium px-3 py-1 rounded-xl shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer border border-zinc-700 hover:outline-none hover:border-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="px-6 py-4 flex gap-2">
            {github && (
              <a
                href={github}
                className="text-white hover:underline hover:text-blue-500"
                target="_blank"
              >
                View Repo
              </a>
            )}
            {backend && (
              <a
                href={backend}
                className="text-white hover:underline hover:text-green-500"
                target="_blank"
              >
                View Backend Repo
              </a>
            )}
            {link && (
              <a
                href={link}
                className="text-white hover:underline hover:text-blue-500"
                target="_blank"
              >
                View Live Site
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
