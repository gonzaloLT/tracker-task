import React from 'react'
import styles from './styles/taskList.module.css'
import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, loading, onDelete, onUpdate }) => {
  if (loading) {
    return <p className={styles.loadingMessage}>Cargando tareas...</p>;
  }

  if (tasks.length === 0) {
    return <p className={styles.taskListEmpty}>No hay tareas aún</p>;
  }

  return (
    <div className={styles.taskListContainer}>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}