import { useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Css/carrouselPf.css";

import "../Css/SectionPorfolio.css";

const CarrouselP = (props) => {
  //props and hooks
  const { idioma } = props;
  const [pos, setPos] = useState(0);

  const animation = useAnimation();
  const opacityR = useAnimation();
  const opacityL = useAnimation();

  useEffect(() => {
    //condición para cambiar tamaño de carrusel
    animation.start({
      x: `${33.33 * pos}%`,
      transition: {
        duration: 1.3,
        type: "spring",
      },
    });

    if (pos === -2) {
      opacityR.start({
        opacity: 0,
        display: "none",
      });
    } else if (pos < 0) {
      opacityL.start({
        opacity: 1,
        display: "flex",
      });
      opacityR.start({
        opacity: 1,
        display: "flex",
      });
    } else {
      opacityL.start({
        opacity: 0,
        display: "none",
      });
    }
  }, [pos]);

  return (
    <div className="carrouselPf">
      <motion.span
        className="carrouselPf__arrowL"
        initial={{ opacity: 0, display: "none" }}
        onClick={() => setPos(pos + 1)}
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
                {idioma.description}
                <br></br>
                <br></br>
                {idioma.description2}
              </p>
              <button className="btn-enter">
                {idioma.btnGo}
                <a
                  className="btn-enter__link"
                  href="https://mi.legado.quinto.site/"
                  target="_blank"
                ></a>
              </button>
            </div>
          </div>
          {/*IMAGEN CERTIFICADO*/}
          <motion.div
            className="carrouselPf__img-ctr"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img src="../img/certificado.jpg" alt="" />
          </motion.div>
          <motion.div className="sectionPf-video">
            <motion.div className="sectionPf-video__screen">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Av9zPpF4UlA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.span
        className="carrouselPf__arrowR"
        onClick={() => setPos(pos - 1)}
        animate={opacityR}
      >
        <i className="fa-solid fa-circle-arrow-right"></i>
      </motion.span>
    </div>
  );
};

export default CarrouselP;
