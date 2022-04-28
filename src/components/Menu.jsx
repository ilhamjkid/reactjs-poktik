import React, { useEffect, useState } from "react";

const menuList = [
  { id: 1, name: "Ayam Goreng", image: "PitikGoreng.jpg", whatsApp: "https://www.whatsapp.com/", goFood: "https://www.gojek.com/gofood/" },
  { id: 2, name: "Ayam Kecap", image: "PitikKecap.jpg", whatsApp: "https://www.whatsapp.com/", goFood: "https://www.gojek.com/gofood/" },
  { id: 3, name: "Ayam Panggang", image: "PitikPanggang.jpg", whatsApp: "https://www.whatsapp.com/", goFood: "https://www.gojek.com/gofood/" },
  { id: 4, name: "Ayam Sate", image: "PitikSate.jpg", whatsApp: "https://www.whatsapp.com/", goFood: "https://www.gojek.com/gofood/" },
];

const Menu = () => {
  const [getMenu, setMenu] = useState([]);
  useEffect(() => {
    document.title = "Poktik - Daftar Menu";
    getMenuList();
  }, []);
  const getMenuList = () => {
    setMenu(menuList);
  };
  return (
    <section className="container">
      <div className="w-full min-h-screen pt-20 pb-4 px-4 flex flex-wrap justify-center content-start items-start md:pt-24 lg:px-0 lg:items-centers">
        <div className="w-full h-auto">
          <h1 className="text-3xl text-center font-semibold">DAFTAR MENU</h1>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-evenly items-center">
          {getMenu.map((menu) => {
            return (
              <div key={menu.id} className="w-full h-auto md:w-1/2 md:p-2 lg:p-4">
                <div className="w-full h-auto bg-dark p-4 my-4 lg:p-8">
                  <img className="w-full h-auto rounded-t-2xl" src={`/images/chicken/${menu.image}`} alt={menu.name} />
                  <div className="bg-glass border-light-custom p-2 rounded-b-2xl">
                    <h1 className="text-xl text-center font-semibold uppercase">{menu.name}</h1>
                    <div className="mt-2 mb-1 flex justify-center items-center">
                      <div className="rounded-lg flex flex-wrap overflow-hidden" role="group">
                        <a href={menu.whatsApp} target="_blank" rel="noreferrer" className="text-lg font-medium bg-primary px-4 py-2 hover:opacity-80 flex justify-center items-center md:text-base">
                          <img className="w-5 h-auto mr-2 md:w-4 md:mr-1" src="/images/logo/WhatsApp.svg" alt="Logo WhatsApp" />
                          <span>WhatsApp</span>
                        </a>
                        <a href={menu.goFood} target="_blank" rel="noreferrer" className="text-lg font-medium bg-primary px-4 py-2 hover:opacity-80 flex justify-center items-center md:text-base">
                          <img className="w-5 h-auto mr-2 md:w-4 md:mr-1" src="/images/logo/GoFood.svg" alt="Logo GoFood" />
                          <span>GoFood</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
