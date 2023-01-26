import React from 'react'

const  SideBar= () => {
  return (
    <aside className='aside'>
      <div className='photo-Container'>
        <div className='photo-Container__div'>
          <img className='photo-Container__div__img' src='../img/fotoHome2.jpg' alt=''></img>
        </div>

      </div>
      <div className='text-container'>
        <h1 className='text-container__h1'>SOBRE MI</h1>
        <p className='text-container__p'>
          Soy una persona con un gran interes por aprender las nuevas tecnologías y
          herramientas que se presentan a diario en el entorno de la programacion IT, asi  como también,
          el interes de desarrollar de manera constante las  habilidades blandas necesarías para
          llevar a cabo un buen trabajo en equipo. Ya sea colobarando o aportando ideas que busquen
          solucionar los problemas del equipo.
        </p>
      </div>
    </aside>
  )
}

export default SideBar
