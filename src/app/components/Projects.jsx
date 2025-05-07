import Image from "next/image";
import React from "react";

export default function Projects({ title, text, src, link }) {
  return (
    <>
      <div className="grid max-w-sm grid-row-[auto_1fr_auto]">
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
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="px-6 py-4">
          <a href={link}>View Website</a>
        </div>
      </div>
    </>
  );
}
