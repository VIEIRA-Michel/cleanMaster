import React from "react";
import picture from "../../assets/image/img_submissions.webp";

const SubmissionsSection = (props, ref) => {
  return (
    <section className="w-screen h-screen lg:h-[450px] flex flex-row relative shadow-md shadow-[#A4A7B0]" id="submission">
      <div className="w-full lg:w-[50%] h-full relative">
        <img src={picture} className="w-full h-full object-cover" alt=""></img>
        <div className="w-full block lg:hidden absolute bg-custom absolute z-10 top-[0px] text-white p-2">
          <div className="h-[30%] flex flex-col justify-end">
            <h3 className="hidden lg:block text-xl font-bold text-left">
              Caractéristique impressionnante
            </h3>
            <h4 className="w-[90%] text-left">
              Chez Nom de l'entreprise, nous servons une large gamme de clients
              avec dévouement et expertise
            </h4>
          </div>
          <div className="w-full h-[50%] flex justify-evenly items-center">
            <ul className="w-[90%] h-full flex flex-col justify-evenly items-center list-disc text-xs text-left text-[#D6DAE5]">
              <li>
                Diversité des Clients : Services adaptés pour entreprises,
                grande corporations et résidences privées.
              </li>
              <li>
                Flexibilité des Horaires : Nettoyage planifié selon votre emploi
                du temps, sans interruption de vos activités.
              </li>
              <li>
                Solutions Ecologiques : Utilisation de produits et techniques de
                nettoyage écologiques pour la sécurité de tous.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:h-full hidden lg:block bg-custom absolute lg:right-[0px] lg:bg-[#D8DCE7]">
        <div className="w-[80%] h-full flex flex-col justify-evenly items-center m-auto">
          <div className="h-[30%] flex flex-col justify-end">
            <h3 className="text-xl font-bold text-left">
              Caractéristique impressionnante
            </h3>
            <p className="text-left">
              Chez Nom de l'entreprise, nous servons une large gamme de clients
              avec dévouement et expertise
            </p>
          </div>
          <div className="w-full h-[50%] flex justify-evenly items-center">
            <ul className="h-full flex flex-col justify-evenly items-center list-disc text-xs text-left">
              <li>
                Diversité des Clients : Services adaptés pour entreprises,
                grande corporations et résidences privées.
              </li>
              <li>
                Flexibilité des Horaires : Nettoyage planifié selon votre emploi
                du temps, sans interruption de vos activités.
              </li>
              <li>
                Solutions Ecologiques : Utilisation de produits et techniques de
                nettoyage écologiques pour la sécurité de tous.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionsSection;
