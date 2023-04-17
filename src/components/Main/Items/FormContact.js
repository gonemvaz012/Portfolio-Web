import React, { useRef, useState } from "react";
import "../Css/formContact.css";

const FormContact = () => {
  //declaracion hook de objetos datos form
  const formRef = useRef();
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
  //función asincrona para enviar alert despues de haber recargado la pagina
  async function enviarAlertExito() {
    console.log("esperando alert");
    await new Promise((resolve) => window.addEventListener("load", resolve));
    alert("Su correo se envió con exito");
  }

  //funcion para enviar el formulario una vez validado
  function enviarFormulario(e) {
    e.preventDefault();
    if (validarFormulario()) {
      enviarAlertExito();
      formRef.current.submit(); //se recarga la pagina despues de haber enviado el correo
    } else {
      alert("Por favor ingrese bien los valores");
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
      <form
        action="https://formsubmit.co/gonemvaz012@gmail.com"
        method="POST"
        onSubmit={enviarFormulario}
        className="formContact-ctnr__form"
        ref={formRef}
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
          <div className="formContact-ctnr__form__sutmit">
            <button onClick={enviarFormulario}>Enviar</button>
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
