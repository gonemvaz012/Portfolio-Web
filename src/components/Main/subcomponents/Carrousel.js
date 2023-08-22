import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Card from "../Items/Card";

import Data from "../Items/dataSkills.json";
import { useTranslateContext } from "../../Context/translateContext";

const Carrousel = () => {
  //Contexto para cambiar idioma
  const { contextTranslate } = useTranslateContext();
  const { skill } = Data;
  let idioma =
    contextTranslate === "ES" ? Data.skill[0].data : Data.skill[1].data;
  //Contexto para cambiar idioma

  //hooks
  const [pos, setPos] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [length, setLength] = useState(2);
  const [porcent, setPorcent] = useState(50);
  //animaciones de botones y carrousel
  const animation = useAnimation();
  const opacityR = useAnimation();
  const opacityL = useAnimation();

  useEffect(() => {
    //condición para cambiar tamaño de carrusel
    if (windowWidth <= 615) {
      setLength(4);
      setPorcent(25);
    } else {
      setLength(2);
      setPorcent(50);
    }
    animation.start({
      x: `${porcent * pos}%`,
      transition: {
        duration: 1.3,
        type: "spring",
      },
    });

    if (pos === -(length - 1)) {
      opacityR.start({
        opacity: 0,
        display: "none",
      });
      opacityL.start({
        opacity: 1,
        display: "flex",
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
      opacityR.start({
        opacity: 1,
        display: "flex",
      });
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
  }, [pos, animation, opacityL, opacityR, windowWidth, length, porcent]);

  return (
    <div className="skills__carrousel">
      <div className="skills__slideL">
        <motion.span
          className="skills__arrowL"
          initial={{ opacity: 0, display: "none" }}
          onClick={() => setPos(pos + 1)}
          animate={opacityL}
        >
          <i className="fa-solid fa-circle-arrow-left"></i>
        </motion.span>
      </div>
      <div className="skills__carrousel__screen">
        <motion.div className="skills__carrousel__view" animate={animation}>
          <Card data={idioma[0]} />
          <Card data={idioma[1]} />
          <Card data={idioma[2]} />
          <Card data={idioma[3]} />
        </motion.div>
      </div>
      <div className="skills__slideR">
        <motion.span
          className="skills__arrowR"
          onClick={() => setPos(pos - 1)}
          animate={opacityR}
        >
          <i className="fa-solid fa-circle-arrow-right"></i>
        </motion.span>
      </div>
    </div>
  );
};

export default Carrousel;
