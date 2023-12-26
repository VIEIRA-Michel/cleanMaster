import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import "./style.scss";

const Header = ({ fDisableScroll, fScroll }) => {
  const cellulaire = "(+123) 5462 3257";
  const mail = "gadeodesign@gmail.com";
  const [activeMenu, setActiveMenu] = useState(false);

  function handleClick(e, destination) {
    e.preventDefault();
    setActiveMenu(false);
    fScroll(destination);
  }

  function toggleMenu() {
    setActiveMenu(!activeMenu);
    if (activeMenu) {
      fDisableScroll();
    }
    switchClass();
  }

  function switchClass() {
    let target = document.querySelector("i");
    if (target.className.includes("fa-xmark")) {
      target.classList.remove("enable");
      target.classList.add("disable");
      setTimeout(() => {
        target.classList.add("fa-bars");
        target.classList.add("enable");
      }, 300);
    } else if (target.className.includes("fa-bars")) {
      target.classList.remove("enable");
      target.classList.add("disable");
      setTimeout(() => {
        target.classList.add("fa-xmark");
        target.classList.add("enable");
      }, 300);
    }
  }

  return (
    <div
      className={`w-full ${
        activeMenu ? "h-screen fixed" : "h-[50px]"
      } lg:h-[80px] bg-[white] fixed duration-200 z-10 shadow-custom`}
      id="header"
    >
      <div
        className={`w-full h-[75px] bg-[white]  flex flex-row m-auto justify-between`}
      >
        <div className="w-[25%] lg:w-[10%] max-lg:max-h-[70px] flex justify-start items-center">
          <img
            src={logo}
            alt="logo entreprise"
            className="h-full cursor-pointer"
            onClick={(e) => {
              handleClick(e, "hero");
            }}
          />
        </div>
        <div
          className={`${
            activeMenu ? "block" : "max-lg:hidden w-[0%]"
          }  lg:w-[88%] relative`}
        >
          <div className="h-[30%] lg:w-[65%] my-2 hidden lg:flex flex-row ">
            <div className="w-[40%] flex justify-start items-center text-xs font-semibold">
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
            } lg:block h-[54%] lg:w-[65%]`}
          >
            <nav className="h-full">
              <ul
                className={`h-full flex ${
                  activeMenu
                    ? "flex-col lg:flex-row items-start max-lg:opacity-100"
                    : "max-lg:opacity-0"
                } justify-evenly lg:justify-between font-semibold delay-500`}
              >
                <li
                  className={`max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] menu-2 flex justify-center items-center text-xs cursor-pointer max-lg:opacity-0`}
                  onClick={(e) => {
                    handleClick(e, "about");
                  }}
                >
                  <a href="/" className="text-sm">
                    A propos
                  </a>
                </li>
                <li
                  className={`max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] menu-3 flex justify-center items-center text-xs cursor-pointer max-lg:opacity-0`}
                  onClick={(e) => {
                    handleClick(e, "services");
                  }}
                >
                  <a href="/" className="text-sm">
                    Services
                  </a>
                </li>
                <li
                  className={`max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] menu-4 flex justify-center items-center text-xs cursor-pointer max-lg:opacity-0`}
                  onClick={(e) => {
                    handleClick(e, "review");
                  }}
                >
                  <a href="/" className="text-sm">
                    Témoignages
                  </a>
                </li>
                <li
                  className={`max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] menu-5 flex justify-center items-center text-xs cursor-pointer max-lg:opacity-0`}
                  onClick={(e) => {
                    handleClick(e, "submission");
                  }}
                >
                  <a href="/" className="text-sm">
                    Soumission
                  </a>
                </li>
                <li
                  className={`max-lg:w-[150px] max-lg:p-2 max-lg:rounded-[15px] max-lg:hover:bg-primary max-lg:hover:text-[white] menu-6 flex justify-center items-center text-xs cursor-pointer max-lg:opacity-0`}
                  onClick={(e) => {
                    handleClick(e, "contact");
                  }}
                >
                  <a href="/" className="text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-[15%] sm:w-[12%] md:w-[10%] flex lg:hidden justify-center items-center">
          <i
            className={`${
              activeMenu
                ? "fa-solid fa-xmark enable"
                : "fa-solid fa-bars enable"
            } text-xl cursor-pointer text-secondary`}
            onClick={() => toggleMenu()}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
