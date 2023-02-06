import React from "react";

import "../Css/card.css";

const Card = (props) => {
  const {
    data: { name, title, description, icon },
  } = props;

  return (
    <div className="card__ctr">
      <div className="card__icon">
        <img
          className="card__icon__img"
          src={icon}
          alt=""
        ></img>
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
    </div>
  );
};

export default Card;
