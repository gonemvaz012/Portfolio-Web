import React from "react";

import "../Css/SectionPorfolio.css";
import CarrouselPf from "../Items/CarrouselPf";
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
          <div className="sectionPf__works__photo">
            <CarrouselPf images={images} />
          </div>
          <div className="sectionPf__works__ctnr">
            <div className="sectionPf__works__ctnr__lg">
              <img
                className="sectionPf__works__ctnr__lg__img"
                src="/img/Logos/LogoW.png"
                alt=""
              />
            </div>
            <div className="sectionPf__works__ctnr__dcrpt">
              <h5 className="sectionPf__works__ctnr__h5">Semillero Latam</h5>
              <h2 className="sectionPf__works__ctnr__h2">Mi Legado</h2>
              <p className="sectionPf__works__ctnr__p">
                Proyecto del bootcamp Semillero Latam donde desarrollé Front -
                end con HTML, CSS y JavaScript
                <br></br>
                <br></br>
                Mi legado es un espacio donde se pueden conmemorar a seres
                queridos que ya no están.
              </p>
              <button className="btn-enter">ir a Mi Legado</button>
            </div>
          </div>
        </div>
        <div className="sectionPf-video">
          <div className="sectionPf-video__screen"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionPorfolio;
