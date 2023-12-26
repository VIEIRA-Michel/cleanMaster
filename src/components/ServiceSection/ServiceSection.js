import React from "react";

const ServiceSection = () => {
  return (
    <section
      className="w-full h-screen lg:h-[500px] flex justify-center items-center bg-gradient-to-b from-[#2C2E82] to-[#574686]"
      id="services"
    >
      <div className="h-full bg-gradient-to-b from-[#2C2E82] to-[#574686] flex flex-col justify-center items-center m-auto">
        <div className="w-[100%] h-[100%] flex justify-evenly flex-col">
          <div className="w-[90%] lg:w-[50%] h-[40%] mx-auto flex justify-evenly lg:justify-around items-center flex-col text-[white]">
            <div>
              <h2 className="lg:w-[71%%] text-3xl font-normal">
                Nous offrons les meilleurs services de nettoyage à votre service
              </h2>
            </div>
            <div>
              <h3 className="text-sm lg:text-xl font-light block">
                Nom de l'entreprise, initialement une entreprise de nettoyage
                basée au Canada, offrant des solutions de nettoyage de haut
                niveau dans la ville de montréal
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center">
            <div className="flex items-center justify-evenly flex-col lg:flex-row my-2">
              <div className="w-[80%] lg:w-[200px] lg:h-[200px]  bg-[white] p-2  shadow-lg rounded-[10px] ">
                <div className="w-full h-full flex flex-row lg:flex-col">
                  <div className="w-[100px] h-[40%] m-auto flex justify-center items-center">
                    <span className="flex justify-center items-center text-xs w-[50%] h-[50%]">
                      <i className="fa-duotone fa-vacuum text-xl lg:text-3xl p-2"></i>
                    </span>
                  </div>
                  <div className="w-[80%] h-[60%] flex flex-col justify-evenly items-center m-auto">
                    <h4 className="w-full text-left lg:text-center text-xs underline">
                      Nettoyage Résidentiel
                    </h4>
                    <h5 className="w-full text-left lg:text-center text-xs">
                      Nettoyage complet et écologique de votre maison pour un
                      espace sain et accueillant.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly flex-col lg:flex-row my-2">
              <div className="w-[80%] lg:w-[200px] lg:h-[200px]  bg-[white] p-2  shadow-lg rounded-[10px] ">
                <div className="w-full h-full flex flex-row lg:flex-col">
                  <div className="w-[100px] h-[40%] m-auto flex justify-center items-center">
                    <span className="flex justify-center items-center text-xs w-[50%] h-[50%]">
                      <i className="fa-duotone fa-vacuum text-xl lg:text-3xl p-2"></i>
                    </span>
                  </div>
                  <div className="w-[80%] h-[60%] flex flex-col justify-evenly items-center m-auto">
                    <h4 className="w-full text-left lg:text-center text-xs underline">
                      Nettoyage Résidentiel
                    </h4>
                    <h5 className="w-full text-left lg:text-center text-xs">
                      Nettoyage complet et écologique de votre maison pour un
                      espace sain et accueillant.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly flex-col lg:flex-row my-2">
              <div className="w-[80%] lg:w-[200px] lg:h-[200px]  bg-[white] p-2  shadow-lg rounded-[10px] ">
                <div className="w-full h-full flex flex-row lg:flex-col">
                  <div className="w-[100px] h-[40%] m-auto flex justify-center items-center">
                    <span className="flex justify-center items-center text-xs w-[50%] h-[50%]">
                      <i className="fa-duotone fa-vacuum text-xl lg:text-3xl p-2"></i>
                    </span>
                  </div>
                  <div className="w-[80%] h-[60%] flex flex-col justify-evenly items-center m-auto">
                    <h4 className="w-full text-left lg:text-center text-xs underline">
                      Nettoyage Résidentiel
                    </h4>
                    <h5 className="w-full text-left lg:text-center text-xs">
                      Nettoyage complet et écologique de votre maison pour un
                      espace sain et accueillant.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
