import React from 'react'
import Skills from './Items/Skills'
import Spinner from './Items/Spinner'
import Tools from './Items/Tools'

import './Css/sectionSkills.css'

const SectionSkills = () => {
  return (
    <section className='sectionSkills'>
      <Skills/>
      <Tools />
      <div className='others'>
        <h2 className='skills__title'>APTITUDES</h2>
        <div className='skills__items'>
          <p className='skills__items__p'>Ingles</p>
          
        </div>
        <div className='skills__items'>
          <p className='skills__items__p'>Ingles</p>
          <Spinner/>
        </div>
      </div>
    </section>
  )
}

export default SectionSkills
