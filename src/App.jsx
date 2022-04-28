import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import NotFound from "./components/NotFound";

const App = () => {
  useEffect(() => {
    document.body.classList.add("body");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navbar active="home" children={<Home />} />} />
      <Route path="about" element={<Navbar active="about" children={<About />} />} />
      <Route path="menu" element={<Navbar active="menu" children={<Menu />} />} />
      <Route path="review" element={<Navbar active="review" children={<Review />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
