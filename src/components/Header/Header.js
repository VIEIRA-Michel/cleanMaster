import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";

const Header = ({ fDisableScroll }) => {
  const cellulaire = "(+123) 5462 3257";
  const mail = "gadeodesign@gmail.com";
  const [activeMenu, setActiveMenu] = useState(false);

  function handleClick(e, id) {
    setActiveMenu(!activeMenu);
    fDisableScroll();
    let target = document.getElementById(id);
    e.preventDefault();
    target &&
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  function toggleMenu() {
    setActiveMenu(!activeMenu);
    fDisableScroll();
  }

  return (
    <div
      className={`w-full ${
        activeMenu
          ? "h-screen fixed transition duration-1000 ease-in-out"
          : "h-[10vh] transition duration-1000 ease-in-out"
      } lg:h-[100px] bg-[white] relative z-10`}
      id="header"
    >
      <div
        className={`w-full bg-[white]  flex flex-row m-auto justify-between`}
      >
        <div className="w-[25%] lg:w-[10%] flex justify-center items-center">
          <img src={logo} alt="logo entreprise" />
        </div>
        <div
          className={`${
            activeMenu ? "block" : "max-lg:hidden w-[0%]"
          }  lg:w-[90%] relative`}
        >
          <div className="h-[30%] my-2 hidden lg:flex flex-row ">
            <div className="w-[40%] flex justify-center items-center text-xs font-semibold">
              Pour plus d'information : {cellulaire}
            </div>
            <div className="w-[60%] flex justify-center items-center text-xs font-semibold">
              Envoyez-nous un courriel : {mail}
            </div>
          </div>
          <div
            className={`${
              activeMenu
                ? "block fixed bottom-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                : "max-lg:hidden"
            } lg:block h-[54%]`}
          >
            <nav className="h-full">
              <ul
                className={`h-full flex ${
                  activeMenu ? "flex-col items-start" : ""
                } justify-evenly font-semibold`}
              >
                <li className="max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "header");
                    }}
                    className="text-lg"
                  >
                    Accueil
                  </a>
                </li>
                <li className="max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "about");
                    }}
                    className="text-lg"
                  >
                    A propos
                  </a>
                </li>
                <li className="max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "services");
                    }}
                    className="text-lg"
                  >
                    Services
                  </a>
                </li>
                {/* <li className="flex justify-center items-center text-xs cursor-pointer">
                  <a href="/">Portfolio</a>
                </li> */}
                <li className="max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "review");
                    }}
                    className="text-lg"
                  >
                    Témoignages
                  </a>
                </li>
                <li className="max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "submission");
                    }}
                    className="text-lg"
                  >
                    Soumission
                  </a>
                </li>
                <li className="max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] flex justify-center items-center text-xs cursor-pointer">
                  <a
                    href="/"
                    onClick={(e) => {
                      handleClick(e, "contact");
                    }}
                    className="text-lg"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-[15%] sm:w-[12%] md:w-[10%] flex lg:hidden justify-center items-center">
          <i
            className="fa-solid fa-bars text-xl cursor-pointer text-secondary"
            onClick={() => toggleMenu()}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
