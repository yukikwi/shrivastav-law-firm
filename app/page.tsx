import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import History from "./history/page";
import Services from "./what-we-do/page"

export default function Home() {
  return (
    <div>
      <HomeSection />
      <History />
      <Services />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
