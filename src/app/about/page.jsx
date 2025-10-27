"use client"

import AboutSection from '@/components/ui/AboutSection'
import Gallery from '@/components/ui/Gallery'
import HorizontalBar from '@/components/ui/HorizontalBar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#373E44_-100%,#191B1F_100%)] relative w-[1728px] h-[895px] rounded-[28px]">
        <div className='absolute top-24 left-[922px]'>
            <AboutSection />
        </div>
        <HorizontalBar top='433px' />
        <div className='absolute top-[453px] left-[922px]'>
          <Gallery />
        </div>
        <HorizontalBar top='805px'  />
    </div>

  )
}

export default page