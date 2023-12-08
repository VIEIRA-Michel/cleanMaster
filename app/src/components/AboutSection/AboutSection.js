import React from "react";
import picture from "../../assets/image/img_about.webp";

const About = () => {
  return (
    <div className="w-screen h-[400px] bg-[white] relative flex flex-row lg:mt-5 shadow-md shadow-[#A4A7B0]">
      <div className="lg:w-[50%] hidden h-full lg:flex justify-center items-center">
        <img
          src={picture}
          className="w-[80%] h-[90%]"
          alt="
            a hand cleaning a drawer handle"
        ></img>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
        <div className="w-[90%] h-[90%]">
          <div className="text-left">
            <h2 className="text-xl font-bold">Qui nous sommes ?</h2>
            <h3 className="text-lg">
              Le coeur et l'âme de Nom de l'entreprise
            </h3>
          </div>
          <div>
            <p className="text-xs text-left mt-5">
              Chez Nom de l'entreprise, où un espace propre équivaut à un espace
              heureux. Forts de plus de 20 ans d'expérience, nous offrons des
              services de nettoyage résidentiel et commercial de qualité.
              Confiez-nous votre espace, et concentrez vous sur l'essentiel.
            </p>
          </div>
          <div>
            <div className="ml-5 mt-5">
              <div className="mb-5">
                <p className="text-xs text-left">
                  Professionnels Dédiés : Notre équipe engagée assure un
                  nettouyage de premier ordre pour chaque espace.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-xs text-left">
                  Plus de 20 ans d'expérience : Des décennies d'expertise dans
                  la fourniture de services de nettoyage impeccables.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-xs text-left">
                  Résidentiel & Commercial : Des solutions complètes pour les
                  maisons et les entreprise, adaptées à vos besoins.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <button className="rounded-[20px] py-2 px-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,1)] text-sm font-bold">
                Plus d'informations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
