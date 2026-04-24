"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function WhoIAm() {
  // ✅ Properly typed variants (no TS errors)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // ✅ safe (no TS error)
      },
    },
  };

  return (
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      
      {/* BACKGROUND */}
      <motion.div
        className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: "#b684ff" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* LEFT IMAGE */}
          <motion.div variants={itemVariants} className="relative">
            
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] h-[400px] md:h-[500px] lg:h-[600px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/portf/exp.jpg"
                alt="Who I am"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />

              {/* EXPERIENCE CARD */}
              <motion.div
                variants={itemVariants}
                className="absolute bottom-8 right-8 bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-xl"
              >
                <span className="block text-3xl font-black text-[#b684ff]">
                  01+
                </span>
                <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                  Years Experience
                </span>
              </motion.div>
            </motion.div>

            {/* FRAME */}
            <div
              className="absolute -bottom-6 -left-6 w-full h-full border-2 rounded-3xl opacity-20"
              style={{ borderColor: "#b684ff" }}
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase bg-white border border-gray-100 shadow-sm text-gray-400 mb-6">
                Discovery
              </span>

              <h2 className="text-5xl font-black text-gray-900 tracking-tighter leading-[0.9]">
                Who <span className="text-[#b684ff]">I Am.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                I am a Digital Architect specializing in crafting high-performance
                web experiences.
              </p>

              <p className="text-gray-500 leading-relaxed">
                My approach combines{" "}
                <span className="text-black font-semibold">
                  technical precision
                </span>{" "}
                with{" "}
                <span className="text-black font-semibold">
                  creative intuition
                </span>.
              </p>
            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3">
              {["Full Stack", "Creative Dev", "Software Architecture"].map(
                (skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      y: -5,
                      backgroundColor: "#b684ff",
                      color: "#fff",
                    }}
                    className="px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-bold transition-colors"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>

            {/* BUTTON */}
            <div className="pt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full text-white font-black text-lg shadow-2xl hover:shadow-[#b684ff]/40 transition-shadow"
                style={{ backgroundColor: "#b684ff" }}
              >
                Let&apos;s Build Together

                <motion.svg
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}