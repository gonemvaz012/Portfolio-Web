import Navbar from "./components/Navbar";
import "./index.css";
import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import Idioma from "./lenguage.json";
const Header = React.lazy(() => import("./components/Header/Header"));
const Main = React.lazy(() => import("./components/Main"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

const Loading = () => {
  return (
    <motion.div
      className="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <img src="../img/condorLogoW2.png"></img>
    </motion.div>
  );
};

function App() {
  let [lenguage, setLenguage] = useState(0);
  function translate() {
    if (lenguage === 0) {
      setLenguage(1);
    } else {
      setLenguage(0);
    }
  }
  return (
    <div>
      <Navbar leng={lenguage} idioma={Idioma} />
      <Suspense delayMs={1} fallback={<Loading />}>
        <Header />
        <Main leng={lenguage} idioma={Idioma} />
        <Footer />
      </Suspense>
      <motion.div className="btn-lg" onClick={translate}>
        {Idioma.btn[lenguage].lbl} <i className="fa-solid fa-language"></i>
      </motion.div>
    </div>
  );
}

export default App;
