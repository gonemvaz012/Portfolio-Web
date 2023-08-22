import React, { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import "../Css/formContact.css";

const FormContact = (props) => {
  const { idioma } = props;
  //declaracion animations
  const send = useAnimation();
  const fail = useAnimation();
  //declaracion hook de objetos datos form

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  //función para mail
  function validarEmail(email) {
    // Utilizar una expresión regular para validar la dirección de correo electrónico
    const patronEmail = RegExp(/^[\w-\.]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/);
    return patronEmail.test(email);
  }
  //función para validar los datos ingresados
  function validarFormulario() {
    // Verificar que los campos no estén vacíos e email correcto
    if (
      datos.nombre &&
      datos.email &&
      datos.asunto &&
      datos.mensaje &&
      validarEmail(datos.email)
    ) {
      return true;
    }
    return false;
  }

  // función para enviar peticion
  function enviarPeticion() {
    fetch("https://formsubmit.co/ajax/vazquez.gonzaloemanuel@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nombre: datos.nombre,
        email: datos.email,
        asunto: datos.asunto,
        mensaje: datos.mensaje,
      }),
    });
  }

  //funcion para enviar el formulario una vez validado
  function enviarFormulario(e) {
    e.preventDefault();
    if (validarFormulario()) {
      enviarPeticion();
      send.start({
        opacity: [0, 1, 1, 0],
        x: 0,
        transition: {
          x: { duration: 1 },
          duration: 4,
        },
      });
    } else {
      fail.start({
        opacity: [0, 1, 1, 0],
        x: 0,
        transition: {
          x: { duration: 1 },
          duration: 4,
        },
      });
    }
  }
  //funcion onChange que carga los datos cada vez que hay cambios en los valores ingresados en los inputs
  const onChangeInput = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formContact-ctnr">
      <form onSubmit={enviarFormulario} className="formContact-ctnr__form">
        <div className="formContact-ctnr__form__border">
          <h2 className="formContact-ctnr__form__title">{idioma.title3}</h2>
          <motion.div
            className="alert_exito"
            initial={{ opacity: 0, x: -20 }}
            animate={send}
          >
            <p>
              <span>
                <i className="fa-regular fa-circle-check"></i>
              </span>
              {idioma.alert1}
            </p>
          </motion.div>
          <motion.div
            className="alert_error"
            initial={{ opacity: 0, x: -20 }}
            animate={fail}
          >
            <p>
              <span>
                <i className="fa-regular fa-circle-check"></i>
              </span>
              {idioma.alert2}
            </p>
          </motion.div>
          <div className="formContact-ctnr__form__input">
            <label htmlFor="nombre">{idioma.lbl1}</label>
            <input type="text" name="nombre" onChange={onChangeInput}></input>
          </div>
          <div className="formContact-ctnr__form__input">
            <label htmlFor="email">{idioma.lbl2}</label>
            <input type="email" name="email" onChange={onChangeInput}></input>
          </div>
          <div className="formContact-ctnr__form__input">
            <label htmlFor="subject">{idioma.lbl3}</label>
            <input type="text" name="asunto" onChange={onChangeInput}></input>
          </div>
          <div className="formContact-ctnr__form__textarea">
            <label htmlFor="mensaje">{idioma.lbl4}</label>
            <textarea
              id="mensaje"
              name="mensaje"
              type="text"
              rows="10"
              cols="50"
              onChange={onChangeInput}
            ></textarea>
          </div>
          <div className="formContact-ctnr__form__sutmit">
            <button onClick={enviarFormulario}>{idioma.submit}</button>
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/."
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
