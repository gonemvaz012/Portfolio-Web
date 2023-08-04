import React from "react";
import { motion } from "framer-motion";
import "../Css/card.css";

const Card = (props) => {
  const {
    data: { name, title, description, icon },
  } = props;

  return (
    <motion.div
      className="card__ctr"
      initial={{ opacity: 0, y: `5%` }}
      whileInView={{ opacity: 1, y: `0%` }}
      transition={{ duration: 0.6, type: "tween", delay: 0.2 }}
    >
      <div className="card__icon">
        <img className="card__icon__img" src={icon} alt=""></img>
      </div>

      <h5 className="card__title">{title}</h5>
      <h2 className="card__name">{name}</h2>
      <p className="card__description">{description}</p>

      {/*<div className="skills__items">
        <div className="skills__items__ctn">
          <p className="skills__items__p">Java</p>
        </div>
        <div className="skills__items__bar skills__items__bar--40"></div>
        <p className="skills__items__porcent">0%</p>
      </div>*/}
    </motion.div>
  );
};

export default Card;
