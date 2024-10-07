import React from 'react'
import { Link } from 'react-router-dom'
import styles from './projectCard.module.css'

export const ProjectCard = ({project}) => {
  return (
    <Link to={`/my-projects/${project._id}`} className={styles['project-link']}>
        <div className={styles["project-card"]}>
            <h3 className={styles['project-title']}>{project.name}</h3>
        </div>
    </Link>
  )
}
