"use client"

import React from 'react'

const HorizontalBar = ({top}) => {
  return (
    <div
        style={{top}}
        className={`w-[612px] h-1 rounded-[2.46px] opacity-100 absolute left-[976px]
        bg-[linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))]
        shadow-[0px_4px_4px_0px_#00000054]
        backdrop-blur-[9.837px]`}
    ></div>

  )
}

export default HorizontalBar