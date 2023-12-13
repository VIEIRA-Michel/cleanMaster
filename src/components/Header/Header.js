import React from "react";

const Header = ({ handleClick }) => {
  const cellulaire = "(+123) 5462 3257";
  const mail = "gadeodesign@gmail.com";

  function handleClick(e, id) {
    let target = document.getElementById(id);
    e.preventDefault();
    target &&
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <div
      className="w-screen h-[5vh] lg:h-[100px] bg-[white] relative z-10"
      id="header"
    >
      <div className="w-full h-full flex">
        <div className="header__space w-[5%]">
          <div className="w–full h-[49%]"></div>
          <div></div>
        </div>
        <div className="header__logo w-[10%] flex justify-center items-center">
          {/* logo */}LOGO
        </div>
        <div className="w-[85%]">
          <div className="h-[30%] my-2 hidden lg:flex flex-row ">
            <div className="w-[40%] flex justify-center items-center text-xs font-semibold">
              Pour plus d'information : {cellulaire}
            </div>
            <div className="w-[60%] flex justify-center items-center text-xs font-semibold">
              Envoyez-nous un courriel : {mail}
            </div>
            <div className="h-[80%]">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="header__info__bottom h-[54%]">
            <nav className="h-full">
              <ul className="h-full hidden lg:flex justify-evenly font-semibold">
                <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "header");
                    }}
                  >
                    Accueil
                  </a>
                </li>
                <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "about");
                    }}
                  >
                    A propos
                  </a>
                </li>
                <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "services");
                    }}
                  >
                    Services
                  </a>
                </li>
                <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a href="/">Portfolio</a>
                </li>
                <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "review");
                    }}
                  >
                    Témoignages
                  </a>
                </li>
                <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "submission");
                    }}
                  >
                    Soumission
                  </a>
                </li>
                <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "contact");
                    }}
                  >
                    Contact
                  </a>
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
