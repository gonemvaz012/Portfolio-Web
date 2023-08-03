import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

import "./Css/navbar.css";

const Navbar = (props) => {
  let { leng, idioma } = props;
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toElement = () => setClick(false);
  const toElementDropSide = () => {
    setClick(false);
    setIsOpen(false);
  };
  //animaciones
  let dropside = useAnimation();

  const reload = () => {
    window.location.reload();
  };
  useEffect(() => {
    if (isOpen == true) {
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

    /*if (isOpen) {
      document.addEventListener("click", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
    };*/
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
            {idioma.navbar[leng].home}
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
            {idioma.navbar[leng].item1}
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
            {idioma.navbar[leng].item2}
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
            {idioma.navbar[leng].item3}
          </Link>
        </div>

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
