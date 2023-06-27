import React from "react";
import SectionPorfolio from "./subcomponents/SectionPorfolio";
import SectionSkills from "./subcomponents/SectionSkills";
import SideBar from "./subcomponents/SideBar";
import SectionContact from "./subcomponents/SectionContact";

import { useInView } from "react-intersection-observer";

import "./Css/Main.css";
import { useAnimation } from "framer-motion";

const Main = (props) => {
  const { leng, idioma } = props;
  const [ref, inView] = useInView();
  const photoAnima = useAnimation();

  return (
    <main className="main" ref={ref}>
      <section className="section-aboutMe">
        <SideBar leng={leng} idioma={idioma} />
        <SectionSkills inView={inView} leng={leng} idioma={idioma} />
      </section>
      <SectionPorfolio leng={leng} idioma={idioma} />
      {/*<SectionContact leng={leng} idioma={idioma} />*/}
    </main>
  );
};

export default Main;
