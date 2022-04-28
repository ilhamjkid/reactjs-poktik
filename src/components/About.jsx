import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "Poktik - Tentang Kami";
  }, []);
  return (
    <section className="container">
      <div className="w-full min-h-screen pt-20 pb-4 px-4 flex justify-center content-start items-start md:pt-24 lg:p-0 lg:items-center">
        <div className="w-full h-auto bg-glass backdrop-blur-lg rounded-3xl border-light-custom md:rounded-30px lg:flex lg:justify-between lg:items-center">
          <div className="w-full h-auto p-6 pb-3 md:p-10 md:pb-5 lg:w-1/2 lg:h-auto lg:p-10 lg:flex lg:justify-center">
            <img className="w-full h-auto rounded-2xl border-light-custom md:rounded-30px lg:max-w-[350px]" src="/images/chicken/PoktikAbout.jpg" alt="Foto Ayam Hidup" />
          </div>
          <div className="w-full h-auto p-6 pt-3 md:p-10 md:pt-5 lg:w-1/2 lg:h-auto lg:p-5">
            <h1 className="text-2xl mb-2 md:text-4xl md:mb-4 lg:text-3xl">
              <span className="font-bold">POKTIK </span>
              <span className="font-normal inline-block">(Pokok E Pitik)..</span>
            </h1>
            <p className="text-lg font-normal mb-2 md:text-2xl md:mb-4 lg:text-xl">
              Merupakan tempat makan <span className="font-bold">AYAM</span> yang berlokasi Di Krian, Sidoarjo, Jawa Timur, Indonesia.
            </p>
            <p className="text-lg font-normal mb-2 md:text-2xl md:mb-4 lg:text-xl">
              Menyediakan makanan yang super lezat dari bahan dasar <span className="font-bold">PITIK</span> (ayam) dengan <span className="font-bold">HARGA</span> yang <span className="font-bold">PAS</span> Di Kantong Kamu.
            </p>
            <div className="text-xl font-medium mt-6 mb-2 md:text-2xl md:mt-8 md:mb-2 lg:text-xl">
              <Link className="bg-primary py-2 px-4 rounded-lg hover:opacity-80" to="/menu">
                Daftar Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
