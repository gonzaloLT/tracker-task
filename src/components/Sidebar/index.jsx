import React from 'react'
import { MenuItem } from '../MenuItem'
import styles from './sidebar.module.css'

export const Sidebar = ({isOpen, toggleSidebar}) => {


  return (
    <div className={`${styles['sidebar']} ${isOpen ? styles['open'] : ''}`}>
      {/* Parte superior */}
      <div className={styles['top-section']}>
        <h2 className={styles['brand']}>Task tracker</h2>
        <button className={styles['button-close']} onClick={toggleSidebar}>X</button>
      </div>


      {/* Parte central */}
      <nav className={styles['middle-section']}>
        <ul>
          <MenuItem to={'/'} label={'Inicio'} toggleSidebar={toggleSidebar}/>
          <MenuItem to={'/my-projects'} label={'Mis proyectos'} toggleSidebar={toggleSidebar}/>
          <MenuItem to={'/my-stories'} label={'Mis historias'} toggleSidebar={toggleSidebar}/>
        </ul>
      </nav>


      {/* Parte inferior */}
      <div className={styles['bottom-section']}>
          <MenuItem to={'/settings'} label={'Configuraciones'} toggleSidebar={toggleSidebar}/>
      </div>
    </div>
  )
}
