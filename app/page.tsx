import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import History from "./history/page";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <History />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
