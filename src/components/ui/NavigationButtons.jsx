"use client"

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavigationButtons = ({scrollRef}) => {

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -215,
      behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 215,
      behavior: 'smooth'
    });
  }

  return (
    <div className='flex items-center gap-3'>

        <button onClick={scrollLeft}
        className=" w-[45px] h-[45px] opacity-100 rounded-full 
        flex items-center justify-center bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)] 
        shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] "> 
            <ArrowLeft size={23} className='text-[#6F787C] cursor-pointer' />
        </button>

        <button onClick={scrollRight}
        className=" w-[45px] h-[45px] opacity-100 rounded-full 
        flex items-center justify-center bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)] 
        shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] "> 
            <ArrowRight size={23} className='text-[#6F787C] cursor-pointer' />
        </button>

    </div>
  )
}

export default NavigationButtons