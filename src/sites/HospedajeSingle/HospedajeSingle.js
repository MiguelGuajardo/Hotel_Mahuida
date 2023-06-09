import React from "react";
import Habitacion1 from "../../images/Habitacion1.jpeg";
import Habitacion2 from "../../images/Habitacion2.jpeg";
import "./HospedajeSingle.css";
import { Link } from "react-router-dom";

export const HospedajeSingle = () => {
  const urlSearchParams = window.location.pathname;
  const idArr = Number(urlSearchParams.replace("/HotelMahuida/hospedaje/", ""));

  const hospedaje = [
    {
      id: 1,
      image: Habitacion1,
      title: "Habitación superior",
      price: 20000,
    },
    {
      id: 2,
      image: Habitacion1,
      title: "Habitaciones triples/cuádruples",
      price: 17000,
    },
    {
      id: 3,
      image: Habitacion2,
      title: "Habitación single",
      price: 10000,
    },
    {
      id: 4,
      image: Habitacion1,
      title: "Habitaciones dobles",
      price: 15000,
    },
  ];
  const hospedajeSelect = hospedaje.filter(
    (hospedaje) => hospedaje.id === idArr
  );

  return (
    <div className="hospedaje_single_container">
      <div className="hospedaje_single_image_container">
        <Link to={"/HotelMahuida/hospedaje"} className="boton verde">
          Volver
        </Link>
        <p className="hospedaje_single_pathname">
          INICIO
          {`${window.location.pathname}/${hospedajeSelect.map(
            (hospedajeSingle) => hospedajeSingle.title
          )}`.toUpperCase()}
        </p>
        <img
          className="hospedaje_single_image"
          src={hospedajeSelect.map((hospedajeSingle) => hospedajeSingle.image)}
          alt={hospedajeSelect.map((hospedajeSingle) => hospedajeSingle.title)}
        />
      </div>
      <div className="hospedaje_single_price_container">
        <h2 className="hospedaje_single_title">
          {hospedajeSelect.map((hospedajeSingle) => hospedajeSingle.title)}
        </h2>
        <span className="hospedaje_single_price">
          ${hospedajeSelect.map((hospedajeSingle) => hospedajeSingle.price)}
        </span>
        <span className="hospedaje_single_cuote">{`3 cuotas sin interés de $${(
          hospedajeSelect.map((hospedajeSingle) => hospedajeSingle.price) / 3
        ).toFixed(2)}`}</span>
        <p>
          Para poder reservar la habitación, es necesario que usted nos contacte
          mediante el siguiente botón
        </p>
        <Link
          to={`https://wa.me/${process.env.REACT_APP_NUMBER_PHONE}`}
          className="boton verde"
        >
          ALQUILAR
        </Link>
      </div>
    </div>
  );
};
