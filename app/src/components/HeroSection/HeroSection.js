import React from "react";
import Form from "../Form/Form";
import picture from "../../assets/image/img_header.webp";

const HeroSection = () => {
  console.log(picture);
  return (
    <div>
      <div className="w-screen relative">
        <img
          src={picture}
          className="w-full object-cover"
          alt="a woman cleaning a cushion"
        ></img>
        <div className="w-[40%] absolute right-[50%] bottom-[50%]">
          <h2 className="text-[white] text-xl font-bold">
            Bienvenue chez Nom de l'entreprise
          </h2>
          <h3 className="text-[white]">
            Votre partenaire de confiance pour un nettoyage efficace
          </h3>
          <div className="mt-5">
            <button className="bg-[white] rounded-[20px] py-2 px-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,1)] text-sm font-bold">
              Plus d'informations
            </button>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default HeroSection;
