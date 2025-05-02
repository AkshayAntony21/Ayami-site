"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          setActiveLink(el.getAttribute("id")!);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const navLinks = ["Home", "Services", "Contact"];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <nav className="w-full px-6 md:px-18 py-4 sm:py-5 lg:py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 ml-0 pl-0">
          <Image
            src="/logo3.png"
            alt="Ayami Logo"
            width={60}
            height={60}
            className="w-12 sm:w-10 md:w-12 h-auto"
          />
          <span
            className="font-semibold tracking-tight text-white"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)" }}
          >
            Ayami
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 uppercase text-xs sm:text-sm md:text-base font-medium text-white">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`hover:opacity-80 transition-opacity duration-200 ${
                  activeLink === id ? "text-teal-400" : ""
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black z-40 px-6 py-6 space-y-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <a
            href="#home"
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/logo.png" alt="Ayami Logo" width={30} height={30} />
            <span className="text-lg font-semibold tracking-tight text-white">
              Ayami
            </span>
          </a>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 text-white uppercase text-sm tracking-wide font-medium">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`hover:opacity-80 transition-opacity duration-200 ${
                  activeLink === id ? "text-teal-400" : ""
                }`}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
