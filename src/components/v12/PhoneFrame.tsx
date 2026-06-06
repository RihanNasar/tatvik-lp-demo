import Image from 'next/image';
import React from 'react';

interface PhoneFrameProps {
  src: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function PhoneFrame({ src, style, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative w-full h-full rounded-[3rem] bg-black p-[6px] shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_20px_40px_-10px_rgba(0,0,0,0.8),inset_0_0_2px_1px_rgba(255,255,255,0.4)] overflow-hidden ${className}`} style={style}>
      {/* Inner Screen Bezel */}
      <div className="relative w-full h-full rounded-[2.6rem] overflow-hidden bg-[#1A1A1A]">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 shadow-[inset_0_0_1px_rgba(255,255,255,0.2)]" />
        
        {/* The App Screenshot */}
        <div className="relative w-full h-full bg-[#f4f2eb] flex flex-col justify-start">
          <Image
            src={src}
            alt="App UI Showcase"
            fill
            className="object-cover object-top"
            priority
            onError={(e) => {
              e.currentTarget.src = "/media__1780481802767.png";
            }}
          />
        </div>
        
        {/* Screen Reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.08] to-white/0 pointer-events-none transform -skew-x-12 translate-x-[150%] transition-transform duration-1000 group-hover:translate-x-[-150%] z-30" />
        
        {/* Inner Bezel Shadow */}
        <div className="absolute inset-0 rounded-[2.6rem] shadow-[inset_0_0_0_4px_black] pointer-events-none z-30" />
      </div>
    </div>
  );
}
