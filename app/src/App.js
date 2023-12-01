// import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import SubmissionsSection from "./components/SubmissionsSection/SubmissionsSection";

function App() {
  console.log("render");
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ReviewSection />
      <SubmissionsSection />
    </div>
  );
}

export default App;
