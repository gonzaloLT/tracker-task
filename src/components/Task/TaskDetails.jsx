import React from 'react'
import styles from './styles/taskDetails.module.css'

export const TaskDetails = ({ task, onUpdate }) => (
    <div className={styles.taskDetails}>
        <span><b>Descripción:</b> {task.description}</span>
        <span><b>Creación:</b> {task.created ? new Date(task.created).toLocaleDateString() : 'No iniciado'}</span>
        <span><b>Finalización:</b> {task.due ? new Date(task.due).toLocaleDateString() : 'No finalizado'}</span>
        <span><b>Estado:</b> {task.done ? 'Finalizado' : 'Pendiente'}</span>
        <button className={styles.editButton} onClick={onUpdate}>Editar</button>
    </div>
);