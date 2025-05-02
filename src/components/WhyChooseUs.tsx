"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const reasons = [
  {
    title: "Unreal Engine 5 Realism",
    description:
      "We don’t just render — we recreate. Our visuals are powered by game-engine realism for cinematic immersion.",
    icon: "/icon1.png",
  },
  {
    title: "Sell Before You Build",
    description:
      "Let your clients explore your project before a single brick is laid. Speed up decisions and close deals confidently.",
    icon: "/icon2.png",
  },
  {
    title: "Live Design Customization",
    description:
      "Change lighting, materials, and layout in real time. No delays. Instant visual feedback inside the experience.",
    icon: "/icon3.png",
  },
  {
    title: "Studio-Grade Renders",
    description:
      "We deliver visuals that rival movie studios — crafted to impress stakeholders, investors, and premium buyers.",
    icon: "/icon4.png",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why" className="bg-[#040902] text-white py-24 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-20"
        >
          Our <span className="text-[#00E0C6]">Edge</span>
        </motion.h2>

        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 text-left">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#2A2A2A] rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 relative">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-[#C0C0C0] text-base sm:text-lg md:text-xl leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
