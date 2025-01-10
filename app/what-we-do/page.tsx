import React from "react";
import Navbar from "../components/Navbar";
import AccordionClient from "../components/AccordionClient";
import Image from "next/image";
import LawImage from "../assets/law_background.webp";

type Props = {};

function WhatWeDo({}: Props) {
  const accordianRecord = [
    {
      title: "Supreme Court and High Court",
      description:
        "Our firm offers expert legal representation and consultancy for cases in the Supreme and High Courts. With decades of experience, we provide strategic and meticulous guidance for civil, criminal, and constitutional matters. We are dedicated to achieving favorable outcomes for our clients in cases of national and international significance."
    },
    {
      title: "Tax and Commercial Matters",
      description:
        "We provide comprehensive legal services for tax-related issues, commercial and corporate work, and business compliance. Our expertise encompasses tax planning, dispute resolution, drafting and reviewing commercial contracts, and ensuring regulatory compliance. We aim to streamline business operations and provide effective solutions to complex tax and corporate challenges."
    },
    {
      title: "Police, Criminal Law, and Government Affairs",
      description:
        "Our team offers robust legal support for matters involving police, criminal law, bail applications, and dealings with government departments. Whether facing charges or navigating administrative procedures, we ensure fair treatment, timely resolutions, and protection of our clients' rights through dedicated advocacy."
    },
    {
      title: "Family Law and Personal Matters",
      description:
        "We provide compassionate and professional legal assistance for family-related matters, including adoption, marriage registration (domestic and international), custody disputes, and inheritance issues. Additionally, we specialize in drafting wills, establishing trusts, and managing estate planning, ensuring your personal and family interests are safeguarded with utmost care."
    },
    {
      title: "Intellectual Property and Franchise Licensing",
      description:
        "Our firm offers comprehensive intellectual property services, including registration, litigation, and enforcement of trademarks, copyrights, and patents. We also provide expert legal guidance on franchise and licensing agreements, ensuring protection of your business interests and intellectual assets."
    },
    {
      title: "Immigration and International Trade",
      description:
        "We deliver expert legal advice on immigration matters, including visa applications, permanent residency, and compliance with immigration laws in Nepal and abroad. Our services also cover international trade, contract negotiation, dispute resolution, and ensuring adherence to cross-border trade regulations."
    },
    {
      title: "Consumer Rights and Litigation",
      description:
        "We advocate for the protection of consumer rights and provide strong legal representation in litigation against unfair practices. Our team is committed to ensuring justice and equitable treatment for consumers in disputes with businesses or service providers."
    }
  ];

  return (
    <div className="dark bg-black min-h-screen text-white">
      <Navbar />
      <div className="mx-5">
        <div className="relative w-full h-[33vh]">
          <Image
            // Replace with your image URL
            src={LawImage}
            alt="Background Image"
            fill
            className="w-full h-full blur-overlay"
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        {/* Title */}
        <div className="grid grid-cols-1 sm:grid-cols-4 my-16 sm:my-32">
          <h1 className="text-6xl mb-5 sm:mb-0 sm:col-span-2">
            Practice areas.
          </h1>
          <p className="text-justify leading-relaxed sm:col-span-2">
            At our firm, we provide a comprehensive range of legal services designed to address 
            the dynamic challenges faced by individuals and businesses in an ever-evolving world. 
            By staying ahead of regulatory changes, legal developments, and market trends, we ensure 
            our clients receive tailored, effective, and timely solutions. Our commitment to excellence 
            enables us to support our clients’ goals while safeguarding their rights and interests.
          </p>
        </div>

        <AccordionClient items={accordianRecord} />
      </div>
    </div>
  );
}

export default WhatWeDo;
