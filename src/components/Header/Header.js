import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/logo.svg";

const Header = () => {
  const cellulaire = "(+123) 5462 3257";
  const mail = "gadeodesign@gmail.com";
  const [activeMenu, setActiveMenu] = useState(null);

  function handleClick(e, id) {
    let target = document.getElementById(id);
    e.preventDefault();
    target &&
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  function toggleMenu() {
    if (activeMenu == null) {
      setActiveMenu(true);
    } else {
      setActiveMenu(!activeMenu);
    }
    console.log(activeMenu);
    // if (displayMenu.value == null) {
    //   displayMenu.value = true;
    //   emit("active-menu", displayMenu.value);
    // } else {
    //   displayMenu.value = !displayMenu.value;
    //   emit("active-menu", displayMenu.value);
    // }
  }

  useEffect(() => {
    console.log(activeMenu);
  }, [activeMenu]);
  return (
    <div
      className="w-full h-[10vh] lg:h-[100px] bg-[white] relative z-10"
      id="header"
    >
      <div
        className={`${
          activeMenu
            ? "bg-[red] w-screen h-screen absolute left-[0px] top-[0px] "
            : "hidden"
        }`}
      ></div>
      <div className="w-full h-full flex flex-row m-auto justify-between">
        <div className="w-[25%] lg:w-[10%] flex justify-center items-center">
          <img src={logo} alt="logo entreprise" />
        </div>
        <div className="w-[0%] lg:w-[90%] relative">
          <div className="h-[30%] my-2 hidden lg:flex flex-row ">
            <div className="w-[40%] flex justify-center items-center text-xs font-semibold">
              Pour plus d'information : {cellulaire}
            </div>
            <div className="w-[60%] flex justify-center items-center text-xs font-semibold">
              Envoyez-nous un courriel : {mail}
            </div>
          </div>
          <div className="hidden lg:block h-[54%]">
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
          <div className="w-[95%] h-full flex justify-end items-center absolute right-[20px] lg:hidden">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="w-[20%] flex justify-center items-center">
          <i className="fa-solid fa-bars text-xl cursor-pointer text-secondary"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
