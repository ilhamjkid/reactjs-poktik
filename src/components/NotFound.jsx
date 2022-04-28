import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Tidak Ditemukan";
  }, []);
  return (
    <div className="container">
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-semibold">404</h1>
        <h4 className="text-2xl font-medium">Halaman</h4>
        <h4 className="text-2xl font-medium">Tidak Ditemukan</h4>
      </div>
    </div>
  );
};

export default NotFound;
