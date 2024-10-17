import React from 'react'
import styles from './styles/taskList.module.css'
import { TaskItem } from './TaskItem';

export const TaskList = ({tasks}) => {
    return tasks.length > 0 ? (
        <div className={styles.taskListContainer}>
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
/*                 toggleTask={toggleTask}
                handleDelete={handleDelete} */
              />
            ))}
          </ul>
        </div>
      ) : (
        <p className={styles.taskListEmpty}>No hay tareas aun</p>
      );
}