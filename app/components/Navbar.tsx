"use client"

import React, { useLayoutEffect, useRef, useState } from 'react'
import Logo from "../favicon.ico";
import Image from "next/image";
import { animate, AnimatePresence, inView, motion } from 'framer-motion';

type Props = {
  position?: "absolute"
}

function Navbar({position}: Props) {
  const navbarContainer = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useLayoutEffect(() => {
    inView(navbarContainer.current as HTMLDivElement, ({ target }) => {
      animate(".nav-motion-text", { y: [50, 0], opacity: [0, 1] }, { duration: 0.3 })
    })
  }, [])

  return (
    <div ref={navbarContainer}>
      <div className={`flex items-center justify-between p-6 w-full ${position === 'absolute'? 'absolute top-0 left-0 right-0 z-20' : ''}`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image className="nav-motion-text opacity-0" src={Logo} alt="Logo" width={36} height={36} />
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <nav className="hidden md:flex md:space-x-8 text-white">
          <a href="#who-we-are" className="nav-motion-text text-lg opacity-0">Who we are</a>
          <a href="#what-we-do" className="nav-motion-text text-lg opacity-0">What we do</a>
          <a href="#team" className="nav-motion-text text-lg opacity-0">Team</a>
          <a href="#contact-us" className="nav-motion-text text-lg opacity-0">Contact us</a>
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
    </div>
  )
}

export default Navbar