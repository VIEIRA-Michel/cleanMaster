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

  function scrollFunction(destination) {
    const heroSection = document.getElementById("hero").clientHeight,
      aboutSection = document.getElementById("about").clientHeight,
      serviceSection = document.getElementById("services").clientHeight,
      reviewSection = document.getElementById("review").clientHeight,
      submissionSection = document.getElementById("submission").clientHeight;
    if (destination === "hero") {
      console.log(destination);
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    } else if (destination === "about") {
      console.log(destination);
      window.scrollTo({ left: 0, top: heroSection - 50, behavior: "smooth" });
    } else if (destination === "services") {
      console.log(destination);
      window.scrollTo({
        left: 0,
        top: heroSection + aboutSection - 50,
        behavior: "smooth",
      });
    } else if (destination === "review") {
      console.log(destination);
      window.scrollTo({
        left: 0,
        top: heroSection + aboutSection + serviceSection - 50,
        behavior: "smooth",
      });
    } else if (destination === "submission") {
      console.log(destination);
      window.scrollTo({
        left: 0,
        top: heroSection + aboutSection + serviceSection + reviewSection - 50,
        behavior: "smooth",
      });
    } else {
      console.log(destination);
      window.scrollTo({
        left: 0,
        top:
          heroSection +
          aboutSection +
          serviceSection +
          reviewSection +
          submissionSection,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={`App ${scrollDisable ? "overflow-y-hidden" : ""}`}>
      <Header fDisableScroll={disableScroll} fScroll={scrollFunction} />
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
