"use client"
import { useRef } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import HistorySection from "./components/HistorySection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const historyElement = useRef<HTMLDivElement>(null)
  const aboutSectionElement = useRef<HTMLElement>(null)
  const handlewhoAreWeClick = () => {
    historyElement.current?.scrollIntoView({ behavior: "smooth" })
  }
  const handleTeamClick = () => {
    aboutSectionElement.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="relative">
      <Navbar position="absolute" whoAreWeClick={handlewhoAreWeClick} teamClick={handleTeamClick} />
      <HomeSection />
      <HistorySection ref={historyElement} />
      <AboutSection ref={aboutSectionElement} />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
