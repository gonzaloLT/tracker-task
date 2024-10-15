import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/projectCard.module.css'

export const ProjectCard = ({ project }) => (
  <Link to={`/my-projects/${project._id}`} className={styles.projectLink}>
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{project.name}</h3>
    </div>
  </Link>
)