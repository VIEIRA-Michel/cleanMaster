import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-[250px]">
      <div className="w-full h-[40%] flex flex-row justify-center items-center">
        <nav className="w-[80%] h-full border-b border-[black]">
          <ul className="h-full flex justify-evenly font-semibold">
            <li className="flex justify-center items-center text-xs cursor-pointer">
              Accueil
            </li>
            <li className="flex justify-center items-center text-xs cursor-pointer">
              A propos
            </li>
            <li className="flex justify-center items-center text-xs cursor-pointer">
              Services
            </li>
            <li className="flex justify-center items-center text-xs cursor-pointer">
              Portfolio
            </li>
            <li className="flex justify-center items-center text-xs cursor-pointer">
              Témoignages
            </li>
            <li className="flex justify-center items-center text-xs cursor-pointer">
              Soumission
            </li>
            <li className="flex justify-center items-center text-xs cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-[40%] h-[40%] flex justify-evenly items-center m-auto">
        <div>
          <i className="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i className="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i className="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i className="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
        <div>
          <i className="fa-sharp fa-regular fa-circle text-2xl text-[#D8DCE7]"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
