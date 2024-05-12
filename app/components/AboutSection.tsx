import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-5 gap-4 px-8 py-4 min-h-screen"
    >
      {/* About picture */}
      <div className="col-span-2 relative">
        <Image
          className="object-cover object-right"
          src="https://yurucamp.jp/third/assets/img/gallery/v2.jpg"
          alt="intro picture"
          fill
        />
      </div>

      {/* About content */}
      <div className="col-span-3 flex flex-col gap-8">
        <h2 className="text-5xl font-bold">ABOUT</h2>
        <div>
          <h2 className="text-5xl">Binod Kumar Shrivatav</h2>
          <h3 className="text-3xl">Lawyer</h3>
        </div>

        <div className="text-xl">
          <p className="pb-4">
            At <b>Shrivastav Law Firm</b>, we are dedicated to delivering
            exceptional legal services to our international clientele. Led by
            CEO Binod Kumar Shrivastav, our team of experienced professionals is
            committed to providing comprehensive legal solutions across a wide
            range of practice areas.
          </p>
          <p className="pb-4">
            Whether you're looking to incorporate a new company, navigate
            complex commercial and corporate matters, or handle family-related
            issues such as marriage, adoption, or wills and estates, we have the
            expertise to guide you through every step. Our expertise also
            extends to intellectual property, franchise and licensing,
            immigration, tax, consumer rights, and criminal law.
          </p>
          <p>
            With a proven track record of success, we pride ourselves on our
            ability to provide seamless legal assistance to clients around the
            world. Trust Shrivastav Law Firm to be your reliable partner in
            navigating the legal landscape in Nepal and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
