import React from 'react'
import {getOwnerName} from '../../utils/getOwnerName'
import styles from './styles/projectInfo.module.css'

export const ProjectInfo = ({ project, owner }) => (
    <div className={styles.details}>
        <h2>{project.name} {project.icon}</h2>
        <p><b>Descripción:</b> {project.description}</p>
        <p><b>Propietario:</b> {getOwnerName(owner)}</p>
    </div>
);