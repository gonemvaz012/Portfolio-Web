import React from "react";
import SectionPorfolio from "./subcomponents/SectionPorfolio";
import SectionSkills from "./subcomponents/SectionSkills";
import SideBar from "./subcomponents/SideBar";
import SectionContact from "./subcomponents/SectionContact";

import { useInView } from "react-intersection-observer";

import "./Css/Main.css";
import { useAnimation } from "framer-motion";

const Main = () => {
  const [ref, inView] = useInView();
  const photoAnima = useAnimation();

  return (
    <main className="main" ref={ref}>
      <section className="section-aboutMe">
        <SideBar />
        <SectionSkills inView={inView} />
      </section>
      <SectionPorfolio />
      <SectionContact />
    </main>
  );
};

export default Main;
