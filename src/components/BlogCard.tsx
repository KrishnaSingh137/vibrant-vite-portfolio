
import React from "react";
import { Book, ArrowRight } from "lucide-react";

const BlogCard = () => (
  <section className="glass p-5 w-full min-w-[240px] max-w-[420px] mx-auto fade-in-up">
    <div className="flex items-center gap-2 mb-2">
      <Book className="text-accent-purple" />
      <span className="uppercase text-sm text-white/60 font-semibold tracking-wide">Blog</span>
    </div>
    <div className="mb-3 text-white/80 text-base font-semibold">My Learnings: Thoughts</div>
    <div className="flex flex-col gap-2 w-full">
      <button className="px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg text-white text-xs font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all">
        Upload Video (Admin) <ArrowRight size={14} />
      </button>
      <button className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white text-xs font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all">
        Watch Playlist <ArrowRight size={14} />
      </button>
    </div>
  </section>
);

export default BlogCard;
