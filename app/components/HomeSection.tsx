import Image from "next/image";
import Logo from "../favicon.ico";

export default function HomeSection() {
  return (
    <section id="home" className="grid grid-cols-3 gap-4">
      {/* Home content */}
      <div className="col-span-2 px-8 py-4 flex flex-col min-h-screen justify-between">
        {/* Logo & Navigate */}
        <div className="flex justify-between">
          {/* Logo */}
          <Image
            className="w-8 h-8"
            src={Logo}
            alt="Logo"
            width={32}
            height={32}
          />

          {/* Navigate */}
          <div className="flex flex-col gap-2 font-bold text-right">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#contact-us">CONTACT US</a>
          </div>
        </div>

        {/* Title */}
        <div className="font-bold">
          <section className="text-8xl">
            <h1>SHRIVASTAV</h1>
            <h1>LAW FIRM</h1>
          </section>
          <section className="text-3xl">
            <h3>YOUR TRUSTED LEGAL PARTNER IN NEPAL</h3>
          </section>
        </div>
      </div>

      {/* Home picture */}
      <div className="relative">
        <Image
          className="min-h-screen object-cover object-right"
          src="https://yurucamp.jp/third/assets/img/gallery/v2.jpg"
          alt="intro picture"
          fill
        />
      </div>
    </section>
  );
}
