import React, { useState } from 'react';
import { useFetchTasksStory } from "../../hooks/useFetchTasksStory";
import { TaskList } from '../Task/TaskList';
import styles from './styles/storyTasks.module.css';
import { Modal } from '../../utils/Modal';
import { FormTask } from '../Form/FormTask';
import { createTask, deleteTask } from '../../api/taskApi'

export const StoryTasks = ({ storyId }) => {
    const { data: tasks, loading: loadingTasks, fetchTask } = useFetchTasksStory(storyId);
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
            await createTask({...task, story: storyId})
            await fetchTask();
            setIsCreatingTask(false)
        } catch (error) {
            console.log('Error al crear la tarea')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDeleteTask = async (taskId)=>{
        try {
            const success = await deleteTask(taskId);
            if (success){
                await fetchTask();
            }
        } catch (error) {
            console.log(`Error al eliminar la tarea ${taskId}`)
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
                <TaskList tasks={tasks} handleDelete={handleDeleteTask}/>
            ) : (
                <p className={styles.noTasks}>No hay tareas en esta historia</p>
            )}

            <Modal title={'Crear Tarea'} isOpen={isCreatingTask} closeModal={handleCloseModal}>
                <FormTask 
                    onTaskCreated={handleCreatedTask} 
                    isSubmitting={isSubmitting}
                />
            </Modal>

        </div>
    );
};