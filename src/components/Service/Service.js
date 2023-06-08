import React from "react";
import "./Service.css";

export const Service = () => {
  const Services = [
    "Restaurante(Apto celíacos,veganos...",
    "Transfer in/out desde el aeropuerto",
    "Lavandería",
    "Servicio a cuartos",
    "Descuentos adicionales en servicios dentro de Potrerillos",
    "Estacionamiento",
    "Wifi",
    "Petfriendly",
  ];
  return (
    <div className="service_container">
      <div className="service_title_container">
        <h2 className="service_title">¿QUE SERVICIOS OFRECEMOS?</h2>
      </div>
      <div className="service_list_container">
        <ul>
          {Services.map((service, i) => (
            <li className="service_item" key={i}>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
