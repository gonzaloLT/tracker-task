import React, { useState } from 'react';
import { useFetchTasksStory } from "../../hooks/useFetchTasksStory";
import { TaskList } from '../Task/TaskList';
import styles from './styles/storyTasks.module.css';
import { Modal } from '../../utils/Modal';
import { FormTask } from '../Form/FormTask';
import { EditTask } from '../Form/EditTask';
import { createTask, deleteTask, updateTask } from '../../api/taskApi'

export const StoryTasks = ({ storyId }) => {
    const { data: tasks, loading: loadingTasks, fetchTask } = useFetchTasksStory(storyId);
    const [isCreatingTask, setIsCreatingTask] = useState(false);//Controla si el modal de creación está abierto o no
    const [isSubmitting, setIsSubmitting] = useState(false);//Controla si el formulario está en proceso de envío
    const [isUpdatingModal, setIsUpdatingModal] = useState(false);//Controla si el modal de actualización está abierto o no
    const [taskToUpdate, setTaskToUpdate] = useState(null); //Tarea a actualizar

    const handleCreateTaskClick = () => setIsCreatingTask(true);

    const handleCloseModal = () => {
        if (!isSubmitting) {
            setIsCreatingTask(false);
            setIsUpdatingModal(false);
            setTaskToUpdate(null);
        }
    };

    const handleCreatedTask = async (task) => {
        setIsSubmitting(true)
        try {
            await createTask({ ...task, story: storyId })
            await fetchTask();
            setIsCreatingTask(false)
        } catch (error) {
            console.log('Error al crear la tarea')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDeleteTask = async (taskId) => {
        try {
            const success = await deleteTask(taskId);
            if (success) {
                await fetchTask();
            }
        } catch (error) {
            console.log(`Error al eliminar la tarea ${taskId}`)
        }
    }

    const handleUpdateTaskClick = (task) => {
        setTaskToUpdate(task);
        setIsUpdatingModal(true);
    }

    const handleUpdatedTask = async (updatedTask) => {
        setIsSubmitting(true);
        try {
            await updateTask(updatedTask.id, updatedTask);
            await fetchTask();
            setIsUpdatingModal(false);
            setTaskToUpdate(null);
        } catch (error) {
            console.log('Error al actualizar la tarea', error);
        } finally {
            setIsSubmitting(false);
        }
    };


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
                <TaskList
                    tasks={tasks}
                    onDelete={handleDeleteTask}
                    onUpdate={handleUpdateTaskClick}
                />
            ) : (
                <p className={styles.noTasks}>No hay tareas en esta historia</p>
            )}

            <Modal title={'Crear Tarea'} isOpen={isCreatingTask} closeModal={handleCloseModal}>
                <FormTask
                    onTaskCreated={handleCreatedTask}
                    isSubmitting={isSubmitting}
                />
            </Modal>

            <Modal title={'Actualizar Tarea'} isOpen={isUpdatingModal} closeModal={handleCloseModal}>
                <EditTask
                    task={taskToUpdate}
                    onTaskUpdated={handleUpdatedTask}
                    isSubmitting={isSubmitting}
                />
            </Modal>

        </div>
    );
};