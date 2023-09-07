import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

import "../Css/SectionPorfolio.css";
import CarrouselP from "../Items/CarrouselP";
import { useTranslateContext } from "../../Context/translateContext";
import Lenguage from "../../Context/lenguage.json";

const SectionPorfolio = (props) => {
  //contexto para cambiar idioma
  const { contextTranslate } = useTranslateContext();
  let idioma =
    contextTranslate === "ES" ? Lenguage.proyect[0] : Lenguage.proyect[1];
  //contexto para cambiar idioma
  const { scrollYProgress } = useScroll();

  //titulo Porfolio
  const TituloPf = (prop) => {
    const { speed } = prop;
    const yvalue = useTransform(
      scrollYProgress,
      [0.4, 0.5], //0, 0.6 , 0.8
      [40, 50 * speed] //0, 60 , 80
    );
    return (
      <motion.h1
        className="sectionPf__h1 layer1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{ y: -yvalue }}
      >
        {idioma.title}
      </motion.h1>
    );
  };
  //titulo Porfolio

  const { ref, inView } = useInView();
  const fadeInPf = useAnimation();
  const fadeInPfV = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInPf.start({
        opacity: 1,
        y: `0%`,
        transition: {
          duration: 1.3,
          delay: 1,
        },
      });
    } else {
      fadeInPf.start({
        opacity: 0,
        y: `10%`,
        transition: {
          duration: 0.3,
          delay: 0,
        },
      });
    }
  }, [inView, fadeInPf, fadeInPfV]);

  //creo el fondo condor parallax scroll
  const Porfoliobg = (props) => {
    const { img, speed } = props;

    const yValue = useTransform(
      scrollYProgress,
      [0, 0.6, 1],
      [0, 60, 100 * speed]
    );

    return (
      <motion.img
        className="sectionPf__bg layer3 condor"
        src={img}
        alt=""
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1 }}
        style={{ y: yValue }}
      ></motion.img>
    );
  };
  //creo el fondo condor parallax scroll

  //SECTION PORFOLIO SECTION PORFOLIO
  return (
    <section className="sectionPf" id="portfolio">
      <img
        src="/img/bg/cerros.png"
        className="sectionPf__bg layer4"
        alt=""
      ></img>
      <Porfoliobg img="/img/bg/Condor.png" speed={-3.3} />
      <TituloPf speed={1.5} />
      <motion.div
        className="sectionPf__works"
        ref={ref}
        initial={{ opacity: 0, y: `-10%` }}
        animate={fadeInPf}
      >
        <CarrouselP idioma={idioma} />
      </motion.div>
    </section>
  );
};

export default SectionPorfolio;
