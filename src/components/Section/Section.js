import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import Habitacion from "../../images/Habitacion2.jpeg";
import Comida from "../../images/Comida2.jpg";

export const Section = () => {
  return (
    <div className="section_container">
      <Link className="section_link" to={"/HotelMahuida/hospedaje"}>
        <img className="section_image" src={Habitacion} alt="Hospedaje" />
        <h2 className="section_title section_title_hospedaje">Hospedaje</h2>
      </Link>

      <Link className="section_link" to={"/HotelMahuida/gastronomia"}>
        <img className="section_image" src={Comida} alt="Gastronomía" />
        <h2 className="section_title section_title_gastronomía">Gastronomía</h2>
      </Link>
    </div>
  );
};
