import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../../index.css";
import "../Css/sideBar.css";
import Lenguage from "../../Context/lenguage.json";
import { useTranslateContext } from "../../Context/translateContext";

const SideBar = () => {
  //Contexto para cambiar idioma
  const { contextTranslate } = useTranslateContext();
  let idioma =
    contextTranslate === "ES" ? Lenguage.sidebar.ES : Lenguage.sidebar.ENG;
  //Contexto para cambiar idioma

  //Scroll FOTO
  const { scrollYProgress } = useScroll();
  const linkRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [y1, setY1] = useState(0.3);
  const [y2, setY2] = useState(30);
  const [speedScroll, setSpeedScroll] = useState(-11);

  useEffect(() => {
    if (windowWidth <= 990) {
      setY1(0.15);
      setY2(20);
      setSpeedScroll(-17);
    } else {
      setY1(0.3);
      setY2(30);
      setSpeedScroll(-11);
    }
    //funcion para actualizar el ancho de la pantalla cuando cambia
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Agregar el listener para manejar el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  //foto perfil
  const PhotoP = (prop) => {
    const { speed } = prop;
    const xvalue = useTransform(scrollYProgress, [0, y1], [0, y2 * speed]);
    return (
      <motion.div className="photo-Container__div" style={{ x: xvalue }}>
        <img
          className="photo-Container__div__img"
          src="../img/PORTRAIT.jpg"
          alt="fotoPorfolio"
        ></img>
      </motion.div>
    );
  };
  //Scroll FOTO

  //funcion para descargar cv
  function descargar() {
    linkRef.current.click();
  }

  return (
    <aside className="aside">
      <div className="photo-Container">
        <PhotoP speed={speedScroll} />
      </div>
      <div className="text-container">
        <motion.h1
          className="text-container__h1"
          initial={{ opacity: 0, x: `-10%` }}
          whileInView={{ opacity: 1, x: `0%` }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          {idioma.title}
        </motion.h1>
        <motion.p
          className="text-container__p"
          initial={{ opacity: 0, x: `-10%` }}
          whileInView={{ opacity: 1, x: `0%` }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
        >
          {idioma.description}
        </motion.p>
        <button id="btn-download" onClick={descargar}>
          {idioma.btnCv}
        </button>
        <a
          href="../GonzaloVazquez-CV.pdf"
          download="GonzaloVazquez"
          hidden
          ref={linkRef}
        ></a>
      </div>
    </aside>
  );
};

export default SideBar;
