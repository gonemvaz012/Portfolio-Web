import "./footer.css";

const Footer = () => {
  /*const [clicks, setclicks]=useState(0);
  const nameCompany = 'Pepito3000 Company';
  const year = new Date().getFullYear();
  const handleClick= ()=>{

    setclicks(clicks+1);
  }*/
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__ctnr">
        <div className="footer__ctnr__logo">
          <img
            src="/img/condorLogoW2.png"
            className="footer__ctnr__logo__img"
            alt=""
          ></img>
        </div>
        <h2 className="footer__ctnr__h2">
          GONZALO VAZQUEZ - FRONT END DEVELOPER - <span>{year}</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
