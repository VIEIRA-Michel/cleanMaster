import React from "react";
import picture from "../../assets/image/img_submissions.webp";

const SubmissionsSection = () => {
  return (
    <div className="w-screen h-[400px] flex flex-row">
      <div className="w-[50%] h-full">
        <img src={picture} className="w-full h-full object-cover" alt=""></img>
      </div>
      <div className="w-[50%] h-full bg-[#D8DCE7]">
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
    </div>
  );
};

export default SubmissionsSection;
