import React from "react";

export default function About() {
  return (
    <section className="py-16 my-24" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Intro Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-4 text-black">
              My Introduction
            </h3>
            <p className="text-black mb-6">
              I’m a Full Stack Software Developer specializing in building
              high-performance, user-focused web applications with HTML, CSS,
              JavaScript, and React. I create fast, responsive, and scalable
              digital solutions that drive results and deliver long-term value.
              Whether you're launching a startup or scaling an existing product,
              I build software that performs, impresses, and grows with your
              vision.
            </p>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-white rounded-xl border">
              <h4 className="font-semibold mb-3 text-black p-6">Frontend</h4>
              <div className="flex flex-wrap gap-2 cursor-pointer">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Bootstrap",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-black text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-xl border ">
              <h4 className="font-semibold mb-3 text-black p-6">Backend</h4>
              <div className="flex flex-wrap gap-2 cursor-pointer">
                {["Node.js", "Express", "Firebase", "APIs", "Jest"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Database */}
            <div className="bg-white rounded-xl border">
              <h4 className="font-semibold mb-3 text-black p-6">Database</h4>
              <div className="flex flex-wrap gap-2 cursor-pointer">
                {["MySQL", "PostgreSQL", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-black text-white px-3 py-1 rounded-full text-sm "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-xl border">
              <h4 className="font-semibold mb-3 text-black p-6">Tools</h4>
              <div className="flex flex-wrap gap-2 cursor-pointer">
                {["API", "Git", "VS Code"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-black text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
