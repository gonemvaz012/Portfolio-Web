import React, {useState } from "react";
import { useAnimation,motion } from "framer-motion";
import "../Css/formContact.css";

const FormContact = () => {
 
  //declaracion animations
  const send = useAnimation()
  const fail = useAnimation()
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
  function enviarPeticion(){
 
    fetch("https://formsubmit.co/ajax/gonemvaz012@gmail.com",{
      method:'POST',
       headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify({
        nombre: datos.nombre,
        email: datos.email,
        asunto: datos.asunto,
        mensaje: datos.mensaje
      }),
    })
    
  }


  //funcion para enviar el formulario una vez validado
  function enviarFormulario(e) {
    e.preventDefault();
    if (validarFormulario()) {
      enviarPeticion();
      send.start({
        opacity:[0,1,1,0],
        x:0,
        transition:{
          x:{duration:1},
          duration:4
        }
      })
      
    } else {
      fail.start({
        opacity:[0,1,1,0],
        x:0,
        transition:{
          x:{duration:1},
          duration:4
        }
      })
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
        onSubmit={enviarFormulario}
        className="formContact-ctnr__form"
      >
        <div className="formContact-ctnr__form__border">
          <h2 className="formContact-ctnr__form__title">Envíame un mensaje</h2>
          <motion.div className="alert_exito" initial={{opacity:0, x:-20}} animate={send}>
            <p><span><i class="fa-regular fa-circle-check"></i></span>
              Su mensaje se envió con exito</p>
          </motion.div>
          <motion.div className="alert_error" initial={{opacity:0,x:-20}} animate={fail}>
            <p><span><i class="fa-regular fa-circle-check"></i></span>
            Por favor ingrese correctamente los datos</p>
          </motion.div>
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
