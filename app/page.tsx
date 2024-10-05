import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
