"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "../favicon.ico";
import LawImage from '../assets/law_background.webp';
import { animate, AnimatePresence, inView, motion } from "framer-motion";

export default function HomeSection() {
  const titleContainer = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLayoutEffect(() => {
    inView(titleContainer.current as HTMLDivElement, ({ target }) => {
      animate(".page-title", { y: [50, 0], opacity: [0, 1] }, { delay: 0.5 })
      animate(".motion-text", { y: [50, 0], opacity: [0, 1] }, { duration: 0.3 })
    })
  }, [])


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 custom-image">  {/* Add custom-image class */}
        <Image
          src={LawImage} // Replace with your image URL
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full blur-overlay"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white text-center">
        <div ref={titleContainer} className="overflow-y-hidden">
          <h1
            className="page-title text-4xl lg:text-8xl md:text-5xl font-bold translate-y-[150px]"
          >
            Shrivastav Law Firm
          </h1>
          <p
            className="motion-text text-xl md:text-3xl translate-y-[150px]"
          >
            Your trusted legal partner in Nepal
          </p>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image className="motion-text opacity-0" src={Logo} alt="Logo" width={36} height={36} />
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <nav className="hidden md:flex md:space-x-8 text-white">
          <a href="#who-we-are" className="motion-text text-lg opacity-0">Who we are</a>
          <a href="#what-we-do" className="motion-text text-lg opacity-0">What we do</a>
          <a href="#team" className="motion-text text-lg opacity-0">Team</a>
          <a href="#join-us" className="motion-text text-lg opacity-0">Join us</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white text-black z-30 flex flex-col items-center justify-start p-8 md:justify-center md:text-left"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-4xl"
              onClick={toggleMenu}
            >
              &times;
            </button>

            {/* Logo */}
            <div className="mt-12">
              <Image src={Logo} alt="Logo" width={36} height={36} />
            </div>

            {/* Menu Links */}
            <nav className="space-y-6 mt-12 text-2xl font-light">
              <a href="#who-we-are" className="block">Who we are</a>
              <a href="#what-we-do" className="block">What we do</a>
              <a href="#team" className="block">Team</a>
              <a href="#join-us" className="block">Join us</a>
            </nav>

            {/* Language and Get in touch Section */}
            <div className="mt-12 space-y-6 text-center">
              <button className="px-6 py-2  border border-black text-lg">Get in touch</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
