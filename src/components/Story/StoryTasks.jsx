import React, { useState } from 'react';
import { useFetchTasksStory } from "../../hooks/useFetchTasksStory";
import { TaskList } from '../Task/TaskList';
import styles from './styles/storyTasks.module.css';

export const StoryTasks = ({ storyId }) => {
    const { data: tasks, loading: loadingTasks } = useFetchTasksStory(storyId);
    const [isCreatingTask, setIsCreatingTask] = useState(false);


    return (
        <div className={styles.tasksContainer}>
            <div className={styles.taskHeader}>
                <h3 className={styles.title}>Tareas de la historia</h3>
                <button 
                    className={styles.addTaskButton}
                    onClick={handleCreateTask}
                    disabled={isCreatingTask}
                >
                    <i className="fa-solid fa-plus"></i> 
                    {isCreatingTask ? 'Creando tarea...' : 'Agregar tarea'}
                </button>
            </div>
            {loadingTasks ? (
                <p className={styles.loadingMessage}>Cargando tareas...</p>
            ) : tasks && tasks.length > 0 ? (
                <TaskList tasks={tasks} />
            ) : (
                <p className={styles.noTasks}>No hay tareas en esta historia</p>
            )}
        </div>
    );
};