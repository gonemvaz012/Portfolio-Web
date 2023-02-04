import React from "react";

import "../Css/skill.css";

const Skills = (props) => {
  const {
    data: { name, title, description, icon },
  } = props;
  console.log("name: ", name);
  return (
    <div className="skills__ctr">
      <div className="skills__icon">
        <img
          className="skills__icon__img"
          src="../img/icons/JavaW.png"
          alt=""
        ></img>
      </div>

      <h5 className="skills__title">{title}</h5>
      <h2 className="skills__name">{name}</h2>
      <p className="skills__description">{description}</p>

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

export default Skills;
