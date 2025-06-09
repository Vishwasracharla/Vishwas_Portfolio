"use client";

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="section-title mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-text text-justify">
            As a passionate Full Stack Developer, my true enthusiasm ignites when diving into the vibrant world of frontend development! I'm absolutely thrilled by the challenge of transforming complex ideas into captivating, seamless, and high-performance user experiences. While I confidently handle backend logic and APIs to ensure data integrity and functionality, my core strength and excitement lie in the art of crafting stunning, interactive interfaces. I'm actively seeking opportunities to leverage my advanced frontend skills to build truly extraordinary digital products.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <motion.img
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="/vishwas_circle_frame.png"
            alt="Vishwas Racharla"
            className="rounded-lg shadow-lg w-64 h-64 object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About 