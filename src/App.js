// import logo from "./logo.svg";
import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import SubmissionsSection from "./components/SubmissionsSection/SubmissionsSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [scrollDisable, setScrollDisable] = useState(false);

  function disableScroll() {
    let parent = document.querySelector("html");
    if (parent.className.includes("overflow-y-hidden")) {
      parent.classList.remove("overflow-y-hidden");
    } else {
      parent.classList.add("overflow-y-hidden");
    }
    setScrollDisable(!scrollDisable);
  }

  return (
    <div className={`App w-screen ${scrollDisable ? "overflow-y-hidden" : ""}`}>
      <Header fDisableScroll={disableScroll} />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ReviewSection />
      <SubmissionsSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
