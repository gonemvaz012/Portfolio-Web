import React from 'react'
import Navbar from './Navbar';

import './Css/Header.css';

const Header = () => {

  return (
    <header className="header">
      <Navbar />
      <section className="headerbg">

        <img src='/img/bg/capa4.png' className='headerbg__img layer4' alt='cielo'></img>
        <img src='/img/bg/capa3.png' className='headerbg__img layer3' alt='montañas'></img>

        <div className="headerbg__titulo">
          <h1 className="titulo1" >GONZALO EMANUEL VAZQUEZ</h1>
          <div className="box-titulo2">
            <h2 className="titulo2">FRONT END DEVELOPER</h2>
            <h2 className="titulo2" style={{ opacity: '0.6' }}>FRONT END DEVELOPER</h2>
            <h2 className="titulo2" style={{ opacity: '0.3' }}>FRONT END DEVELOPER</h2>
          </div>
        </div>


        <div className='headerbg__logos'>
          <img src='/img/logos/html5logo.png' className='headerbg__logos__img' alt=''></img>
          <img src='/img/logos/CSS.png' className='headerbg__logos__img' alt=''></img>
          <img src='/img/logos/JS.png' className='headerbg__logos__img' alt=''></img>
          <img src='/img/logos/React.png' className='headerbg__logos__img' alt=''></img>
        </div>
        <img src='/img/bg/capa2.png' className='headerbg__img layer2' alt='edificios'></img>
        <img src='/img/bg/capa1.png' className='headerbg__img layer1' alt='edificios' ></img>

      </section>

    </header>
  )
}

export default Header
