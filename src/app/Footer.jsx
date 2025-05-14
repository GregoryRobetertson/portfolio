import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white p-6 text-small text-center">
        <div className="mb-4">
          <p>© 2025 Gregory Robertson. Built with React & Node.js.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://github.com/GregoryRobetertson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/GregoryRobertsonJr-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:gregoryrobertson.dev@gmail.com"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
