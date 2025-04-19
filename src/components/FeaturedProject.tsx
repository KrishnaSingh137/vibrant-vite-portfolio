
import React from "react";
import { Github, Link } from "lucide-react";

const FeaturedProject = () => (
  <section className="glass p-6 min-w-[260px] max-w-[420px] mx-auto fade-in-up">
    <div className="flex items-center gap-2 mb-2">
      <div className="icon-badge">
        <span className="text-2xl font-extrabold">+</span>
      </div>
      <span className="uppercase text-sm text-white/60 font-semibold tracking-wide">Rescue+</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-1">
      <span className="bg-accent-purple/20 text-accent-purple text-xs px-2 py-1 rounded-full">IOT</span>
      <span className="bg-accent-blue/20 text-accent-blue text-xs px-2 py-1 rounded-full">Web</span>
    </div>
    <p className="text-white/80 font-medium tracking-tight mt-2 mb-5">Resputing industries, improvises dangers of scikit-learn</p>
    <div className="flex gap-3">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener"
        className="px-3 py-2 rounded-lg bg-gradient-to-r from-gray-700/70 to-accent-purple/90 text-white text-xs flex items-center gap-1 hover:scale-105 transition-all"
      >
        <Github size={16} />
        GitHub
      </a>
      <a
        href="#"
        className="px-3 py-2 rounded-lg bg-gradient-to-r from-accent-purple/80 to-accent-blue text-white text-xs flex items-center gap-1 hover:scale-105 transition-all"
      >
        <Link size={16} />
        Live Demo
      </a>
    </div>
  </section>
);

export default FeaturedProject;
