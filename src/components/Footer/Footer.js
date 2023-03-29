

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
          GONZALO VAZQUEZ - FRONT END DEVELOPER
        </h2>
      </div>
    </footer>
  )
}

export default Footer
