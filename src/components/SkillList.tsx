
import React from "react";
import { Check } from "lucide-react";

const skills = [
  "Problem Solver",
  "Visual Thinker",
  "Future Predictor",
];

const SkillList = () => (
  <ul className="mt-3 mb-5 flex flex-col gap-2">
    {skills.map((skill) => (
      <li key={skill} className="flex items-center text-base leading-relaxed font-medium text-white/90">
        <span className="inline-flex w-6 h-6 items-center justify-center mr-2 rounded-full bg-gradient-to-br from-accent-gradient-from to-accent-gradient-to">
          <Check size={16} className="text-white" />
        </span>
        <span>{skill}</span>
      </li>
    ))}
  </ul>
);

export default SkillList;
