import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Poktik - Beranda";
  }, []);
  return (
    <section className="container">
      <div className="w-full min-h-screen pt-20 pb-4 px-4 flex justify-center content-start items-start md:pt-24 lg:p-0 lg:items-center">
        <div className="w-full h-auto lg:flex lg:justify-between lg:items-center">
          <div>
            <h1 className="text-7xl font-semibold my-1.5 md:text-8xl md:my-3">POKTIK</h1>
            <h4 className="text-3xl font-normal my-1.5 md:text-5xl md:my-3 lg:text-4xl">Katakan halo pada</h4>
            <h4 className="text-3xl font-semibold my-1.5 md:text-5xl md:my-3 lg:text-4xl">Pokok E Pitik 👋 . .</h4>
            <div className="text-xl font-medium my-4 md:text-2xl md:my-8 lg:text-xl lg:my-6">
              <Link className="bg-primary py-2 px-4 rounded-lg hover:opacity-80" to="/about">
                Selengkapnya
              </Link>
            </div>
          </div>
          <div>
            <div className="max-w-[350px] w-full h-auto bg-glass backdrop-blur-lg p-6 my-6 mx-auto rounded-3xl border-light-custom md:max-w-[500px] md:p-10 md:rounded-50px lg:max-w-[400px] lg:p-8">
              <img className="w-full h-auto pointer-events-none" src="/images/chicken/PoktikHome.png" alt="Foto Ayam Masak" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
