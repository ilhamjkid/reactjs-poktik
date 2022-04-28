import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container pt-6 pb-10">
      <div className="flex flex-wrap justify-center items-center">
        <Link className="footer-link" to="/">
          Beranda
        </Link>
        <Link className="footer-link" to="/about">
          Tentang
        </Link>
        <Link className="footer-link" to="/menu">
          Menu
        </Link>
        <Link className="footer-link" to="/review">
          Tinjauan
        </Link>
      </div>
      <hr className="w-[90%] mx-auto my-4 border border-light opacity-25 lg:w-full" />
      <div className="flex flex-wrap justify-center items-center">
        <img className="w-16 h-auto mr-3 pointer-events-none" src="/images/logo/PoktikLogo.svg" alt="Logo Poktik" />
        <h4 className="text-2xl">
          <span className="font-bold">Poktik</span>
          <span className="font-normal block">Pokok E Pitik</span>
        </h4>
      </div>
      <h5 className="text-lg text-center font-normal opacity-75 mt-2">Copyright © 2022 PT. Poktik Indonesia</h5>
    </footer>
  );
};

export default Footer;
