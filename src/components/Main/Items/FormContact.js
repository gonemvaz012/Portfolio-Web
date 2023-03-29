import React from 'react'
import '../Css/formContact.css'

const FormContact = () => {
  return (
    <div className='formContact-ctnr'>
        <form action="mailto:ejemplo@ejemplo.com" method="post" enctype="text/plain" className='formContact-ctnr__form'>
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
