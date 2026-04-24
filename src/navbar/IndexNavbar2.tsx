"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SideNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>

      {/* ================= TOP NAV ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 transition-all duration-300 ${
          isScrolled ? " shadow-md" : "bg-transparent"
        }`}
      >

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/portf/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          <Link href="/contact">
            <button
              className={`text-sm md:text-base px-4 py-1 border rounded transition ${
                isScrolled
                  ? "text-black border-black"
                  : "text-white border-white"
              }`}
            >
              Contact
            </button>
          </Link>

          <button
            onClick={() => setShowMenu(true)}
            className={`text-2xl transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ☰
          </button>

        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= SIDE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[70%] md:w-[420px] bg-white z-50 shadow-xl transform transition-transform duration-500 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}style={{ backgroundColor: "#ece0ff" }}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <Image
            src="/portf/logo.png"
            alt="logo"
            width={90}
            height={90}
          />

          <button onClick={closeMenu} className="text-2xl text-gray-700">
            ✕
          </button>
        </div>

        {/* MENU */}
        <ul className="flex flex-col p-6 gap-5 text-gray-800">

          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className="hover:text-[#b684ff] transition"
            >
              Our Story
            </Link>
          </li>

          {/* ================= EDUCATION DROPDOWN ================= */}
          <li>

            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex justify-between w-full font-medium hover:text-[#b684ff] transition"
            >
              Education
              <span>{showDropdown ? "▲" : "▼"}</span>
            </button>

            <div
              className={`mt-4 space-y-4 transition-all ${
                showDropdown ? "block" : "hidden"
              }`}
            >

              {/* PRIMARY */}
              <Link
                href="/primary"
                onClick={closeMenu}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-[#b684ff] rounded-2xl flex items-center justify-center">
                    <Image
                      src="/portf/school.png"
                      alt="school"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#b684ff] rounded-full flex items-center justify-center text-xs text-white">
                    1
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#b684ff]">
                    Primary Education
                  </h4>
                  <p className="text-sm text-gray-500">
                    Foundation learning programs
                  </p>
                </div>
              </Link>

              {/* HIGHER STUDY */}
              <Link
                href="/college"
                onClick={closeMenu}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-[#b684ff] rounded-2xl flex items-center justify-center">
                    <Image
                      src="/portf/college.png"
                      alt="college"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#b684ff] rounded-full flex items-center justify-center text-xs text-white">
                    2
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#b684ff]">
                    Higher Study
                  </h4>
                  <p className="text-sm text-gray-500">
                    Advanced skill development
                  </p>
                </div>
              </Link>

            </div>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="hover:text-[#b684ff] transition"
            >
              Contact Us
            </Link>
          </li>

        </ul>

      </div>
    </section>
  );
}