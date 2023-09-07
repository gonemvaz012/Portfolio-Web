import { createContext, useContext, useState } from "react";

export const TranslateContext = createContext(); //creo el contexto que voy a utilizar

export const TranslateContextProvider = ({ children }) => {
  // funcion para proveer ese contexto con valores
  const [contextTranslate, setContextTranslate] = useState("ES"); //el valor será un hook de estado
  const values = { contextTranslate, setContextTranslate }; //como valores voy a pasar el valor del estado junto con su funcion SET

  return (
    <TranslateContext.Provider value={values}>
      {children}
    </TranslateContext.Provider>
  );
};

//creo un custom hook para poder usar  el valor del  contexto a otros componentes
export const useTranslateContext = () => {
  const context = useContext(TranslateContext);
  return context;
};
