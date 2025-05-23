
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/krishna-singh-617211322/",
    color: "from-purple-500 to-blue-500",
  },
  {
    label: "GitHub",
    icon: <Github size={18} />,
    href: "https://github.com/KrishnaSingh137",
    color: "from-gray-900 to-purple-700",
  },
  {
    label: "Email",
    icon: <Mail size={18} />,
    href: "mailto:jarvis7378@gmail.com",
    color: "from-blue-500 to-purple-500",
  },
];

const SocialButtons = () => (
  <div className="flex gap-3 mt-6">
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-4 py-2 rounded-full font-medium text-white bg-gradient-to-tr ${s.color} hover:scale-105 transition-transform shadow`}
      >
        <span className="flex gap-2 items-center">
          {s.icon}
          <span className="text-sm">{s.label}</span>
        </span>
      </a>
    ))}
  </div>
);

export default SocialButtons;

