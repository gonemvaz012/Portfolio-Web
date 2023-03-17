import React from "react";
import Navbar from "./Navbar";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  easeOut,
} from "framer-motion";

import "./Css/Header.css";

const Header = () => {
  const { scrollYProgress } = useScroll();
  //bgLayer
  const LayerBG = (props) => {
    const { src, speed, layer, alt } = props;
    const yscroll = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
    if (alt !== "montañas") {
      return (
        <motion.img
          src={src}
          className={"headerbg__img " + layer}
          alt={alt}
          style={{ y: yscroll }}
        ></motion.img>
      );
    } else {
      return (
        <motion.img
          src={src}
          className={"headerbg__img " + layer}
          alt={alt}
          style={{ y: yscroll, x: yscroll }}
        ></motion.img>
      );
    }
  };

  return (
    <header className="header">
      <Navbar />
      <section className="headerbg">
        <LayerBG
          src="/img/bg/capa4.png"
          speedY={3}
          layer="layer4"
          alt="cielo"
        />
        <LayerBG
          src="/img/bg/capa33.png"
          speed={-3}
          layer="layer3 montains"
          alt="montañas"
        />
        {/*<img src='/img/bg/capa3.png' className='headerbg__img layer3' alt='montañas'></img>*/}

        <div className="headerbg__titulo">
          <h5 className="titulo0">Mendoza, Argentina</h5>
          <motion.div
            className="titulo1-ctnr"
            initial={{ width: 5, height: 25, backgroundColor: "#13B7FF" }}
            animate={{
              opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1],
              width: "100%",
              height: 122,
              backgroundColor: "#1c1c1c90",
            }}
            transition={{
              opacity: { duration: 2 },
              width: { delay: 2, duration: 0.3, ease: easeOut },
              height: { delay: 2.5, duration: 0.7, ease: easeOut },
              backgroundColor: { delay: 3.5, duration: 1, ease: easeOut },
            }}
          >
            <motion.h1
              className="titulo1"
              initial={{ display: "none", opacity: 0 }}
              animate={{ display: "block", opacity: 1 }}
              transition={{
                display: { delay: 4, duration: 0.1, ease: easeOut },
                opacity: { delay: 5, duration: 1, ease: easeOut },
              }}
            >
              GONZALO EMANUEL VAZQUEZ
            </motion.h1>
          </motion.div>

          <div className="box-titulo2">
            <motion.h2
              className="titulo2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                opacity: {
                  duration: 2,
                  delay: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 2,
                },
              }}
            >
              FRONT END DEVELOPER
            </motion.h2>
            <motion.h2
              className="titulo2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{
                opacity: {
                  duration: 2,
                  delay: 7,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 2,
                },
              }}
            >
              FRONT END DEVELOPER
            </motion.h2>
            <motion.h2
              className="titulo2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                opacity: {
                  duration: 2,
                  delay: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 2,
                },
              }}
            >
              FRONT END DEVELOPER
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="headerbg__logos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 8 }}
        >
          <div className="headerbg__logos__ctnr">
            <span>
              <i class="fa-brands fa-html5"></i>
            </span>
          </div>
          <div className="headerbg__logos__ctnr">
            <span>
              <i class="fa-brands fa-css3-alt"></i>
            </span>
          </div>
          <div className="headerbg__logos__ctnr">
            <span>
              <i class="fa-brands fa-js"></i>
            </span>
          </div>
          <div className="headerbg__logos__ctnr">
            <span>
              <i class="fa-brands fa-react"></i>
            </span>
          </div>
        </motion.div>
        <LayerBG
          src="/img/bg/capa2.png"
          speed={-8}
          layer="layer2"
          alt="edificios"
        />
        <LayerBG
          src="/img/bg/capa1.png"
          speed={-8}
          layer="layer1"
          alt="edificios"
        />
        {/*<img src='/img/bg/capa2.png' className='headerbg__img layer2' alt='edificios'></img>
        <img src='/img/bg/capa1.png' className='headerbg__img layer1' alt='edificios' ></img>*/}
      </section>
    </header>
  );
};

export default Header;
