import React from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  const listas = [
    "Energía 100% de fuentes renovables",
    "Paneles solares para calentar el agua",
    "El agua de lluvia es reutilizada para regar nuestros jardines",
    "Electrodomésticos clase A (tecnologías con ahorro",
    "No utilización de plásticos de 1 solo uso",
    "Reciclaje de papeles en el sector administrativo",
    "Separación de basura y compost",
  ];
  return (
    <div className="about_container">
      <div className="about_title_container">
        <h2 className="about_title">SOMOS UN HOTEL ECOLÓGICO</h2>
      </div>
      <div className="about_list_container">
        <p>
          Para ser amigables con el ambiente y poder devolver algo de lo que nos
          dá, estamos comprometidos con:
        </p>
        <ul>
          {listas.map((lista, i) => (
            <li className="about_item" key={i}>
              {lista}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
