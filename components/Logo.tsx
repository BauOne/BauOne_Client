
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      shapeRendering="crispEdges" 
    >
      <defs>
        <linearGradient id="logo-gradient" x1="60" y1="10" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan-400 */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Blue-600 */}
        </linearGradient>
      </defs>

      {/* PART 1: The 'b' Structure (Left Side - White) */}
      {/* Defined by the vertical stem and the horizontal arms of the 'b' loop */}
      
      {/* 1. Main Vertical Stem of b */}
      <rect x="15" y="10" width="20" height="80" fill="currentColor" className="text-white" />
      
      {/* 2. Middle Horizontal Bar (Top of the b-loop) */}
      <rect x="35" y="45" width="25" height="15" fill="currentColor" className="text-white" />
      
      {/* 3. Bottom Horizontal Bar (Bottom of the b-loop) */}
      <rect x="35" y="75" width="25" height="15" fill="currentColor" className="text-white" />


      {/* PART 2: The '1' Structure (Right Side - Cyan/Blue) */}
      {/* This forms the number '1' but also acts as the closing vertical line for the 'b' */}

      {/* 1. The Vertical Pillar of the '1' */}
      <rect x="65" y="10" width="20" height="80" fill="url(#logo-gradient)" />
      
      {/* 2. The 'Nose' of the '1' (The flag) */}
      {/* This creates the distinct '1' silhouette at the top */}
      <rect x="45" y="10" width="20" height="15" fill="#22d3ee" />

      {/* Optional: A small digital pixel connector to show integration */}
      <rect x="60" y="25" width="5" height="5" fill="#0891b2" />

    </svg>
  );
};

export default Logo;
