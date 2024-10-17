import React, { useState } from 'react';
import { useFetchTasksStory } from "../../hooks/useFetchTasksStory";
import { TaskList } from '../Task/TaskList';
import styles from './styles/storyTasks.module.css';
import { Modal } from '../../utils/Modal';
import { FormTask } from '../Form/FormTask';
import { createTask } from '../../api/taskApi'

export const StoryTasks = ({ storyId }) => {
    const { data: tasks, loading: loadingTasks, setTasks } = useFetchTasksStory(storyId);
    const [isCreatingTask, setIsCreatingTask] = useState(false); // Controla si el modal está abierto o no
    const [isSubmitting, setIsSubmitting] = useState(false); // Controla si la tarea está en proceso de creación

    const handleCreateTaskClick = ()=> setIsCreatingTask(true)
    
    const handleCloseModal = ()=> {
        if(!isSubmitting){
            setIsCreatingTask(false)
        }
    }

    const handleCreatedTask = async (task)=>{
        setIsSubmitting(true)
        try {
            const newTask = await createTask({...task, story: storyId})
            setTasks((prevTasks)=>[...prevTasks, newTask])
            setIsCreatingTask(false)
        } catch (error) {
            console.log('Error al crear la tarea')
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <div className={styles.tasksContainer}>
            <div className={styles.taskHeader}>
                <h3 className={styles.title}>Tareas de la historia</h3>
                <button
                    className={styles.addTaskButton}
                    onClick={handleCreateTaskClick}
                    disabled={isCreatingTask}
                >
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

            <Modal title={'Crear Tarea'} isOpen={isCreatingTask} closeModal={handleCloseModal}>
                <FormTask onTaskCreated={handleCreatedTask} isSubmitting={isSubmitting}/>
            </Modal>

        </div>
    );
};