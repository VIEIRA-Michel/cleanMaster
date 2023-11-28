// import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  console.log("render");
  return (
    <div className="App">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
