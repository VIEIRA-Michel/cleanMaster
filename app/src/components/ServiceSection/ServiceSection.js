import React from "react";

const ServiceSection = () => {
  return (
    <div className="w-screen h-[400px] flex justify-center items-center bg-[#D8DCE7]">
      <div className="h-full bg-[#D8DCE7] flex flex-col justify-center items-center m-auto">
        <div className="w-[90%] h-[100%] flex justify-evenly flex-col">
          <div className="w-[70%] h-[30%] mx-auto flex justify-center items-center flex-col">
            <div>
              <h2 className="text-xl font-bold">
                Nous offrons les meilleurs services de nettoyage à votre service
                !
              </h2>
            </div>
            <div className="">
              <h3>
                Nom de l'entreprise, initialement une entreprise de nettoyage
                basée au Canada, offrant des solutions de nettoyage de haut
                niveau dans la ville de montréal
              </h3>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-evenly flex-row">
                <div className="w-[200px] h-[200px] bg-[white] shadow-lg rounded-[10px]">
                  <div className="w-[100px] h-[40%] m-auto flex justify-center items-center">
                    <span className="flex justify-center items-center text-xs w-[50%] h-[50%] bg-[#D8DCE7]">
                      ICONE
                    </span>
                  </div>
                  <div className="w-[80%] h-[60%] flex flex-col justify-evenly items-center m-auto">
                    <div className="text-xs underline">
                      Nettoyage Résidentiel
                    </div>
                    <div className="text-xs">
                      Nettoyage complet et écologique de votre maison pour un
                      espace sain et accueillant.
                    </div>
                  </div>
                </div>
                <div className="w-[200px] h-[200px] bg-[white] shadow-lg rounded-[10px]">
                  <div className="w-[100px] h-[40%] m-auto flex justify-center items-center">
                    <span className="flex justify-center items-center text-xs w-[50%] h-[50%] bg-[#D8DCE7]">
                      ICONE
                    </span>
                  </div>
                  <div className="w-[80%] h-[60%] flex flex-col justify-evenly items-center m-auto">
                    <div className="text-xs underline">
                      Nettoyage Résidentiel
                    </div>
                    <div className="text-xs">
                      Nettoyage complet et écologique de votre maison pour un
                      espace sain et accueillant.
                    </div>
                  </div>
                </div>
                <div className="w-[200px] h-[200px] bg-[white] shadow-lg rounded-[10px]">
                  <div className="w-[100px] h-[40%] m-auto flex justify-center items-center">
                    <span className="flex justify-center items-center text-xs w-[50%] h-[50%] bg-[#D8DCE7]">
                      ICONE
                    </span>
                  </div>
                  <div className="w-[80%] h-[60%] flex flex-col justify-evenly items-center m-auto">
                    <div className="text-xs underline">
                      Nettoyage Résidentiel
                    </div>
                    <div className="text-xs">
                      Nettoyage complet et écologique de votre maison pour un
                      espace sain et accueillant.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
