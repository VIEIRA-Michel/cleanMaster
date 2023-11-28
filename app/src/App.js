// import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";

function App() {
  console.log("render");
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
