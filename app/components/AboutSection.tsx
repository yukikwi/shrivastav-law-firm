"use client";

import { SetStateAction, useLayoutEffect, useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { animate, inView, motion, AnimatePresence } from "framer-motion";
import React from "react";
import Binod from "../assets/binod.jpg";
import Bipana from "../assets/bipana.jpg";
import Bima from "../assets/bima.jpg";

const teamMembers = [
  {
    name: "Binod Kumar Shrivatav",
    role: "Lawyer",
    image: Binod,
    description:
      "Binod Kumar Shrivastav is a seasoned corporate lawyer with over 28 years of experience in providing expert legal guidance to businesses and individuals. He graduated from Tribhuvan University and has been instrumental in helping countless companies establish their presence in Nepal, while excelling in various legal sectors such as corporate law, business setup, and dispute resolution. His deep expertise and commitment to excellence have earned him a reputation as a trusted legal advisor in the industry.",
  },
  {
    name: "Bipana Nepal",
    role: "Lawyer",
    image: Bipana,
    description:
      "Bipana Nepal is a legal professional at Shrivastav Law Firm, where she has been contributing her skills and dedication for the past few years. Recently graduating with a law degree, she brings fresh perspectives and a strong commitment to providing effective legal support across various sectors.",
  },
  {
    name: "Bima Tamang",
    role: "Receptionist",
    image: Bima,
    description:
      "Bima Tamang is the friendly and efficient receptionist at Shrivastav Law Firm, ensuring smooth communication and a welcoming experience for all clients.",
  },
];

const AboutSection = React.forwardRef((props, ref: React.ForwardedRef<HTMLElement>) => {
  const membersContainer = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    image: StaticImageData;
    description: string;
  } | null>(null);

  // Listen for browser history changes
  useEffect(() => {
    const handlePopState = () => {
      if (selectedMember) {
        setSelectedMember(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedMember]);

  useLayoutEffect(() => {
    inView(membersContainer.current as HTMLDivElement, ({ target }) => {
      animate(".about-section-motion-text", { y: [50, 0], opacity: [0, 1] }, { delay: 0.3 });
    });
  }, []);

  const openModal = (member: {
    name: string;
    role: string;
    image: StaticImageData;
    description: string;
  }) => {
    setSelectedMember(member);
    history.pushState(null, "", window.location.href); // Push state to track modal open
  };

  const closeModal = () => {
    setSelectedMember(null);
    history.back(); // Go back in history
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section ref={ref} id="team" className="px-8 py-40 bg-gray-100">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="about-section-motion-text text-6xl font-bold mb-20 text-center opacity-0">
          Meet Our Team
        </h2>
      </motion.div>
      <motion.div
        ref={membersContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-around gap-10">
        {teamMembers.map((member, index) => (
          <div
            className="lg:p-5 w-[calc(50%-2.5rem)] lg:w-[calc(33%-2.5rem)] relative cursor-pointer transition-transform transform hover:scale-105"
            key={index}
            onClick={() => openModal(member)}
          >
            {/* Image box */}
            <div
              className="relative w-full border overflow-hidden"
              style={{ paddingTop: "100%" }}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
                fill
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
      </motion.div>
      {/* Modal Popup */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
             // Close modal when clicking outside
            onClick={handleBackgroundClick}
          >
            <div className="bg-white p-8 max-w-lg mx-auto relative w-full max-w-md md:max-w-lg overflow-hidden">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {/* Close button */}
                <div className="flex justify-end mb-4">
                  <button
                    className="text-gray-700 hover:text-gray-900 px-2 py-0 border"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <div className="relative h-60 w-full mb-6 overflow-hidden">
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
