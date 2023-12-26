import React from "react";
import Form from "../Form/Form";
import picture from "../../assets/image/img_header.webp";

const HeroSection = () => {
  function handleClick(e, id) {
    let target = document.getElementById(id);
    e.preventDefault();
    target &&
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }
  return (
    <section
      className="w-full h-[90vh] lg:h-screen lg:h-[400px] relative"
      id="hero"
    >
      <img
        src={picture}
        className="w-full h-full object-cover"
        alt="a woman cleaning a cushion"
      ></img>
      <div className="w-[80%] lg:w-[40%] max-lg:h-[50%] absolute flex justify-center max-lg:justify-evenly items-center flex-col max-lg:left-[10%] max-lg:top-[20%] lg:right-[50%] lg:top-[30%] lg:bottom-[50%]">
        <h2 className="w-[71%] lg:w-[65%] text-[white] text-4xl lg:text-5xl">
          Bienvenue chez [Nom de l'entreprise]
        </h2>
        <h3 className="w-[90%] lg:w-[80%] text-[white] text-3xl font-light">
          Votre partenaire de confiance pour un nettoyage efficace
        </h3>
        <div className="mt-5 lg:hidden">
          <button
            onClick={(e) => handleClick(e, "contact")}
            className="bg-gradient-to-b text-lg text-[white] from-[#2C2E82] to-[#574686] rounded-[20px] p-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,1)] font-normal opacity-90 hover:opacity-100 duration-300"
          >
            Faites une soumission
          </button>
        </div>
      </div>
      <div className="w-[30%] hidden lg:block bg-[white] border border-[black] rounded-[10px] absolute top-[60px] right-[30px]">
        <Form />
      </div>
    </section>
  );
};

export default HeroSection;
