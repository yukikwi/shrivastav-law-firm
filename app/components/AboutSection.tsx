"use client";
import { SetStateAction, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, inView } from "framer-motion";
import React from "react";
import Binod from "../assets/binod.jpg";
import Bipana from "../assets/bipana.jpg";
import Bima from "../assets/bima.jpg";

const teamMembers = [
  {
    name: "Binod Kumar Shrivatav",
    role: "Lawyer",
    image: Binod,
  },
  {
    name: "Bipana Nepal",
    role: "Lawyer",
    image: Bipana,
  },
  {
    name: "Bima Tamang",
    role: "Receptionist",
    image: Bima,
  },
];

const AboutSection = React.forwardRef((props, ref: React.ForwardedRef<HTMLElement>) => {
  const membersContainer = useRef<HTMLDivElement>(null)
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    image: string;
    description: string;
  } | null>(null);

  useLayoutEffect(() => {
    inView(membersContainer.current as HTMLDivElement, ({ target }) => {
      animate(".about-section-motion-text", { y: [50, 0], opacity: [0, 1] }, { delay: 0.3 })
    })
  }, [])

  return (
    (<section ref={ref} id="team" className="px-8 py-40 bg-gray-100">
      <h2 className="about-section-motion-text text-6xl font-bold mb-20 text-center opacity-0">Meet Our Team</h2>
      {/* Grid layout updated for mobile */}
      <div ref={membersContainer} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
          >
            {/* Image box */}
            <div className="relative w-full border overflow-hidden" style={{ paddingTop: '100%' }}>
              <Image
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            </div>
            {/* Name and role below the image */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>)
  );
})

AboutSection.displayName = "AboutSection"

export default AboutSection