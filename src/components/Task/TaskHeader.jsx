import React from 'react';
import styles from './styles/taskHeader.module.css';

export const TaskHeader = ({ onCreateTask, isCreating }) => (
    <div className={styles.taskHeader}>
        <h3 className={styles.title}>Tareas de la historia</h3>
        <button
            className={styles.addTaskButton}
            onClick={onCreateTask}
            disabled={isCreating}
        >
            {isCreating ? 'Creando tarea...' : 'Agregar tarea'}
        </button>
    </div>
);