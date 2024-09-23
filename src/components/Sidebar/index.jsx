import React from 'react'
import { MenuItem } from '../MenuItem'

export const Sidebar = ({isOpen, toggleSidebar}) => {


  return (
    <div>
      {/* Parte superior */}
      <div>
        <h2>Task tracker</h2>
        <button>X</button>
      </div>


      {/* Parte central */}
      <nav>
        <ul>
          <MenuItem to={'/'} label={'Inicio'} toggleSidebar={toggleSidebar}/>
          <MenuItem to={'/my-projects'} label={'Mis proyectos'} toggleSidebar={toggleSidebar}/>
          <MenuItem to={'/my-stories'} label={'Mis historias'} toggleSidebar={toggleSidebar}/>
        </ul>
      </nav>


      {/* Parte inferior */}
      <div>
          <MenuItem to={'/settings'} label={'Configuraciones'} toggleSidebar={toggleSidebar}/>
      </div>
    </div>
  )
}
