import { animate, motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import "../Css/carrouselPf.css";

const CarrouselPf = (props) => {
  //props and hooks
  const { images } = props;
  let [x, setX] = useState(0);
  let [pos, setPos] = useState(-1);
  const animationR = useAnimation();
  //style propiety
  let style;
  //variables
  let amount = images.length;
  let porcent = 100 / amount;
  let width = 100 * images.length;

  //funcion para modificar la posicion en la que se desplaza elemento derecha

  const slideR = () => {
    if (pos > -amount) {
      setPos(pos - 1);
      setX(pos * porcent);
    }
    if (pos === -(amount - 1)) {
      animationR.start({
        opacity: 0,
        display: "none",
        transition: {
          duration: 0.3,
        },
      });
    }
    console.log(pos);
  };

  const slidel = () => {
    if (pos < amount) {
      setPos(pos + 1);
      setX(pos * porcent);
    }
    if (pos === -3) {
      animationR.start({
        opacity: 0,
        display: "none",
        transition: {
          duration: 0.3,
        },
      });
    }
    console.log(pos);
  };

  //genera el div con  la imagen
  const Imagen = (props) => {
    const { src } = props;
    return (
      <div className="carrouselPf__img-ctr">
        <img src={src} alt="" />
      </div>
    );
  };

  //retorna la lista de imagenes del array images pasado por props
  const Images = () => {
    const [img, setImg] = useState(images);

    return (
      <motion.div
        className="carrouselPf__view"
        animate={{ x: `${x}%` }}
        style={{ width: `${width}%` }}
      >
        {img.map((imagen) => {
          return <Imagen key={imagen.id} src={imagen.src} />;
        })}
      </motion.div>
    );
  };

  return (
    <div className="carrouselPf">
      <motion.span
        className="carrouselPf__arrowL"
        initial={{ opacity: 0, display: "none" }}
        onClick={() => slideR()}
        style={style}
      >
        <i className="fa-solid fa-circle-arrow-left"></i>
      </motion.span>
      <div className="carrouselPf__screen">
        <Images />
      </div>
      <motion.span
        className="carrouselPf__arrowR"
        onClick={() => slideR()}
        animate={animationR}
      >
        <i className="fa-solid fa-circle-arrow-right"></i>
      </motion.span>
    </div>
  );
};

export default CarrouselPf;
