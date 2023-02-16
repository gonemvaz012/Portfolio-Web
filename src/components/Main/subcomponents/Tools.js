import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Tools = (props) => {
  const { inView, animation } = props;
  const { x, y } = animation;
  const tools = useAnimation();
  //funcion que ejecuta las animaciones segun el inView
  const runInView = (state, x, y) => {
    if (state) {
      tools.start({
        x: `0%`,
        y: `0%`,
        transition: {
          x: { duration: 1 },
          y: { duration: 1 },
          type: "spring",
        },
      });
    } else {
      tools.start({
        x: `${x}%`,
        y: `${y}%`,
        transition: {
          x: { duration: 0.5 },
          y: { duration: 0.3 },
        },
      });
    }
  };
  useEffect(() => {
    if (inView) {
      runInView(true, 0, 0);
    } else {
      runInView(false, x, y);
    }
  });
  return (
    <motion.div
      className="tools"
      animate={tools}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="tools__title-ctr">
        <h2 className="tools__title-ctr__h2">TOOLS</h2>
      </div>
      <div className="tools__border">
        <div className="tools__items-ctr">
          <div className="tools__items">
            <img
              src="/img/Logos/vscode.png"
              alt=""
              className="tools__items__photo"
            ></img>
            <p className="tools__items__p">Visual Studio Code</p>
          </div>
          <div className="tools__items">
            <img
              src="/img/Logos/logoIJ.png"
              alt=""
              className="tools__items__photo"
            ></img>
            <p className="tools__items__p">Intellij IDEA</p>
          </div>
          <div className="tools__items">
            <img
              src="/img/Logos/PS.png"
              alt=""
              className="tools__items__photo"
            ></img>
            <p className="tools__items__p">Photoshop</p>
          </div>
          <div className="tools__items">
            <img
              src="/img/Logos/adobeXd.png"
              alt=""
              className="tools__items__photo"
            ></img>
            <p className="tools__items__p">Adobe XD</p>
          </div>
          <div className="tools__items">
            <img
              src="/img/Logos/gitLogo.png"
              alt=""
              className="tools__items__photo"
            ></img>
            <p className="tools__items__p">GitLab - GitHub</p>
          </div>
          <div className="tools__items">
            <img
              src="/img/Logos/mysql.png"
              alt=""
              className="tools__items__photo"
            ></img>
            <p className="tools__items__p">MySQL Workbench</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tools;
