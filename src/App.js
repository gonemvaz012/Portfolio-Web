import Navbar from "./components/Navbar";
import "./index.css";
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
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
  return (
    <div>
      <Navbar />
      <Suspense delayMs={1} fallback={<Loading />}>
        <Header />
        <Main />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
