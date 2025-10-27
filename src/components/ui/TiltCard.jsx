"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const TiltCard = ({img}) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX);
        y.set(offsetY);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.07,
        y: -8,
        boxShadow: "0 20px 35px -10px rgba(0,0,0,0.4), 0 10px 15px -10px rgba(0,0,0,0.3)"
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="relative w-[190px] h-[179px] rounded-3xl cursor-pointer bg-transparent shrink-0 "
    >
      <motion.div
        initial={{ filter: "grayscale(100%)" }}
        whileHover={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.5 }}
        className="w-full h-full rounded-3xl"
      >
        <Image
          src={img}
          alt="Image"
          width={190}
          height={179}
          className="object-cover w-full h-full rounded-3xl"
        />
      </motion.div>
    </motion.div>
  )
}

export default TiltCard