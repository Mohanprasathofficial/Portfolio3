"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-140px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(140px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 2.2s ease-out both;
        }

        .animate-slideInRight {
          animation: slideInRight 2.2s ease-out both;
        }
      `}</style>

      <div
        ref={ref}
        className="relative xl:h-screen lg:h-screen md:h-[600px] h-[760px] overflow-hidden bg-gray-900 text-white"
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/portf/keybanner.jpg"
            alt="banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex lg:flex-row flex-col items-center justify-between h-full xl:px-8 px-0 max-w-7xl mx-auto">

          {/* LEFT CONTENT */}
          <div
            className={` justify-center xl:pl-12 pl-0 lg:pl-8 ${
              show ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl xl:text-5xl lg:text-4xl md:text-6xl font-bold mb-6 leading-tight xl:pt-0 pt-24 ">
              Mohanprasath S R
            </h1>
            <h2 className="text-3xl xl:text-3xl lg:text-3xl md:text-4xl font-light text-white/90">
              Software Developer
            </h2>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div
            className={`w-1/2 flex justify-end items-end h-full ${
              show ? "animate-slideInRight" : "opacity-0"
            }`}
          >
            <div className="relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] ">

              {/* BACK IMAGE */}
              <div className="absolute bottom-0  xl:left-0 md:left-0  lg:left-0  left-44 xl:right-8 right-0 lg:right-8 md:right-8 mb-24 w-[540px] xl:w-[500px] lg:w-[400px] md:w-[300px] h-[540px] xl:h-[520px] md:h-[420px] lg:h-[320px] z-0">
                <Image
                  src="/portf/mybackimg.png"
                  alt="background person"
                  fill
                  className="object-contain scale-110"
                />
              </div>

              {/* MAIN IMAGE */}
             <div className="relative xl:left-0 md:left-0  lg:left-0  left-44 w-[550px] sm:w-[340px] md:w-[420px] lg:w-[520px] h-[570px] sm:h-[400px] md:h-[500px] lg:h-[620px] z-10">
                <Image
                  src="/portf/mohandanner.png"
                  alt="Mohan"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}