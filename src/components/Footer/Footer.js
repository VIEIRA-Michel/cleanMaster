import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-[250px]">
      <div className="w-full h-[40%] flex flex-row justify-center items-center">
        <nav className="w-[80%] h-full border-b border-[black]">
          <ul className="h-full flex justify-evenly font-semibold">
            <li className="flex justify-center items-center text-xs">
              Accueil
            </li>
            <li className="flex justify-center items-center text-xs">
              A propos
            </li>
            <li className="flex justify-center items-center text-xs">
              Services
            </li>
            <li className="flex justify-center items-center text-xs">
              Portfolio
            </li>
            <li className="flex justify-center items-center text-xs">
              Témoignages
            </li>
            <li className="flex justify-center items-center text-xs">
              Soumission
            </li>
            <li className="flex justify-center items-center text-xs">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-[40%] h-[40%] flex justify-evenly items-center m-auto">
        <div>
          <i class="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i class="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i class="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i class="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i class="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
