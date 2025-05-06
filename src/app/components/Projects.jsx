import Image from "next/image";
import React from "react";

export default function Projects({ title, text, src, link }) {
  return (
    <>
      <div>
        <Image
          src={src}
          alt="title"
          className="w-full"
          width={300}
          height={300}
        />
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div>
          <a href={link}></a>
        </div>
      </div>
    </>
  );
}
