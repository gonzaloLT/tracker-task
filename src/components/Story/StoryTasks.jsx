import React, { useState } from 'react';
import { useFetchTasksStory } from "../../hooks/useFetchTasksStory";
import { TaskList } from '../Task/TaskList';
import { TaskHeader } from '../Task/TaskHeader';
import { createTask, deleteTask, updateTask } from '../../api/taskApi'
import styles from './styles/storyTasks.module.css';
import { CreateTaskModal } from '../Task/CreateTaskModal';
import { EditTaskModal } from '../Task/EditTaskModal';

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
            <TaskHeader onCreateTask={handleCreateTaskClick} isCreating={isCreatingTask}/>
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

            <CreateTaskModal 
                isOpen={isCreatingTask} 
                onClose={handleCloseModal} 
                onSubmit={handleCreatedTask}
                isSubmitting={isSubmitting} 
            />

            <EditTaskModal 
                isOpen={isUpdatingModal} 
                onClose={handleCloseModal} 
                onSubmit={handleUpdatedTask} 
                task={taskToUpdate} 
                isSubmitting={isSubmitting} 
            />
            

        </div>
    );
};