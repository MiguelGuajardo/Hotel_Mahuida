import React from "react";
import { Slider } from "../../components/Slider/Slider";
import { Section } from "../../components/Section/Section";
import { InfoCompra } from "../../components/InfoCompra/InfoCompra";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Service } from "../../components/Service/Service";
import { Maps } from "../../components/Maps/Maps.js";

export const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <InfoCompra />
      <Service />
      <Section />
      <Maps />
    </div>
  );
};
