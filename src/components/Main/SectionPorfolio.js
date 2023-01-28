import React from 'react'

import './Css/SectionPorfolio.css'

const SectionPorfolio = () => {
  return (
    <section className='sectionPf'>
        <img src='/img/bg/cerros.png' className='sectionPf__bg layer4' alt=''></img>
        <img src='/img/bg/Condor.png' className='sectionPf__bg layer3'alt=''></img>
        <h1 className='sectionPf__h1 layer1'>PORFOLIO</h1>
        <div className='sectionPf__works'>
          <div className='sectionPf__works__photo'>
            <img src='/img/Logos/LogoW.png' className='sectionPf__works__photo__img'alt=''></img>
          </div>
          <div className='sectionPf__works__ctnr'>
            <h2 className='sectionPf__works__ctnr__h2'>Mi Legado - Semillero Latam</h2>
            <p className='sectionPf__works__ctnr__p'>
              Proyecto del bootcamp  Semillero Latam donde  desarrollé Front - end con HTML, CSS  y JavaScript
              <br></br>
              <br></br>           
              Mi legado es un espacio donde se pueden conmemorar 
              a seres queridos que ya no están.  
            </p>
            <button className='btn-enter'>ir a Mi Legado</button>
          </div>
        </div>
    </section>
  )
}

export default SectionPorfolio
