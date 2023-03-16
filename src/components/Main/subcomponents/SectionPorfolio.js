import { motion,useScroll, useTransform,useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import React,{useRef,useEffect} from "react";

import "../Css/SectionPorfolio.css";
import CarrouselP from "../Items/CarrouselP";

const SectionPorfolio = () => {
  
  const { scrollYProgress } = useScroll()
  //titulo Porfolio
  const TituloPf=(prop)=>{
    const {speed}=prop;
    const xvalue= useTransform(scrollYProgress,[0,0.7,1],[0,70,100*speed])
    return(
      <motion.h1 className="sectionPf__h1 layer1" 
      initial={{opacity:0}} 
      whileInView={{opacity:1}} 
      transition={{delay:0.3,duration:1}}
      style={{x:xvalue}}
      >PORFOLIO</motion.h1>
    )
  }
  //titulo Porfolio
  
  const {ref,inView}=useInView();
  const fadeInPf=useAnimation();
  const fadeInPfV=useAnimation();

  useEffect(()=>{
    if(inView){
      fadeInPf.start({
         opacity:1,
         x:`0%`,
         transition:{
          duration:1.3,
          delay:1
         }
      });
      fadeInPfV.start({
        opacity:1,
        x:`0%`,
        transition:{
         duration:1.3,
         delay:1.6
        }
     });
    }else{
      fadeInPf.start({
        opacity:0,
        x:`10%`,
        transition:{
         duration:0.3,
         delay:0
        }
     });
     fadeInPfV.start({
      opacity:0,
      x:`-10%`,
      transition:{
       duration:0.3,
       delay:0
      }
   });
    }
    
  },[inView]);

//creo el fondo condor parallax scroll
  const Porfoliobg=(props)=>{
    const {img,speed}=props;
   
    const yValue = useTransform(scrollYProgress,[0,0.7,1],[0,70,100*speed])
  
    return(
      <motion.img
      className="sectionPf__bg layer3 condor"
      src={img}
      alt=""
      initial={{opacity:0}}
      transition={{duration:1}}
      whileInView={{opacity:1}}
      style={{y:yValue}}></motion.img>
    )
  }
  //creo el fondo condor parallax scroll

  //SECTION PORFOLIO SECTION PORFOLIO
  return (
    <section className="sectionPf">
      
      <img
        src="/img/bg/cerros.png"
        className="sectionPf__bg layer4"
        alt=""
      ></img>
      <Porfoliobg   img="/img/bg/Condor.png" speed={-2}/>
      <TituloPf speed={2}/>
      <div className="sectionPf__works__ctr">
        <motion.div className="sectionPf__works" ref={ref} 
        initial={{ opacity: 0, x: `-10%` }}
        animate={fadeInPf}
        >
          <CarrouselP/>
        </motion.div>
        <motion.div className="sectionPf-video"
         initial={{opacity:0,x:`-10%`}}
         animate={fadeInPfV}>
          <div className="sectionPf-video__screen"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionPorfolio;
