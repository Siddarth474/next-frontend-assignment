"use client" 

import React from 'react'
import { motion } from 'framer-motion';

const Tabs = ({tab, setTab}) => {

    const positions = {
        1: 0,
        2: 200,
        3: 400,
    };

  return (
    <div className='p-1.5 w-[614px] h-[62px] bg-[#171717] opacity-100 rounded-[23px] 
    shadow-[inset_0px_4.96px_12.4px_2.48px_#00000040]'>
        <div className='flex gap-1.5 w-[597px] h-[49px]'>
            <motion.div
                layout
                initial={false}
                animate={{ x: positions[tab] }}
                transition={{ 
                    type: "tween",
                    duration: 0.5,
                    ease: "easeInOut", 
                }}
                className="absolute w-[195px] h-[49px] rounded-2xl bg-[#28292F] z-0 text-white
                shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A,-8.43px_-16.87px_50.6px_-16.87px_#485B71]"
            />
            <button
            onClick={() => setTab(1)}
            className={`
                relative w-[195px] z-10 h-[49px] rounded-2xl py-2.5 px-6 text-[18px] font-medium transition-all overflow-hidden
                ${tab === 1 ? '' : 'text-[#A3ADB2]'} cursor-pointer group
            `}
            >
            <span className="relative z-10">About Me</span>
            {tab !== 1 && (<span
                className="
                absolute left-0 top-0 h-full w-0 
                bg-[rgba(41,39,39,0.42)] 
                transition-all duration-500 
                group-hover:w-full
                "
            ></span>)}
            </button>


            <button
            onClick={() => setTab(2)}
            className={`
                relative w-[195px] z-10 h-[49px] rounded-2xl py-2.5 px-6 text-[18px] font-medium transition-all overflow-hidden
                ${tab === 2 ? '' : 'text-[#A3ADB2]'} cursor-pointer group
            `}
            >
            <span className="relative z-10">Experiences</span>
            {tab !== 2 && (<span
                className="
                absolute left-0 top-0 h-full w-0 
                bg-[rgba(41,39,39,0.42)]
                transition-all duration-500 
                group-hover:w-full
                "
            ></span>)}
            </button>

            <button
            onClick={() => setTab(3)}
            className={`
                relative w-[195px] z-10 h-[49px] rounded-2xl py-2.5 px-6 text-[18px] font-medium transition-all overflow-hidden
                ${tab === 3 ? '' : 'text-[#A3ADB2]'} cursor-pointer group
            `}
            >
            <span className="relative z-10">Recommended</span>
            {tab !== 3 && (<span
                className="
                absolute left-0 top-0 h-full w-0 
                bg-[rgba(41,39,39,0.42)] 
                transition-all duration-500 
                group-hover:w-full
                "
            ></span>)}
            </button>
        </div>
    </div>
  )
}

export default Tabs