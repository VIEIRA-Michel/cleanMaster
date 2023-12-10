// import logo from "./logo.svg";
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
  console.log("render");
  return (
    <div className="App">
      <Header />
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
