import React, { useState } from 'react';
import { TaskDetails } from './TaskDetails';
import styles from './styles/taskItem.module.css';

export const TaskItem = ({ task, onDelete, onUpdate }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <li className={styles.taskItem}>
            <div className={styles.header}>
                <span
                    className={`${styles.taskName} ${showDescription ? 'active' : ''}`}
                    onClick={() => setShowDescription(!showDescription)}
                >
                    {task.name}
                </span>
                <button onClick={() => onDelete(task._id)} className={styles.taskButton}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

            {showDescription && (
                <TaskDetails task={task} onUpdate={() => onUpdate(task)} />
            )}
        </li>
    );
};
