"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Share Your Plans",
      description:
        "Send us your architectural drawings or 3D models. We accept all major formats — DWG, PDF, SketchUp, or Revit.",
    },
    {
      title: "We Bring It to Life",
      description:
        "Our team builds ultra-realistic visuals and immersive VR walkthroughs using Unreal Engine 5.",
    },
    {
      title: "Explore & Customize",
      description:
        "You and your clients can walk through the space in VR — and change finishes, lighting, or layout in real time.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-cover bg-center bg-no-repeat py-32 px-8 md:px-24 text-white"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-24"
        >
          The <span className="text-[#00E0C6]">Process</span>
        </motion.h2>

        <div className="grid gap-20 md:grid-cols-3 text-left text-xl leading-relaxed">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-start space-y-6"
            >
              <div className="text-4xl font-bold text-[#00E0C6] opacity-90">{`0${idx + 1}`}</div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-loose">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
