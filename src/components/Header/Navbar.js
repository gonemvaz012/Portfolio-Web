import React from 'react'
import { useState } from 'react';
import {Link} from 'react-scroll';

import './Css/Header.css'

const Navbar = () => {

  const [click,setClick]= useState(false);

  const toElement= ()=>setClick(false);

  return (
    <nav className="nav-menu">
      <img className="nav-menu__logo" src="/img/condorLogoW.png" alt="" />
      <div className="nav-menu__items">
        <div className="nav-menu__items__div" id="div1"></div>
        <Link  className="nav-link"
         activeClass="active" to="skills" 
         spy={true} smooth={true} offset={50} duration={500} onClick={toElement}>INICIO</Link>
        <a href="/" className="nav-link">SOBRE MI</a>
        <a href="/" className="nav-link">SKILLS</a>
        <a href="/" className="nav-link">PORFOLIO</a>
        <a href="/" className="nav-link">CONTACTO</a>
      </div>
      <div className="nav-menu__bars"><i className="fa-solid fa-bars"></i></div>
    </nav>
  )
}

export default Navbar
