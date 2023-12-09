import React from "react";

const Header = () => {
  const cellulaire = "(+123) 5462 3257";
  const mail = "gadeodesign@gmail.com";
  return (
    <div className="w-screen h-[5vh] lg:h-[100px] bg-[white] relative z-10">
      <div className="w-full h-full flex">
        <div className="header__space w-[5%] border-b border-[black]">
          <div className="w–full h-[49%] border-b border-[black]"></div>
          <div></div>
        </div>
        <div className="header__logo w-[10%] flex justify-center items-center border border-t-0 border-[black]">
          {/* logo */}LOGO
        </div>
        <div className="w-[85%]">
          <div className="h-[30%] my-2 hidden lg:flex flex-row ">
            <div className="w-[40%] flex justify-center items-center text-xs font-semibold border-r border-[black]">
              Pour plus d'information : {cellulaire}
            </div>
            <div className="w-[60%] flex justify-center items-center text-xs font-semibold border-l border-[black]">
              Envoyez-nous un courriel : {mail}
            </div>
            <div className="h-[80%]">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="header__info__bottom h-[54%] border-y border-[black]">
            <nav className="h-full">
              <ul className="h-full hidden lg:flex justify-evenly font-semibold">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
