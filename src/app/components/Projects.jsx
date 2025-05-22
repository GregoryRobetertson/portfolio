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
    <div className="w-full h-full bg-zinc-900 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
      <Image
        src={src}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
          {title}
        </h2>

        <p className="text-zinc-400 text-sm md:text-base mb-4">{text}</p>

        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-zinc-800 text-white px-3 py-1 rounded-full border border-zinc-700 hover:border-blue-500 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              Repo
            </a>
          )}
          {backend && (
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 underline"
            >
              Backend
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
