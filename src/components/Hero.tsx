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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[1.8rem] sm:text-[2rem] md:text-6xl font-bold text-white leading-[1.25] md:leading-[1.15] max-w-[95vw] md:max-w-3xl"
        >
          <span className="block md:hidden">
            We build immersive<br />architectural experiences
          </span>
          <span className="hidden md:inline">
            We build immersive architectural experiences
          </span>
        </motion.h1>

        <p className="mt-6 text-base md:text-xl text-gray-300 max-w-2xl">
          We are the next-gen VR studio transforming real estate design into cinematic, walkable 3D worlds.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="px-6 py-3 rounded-full border border-white text-white font-medium text-center hover:bg-white hover:text-black transition"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold text-center hover:bg-yellow-500 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.section>
  );
}
