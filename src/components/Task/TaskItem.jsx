import React, { useState } from 'react';
import styles from './styles/taskItem.module.css';

export const TaskItem = ({ task, handleDelete }) => {
    const { name, description, created, due } = task;
    const [showDescription, setShowDescription] = useState(false);

    const handleToggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <li className={styles.taskItem}>
            <div className={styles.header}>
                <span
                    className={`${styles.taskName} ${showDescription ? 'active' : ''}`}
                    onClick={handleToggleDescription}
                >
                    {name}
                </span>
                <button onClick={() => handleDelete(task._id)} className={styles.taskButton}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

            {showDescription && (
                <div className={styles.taskDetails}>
                    <span><b>Descripción:</b>  {description}</span>
                    <span><b>Creación</b>: {created ? new Date(created).toLocaleDateString() : 'No iniciado'}</span>
                    <span><b>Finalización:</b> {due ? new Date(due).toLocaleDateString() : 'No finalizado'}</span>
                    <button className={styles.editButton}>Editar</button>
                </div>
            )}
        </li>
    );
};
