import React from "react";
import Tools from "./Tools";
import "../../../index.css";
import "../Css/sectionSkills.css";
import Skill from "./Skill";
import Aptitudes from "./Aptitudes";

const SectionSkills = (props) => {
  const { inView, leng, idioma } = props;

  return (
    <section className="sectionSkills" id="skills">
      <Skill
        inView={inView}
        animation={{ x: 20, y: 0 }}
        leng={leng}
        idioma={idioma}
      />
      <Tools
        inView={inView}
        animation={{ x: 0, y: -30 }}
        leng={leng}
        idioma={idioma}
      />
      <Aptitudes
        inView={inView}
        animation={{ x: 0, y: 40 }}
        leng={leng}
        idioma={idioma}
      />
    </section>
  );
};

export default SectionSkills;
