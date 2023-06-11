import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Card from "../Items/Card";

import Data from "../Items/dataSkills.json";

const Carrousel = (props) => {
  const { leng, idioma } = props;
  const { skill } = Data;
  let loaded = true;

  //hook
  let [pos, setPos] = useState(0);

  const [value, setValue] = useState(false);
  const animation = useAnimation();

  const opacityR = useAnimation();
  const opacityL = useAnimation();

  useEffect(() => {
    if (pos != 0) {
      animation.start({
        x: `${50 * pos}%`,
        transition: {
          duration: 1.3,
          type: "spring",
        },
      });
      if ((pos = -1)) {
        opacityR.start({
          opacity: 0,
          display: "none",
        });
        opacityL.start({
          opacity: 1,
          display: "flex",
        });
      } else if ((pos = 0)) {
        opacityR.start({
          opacity: 1,
          display: "flex",
        });
        opacityL.start({
          opacity: 0,
          display: "none",
        });
      }
    }
  });

  /*const slide = () => {
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
  };*/

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
          <Card data={skill[leng].data[0]} />
          <Card data={skill[leng].data[1]} />
          <Card data={skill[leng].data[2]} />
          <Card data={skill[leng].data[3]} />
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
