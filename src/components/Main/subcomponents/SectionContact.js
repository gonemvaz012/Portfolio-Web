import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FormContact from "../Items/FormContact";
import "../Css/SectionContact.css";

const SectionContact = () => {
  const { scrollYProgress } = useScroll();
  const [isCopy, setIsCopy] = useState(false); //estado para habilitar cartel copy
  //titulo Porfolio
  const HeroC = (prop) => {
    const { speed } = prop;
    const yvalue = useTransform(
      scrollYProgress,
      [0, 0.7, 1],
      [0, 70, 100 * speed]
    );
    return (
      <motion.img
        src="../img/bg/aconcagua.jpg"
        alt=""
        initial={{ y: `-200px` }}
        style={{ y: yvalue }}
      ></motion.img>
    );
  };

  //función copiar portapapeles
  const CopiarMail = () => {
    const handleCopiar = () => {
      const texto = "vazquez.gonzaloemanuel@gmail.com";
      navigator.clipboard
        .writeText(texto)
        .then(() => {
          setIsCopy(true); //si copia a portapapeles muestra el cartel copy
          setTimeout(() => {
            setIsCopy(false); //lo regresa a falso para que desaparezca
          }, 1000);
        })
        .catch((error) => {
          console.error("Error al copiar el texto:", error);
        });
    };

    return (
      <div onClick={handleCopiar} style={{ cursor: "pointer" }}>
        vazquez.gonzaloemanuel@gmail.com
      </div>
    );
  };

  return (
    <section className="sectionContact" id="contact">
      <h1 className="contactTitle">CONTACTO</h1>
      <div className="contactInfo">
        <div className="contactInfo__borderHero">
          <div className="contactInfo__hero">
            <HeroC speed={-2} />
          </div>
        </div>
        <div className="contactInfo__data">
          <h5> Disponible</h5>
          <p>
            Estoy disponible full-time, conectate conmigo atravez de los
            siguientes medios
          </p>
          <br />
          <p>
            <span>
              <i class="fa-solid fa-mobile" style={{ color: "#00d5ff" }}></i>
            </span>{" "}
            +54 15 2613070313
          </p>
          <p>
            <span>
              <i
                className="fa-sharp fa-solid fa-envelope"
                style={{ color: "#00d5ff" }}
              ></i>
            </span>
            <CopiarMail />
            <motion.div
              id="copy"
              layout
              data-isCopy={isCopy}
              transition={{ opacity: { ease: "easeInOut" }, duration: 1 }}
            >
              Copy!
            </motion.div>
          </p>
        </div>
        <div className="contactInfo__media">
          <motion.div
            className="contactInfo__media__ctnr"
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <a
              className="contactInfo__media__ctnr__a"
              href="https://www.linkedin.com/in/gonzalo-vazquez-casas/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </motion.div>
          <motion.div
            className="contactInfo__media__ctnr"
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <a
              className="contactInfo__media__ctnr__a"
              href="https://gitlab.com/vazquez.gonzaloemanuel"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-gitlab"></i>
            </a>
          </motion.div>
          <motion.div
            className="contactInfo__media__ctnr"
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <a
              className="contactInfo__media__ctnr__a"
              href="https://github.com/gonemvaz012"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </motion.div>
        </div>
      </div>
      <FormContact />
    </section>
  );
};

export default SectionContact;
