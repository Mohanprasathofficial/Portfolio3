"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoIAm() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      
      {/* BACKGROUND */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ backgroundColor: "#b684ff" }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT IMAGE */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="/portf/exp.jpg"
                alt="Who I am"
                width={600}
                height={700}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* EXPERIENCE CARD */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow"
              >
                <span className="block text-2xl font-bold text-[#b684ff]">
                  01+
                </span>
                <span className="text-xs text-gray-500 uppercase">
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
          <div className="flex flex-col space-y-6">
            <motion.div variants={itemVariants}>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Discovery
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Who <span className="text-[#b684ff]">I Am</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-600">
                I am a Digital Architect specializing in building high-performance web experiences.
              </p>

              <p className="text-gray-500">
                I combine <b>technical precision</b> with <b>creative intuition</b> to deliver clean and modern UI.
              </p>
            </motion.div>

            {/* SKILLS */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {["Full Stack", "Creative Dev", "Architecture"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -5 }}
                  className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-bold hover:bg-[#b684ff] hover:text-white transition"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-full text-white font-bold bg-[#b684ff]"
              >
                Let&apos;s Build Together
              </motion.a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}