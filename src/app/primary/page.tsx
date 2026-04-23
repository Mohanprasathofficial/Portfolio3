"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import IndexNavbar from "@/navbar/IndexNavbar";
import IndexNavbar2 from "@/navbar/IndexNavbar2";
import Footer from "../footer";

export default function SchoolPortfolio() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathScaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const educationData = [
    {
      period: "Early Foundation",
      school: "Devi Nursery & Primary",
      location: "Mannargudi",
      grades: "LKG & UKG",
      img: "/portf/devi.jpeg",
      text: "Started my journey here in Mannargudi, building the first blocks of my education.",
    },
    {
      period: "Primary Excellence",
      school: "Annai Velankanni Matric",
      location: "Vettaikaraniruppu",
      grades: "1st to 3rd Standard",
      img: "/portf/annai.jpeg",
      text: "A move to Vettaikaraniruppu that introduced me to a new environment and academic rigor.",
    },
    {
      period: "Formative Years",
      school: "Government High School",
      location: "Kovilpathu, Nagapattinam",
      grades: "3rd to 10th Standard",
      img: "/portf/gov_school.jpg",
      text: "A crucial 7-year chapter in Nagapattinam district where I grew significantly.",
    },
    {
      period: "Higher Secondary",
      school: "National Higher Secondary",
      location: "Mannargudi",
      grades: "+1 & +2 (HSC)",
      img: "/portf/NHSS.jpeg",
      text: "Currently finishing my schooling at this prestigious institution.",
    },
  ];

  return (
    <main className="bg-black">
      {/* SECTION 1 */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <nav>
          <div className="hidden lg:block"><IndexNavbar /></div>
          <div className="block lg:hidden"><IndexNavbar2 /></div>
        </nav>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-20" />

          {/* ✅ Converted Background Image */}
          <Image
            src="/portf/NHSS.jpeg"
            alt="NHSS"
            fill
            priority
            className="object-cover blur-[2px] grayscale-[30%] brightness-[50%]"
          />
        </div>

        <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter">
            NATIONAL <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px white" }}
            >
              Higher Secondary School
            </span>
          </motion.h1>

          <p className="text-[#b684ff] font-mono text-xs tracking-[0.5em] mt-4 uppercase">
            Legacy Since 1894
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section ref={containerRef} className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto relative">

          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[1px] h-full bg-white/10" />

          <motion.div
            style={{ scaleY: pathScaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-[#b684ff]"
          />

          <div className="space-y-24">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center w-full">
                  <div className={`flex w-full items-center justify-between ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

                    {/* CARD */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full md:w-[45%] ml-12 md:ml-0 group"
                    >
                      <div className="bg-[#111] rounded-[2.5rem] overflow-hidden shadow-2xl">

                        {/* ✅ Converted Image */}
                        <div className="relative h-48">
                          <Image
                            src={item.img}
                            alt={item.school}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        <div className="p-8">
                          <div className="text-[#b684ff] text-[10px] uppercase mb-2">
                            {item.period}
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-2">
                            {item.school}
                          </h3>

                          <p className="text-gray-500 text-sm">
                            {item.text}
                          </p>

                          <div className="mt-6 flex justify-between">
                            <span className="text-xs text-gray-400">
                              {item.location}
                            </span>

                            <span className="text-xs bg-white/5 px-3 py-1 text-white">
                              {item.grades}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* DOT */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#b684ff]" />

                    <div className="hidden md:block w-[45%]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}