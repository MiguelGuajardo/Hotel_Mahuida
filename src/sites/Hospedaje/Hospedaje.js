import React from "react";
import "./Hospedaje.css";
import Habitacion1 from "../../images/Habitacion1.jpeg";
import Habitacion2 from "../../images/Habitacion2.jpeg";
import { Link } from "react-router-dom";

export const Hospedaje = () => {
  const hospedaje = [
    {
      id: 1,
      image: Habitacion1,
      title: "Suite con vista al dique",
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
  return (
    <>
      <div className="hospedaje_pathname">
        <p className="pathname">
          INICIO{window.location.pathname.toLocaleUpperCase()}
        </p>
      </div>
      <div className="hospedaje_container">
        {hospedaje.map((hospedaje) => (
          <div className="card_container" key={hospedaje.id}>
            <div className="card_image_container">
              <img
                className="card_image"
                src={`${hospedaje.image}`}
                alt={hospedaje.title}
              />
            </div>
            <div className="card_text_container">
              <p className="card_title">{hospedaje.title}</p>

              <Link
                className="boton verde"
                to={`/HotelMahuida/hospedaje/${hospedaje.id}`}
              >
                VER MÁS
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
