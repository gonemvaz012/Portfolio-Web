import React,{useState} from 'react'
import '../Css/formContact.css'

const FormContact = () => {
    const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();

    // Verificar que los campos no estén vacíos
    if (nombre === "" || mensaje === "" || !validarEmail(email)) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Configurar los datos del correo electrónico
    const destinatario = "tu_correo@ejemplo.com";
    const asunto = "Mensaje de " + nombre;
    const cuerpoMensaje = "Nombre: " + nombre + "\n\nEmail: " + email + "\n\nMensaje:\n" + mensaje;

    // Enviar el correo electrónico
    window.open("mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpoMensaje));

    // Mostrar mensaje de éxito
    alert("Tu mensaje ha sido enviado con éxito.");

    // Restablecer el formulario
    setNombre("");
    setEmail("");
    setMensaje("");
  }

  function validarEmail(email) {
    // Utilizar una expresión regular para validar la dirección de correo electrónico
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronEmail.test(email);
  }
  return (
    <div className='formContact-ctnr'>
        <form onSubmit={enviarFormulario} className='formContact-ctnr__form'>
            <div className='formContact-ctnr__form__border'>
            <h2 className='formContact-ctnr__form__title'>Envíame un mensaje</h2>
            <div className='formContact-ctnr__form__input'>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre"></input>
            </div>
            <div className='formContact-ctnr__form__input'> 
                <label for="email">Correo Electronico</label>
                <input type="email"  name="email"></input>
                
            </div>
             <div className='formContact-ctnr__form__input'>
                <label for="subject">Asunto</label>
                <input type="text" name="subject"></input>
            </div>
            <div className='formContact-ctnr__form__textarea'>
                <label for="email">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="10" cols="50"></textarea>
            </div>
            <div className='formContact-ctnr__form__sutmit'>
                <button>Enviar</button>
            </div>
            </div>
            
        </form>
      </div>
  )
}

export default FormContact
