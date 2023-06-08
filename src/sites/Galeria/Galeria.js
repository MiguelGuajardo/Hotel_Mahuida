import React from "react";
import "./Galeria.css";
import Galeria1 from "../../images/Galeria1.jpg";
import Galeria2 from "../../images/Galeria2.jpg";
import Galeria3 from "../../images/Galeria3.jpg";
import Galeria4 from "../../images/Galeria4.jpg";
import Galeria5 from "../../images/Galeria5.jpg";
import Galeria6 from "../../images/Galeria6.jpg";
import Galeria7 from "../../images/Galeria7.jpg";
import Galeria8 from "../../images/Galeria8.jpg";
import Galeria9 from "../../images/Galeria9.jpg";
import Galeria10 from "../../images/Galeria10.jpg";
import Galeria11 from "../../images/Galeria11.jpg";
import Galeria12 from "../../images/Galeria12.jpg";
import Galeria13 from "../../images/Galeria13.jpg";
import Galeria14 from "../../images/Galeria14.jpg";
import Galeria15 from "../../images/Galeria15.jpg";

export const Galeria = () => {
  const images = [
    { src: Galeria1 },
    { src: Galeria2 },
    { src: Galeria3 },
    { src: Galeria4 },
    { src: Galeria5 },
    { src: Galeria6 },
    { src: Galeria7 },
    { src: Galeria8 },
    { src: Galeria9 },
    { src: Galeria10 },
    { src: Galeria11 },
    { src: Galeria12 },
    { src: Galeria13 },
    { src: Galeria14 },
    { src: Galeria15 },
  ];
  return (
    <div className="gallery_container">
      {images.map((image, i) => (
        <div key={i} className="gallery_item">
          <img src={image.src} alt="" className="gallery_img" />
        </div>
      ))}
    </div>
  );
};
