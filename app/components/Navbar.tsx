"use client"

import React, { useLayoutEffect, useRef, useState } from 'react'
import Logo from "../assets/Logo_Navbar.png";
import Image from "next/image";
import { animate, AnimatePresence, inView, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Props = {
  position?: "absolute"
  whoAreWeClick?: () => void
  whatWeDoClick?: () => void
  teamClick?: () => void
  contactUs?: () => void
}

function Navbar({position, whoAreWeClick, whatWeDoClick, teamClick, contactUs}: Props) {
  const router = useRouter()
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

  const clickFunctionWrapper = (callback: undefined | Function, url: string) => {
    if(callback === undefined) {
      router.push(url)
    }
    else{
      callback()
    }
  }

  return (
    <div className='relative z-50' ref={navbarContainer}>
      <div className={`flex items-center justify-between p-6 w-full ${position === 'absolute'? 'absolute top-0 left-0 right-0 z-20' : ''}`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image className="nav-motion-text opacity-0 cursor-pointer" src={Logo} alt="Logo" width={56} height={56} onClick={() => router.push('/')} />
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <nav className="hidden md:flex md:space-x-8 text-white">
          <a onClick={() => clickFunctionWrapper(whoAreWeClick, '/#who-we-are')} className="hover:cursor-pointer nav-motion-text text-lg opacity-0">Who we are</a>
          <a onClick={() => clickFunctionWrapper(whatWeDoClick, '/what-we-do')} className="hover:cursor-pointer nav-motion-text text-lg opacity-0">What we do</a>
          <a onClick={() => clickFunctionWrapper(teamClick, '/#team')} className="hover:cursor-pointer nav-motion-text text-lg opacity-0">Team</a>
          <a onClick={() => clickFunctionWrapper(contactUs, '/#contact-us')} className="hover:cursor-pointer nav-motion-text text-lg opacity-0">Contact us</a>
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
            initial={{position: 'relative', zIndex: 20, opacity: 0}}
            animate={{position: 'relative', zIndex: 20,opacity: 1}}
            exit={{position: 'relative', zIndex: 20, opacity: 0}}
          >
            <div className="fixed inset-0 bg-white text-black z-30 flex flex-col items-center justify-start p-8 md:justify-center md:text-left">
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
                <a href="#contact-us" className="block">Contact us</a>
              </nav>

              {/* Language and Get in touch Section */}
              <div className="mt-12 space-y-6 text-center">
                <button className="px-6 py-2  border border-black text-lg">Get in touch</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar