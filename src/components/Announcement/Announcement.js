import React from "react";
import "./Announcement.css";
import { Link } from "react-router-dom";
export const Announcement = () => {
  return (
    <div className="announcement_container">
      <div className="announcement_info">
        <span className="material-symbols-outlined announcement_icon">
          location_on
        </span>
        <div>
          <p className="announcement_icon_p">POTRERILLOS, EX RUTA 7</p>
          <p className="announcement_icon_p">MENDOZA,ARGENTINA</p>
        </div>
      </div>
      <div className="announcement_info">
        <Link
          className="link_icon"
          to={`https://wa.me/${process.env.REACT_APP_NUMBER_PHONE}`}
        >
          <i className="fab fa-whatsapp announcement_icon"></i>
          <p className="announcement_icon_p">1153450688</p>
        </Link>
      </div>
      <div className="announcement_info">
        <Link
          className="link_icon"
          to={"https://www.instagram.com/hotelmahuida/"}
        >
          <i className="fa-brands fa-instagram announcement_icon"></i>
          <p className="announcement_icon_p">@hotelmahuida</p>
        </Link>
      </div>
    </div>
  );
};
