import { useAnimation } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Css/carrouselPf.css";

import "../Css/SectionPorfolio.css";

const CarrouselP = (props) => {
  //props and hooks
  const { leng, idioma } = props;
  const [value, setValue] = useState(false);
  const animation = useAnimation();

  const opacityR = useAnimation();
  const opacityL = useAnimation();

  const slide = () => {
    setValue(!value);
    if (!value) {
      animation.start({
        x: `-50%`,
        transition: {
          duration: 1.3,
          type: "spring",
        },
      });
      opacityR.start({
        opacity: 0,
        display: "none",
      });
      opacityL.start({
        opacity: 1,
        display: "flex",
      });
    } else {
      animation.start({
        x: `0%`,
        transition: {
          duration: 2,
          type: "spring",
        },
      });
      opacityR.start({
        opacity: 1,
        display: "flex",
      });
      opacityL.start({
        opacity: 0,
        display: "none",
      });
    }
  };

  return (
    <div className="carrouselPf">
      <motion.span
        className="carrouselPf__arrowL"
        initial={{ opacity: 0, display: "none" }}
        onClick={() => slide()}
        animate={opacityL}
      >
        <i className="fa-solid fa-circle-arrow-left"></i>
      </motion.span>

      <div className="carrouselPf__screen">
        <motion.div className="carrouselPf__view" animate={animation}>
          {/* DESCRIPTION PROYECTO*/}
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
                {idioma.proyect[leng].description}
                <br></br>
                <br></br>
                {idioma.proyect[leng].description2}
              </p>
              <button className="btn-enter">
                {idioma.proyect[leng].btnGo}
              </button>
            </div>
          </div>
          {/*IMAGEN CERTIFICADO*/}
          <div className="carrouselPf__img-ctr">
            <img src="../img/certificado.jpg" alt="" />
          </div>
        </motion.div>
      </div>

      <motion.span
        className="carrouselPf__arrowR"
        onClick={() => slide()}
        animate={opacityR}
      >
        <i className="fa-solid fa-circle-arrow-right"></i>
      </motion.span>
    </div>
  );
};

export default CarrouselP;
