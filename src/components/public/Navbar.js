import React from 'react'
import { useState } from 'react';

const Navbar = () => {

  /*let heightS = { height: '600px' }
  let buttonDown = {
    visibility: 'hidden',
    opacity: '0'
  };

  const [dropdown, setDropdown] = useState(true);

  const handleClick = () => {

    setDropdown(!dropdown);
  }

  (dropdown ? toDown() : toUp());

  function toUp() {
    heightS = { height: '60px' };
    setTimeout(() => {
      buttonDown = { visibility: 'visible', opacity: '1' };
      console.log("funciona el setTime");
    }, 1000);

  }
  function toDown() {
    heightS = { height: '600px' };
    setTimeout(() => {
      buttonDown = { visibility: 'hidden', opacity: '0' };
    }, 1000);

  }*/

  return (
    <nav className="nav-menu">
      <img className="nav-menu__logo" src="/img/condorLogoW.png" alt="" />
      <div className="nav-menu__items">
        <div className="nav-menu__items__div" id="div1"></div>
        <a href="/" className="nav-link">INICIO</a>
        <a href="/" className="nav-link">SOBRE MI</a>
        <a href="/" className="nav-link">SKILLS</a>
        <a href="/" className="nav-link">PORFOLIO</a>
      </div>
      <div className="nav-menu__bars"><i className="fa-solid fa-bars"></i></div>
    </nav>
  )
}

export default Navbar
