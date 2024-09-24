import React from 'react'
import styles from './taskCard.module.css'

export const TaskCard = ({task}) => {
  return (
    <div className={styles['task-card']}>
        <p className={styles['name']}>Nombre de la tarea: {task.name} </p>
        <p className={styles['description']}>Descripcion de tarea: {task.description}</p>
        <p className={styles['status']}>Estado: {task.done ? 'Completa' : 'Incompleta'} </p>
    </div>
  )
}
