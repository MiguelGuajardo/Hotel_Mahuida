import React from "react";
import "./InfoCompra.css";

export const InfoCompra = () => {
  return (
    <div className="info_container">
      <div className="info_cuotas">
        <span className="material-symbols-outlined info_icon">credit_card</span>
        <div className="info_text">
          <h2>3 CUOTAS SIN INTERÉS</h2>
          <p>Abonando con tarjetas bancarizadas</p>
        </div>
      </div>
      <div className="info_line"></div>
      <div className="info_seguro">
        <span className="material-symbols-outlined info_icon">lock</span>
        <div className="info_text">
          <h2>COMPRA SEGURA</h2>
          <p>Tus datos siempre protegidos</p>
        </div>
      </div>
    </div>
  );
};
