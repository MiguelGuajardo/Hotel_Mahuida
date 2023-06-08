import React from "react";

import { Home } from "./sites/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Announcement } from "./components/Announcement/Announcement";
import { Hospedaje } from "./sites/Hospedaje/Hospedaje";
import { GastronomíaPage } from "./sites/GastronomíaPage/GastronomíaPage";
import { HospedajeSingle } from "./sites/HospedajeSingle/HospedajeSingle";
import { GastronomiaSingle } from "./sites/GastronomiaSingle/GastronomiaSingle";
import { Galeria } from "./sites/Galeria/Galeria";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Announcement />
        <Navbar />
      </div>
      <Routes>
        <Route path="/HotelMahuida/" element={<Home />} />
        <Route path="/HotelMahuida/inicio" element={<Home />} />
        <Route path="/HotelMahuida/hospedaje" element={<Hospedaje />} />
        <Route
          path="/HotelMahuida/hospedaje/:id"
          element={<HospedajeSingle />}
        />
        <Route path="/HotelMahuida/gastronomia" element={<GastronomíaPage />} />
        <Route
          path="/HotelMahuida/gastronomia/:id"
          element={<GastronomiaSingle />}
        />
        <Route path="/HotelMahuida/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
};
