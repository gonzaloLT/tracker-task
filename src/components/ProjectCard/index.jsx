import React from 'react'
import { Link } from 'react-router-dom'
import styles from './projectCard.module.css'

export const ProjectCard = ({project}) => {
  return (
    <Link to={`/my-projects/${project._id}`} style={{ textDecoration: 'none' }}>
        <div className={styles['project-card']}>
            <h2>{project.name}</h2>
        </div>
    </Link>
  )
}
