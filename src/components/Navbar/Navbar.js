import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

import "./Css/navbar.css";

const Navbar = (props) => {
  let { leng, idioma } = props;
  const [click, setClick] = useState(false);
  const toElement = () => setClick(false);

  const reload = () => {
    window.location.reload();
  };

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

        <div className="nav-menu__bars">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
