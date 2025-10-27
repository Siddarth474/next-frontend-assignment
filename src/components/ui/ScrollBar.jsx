"use client";

import React from 'react'

const ScrollBar = ({scrollProgress = 0}) => {
  const trackHeight = 300;
  const thumbHeight = 64;
  const topPosition = (trackHeight - thumbHeight) / 2 + scrollProgress * ((trackHeight - thumbHeight) / 2);

  return (
    <div 
    className="absolute right-3 opacity-100 rounded-lg 
    bg-[linear-gradient(177.32deg,#888989_5.6%,#4A4E54_93.28%)] shadow-[4px_4px_4.9px_0px_#00000040]"
    style={{
      width: "8px",
      height: "64px",
      top: `${topPosition}px`,
    }}>    
    </div>

  )
}

export default ScrollBar