import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../Css/spinner.css";
const Spinner = (props) => {
  const { rotationR, rotationL } = props;

  let [count, setCount] = useState(0);

  const [ref, inView] = useInView();
  const animation = useAnimation();

  const cargarP = () => {
    let intervalId = setInterval(() => {
      if (count === 50) {
        clearInterval(intervalId);
      }
      setCount(count++);
    }, 30);
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        rotation: rotationR,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      if (count !== 50) {
        cargarP();
      }
    }
    if (!inView) {
      setCount((count = 0));
    }
  }, [inView]);

  return (
    <div className="circular" ref={ref}>
      <div className="inner"></div>
      <motion.div className="numb" transition={{ type: "spring" }}>
        {count}%
      </motion.div>
      <motion.div className="circle">
        <div className="bar left">
          <motion.div className="progress" animate={animation}></motion.div>
        </div>
        <div className="bar right">
          <motion.div className="progress" animate={animation}></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Spinner;
