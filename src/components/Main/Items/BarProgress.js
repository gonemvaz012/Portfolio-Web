import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BarProgress = (props) => {
  let [count, setCount] = useState(0);
  const animation = useAnimation();
  const { porcent, inView } = props;
  const progress = 100 - porcent;

  const incrementPer = () => {
    let intervalId = setInterval(() => {
      if (count > porcent) {
        clearInterval(intervalId);
      } else {
        setCount(count++);
      }
    }, 30);
  };

  useEffect(() => {
    if (inView) {
      incrementPer();
      animation.start({
        x: `-${progress}%`,
        transition: {
          duration: 3,
          type: "tween",
        },
      });
    }
    if (!inView) {
      setCount(0);
      animation.start({
        x: `-100%`,
      });
    }
  }, [inView, animation]);

  return (
    <div className="aptitudes__items__progress">
      <div className="aptitudes__items__bar">
        <motion.div
          className="aptitudes__items__barProgress"
          animate={animation}
        ></motion.div>
      </div>
      <div className="aptitudes__items__porcent">
        <p className="aptitudes__items__porcent__p">{count}%</p>
      </div>
    </div>
  );
};

export default BarProgress;
