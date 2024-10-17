import React, { useState } from 'react'
import styles from './styles/taskItem.module.css'

export const TaskItem = ({ task, toggleTask, handleDelete }) => {
    const { name, description, completed } = task;
    const [showDescription, setShowDescription] = useState(false);

    const handleToggleDescription = () => {
        setShowDescription(!showDescription);
    };
    return (
        <li className={styles.taskItem}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTask(task)}
                className={styles.taskCheckbox}
            />
            <span
                className={`${styles.taskName} ${showDescription ? "active" : ""}`}
                onClick={handleToggleDescription}
            >
                {name}
            </span>
            {showDescription && (
                <span className={styles.taskDescription}>{description}</span>
            )}
            <button onClick={() => handleDelete(task)} /* className={styles.taskButton} */>
                <i className="fa-solid fa-trash"></i>
            </button>
        </li>
    );

}
