
import React from "react";
import { Code, Book, Folder, FileText } from "lucide-react";

const projects = [
  { label: "Python",  icon: <Code />, key: "py", color: "from-accent-purple to-accent-blue" },
  { label: "C++",     icon: <Code />, key: "cpp", color: "from-accent-blue to-accent-purple" },
  { label: "TensorFlow", icon: <Book />, key: "tf", color: "from-orange-400 to-accent-purple" },
  { label: "Scikit-learn", icon: <Book />, key: "sk", color: "from-accent-purple to-orange-400" },
  { label: "Web Develop",  icon: <Folder />, key: "web", color: "from-blue-600 to-accent-purple" },
  { label: "WB",        icon: <Folder />, key: "wb", color: "from-accent-blue to-blue-500" },
  { label: "AI",        icon: <Code />, key: "ai", color: "from-accent-purple to-blue-400" },
  { label: "IOT",       icon: <FileText />, key: "iot", color: "from-accent-blue to-orange-400" },
  { label: "DSA",       icon: <Folder />, key: "dsa", color: "from-accent-purple to-orange-500" },
];

const ProjectGrid = () => (
  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 fade-in-up">
    {projects.map((p) => (
      <div
        key={p.key}
        className={`flex flex-col justify-center items-center px-4 py-7 min-w-20 rounded-xl glass
                    bg-gradient-to-br ${p.color} shadow-inner-card text-white/90 transition-transform hover:scale-105`}
        style={{ minHeight: "120px" }}
      >
        <div className="text-2xl mb-2">{p.icon}</div>
        <div className="text-xs font-semibold tracking-wide">{p.label}</div>
      </div>
    ))}
  </div>
);

export default ProjectGrid;
