import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ProjectContext } from '../context/ProjectContext';

export const ProjectDetails = () => {
  const {projectId} = useParams();
  const {projectsData, loading} = useContext(ProjectContext);

  const project = projectsData.find((p)=> p._id === projectId)

  if(!project){
    return <div>Proyecto no encontrado</div>
  }

  return (
    <div>
      <h1>Detalles del proyecto</h1>
      {loading && (<p>Cargando detalles del proyecto...</p>)}

      <h2 className='name-project-details'>{project.name}</h2>
      <p className='description-project-details'>Descripcion: {project.description}</p>
      <p className='merbers-project-details'>Miembros en este proyecto: {project.members.join(', ')}</p>
      <div className='epicas-project-details'>
        <h3>Epicas</h3>
        <ul>
            
        </ul>
      </div>
    </div>
  )
}
