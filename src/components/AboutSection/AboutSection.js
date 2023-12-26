import React from "react";
import picture from "../../assets/image/img_about.webp";

const About = () => {
  return (
    <section
      className="w-full h-screen lg:h-[500px] bg-[white] relative flex flex-row lg:mt-5"
      id="about"
    >
      <div className="lg:w-[50%] hidden h-full lg:flex justify-center items-center">
        <img
          src={picture}
          className="w-[80%] h-[90%]"
          alt="
            a hand cleaning a drawer handle"
        ></img>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-center py-6">
        <div className="w-[90%] max-lg:h-full max-lg:flex max-lg:flex-col max-lg:justify-evenly">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-secondary">
              Qui nous sommes ?
            </h2>
            <h3 className="text-2xl">
              Le coeur et l'âme de Nom de l'entreprise
            </h3>
          </div>
          <div>
            <p className="text-left text-base mt-5">
              Chez Nom de l'entreprise, où un espace propre équivaut à un espace
              heureux. Forts de plus de 20 ans d'expérience, nous offrons des
              services de nettoyage résidentiel et commercial de qualité.
              Confiez-nous votre espace, et concentrez vous sur l'essentiel.
            </p>
          </div>
          <div>
            <div className="mt-5">
              <div className="mb-5">
                <p className="text-left text-base">
                  Professionnels Dédiés : Notre équipe engagée assure un
                  nettouyage de premier ordre pour chaque espace.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-left text-base">
                  Plus de 20 ans d'expérience : Des décennies d'expertise dans
                  la fourniture de services de nettoyage impeccables.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-left text-base">
                  Résidentiel & Commercial : Des solutions complètes pour les
                  maisons et les entreprise, adaptées à vos besoins.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <button className="hidden lg:block bg-secondary rounded-[20px] py-2 px-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,1)] text-sm font-normal text-[white] opacity-80 hover:opacity-100 duration-300">
              Plus d'informations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
