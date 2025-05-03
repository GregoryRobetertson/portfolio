import React from "react";

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Intro Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-4">My introduction</h3>
            <p className="text-gray-700 mb-6">
              I am well-versed in HTML, CSS, and JavaScript, and other
              cutting-edge frameworks and libraries, which allows me to
              implement interactive features. Additionally, I have experience
              working with content management systems (CMS) like{" "}
              <span className="text-indigo-600 font-medium">WordPress</span>.
            </p>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="shadow-[0_0_10px_white]">
              <h4 className="font-semibold mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
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
            <div className="shadow-[0_0_10px_white]">
              <h4 className="font-semibold mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
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
            <div className="shadow-[0_0_10px_white]">
              <h4 className="font-semibold mb-3">Database</h4>
              <div className="flex flex-wrap gap-2">
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
            <div className="shadow-[0_0_10px_white]">
              <h4 className="font-semibold mb-3">Tools</h4>
              <div className="flex flex-wrap gap-2">
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
