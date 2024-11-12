"use client";
import { SetStateAction, useLayoutEffect, useRef, useState } from "react";
import Image from "next/legacy/image";
import { animate, inView } from "framer-motion";
import React from "react";

const teamMembers = [
  {
    name: "Binod Kumar Shrivatav",
    role: "Lawyer",
    image: "https://yurucamp.jp/third/assets/img/gallery/v2.jpg", // Replace with correct image paths
    description: "Binod Kumar Shrivatav is an experienced lawyer specializing in corporate law.",
  },
  {
    name: "Member 2",
    role: "Junior Lawyer",
    image: "/path/to/member2-image.jpg", // Replace with correct paths for other members
    description: "Member 2 has expertise in litigation and legal research.",
  },
  {
    name: "Member 3",
    role: "Senior Advocate",
    image: "/path/to/member3-image.jpg",
    description: "Member 3 is a senior advocate with 20 years of experience.",
  },
  {
    name: "Member 4",
    role: "Consultant",
    image: "/path/to/member4-image.jpg",
    description: "Member 4 specializes in legal consulting and advisory services.",
  },
  // Add more team members as needed
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

  const openModal = (member: {
    name: string;
    role: string;
    image: string;
    description: string;
  }) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section ref={ref} id="team" className="px-8 py-40 bg-gray-100">
      <h2 className="about-section-motion-text text-6xl font-bold mb-20 text-center opacity-0">Meet Our Team</h2>
      {/* Grid layout updated for mobile */}
      <div ref={membersContainer} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => openModal(member)}
          >
            {/* Image box */}
            <div className="relative w-full border overflow-hidden" style={{ paddingTop: '100%' }}>
              <Image
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            {/* Name and role below the image */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-x-hidden">
          <div className="bg-white p-8 max-w-lg mx-auto relative transform transition-transform duration-200 scale-105 rounded-sm w-full max-w-md md:max-w-lg overflow-hidden">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-700 hover:text-gray-900 px-2 py-0 rounded-sm border"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <div className="relative h-60 w-full mb-6 overflow-hidden rounded-sm">
              <Image
                className="object-cover"
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">{selectedMember.name}</h2>
            <h3 className="text-xl mb-4 text-gray-700">{selectedMember.role}</h3>
            <p>{selectedMember.description}</p>
          </div>
        </div>
      )}
    </section>
  );
})

AboutSection.displayName = "AboutSection"

export default AboutSection