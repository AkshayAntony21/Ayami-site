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
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0" />

      {/* Wrapper: layout differs for mobile and desktop */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-20 max-w-7xl flex flex-col sm:flex-row sm:items-center sm:justify-start text-center sm:text-left">
        <div className="w-full sm:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            We build immersive{" "}
            <span className="whitespace-nowrap">architectural experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-10"
          >
            We are the next-gen VR studio transforming real estate design into cinematic, walkable 3D worlds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3 border border-white text-white rounded-full text-base font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              View Our Work
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 bg-[#F5B301] text-black font-semibold rounded-full text-base shadow hover:bg-[#e6a500] transition duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
