import React from "react";
import Form from "../Form/Form";
import picture from "../../assets/image/img_header.webp";

const HeroSection = () => {
  console.log(picture);
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
      className="w-screen h-[95vh] lg:h-screen lg:h-[400px] relative"
      id="hero"
    >
      <img
        src={picture}
        className="w-full h-full object-cover"
        alt="a woman cleaning a cushion"
      ></img>
      <div className="w-[80%] lg:w-[40%] max-lg:h-[40%] absolute max-lg:flex max-lg:justify-evenly max-lg:items-center max-lg:flex-col max-lg:left-[10%] max-lg:top-[10%] lg:right-[50%] lg:top-[30%] lg:bottom-[50%]">
        <h2 className="max-lg:w-[65%] text-[white] text-xl font-bold">
          Bienvenue chez Nom de l'entreprise
        </h2>
        <h3 className="max-lg:w-[80%] text-[white]">
          Votre partenaire de confiance pour un nettoyage efficace
        </h3>
        <div className="mt-5">
          <button
            onClick={(e) => handleClick(e, "contact")}
            className="bg-[white] rounded-[20px] py-2 px-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,1)] text-sm font-bold"
          >
            Plus d'informations
          </button>
        </div>
      </div>
      <div className="w-[30%] hidden lg:block bg-[white] border border-[black] rounded-[10px] absolute top-[-10px] right-[30px]">
        <Form />
      </div>
    </section>
  );
};

export default HeroSection;
