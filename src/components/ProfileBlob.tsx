
import React from "react";

interface ProfileBlobProps {
  src: string;
  alt: string;
}

const ProfileBlob: React.FC<ProfileBlobProps> = ({ src, alt }) => (
  <div className="relative w-40 h-40 sm:w-52 sm:h-52 fade-in-up" style={{ marginRight: "0" }}>
    <div className="absolute inset-0 rounded-full z-0 transition-all" style={{
      background: "radial-gradient(ellipse 65% 90% at 60% 0,#9b87f5 60%,#0EA5E9 100%)",
      filter: "blur(5px)",
      opacity: 0.8,
    }}></div>
    <img
      src={src}
      alt={alt}
      className="relative rounded-full w-full h-full object-cover border-4 border-white/10 shadow-lg"
      style={{ zIndex: 1 }}
    />
  </div>
);

export default ProfileBlob;

