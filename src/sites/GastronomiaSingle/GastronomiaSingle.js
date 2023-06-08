import React from "react";
import "./GastronomiaSingle.css";
import Desayuno1 from "../../images/Comida1.jpg";
import Desayuno2 from "../../images/Comida2.jpg";
import Desayuno3 from "../../images/Comida3.jpg";
import Desayuno4 from "../../images/Comida4.jpg";
import Desayuno5 from "../../images/Comida5.jpg";
import Comida2 from "../../images/Lasaña.jpg";
import Comida3 from "../../images/PerasAlMalbec.jpg";
import Comida4 from "../../images/Estofado.jpg";
import Comida5 from "../../images/Lentejas.jpg";
import Comida6 from "../../images/PolloConPapas.jpg";
import Comida7 from "../../images/HumitaEnChalaVegana.jpg";
import { Link } from "react-router-dom";

export const GastronomiaSingle = () => {
  const urlSearchParams = window.location.pathname;
  const idArr = Number(
    urlSearchParams.replace("/HotelMahuida/gastronomia/", "")
  );

  const gastronomía = [
    {
      id: 1,
      image: [
        { src: Desayuno1 },
        { src: Desayuno2 },
        { src: Desayuno3 },
        { src: Desayuno4 },
        { src: Desayuno5 },
      ],
      title: "Desayuno tipo continental",
      price: 11111,
    },
    {
      id: 2,
      image: [
        { title: "Lasaña", src: Comida2 },
        { title: "Peras Al Malbec", src: Comida3 },
        { title: "Estofado", src: Comida4 },
      ],
      title: "Menu del día",
      price: 111111,
    },
    {
      id: 3,
      image: [
        { title: "Lasaña", src: Comida5 },
        { title: "Lasaña", src: Comida6 },
      ],
      title: "Menu apto para celiacos",
      price: 111111,
    },
    {
      id: 4,
      image: [{ title: "Lasaña", src: Comida7 }],
      title: "Opciones veganas",
      price: 11111,
    },
  ];
  const gastronomiaSelect = gastronomía.filter(
    (gastronomía) => gastronomía.id === idArr
  );
  const images = gastronomiaSelect.map(
    (gastronomiaSingle) => gastronomiaSingle.image
  );

  const title = gastronomiaSelect.map(
    (gastronomiaSingle) => gastronomiaSingle.title
  );

  return (
    <div className="gastronomia_single_container">
      <div className="gastronomia_single_image_container">
        <Link to={"/HotelMahuida/gastronomia"} className="boton verde">
          Volver
        </Link>
        <p className="gastronomia_single_pathname">
          INICIO
          {`${window.location.pathname}/${title}`.toUpperCase()}
        </p>
        <div className="images_container">
          {images[0].map((image, i) => (
            <div className="gastronomia_images_container" key={i}>
              <h2>{image.title}</h2>
              <img
                className="gastronomia_single_image"
                src={image.src}
                alt={image.title}
              />
            </div>
          ))}
        </div>
      </div>
      {idArr === 1 ? (
        <h2>
          El desayuno tipo continental viene incluido con el alquiler de la
          habitación
        </h2>
      ) : (
        <div className="gastronomia_single_price_container">
          {/* <span className="gastronomia_single_price">
            $
            {gastronomiaSelect.map(
              (gastronomiaSingle) => gastronomiaSingle.price
            )}
          </span>
          <span className="gastronomia_single_cuote">{`3 cuotas sin interés de $${(
            gastronomiaSelect.map(
              (gastronomiaSingle) => gastronomiaSingle.price
            ) / 3
          ).toFixed(2)}`}</span>
          <p>
            Para poder reservar la habitación, es necesario que usted nos
            contacte mediante el siguiente botón
          </p> */}
          <Link
            to={`https://wa.me/${process.env.REACT_APP_NUMBER_PHONE}`}
            className="boton verde"
          >
            COMPRAR
          </Link>
        </div>
      )}
    </div>
  );
};
