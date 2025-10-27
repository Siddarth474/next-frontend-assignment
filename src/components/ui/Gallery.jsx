"use client"

import React, { useRef, useState } from 'react'
import Box from './Box'
import { Plus } from 'lucide-react'
import ImageSection from './ImageSection'
import NavigationButtons from './NavigationButtons'

const Gallery = () => {
    const [image, setImage] = useState(null);
    const scrollRef = useRef(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        if(file) {
            const previewUrl = URL.createObjectURL(file);
            setImage(previewUrl);
        }
        e.target.value = null;
    }

  return (
    <div className='relative w-[720px] h-[330px] px-[59px] py-[22px] bg-[#363C43] opacity-100 rounded-[18.89px] 
    shadow-[5.67px_5.67px_3.78px_0px_#00000066]'>
        <div className='w-[597px] h-[49px] flex items-center justify-between'>
            <h1
            className=" w-[149px] h-[62px] rounded-[20px] opacity-100 bg-[#171717]
            shadow-[inset_0px_4px_10px_2px_#00000040] flex items-center justify-center text-white text-xl font-[500px]"
            >
            Gallery
            </h1>
            <div className='flex items-center gap-10'>
                <input 
                    id='image'
                    name='image'
                    onChange={handleImage}
                    type='file' 
                    accept='image/*' 
                    className='hidden' 
                />

                <label htmlFor='image'
                    className="w-[131.32px] h-[46px] rounded-[104px] opacity-100
                    bg-[#FFFFFF08] backdrop-blur-[104.56px]
                    shadow-[inset_0px_3.26px_3.26px_0px_#FFFFFF26,inset_0px_0px_48.91px_0px_#FFFFFF0D,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40]
                    flex items-center justify-center text-white text-xs font-bold uppercase leading-[6.29px]"
                >
                    <Plus strokeWidth={3} className='w-3 h-3 mr-1 mb-0.5 ' />
                    Add Image
                </label>

                <NavigationButtons scrollRef={scrollRef} />
            </div>
        </div>
        <ImageSection scrollRef={scrollRef} image={image} />
        <Box />
    </div>
  )
}

export default Gallery