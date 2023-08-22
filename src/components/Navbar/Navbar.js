import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import Lenguage from "../Context/lenguage.json";
import "./Css/navbar.css";
import { useTranslateContext } from "../Context/translateContext";

const Navbar = (props) => {
  const { contextTranslate, setContextTranslate } = useTranslateContext();
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toElement = () => setClick(false);

  //desplegar menu nav
  const toElementDropSide = () => {
    setClick(false);
    setIsOpen(false);
  };

  //NAV ITEM
  const ItemNav = (prop) => {
    const { item } = prop;
    let idioma = "";

    if (contextTranslate === "ES") {
      idioma = Lenguage.navbar.ES;
    } else {
      idioma = Lenguage.navbar.ENG;
    }

    switch (item) {
      case "home":
        return <span>{idioma.home}</span>;
      case "item1":
        return <span>{idioma.item1}</span>;
      case "item2":
        return <span>{idioma.item2}</span>;
      default:
        return <span>{idioma.item3}</span>;
    }
  };
  // Botón traducir página
  function translate() {
    setContextTranslate((state) => (state === "ES" ? "ENG" : "ES"));
  }

  const BtnTranslate = () => {
    if (contextTranslate === "ES") {
      return (
        <div className="btn-translate" onClick={translate}>
          <span style={{ marginRight: "5px" }}>ES</span>
          <i className="fa-solid fa-language"></i>
        </div>
      );
    } else {
      return (
        <div className="btn-translate" onClick={translate}>
          <span style={{ marginRight: "5px" }}>ENG</span>
          <i className="fa-solid fa-language"></i>
        </div>
      );
    }
  };
  //ANIMACIONES
  let dropside = useAnimation();

  const reload = () => {
    window.location.reload();
  };
  useEffect(() => {
    if (isOpen === true) {
      console.log(isOpen);
      dropside.start({
        right: "0%",
        transition: { duration: 0.5 },
      });
    } else {
      dropside.start({
        right: "-60%",
        transition: { duration: 0.7 },
      });
    }
    const closeDropdown = () => {
      setIsOpen(false);
    };
  }, [isOpen]);

  return (
    <div className="nav-menu-ctnr">
      <nav className="nav-menu">
        <img
          className="nav-menu__logo"
          src="/img/condorLogoW2.png"
          alt=""
          onClick={reload}
        />

        <div className="nav-menu__items">
          <div className="nav-menu__items__div" id="div1"></div>
          <Link
            className="nav-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
            onClick={toElement}
          >
            <ItemNav item="home" />
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={2000}
            onClick={toElement}
          >
            <ItemNav item="item1" />
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={2000}
            onClick={toElement}
          >
            <ItemNav item="item2" />
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={2000}
            onClick={toElement}
          >
            <ItemNav item="item3" />
          </Link>
        </div>

        <BtnTranslate />
        <div className="nav-menu__bars" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
          <motion.ul
            className="nav-menu__bars__items"
            initial={{ right: "-55%" }}
            animate={dropside}
          >
            <Link
              className="nav-menu__bars__items__link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={2000}
              onClick={toElementDropSide}
            >
              <li className="nav-menu__bars__items__li">INICIO</li>
            </Link>
            <Link
              className="nav-menu__bars__items__link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-550}
              duration={2000}
              onClick={toElementDropSide}
            >
              <li className="nav-menu__bars__items__li">SOBRE MI</li>
            </Link>
            <Link
              className="nav-menu__bars__items__link"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-130}
              duration={2000}
              onClick={toElementDropSide}
            >
              <li className="nav-menu__bars__items__li">PROYECTOS</li>
            </Link>
            <Link
              className="nav-menu__bars__items__link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={2000}
              onClick={toElementDropSide}
            >
              <li className="nav-menu__bars__items__li">CONTACTO</li>
            </Link>
            <li className="nav-menu__bars__items__footer">
              GONZALO VAZQUEZ <br></br> FRONT END DEVELOPER - 2023
            </li>
          </motion.ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
