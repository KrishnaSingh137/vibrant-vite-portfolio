
// Modern glassmorphism portfolio (matches inspiration)
// by Lovable

import React from "react";
import ProfileBlob from "../components/ProfileBlob";
import SocialButtons from "../components/SocialButtons";
import SkillList from "../components/SkillList";
import FeaturedProject from "../components/FeaturedProject";
import ProjectGrid from "../components/ProjectGrid";
import BlogCard from "../components/BlogCard";

const Index = () => {
  return (
    <div className="min-h-screen w-full font-inter bg-background text-white pb-16 fade-in-up">
      {/* Hero/Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-10 pb-14 gap-6 sm:gap-0">
        {/* Left: Headline + social */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug gradient-text mb-3 fade-in-up">
            I AM MORE<br />
            THAN JUST<br />
            AN ENGINEIR.
          </h1>
          <div className="text-white/80 text-base sm:text-lg font-medium mb-3 sm:max-w-lg fade-in-up">
            Startup Enthusiast –
            <span className="text-accent-blue ml-1">Problem Solver</span>
            <br />
            Visual Thinker – Future Predictor
          </div>
          <SocialButtons />
        </div>
        {/* Right: Profile photo */}
        <ProfileBlob src="/lovable-uploads/8d390e13-a3c3-4861-b87f-fbf70c7bfef8.png" alt="Profile" />
      </div>

      {/* Skills & Featured */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-2 sm:px-4 xl:px-16 fade-in-up">
        <div className="flex-1 min-w-[230px]">
          <div className="uppercase text-sm tracking-widest text-accent-purple mb-2">Skills</div>
          <div className="text-2xl font-bold mb-2">
            STATUP\ BE ENTHUSIAST
          </div>
          <SkillList />
        </div>
        <div className="flex-1 min-w-[240px] max-w-[420px]">
          <FeaturedProject />
        </div>
      </div>

      {/* Projects & Blog */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-2 sm:px-4 xl:px-16 mt-14 fade-in-up">
        <div className="flex-1 min-w-[210px]">
          <div className="uppercase text-sm tracking-widest text-accent-purple mb-3">Projects</div>
          <ProjectGrid />
        </div>
        <div className="flex-1 min-w-[240px] max-w-[420px]">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
