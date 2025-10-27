"use client";

import React from 'react'
import Image from "next/image";

const Box = () => {
  return (
    <div className="absolute w-6 h-[159.6878px] top-7 left-2.5 opacity-100 flex flex-col gap-[105px]">
        <Image
            src="/Vector.png"
            alt="Logo"
            width={24}
            height={24}
        />
        <div className='grid grid-cols-2 gap-[1.38px] w-6 pr-1'>
            <p className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] opacity-100 bg-[#4A4E54]"></p>
            <p className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] opacity-100 bg-[#4A4E54]"></p>
            <p className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] opacity-100 bg-[#4A4E54]"></p>
            <p className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] opacity-100 bg-[#4A4E54]"></p>
            <p className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] opacity-100 bg-[#4A4E54]"></p>
            <p className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] opacity-100 bg-[#4A4E54]"></p>
        </div>
    </div>
  )
}

export default Box