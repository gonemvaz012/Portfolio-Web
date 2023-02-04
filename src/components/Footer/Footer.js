

import './footer.css'

const Footer = () => {

  /*const [clicks, setclicks]=useState(0);
  const nameCompany = 'Pepito3000 Company';
  const year = new Date().getFullYear();
  const handleClick= ()=>{

    setclicks(clicks+1);
  }*/
  
  return (
    <footer className="footer"> 
      <div className="footer__ctnr">
        <div className='footer__ctnr__logo'>
          <img src='/img/condorLogoW.png' className='footer__ctnr__logo__img' alt=''></img>
        </div>
        <h2 className='footer__ctnr__h2'>
          GONZALO VAZQUEZ 
          <br></br>
          FRONT END DEVELOPER
        </h2>
        <div className='footer__ctnr__contact'>
          <h5 className='footer__ctnr__contact__title'>Contacto</h5>
          <div className='footer__ctnr__contact__link'>
            <a href='/'><i className="fa-brands fa-linkedin"></i></a>
            <a href='/'><i className="fa-sharp fa-solid fa-envelope"></i></a>
          </div>
          
          <p className='footer__ctnr__contact__phone'><i className="fa-solid fa-phone"></i><span> +54 15 2613070313</span></p>
        </div>
        {/*<span onClick={handleClick}>
          <img src='favicon.ico' alt=''></img>
          </span>
        <span className="text-muted">Todos los derechos reservados a {nameCompany} {year} Clicks={clicks}.</span>*/}

      </div>
    </footer>
  )
}

export default Footer
