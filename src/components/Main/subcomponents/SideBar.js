import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../../index.css";
import "../Css/sideBar.css";

const SideBar = (props) => {
  const { leng, idioma } = props;
  const { scrollYProgress } = useScroll();
  const linkRef = useRef(null);

  //funcion para descargar cv
  function descargar() {
    linkRef.current.click();
  }
  //foto perfil
  const PhotoP = (prop) => {
    const { speed } = prop;
    const xvalue = useTransform(scrollYProgress, [0, 0.3], [0, 30 * speed]);
    return (
      <motion.div className="photo-Container__div" style={{ x: xvalue }}>
        <img
          className="photo-Container__div__img"
          src="../img/fotoHome2.jpg"
          alt="fotoPorfolio"
        ></img>
      </motion.div>
    );
  };

  return (
    <aside className="aside">
      <div className="photo-Container">
        <PhotoP speed={-11} />
      </div>
      <div className="text-container">
        <motion.h1
          className="text-container__h1"
          initial={{ opacity: 0, x: `-10%` }}
          whileInView={{ opacity: 1, x: `0%` }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          {idioma.sidebar[leng].title}
        </motion.h1>
        <motion.p
          className="text-container__p"
          initial={{ opacity: 0, x: `-10%` }}
          whileInView={{ opacity: 1, x: `0%` }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
        >
          {idioma.sidebar[leng].description}
        </motion.p>
        <button id="btn-download" onClick={descargar}>
          {idioma.sidebar[leng].btnCv}
        </button>
        <a
          href="../prueba.pdf"
          download="GonzaloVazquez"
          hidden
          ref={linkRef}
        ></a>
      </div>
    </aside>
  );
};

export default SideBar;
