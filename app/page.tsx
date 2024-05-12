import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#242424] text-white">
        <div className="container flex flex-row gap-5 mx-auto pt-32 pb-10">
          <div>
            <span className="font-bold text-[#B4B4B4]">PHONE</span>
            <ul>
              <li>+9779841204927</li>
              <li>+9779851067091</li>
              <li>+97712022381</li>
              <li>+9772322467</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-[#B4B4B4]">EMAIL</span>
            <ul>
              <li>
                <a className="underline" href="mailto:binodriya@gmail.com">
                  binodriya@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-[#B4B4B4]">ADRESS</span>
            <p>
              Bla bla bla....
              <br />
              Kathmandu
              <br />
              Nepal
              <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
