import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Navbar = ({ active, children }) => {
  const showNavMenu = () => {
    const navMenu = document.querySelector("#navbar-menu");
    navMenu.classList.toggle("transform");
    navMenu.classList.toggle("-translate-y-full");
    navMenu.classList.toggle("opacity-0");
  };
  const hideNavMenu = () => {
    const navMenu = document.querySelector("#navbar-menu");
    navMenu.classList.add("transform", "-translate-y-full", "opacity-0");
  };
  return (
    <>
      <nav className="w-full h-auto bg-glass backdrop-blur-lg border-b-2 border-light border-opacity-60 fixed top-0 left-0 z-50">
        <div className="container block relative lg:py-2 lg:flex lg:justify-between lg:items-center">
          <div id="navbar-brand" className="w-full h-auto py-2 px-4 flex justify-between items-center relative z-40 lg:p-0">
            <Link to="/" onClick={hideNavMenu}>
              <img className="w-12 h-auto pointer-events-none" src="/images/logo/PoktikLogo.svg" alt="Logo Poktik" />
            </Link>
            <button type="button" className="bg-none grid grid-cols-3 grid-rows-3 gap-1 lg:hidden" onClick={showNavMenu}>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
              <div className="button-navbar-child"></div>
            </button>
          </div>
          <div
            id="navbar-menu"
            className="w-full h-auto bg-dark p-4 absolute left-0 z-30 opacity-0 transform -translate-y-full transition-all duration-300 lg:w-auto lg:h-auto lg:bg-none lg:p-0 lg:relative lg:opacity-100 lg:transform-none lg:transition-none"
          >
            <ul className="bg-glass p-2 rounded-2xl border-2 border-light border-opacity-60 lg:bg-none lg:p-0 lg:rounded-none lg:border-none lg:flex lg:justify-end">
              <li className={`navbar-link ${active === "home" ? "opacity-100" : ""}`}>
                <Link to="/" onClick={hideNavMenu}>
                  Beranda
                </Link>
              </li>
              <li className={`navbar-link ${active === "about" ? "opacity-100" : ""}`}>
                <Link to="/about" onClick={hideNavMenu}>
                  Tentang
                </Link>
              </li>
              <li className={`navbar-link ${active === "menu" ? "opacity-100" : ""}`}>
                <Link to="/menu" onClick={hideNavMenu}>
                  Menu
                </Link>
              </li>
              <li className={`navbar-link ${active === "review" ? "opacity-100" : ""}`}>
                <Link to="/review" onClick={hideNavMenu}>
                  Tinjauan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </>
  );
};

export default Navbar;
