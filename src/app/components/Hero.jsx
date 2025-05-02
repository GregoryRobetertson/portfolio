import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="">
      <div>
        <h1>Hi I'm Gregory Robertson</h1>
        <p>I specialize in building websites and web application.</p>
      </div>
      <div>
        <Image
          src="/images/profile.png"
          alt="profile image"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
