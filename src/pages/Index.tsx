
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
    <main className="min-h-screen w-full font-inter bg-background text-white pb-16"
      style={{ background: "linear-gradient(135deg, #1a1f2c 0%, #232336 75%, #18182a 100%)" }}>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8 pt-16">
        {/* Hero/Header (Title, social, image, name) */}
        <section className="flex flex-col sm:flex-row items-center justify-between w-full mb-14 gap-y-10 gap-x-8">
          {/* Left: Headline + social */}
          <div className="flex-1 min-w-[270px] md:max-w-[56%] flex flex-col items-start"
            data-aos="fade-up" data-aos-duration="850">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug gradient-text mb-5 animate-fade-in">
              I AM MORE<br />
              THAN JUST<br />
              AN ENGINEER.
            </h1>
            <div className="text-white/80 text-base sm:text-lg font-medium mb-7 sm:max-w-lg animate-fade-in-up"
                 style={{ animationDelay: "80ms" }}>
              Startup Enthusiast –
              <span className="text-accent-blue ml-1">Problem Solver</span>
              <br />
              Visual Thinker – Future Predictor
            </div>
            <SocialButtons />
          </div>
          {/* Right: Profile photo & name */}
          <div
            className="flex flex-col items-center justify-center w-full sm:w-auto animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <ProfileBlob
              src="/lovable-uploads/8d390e13-a3c3-4861-b87f-fbf70c7bfef8.png"
              alt="Profile"
              name="Krishna Singh"
            />
          </div>
        </section>

        {/* Skills & Featured */}
        <section className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="flex-1 min-w-[230px]" data-aos="fade-up" data-aos-delay="180">
            <div className="uppercase text-sm tracking-widest text-accent-purple mb-2">Skills</div>
            <div className="text-2xl font-bold mb-2">
              STARTUP\ BE ENTHUSIAST
            </div>
            <SkillList />
          </div>
          <div className="flex-1 min-w-[240px] max-w-[420px] animate-fade-in-up" data-aos="fade-up" data-aos-delay="240">
            <FeaturedProject />
          </div>
        </section>

        {/* Projects & Blog */}
        <section className="flex flex-col md:flex-row gap-10 md:gap-20" data-aos="fade-up" data-aos-delay="260">
          <div className="flex-1 min-w-[210px]">
            <div className="uppercase text-sm tracking-widest text-accent-purple mb-3">Tech Stack</div>
            <ProjectGrid />
          </div>
          <div className="flex-1 min-w-[240px] max-w-[420px] animate-fade-in-up">
            <BlogCard />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;

