import React from "react";
import Skills from "./Items/Skills";
import Spinner from "./Items/Spinner";
import Tools from "./Items/Tools";

import Data from "./Items/dataSkills.json";
import "./Css/sectionSkills.css";

const SectionSkills = () => {
  const { skill } = Data;
  console.log(skill[0].name);
  return (
    <section className="sectionSkills">
      <div className="skills__title-ctr">
        <h2 className="skills__title-ctr__h2">SKILLS</h2>
      </div>
      <div className="skills__border">
        <div className="skills__carrousel">
          <Skills data={skill[0]} />
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
