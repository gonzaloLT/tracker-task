import React from 'react'
import styles from './styles/taskList.module.css'
import { TaskItem } from './TaskItem';

export const TaskList = ({tasks}) => {
    return Array.isArray(tasks) && tasks.length > 0 ? (
        <div className={styles.taskListContainer}>
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p className={styles.taskListEmpty}>No hay tareas aun</p>
      );
}