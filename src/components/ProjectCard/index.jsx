import React from 'react'
import { Link } from 'react-router-dom'

export const ProjectCard = ({project}) => {
  return (
    <Link to={`/my-projects/${project.id}`} style={{ textDecoration: 'none' }}>
        <div className='project-card'>
            <h2>{project.name}</h2>
        </div>
    </Link>
  )
}
