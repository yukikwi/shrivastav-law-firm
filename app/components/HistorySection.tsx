import React from "react";
const imgUrl1 = new URL('../assets/aboutus_image_1.jpg', import.meta.url).href;
const imgUrl2 = new URL('../assets/aboutus_image_2.webp', import.meta.url).href;

const HistoryPage = React.forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <div ref={ref} id="who-we-are" className="py-20 bg-gray-50 text-black">
      <section className="container mx-auto py-6 p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-3">
          {/* First part */}
          <div className="flex flex-col justify-start">
            <h1 className="text-7xl font-bold">Who are we?</h1>
            <p className="py-10 mt-5 text-justify">
              At Shrivastav Law Firm, we take pride in being a trusted legal partner in Nepal. Led by our CEO, Mr. Binod Kumar Shrivastav, a lawyer with 28 years of experience, we have helped countless companies establish their businesses in Nepal while providing guidance in various other legal sectors. His expertise has made us a go-to firm for businesses and individuals alike.

              Our team specializes in corporate law, dispute resolution, property matters, intellectual property, and more. We are dedicated to safeguarding your rights and delivering solutions tailored to your needs.
            </p>
          </div>
          {/* Picture */}
          <div className="flex items-start">
            <img
              src={imgUrl1}
              alt="Picture 1"
            />
          </div>

          {/* Second part */}
          <div className="mt-5">
            <img
              src={imgUrl2}
              alt="Picture 1"
            />
          </div>
          <div>
            <p className="mt-5 text-justify">
            Our services extend beyond national boundaries, catering to both local and international clients.
            We understand the unique challenges faced by global entities operating in Nepal and are adept at navigating the complexities of cross-border legal matters. 
            With a focus on integrity, professionalism, and client satisfaction, we strive to build lasting relationships through results-driven solutions. Let us be your partner in navigating the ever-evolving legal landscape with confidence and ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
})

HistoryPage.displayName = "HistoryPage"

export default HistoryPage