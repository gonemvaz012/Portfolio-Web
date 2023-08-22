import React, { useEffect } from "react";
import Carrousel from "./Carrousel";
import { motion, useAnimation } from "framer-motion";
import { useTranslateContext } from "../../Context/translateContext";
import Lenguage from "../../Context/lenguage.json";

const Skill = (props) => {
  //contexto para cambiar idioma
  const { contextTranslate } = useTranslateContext();
  let idioma =
    contextTranslate === "ES" ? Lenguage.skills[0] : Lenguage.skills[1];
  //contexto para cambiar idioma

  const { inView, animation } = props;
  const { x, y } = animation;
  const skill = useAnimation();

  //funcion que ejecuta la animacion
  const runInView = (state, x, y) => {
    if (state) {
      skill.start({
        x: `0%`,
        y: `0%`,
        transition: {
          x: { duration: 1 },
          type: "spring",
        },
      });
    } else {
      skill.start({
        x: `${x}%`,
        y: `${y}%`,
        transition: {
          x: { duration: 0.3 },
        },
      });
    }
  };
  //useEffect que detecta si está inView
  useEffect(() => {
    if (inView) {
      runInView(true, 0, 0);
    } else {
      runInView(false, x, y);
    }
  }, [inView]);
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      animate={skill}
    >
      <div className="skills__title-ctr">
        <h2 className="skills__title-ctr__h2">{idioma.title}</h2>
      </div>
      <div className="skills__border">
        <Carrousel />
      </div>
    </motion.div>
  );
};

export default Skill;
