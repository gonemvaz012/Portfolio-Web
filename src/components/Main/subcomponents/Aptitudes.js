import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import BarProgress from "../Items/BarProgress";

const Aptitudes = (props) => {
  const { inView, animation, leng, idioma } = props;
  const { x, y } = animation;
  const aptitudes = useAnimation();
  //funcion que ejecuta las animaciones segun el inView
  const runInView = (state, x, y) => {
    if (state) {
      aptitudes.start({
        x: `0%`,
        y: `0%`,
        transition: {
          x: { duration: 1 },
          type: "spring",
        },
      });
    } else {
      aptitudes.start({
        x: `${x}%`,
        y: `${y}%`,
        transition: {
          x: { duration: 0.3 },
        },
      });
    }
  };

  useEffect(() => {
    if (inView) {
      runInView(true, 0, 0);
    } else {
      runInView(false, x, y);
    }
  }, [inView]);
  return (
    <motion.div
      className="aptitudes"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      animate={aptitudes}
    >
      <div className="aptitudes__title-ctr">
        <h2 className="aptitudes__title-ctr__h2">APTITUDES</h2>
      </div>
      <div className="aptitudes__border">
        <div className="aptitudes__items">
          <div className="aptitudes__items__ctn">
            <p className="aptitudes__items__p">{idioma.aptitude[leng].item1}</p>
          </div>
          <BarProgress porcent={40} />
          <div className="aptitudes__items__ctn">
            <p className="aptitudes__items__p">{idioma.aptitude[leng].item2}</p>
          </div>
          <BarProgress porcent={90} />
          <div className="aptitudes__items__ctn">
            <p className="aptitudes__items__p">{idioma.aptitude[leng].item3}</p>
          </div>
          <BarProgress porcent={80} />
        </div>
      </div>
    </motion.div>
  );
};

export default Aptitudes;
