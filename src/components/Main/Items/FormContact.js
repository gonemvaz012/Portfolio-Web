import React, { useState } from "react";
import "../Css/formContact.css";

const FormContact = () => {
  //declaracion hook de objetos datos form
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [stateBtn, setStateBtn] = useState(true);
  const [classBtn, setClassBtn] = useState("--disableBtn");
  //función para validar los datos ingresados
  function validarFormulario(datos) {
    // Verificar que los campos no estén vacíos
    if (
      datos.nombre === "" ||
      datos.email === "" ||
      datos.asunto === "" ||
      datos.mensaje === "" ||
      !validarEmail(datos.email)
    ) {
      return false;
    }
    return true;
  }
  function enviarFormulario(e) {
    // Configurar los datos del correo electrónico
    const Destinatario = "gonemvaz012@gmail.com";
    const Asunto = "Mensaje de " + datos.nombre + ": " + datos.asunto;
    const cuerpoMensaje =
      "Nombre: " +
      datos.nombre +
      "\n\nEmail: " +
      datos.email +
      "\n\n" +
      datos.mensaje;

    // Enviar el correo electrónico

    /*window.open(
      "mailto:" +
        Destinatario +
        "?subject=" +
        encodeURIComponent(Asunto) +
        "&body=" +
        encodeURIComponent(cuerpoMensaje)
    );*/
    // Mostrar mensaje de éxito
    alert("Tu mensaje ha sido enviado con éxito.");

    // Restablecer el formulario
    setDatos("");
  }

  function validarEmail(email) {
    // Utilizar una expresión regular para validar la dirección de correo electrónico
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronEmail.test(email);
  }

  const onChangeInput = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
    if (validarFormulario(datos)) {
      setClassBtn("");
      setStateBtn(false);
    } else {
      setClassBtn("--disableBtn");
      setStateBtn(true);
    }
  };


  return (
    <div className="formContact-ctnr">
      <form
        action="https://formsubmit.co/gonemvaz012@gmail.com"
        method="POST"
        onSubmit={enviarFormulario}
        className="formContact-ctnr__form"
      >
        <div className="formContact-ctnr__form__border">
          <h2 className="formContact-ctnr__form__title">Envíame un mensaje</h2>
          <div className="formContact-ctnr__form__input">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" onChange={onChangeInput}></input>
          </div>
          <div className="formContact-ctnr__form__input">
            <label for="email">Correo Electronico</label>
            <input type="email" name="email" onChange={onChangeInput}></input>
          </div>
          <div className="formContact-ctnr__form__input">
            <label for="subject">Asunto</label>
            <input type="text" name="asunto" onChange={onChangeInput}></input>
          </div>
          <div className="formContact-ctnr__form__textarea">
            <label for="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              type="text"
              rows="10"
              cols="50"
              onChange={onChangeInput}
            ></textarea>
          </div>
          <div className={"formContact-ctnr__form__sutmit" + classBtn}>
            <button disabled={stateBtn}>Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
