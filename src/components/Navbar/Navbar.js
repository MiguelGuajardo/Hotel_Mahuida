import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Logo = require("../../images/Logo.jpg");

export const Navbar = () => {
  const links = [
    { title: "INICIO" },
    { title: "HOSPEDAJE" },
    { title: "GASTRONOMIA" },
    { title: "GALERIA" },
  ];
  return (
    <div className="navbar_container">
      <div className="navbar_links">
        <img className="navbar_logo" src={Logo} alt="Logo Hotel Mahuida" />
        {links.map((link, i) => (
          <Link
            className="navbar_link"
            key={i}
            to={`/HotelMahuida/${link.title.toLowerCase()}`}
          >{`${link.title}`}</Link>
        ))}
      </div>
    </div>
  );
};
