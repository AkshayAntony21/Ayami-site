"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      aria-label="Hero section showcasing VR architecture"
      role="region"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/bg2.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 max-w-6xl w-full">
        {/* Mobile heading (centered) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block md:hidden text-white text-center text-[1.8rem] sm:text-[2.2rem] font-bold leading-snug mb-6"
        >
          We build immersive<br />
          architectural experiences
        </motion.h1>

        {/* Desktop heading (left-aligned) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
        >
          We build immersive{" "}
          <span className="whitespace-nowrap">architectural experiences</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white/80 text-center md:text-left text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 mx-auto md:mx-0"
        >
          We are the next-gen VR studio transforming real estate design into cinematic, walkable 3D worlds.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#services"
            className="px-8 py-4 border border-white text-white rounded-full text-lg font-semibold tracking-wide text-center hover:bg-white hover:text-black transition-colors duration-300"
          >
            View Our Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-[#F5B301] text-black font-bold rounded-full text-lg tracking-wide shadow-lg text-center hover:bg-[#e6a500] transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
