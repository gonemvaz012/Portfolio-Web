import React from "react";
import Card from "./Items/Card";
import Spinner from "./Items/Spinner";
import Tools from "./Items/Tools";


import Data from "./Items/dataSkills.json";
import "./Css/sectionSkills.css";

const SectionSkills = () => {
  const { skill } = Data;
  console.log(skill[0].name);
  return (
    <section className="sectionSkills">
      <div className="skills">
        <div className="skills__title-ctr">
          <h2 className="skills__title-ctr__h2">SKILLS</h2>
        </div>
        <div className="skills__border">
          <div className="skills__carrousel">
            <div className="skills__slideL">
              <span className="skills__arrowL"><i class="fa-solid fa-circle-arrow-left"></i></span>
            </div>
            <Card data={skill[0]} />
            <Card data={skill[1]} />
            <div className="skills__slideR">
              <span className="skills__arrowR"><i class="fa-solid fa-circle-arrow-right"></i></span>
            </div>
          </div>
        </div>
      </div>

      <Tools />
      <div className="others">
        <h2 className="skills__title">APTITUDES</h2>
        <div className="skills__items">
          <p className="skills__items__p">Ingles</p>
        </div>
        <div className="skills__items">
          <p className="skills__items__p">Ingles</p>
          <Spinner rotationR={180} rotationL={180} />
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
