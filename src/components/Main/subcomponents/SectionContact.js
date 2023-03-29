import React from 'react'
import { motion, useScroll, useTransform} from "framer-motion";
import FormContact from '../Items/FormContact'
import '../Css/SectionContact.css'


const SectionContact = () => {

  const { scrollYProgress } = useScroll();
  //titulo Porfolio
  const HeroC = (prop) => {
    const { speed } = prop;
    const yvalue = useTransform(
      scrollYProgress,
      [0,0.7, 1],
      [0, 70,100 * speed]
    );
    return(
      <motion.img src='../img/bg/aconcagua.jpg' alt=''
      initial={{y:`-200px`}}
      style={{ y: yvalue }}
      ></motion.img>
    )
  }
  return (
    <section className='sectionContact'>
      <h1 className='contactTitle'>CONTACTO</h1>
      <div className='contactInfo'>
        <div className='contactInfo__borderHero'>
          <div className='contactInfo__hero'>
            <HeroC speed={-2}/>
          </div>
        </div>
        <div className='contactInfo__data'>
          <h5> Disponible</h5>
          <p>Estoy disponible full-time, 
            conectate conmigo atravez de los siguientes medios</p><br/>
          <p><span><i class="fa-solid fa-mobile" style={{color: "#00d5ff"}}></i></span> +54 15 2613070313</p>
          <p><span><i className="fa-sharp fa-solid fa-envelope" style={{color: "#00d5ff"}}></i></span>vazquez.gonzaloemanuel@gmail.com</p>
        </div>
        <div className='contactInfo__media'>
          <div className='contactInfo__media__ctnr'>
            <a className='contactInfo__media__ctnr__a' href='/'><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className='contactInfo__media__ctnr'>
            <a className='contactInfo__media__ctnr__a' href='/'><i className="fa-brands fa-gitlab"></i></a>
          </div>
        </div>
      </div>
      <FormContact/>
    </section>
  )
}

export default SectionContact
