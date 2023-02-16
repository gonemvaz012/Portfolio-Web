import React from "react";
import { motion } from "framer-motion";
import "../Css/sideBar.css";

const SideBar = (props) => {
  const { photoAnima } = props;

  return (
    <aside className="aside">
      <div className="photo-Container">
        <motion.div className="photo-Container__div" animate={photoAnima}>
          <img
            className="photo-Container__div__img"
            src="../img/fotoHome2.jpg"
            alt="fotoPorfolio"
          ></img>
        </motion.div>
      </div>
      <div className="text-container">
        <motion.h1
          className="text-container__h1"
          initial={{ opacity: 0, x: `-10%` }}
          whileInView={{ opacity: 1, x: `0%` }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          SOBRE MI
        </motion.h1>
        <motion.p
          className="text-container__p"
          initial={{ opacity: 0, x: `-10%` }}
          whileInView={{ opacity: 1, x: `0%` }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
        >
          Soy una persona con un gran interes por aprender las nuevas
          tecnologías y herramientas que se presentan a diario en el entorno de
          la programacion IT, asi como también, el interes de desarrollar de
          manera constante las habilidades blandas necesarías para llevar a cabo
          un buen trabajo en equipo. Ya sea colabarando o aportando ideas que
          busquen solucionar los problemas del equipo.
        </motion.p>
        <button id="btn-download">Descargar CV</button>
      </div>
    </aside>
  );
};

export default SideBar;
