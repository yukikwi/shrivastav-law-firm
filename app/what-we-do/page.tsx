import React from 'react'
import Navbar from '../components/Navbar'
import AccordionClient from '../components/AccordionClient'
import Image from 'next/image'
import LawImage from '../assets/law_background.webp';

type Props = {}

function WhatWeDo({}: Props) {
  const accordianRecord = [
    {
      title: "Africa",
      description: "Throughout its more than 70 years of existence, our firm has built significant expertise and experience across the African continent. This has led Janson to profound knowledge of the various legal systems in Africa, its markets and rich local cultures. All this combined makes Janson your ideal partner for your dealings in Africa.",
      url: "https://github.com/yukikwi/shrivastav-law-firm"
    },
    {
      title: "Banking & finance",
      description: "\
        Janson’s Banking & Finance practice enjoys a stellar reputation in Belgium and abroad. <br /> \
        <br />\
        The practice deals with all matters related to banking and finance going from advice on financial and banking operations, market penetration of banking products, regulatory advice and compliance to litigation matters in the widest sense of the word. <br />\
        <br />\
        Our banking and finance services also encompass the fields of securities and asset management. <br /> \
        <br />\
        Janson’s lawyers represent numerous banks and financial institutions, as well as asset and wealth managers before regulatory bodies, courts and arbitral tribunals. <br /> \
        <br />\
        Many of our Banking & Finance practitioners give lectures and publish scientific articles within their field of expertise.  These subject matter experts are regularly consulted by clients, governmental bodies and peers to draft legal opinions on various banking and finance topics.\
      ",
      url: "https://github.com/yukikwi/shrivastav-law-firm"
    }
  ]

  return (
    <div className='dark bg-black min-h-screen text-white'>
      <Navbar />
      <div className='mx-5'>
        <div className='relative w-full h-[33vh]'>
          <Image
            src={LawImage} // Replace with your image URL
            alt="Background Image"
            fill
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full blur-overlay"
          />
        </div>
      </div>

      <div className='container mx-auto p-4'>
        {/* Title */}
        <div className='grid grid-cols-1 sm:grid-cols-3 my-16 sm:my-32'>
          <h1 className='text-6xl mb-5 sm:mb-0 sm:col-span-2'>Practice areas.</h1>
          <p>
            Janson constantly monitors the numerous legal, regulatory and technological challenges that businesses are confronted with. As a result thereof, we are able to continuously optimize our services to our clients at today’s pace.
          </p>
        </div>

        <AccordionClient items={accordianRecord} />
      </div>
    </div>
  )
}

export default WhatWeDo