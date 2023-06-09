import React from "react";
import "./Gastronomía.css";
import Comida1 from "../../images/Comida1.jpg";
import Comida2 from "../../images/Lasaña.jpg";
import Comida3 from "../../images/PerasAlMalbec.jpg";
import Comida4 from "../../images/Estofado.jpg";
import Comida5 from "../../images/Lentejas.jpg";
import Comida6 from "../../images/PolloConPapas.jpg";
import Comida7 from "../../images/HumitaEnChalaVegana.jpg";
import { Link } from "react-router-dom";

export const Gastronomía = () => {
  const Gastronomía = [
    {
      id: 1,
      image: [Comida1],
      title: "Desayuno tipo continental",
      price: 11111,
    },
    {
      id: 2,
      image: [Comida2, Comida3, Comida4],
      title: "Menú del día",
      price: 111111,
    },
    {
      id: 3,
      image: [Comida5, Comida6],
      title: "Menú apto para celiacos",
      price: 111111,
    },
    {
      id: 4,
      image: [Comida7],
      title: "Opciones veganas",
      price: 11111,
    },
  ];

  return (
    <>
      <div className="gastronomía_pathname">
        <p className="pathname">
          INICIO{window.location.pathname.toLocaleUpperCase()}
        </p>
      </div>
      <div className="gastronomía_container">
        {Gastronomía.map((Gastronomía, i) => (
          <div className="card_container" key={i}>
            <div className="card_image_container">
              <img
                className="card_image"
                src={`${Gastronomía.image[0]}`}
                alt={Gastronomía.title}
              />
            </div>
            <div className="card_text_container">
              <p className="card_title">{Gastronomía.title}</p>
              {/* <span className="card_price">${Gastronomía.price}</span>
              <span className="card_cuote">{`3 cuotas sin interés de $${(
                Gastronomía.price / 3
              ).toFixed(2)}`}</span> */}
              <Link
                className="boton verde"
                to={`/HotelMahuida/gastronomia/${Gastronomía.id}`}
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
