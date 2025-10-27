"use client"

import React, { useEffect, useState } from 'react';
import TiltCard from './TiltCard';
 
const ImageSection = ({image, scrollRef}) => {
    const [imageList, setImageList] = useState([
        "/Image.jpg",
        "/Lake.jpg",
        "/Lizard.jpg",
        "/Mountain.jpg",
        "/Tree.jpg",
        "/Scenery.jpg",
    ]);
    
    useEffect(() => {
        if(image) {
            setImageList(prevList => [...prevList, image]);
        }
    }, [image]);

  return (
    <div ref={scrollRef} 
    className='mt-12 w-[600px] h-auto flex gap-6 px-4 py-4 overflow-auto z-0'>
        {imageList.map((img, ind) => (
            <TiltCard key={ind} img={img} />
        ))}

    </div>
  )
}

export default ImageSection;