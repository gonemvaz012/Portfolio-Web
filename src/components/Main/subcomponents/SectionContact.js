import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FormContact from "../Items/FormContact";
import "../Css/SectionContact.css";

const SectionContact = (props) => {
  const { leng, idioma } = props;
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
      <span
        onClick={handleCopiar}
        style={{ cursor: "pointer", color: "#13b7ff" }}
      >
        vazquez.gonzaloemanuel@gmail.com
      </span>
    );
  };

  return (
    <section className="sectionContact" id="contact">
      <h1 className="contactTitle">{idioma.contact[leng].title}</h1>
      <div className="contactInfo-form_ctrn">
        <div className="contactInfo">
          <div className="contactInfo__borderHero">
            <div className="contactInfo__hero">
              <HeroC speed={-2} />
            </div>
          </div>
          <div className="contactInfo__data">
            <h5> {idioma.contact[leng].title2}</h5>
            <p>{idioma.contact[leng].text}</p>
            <br />
            <p>
              <span>
                <i className="fa-solid fa-mobile"></i>
              </span>
              +54 15 2613070313
            </p>
            <p>
              <span>
                <i className="fa-sharp fa-solid fa-envelope"></i>
              </span>
              <CopiarMail />
              <motion.span
                id="copy"
                layout
                data-iscopy={isCopy}
                transition={{ opacity: { ease: "easeInOut" }, duration: 1 }}
              >
                Copy!
              </motion.span>
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
                <i className="fa-brands fa-github"></i>
              </a>
            </motion.div>
          </div>
        </div>
        <FormContact leng={leng} idioma={idioma} />
      </div>
    </section>
  );
};

export default SectionContact;
