import React from 'react'
import Image from 'next/image';
import Logo from "../assets/Logo_Large.png";

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-[#242424] text-white p-8">
      <div className="container mx-auto py-10 px-8 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Image src={Logo} alt="Logo" width={200} height={200} />
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col items-center md:items-start">
        <span className="font-bold text-[#B4B4B4]">PHONE</span>
          <p>
            Office : <a href="tel:+3226753030" className="underline">+32 2 675 30 30</a>
          </p>
          <p>
            Mobile : <a href="tel:+3292407720" className="underline">+32 9 240 77 20</a>
          </p>
          <p>
            Office : <a href="tel:+3265221000" className="underline">+32 65 22 10 00</a>
          </p>
          <span className="font-bold text-[#B4B4B4] pt-6">EMAIL</span>
          <ul>
            <li>
              <a className="underline" href="mailto:binodriya@gmail.com">
                binodriya@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <span className="font-bold text-[#B4B4B4]">ADRESS</span>
        <p>
            Bla bla
          </p>
          <p>
            Bla bla
          </p>
          <p>
            Kathmandu
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
