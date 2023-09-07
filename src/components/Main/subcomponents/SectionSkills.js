import React from "react";
import Tools from "./Tools";
import "../../../index.css";
import "../Css/sectionSkills.css";
import Skill from "./Skill";
import Aptitudes from "./Aptitudes";

const SectionSkills = (props) => {
  const { inView } = props;

  return (
    <section className="sectionSkills" id="skills">
      <Skill inView={inView} animation={{ x: 20, y: 0 }} />
      <Tools inView={inView} animation={{ x: 0, y: -30 }} />
      <Aptitudes inView={inView} animation={{ x: 0, y: 40 }} />
    </section>
  );
};

export default SectionSkills;
