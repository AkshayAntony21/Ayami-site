"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Cinematic Renders",
      description:
        "Hyper-realistic, studio-quality visuals that turn your blueprints into breathtaking imagery.",
      image: "/cinematic.png",
    },
    {
      title: "VR Walkthroughs",
      description:
        "Step inside your design. Fully immersive 3D experiences using Unreal Engine & VR headsets.",
      image: "/vr.png",
    },
    {
      title: "Real-Time Customization",
      description:
        "Make live changes to materials, lighting, and layout in a fully interactive environment.",
      image: "/customization.png",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 px-6 sm:px-10 bg-[#040902] text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-20 leading-tight"
        >
          Experiences We Build
        </motion.h2>

        <div className="grid gap-16 sm:gap-20 md:grid-cols-3 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={320}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
