"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import LawImage from '../assets/law_background.webp';
import { animate, inView } from "framer-motion";

export default function HomeSection() {
  const titleContainer = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    inView(titleContainer.current as HTMLDivElement, ({ target }) => {
      animate(".page-title", { y: [50, 0], opacity: [0, 1] }, { delay: 0.5 })
      animate(".motion-text", { y: [50, 0], opacity: [0, 1] }, { duration: 0.3 })
    })
  }, [])

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
    </section>
  );
}
