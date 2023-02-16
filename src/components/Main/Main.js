import React, { useEffect } from "react";
import SectionPorfolio from "./subcomponents/SectionPorfolio";
import SectionSkills from "./subcomponents/SectionSkills";
import SideBar from "./subcomponents/SideBar";

import { useInView } from "react-intersection-observer";

import "./Css/Main.css";
import { useAnimation } from "framer-motion";

const Main = () => {
  const [ref, inView] = useInView();
  const photoAnima = useAnimation();

  //useEffect de Main
  useEffect(() => {
    if (inView) {
      photoAnima.start({
        //animacion de fotoPerfil cuando entra inView
        x: `0%`,
        transition: {
          type: "spring",
          delay: 0.3,
          duration: 4,
        },
      });
    }
    if (!inView) {
      photoAnima.start({
        //animacion de fotoPerfil cuando sale inView
        x: `110%`,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    }
  }, [inView]);

  return (
    <main className="main" ref={ref}>
      <section className="section-aboutMe">
        <SideBar photoAnima={photoAnima} />
        <SectionSkills inView={inView} />
      </section>
      <SectionPorfolio />
    </main>
  );
};

export default Main;
