import React from "react";

import "../Css/SectionPorfolio.css";
import CarrouselP from "../Items/CarrouselP";
import DataImg from "../Items/dataImg.json";

const SectionPorfolio = () => {
  const { images } = DataImg;
  return (
    <section className="sectionPf">
      <img
        src="/img/bg/cerros.png"
        className="sectionPf__bg layer4"
        alt=""
      ></img>
      <img
        src="/img/bg/Condor.png"
        className="sectionPf__bg layer3"
        alt=""
      ></img>
      <h1 className="sectionPf__h1 layer1">PORFOLIO</h1>
      <div className="sectionPf__works__ctr">
        <div className="sectionPf__works">
          <CarrouselP />
        </div>
        <div className="sectionPf-video">
          <div className="sectionPf-video__screen"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionPorfolio;
