"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/free-stock-photo-of-2020-wallpaper-4k.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Removed Overlay for Maximum Brightness */}
        {/* <div className="absolute inset-0 bg-primary opacity-30"></div> */}
      </div>

      {/* Content - Adjusted Positioning */}
      {/* Using a flex container to position name and role together */} 
      {/* Adjusted position back down */} 
      <div className="absolute top-1/3 right-24 z-10 flex flex-col items-end">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary drop-shadow-lg font-luckiestGuy"
        >
          VISHWAS RACHARLA
        </motion.h1>
        {/* Added Full Stack Developer role */} 
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-black drop-shadow-lg font-luckiestGuy"
        >
          FULL STACK DEVELOPER
        </motion.h2>
      </div>
    </section>
  )
}

export default Hero 