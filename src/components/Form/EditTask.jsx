import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles/form.module.css'

export const EditTask = ({ onTaskUpdated, isSubmitting, task }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        defaultValues: {
            name: task?.name || '',
            description: task?.description || '',
            done: task?.done || false,
            due: task?.due ? new Date(task.due).toISOString().split('T')[0] : ''
        }
    });

    useEffect(() => {
        if (task) {
            setValue('name', task.name);
            setValue('description', task.description);
            setValue('done', task.done);
            setValue('due', task.due ? new Date(task.due).toISOString().split('T')[0] : '');
        }
    }, [task, setValue]);

    const onSubmit = (data) => {
        const updatedTask = {
            ...data,
            id: task._id,
            created: task.created,
            due: data.due ? new Date(data.due).toISOString() : null
        };
        onTaskUpdated(updatedTask);
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre: </label>
                    <input
                        className={styles.input}
                        type="text"
                        {...register('name', { required: 'El nombre es obligatorio' })}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción</label>
                    <textarea
                        className={styles.input}
                        {...register('description', {
                            validate: (value) =>
                                value === '' || value.length >= 10 || 'La descripción debe tener al menos 10 caracteres'
                        })}
                    />
                    {errors.description && <p className={styles.errorMessage}>{errors.description.message}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        <input
                            type="checkbox"
                            {...register('done')}
                        />
                        Tarea completada
                    </label>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Fecha de vencimiento: </label>
                    <input
                        className={styles.input}
                        type="date"
                        {...register('due')}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Fecha de creación: </label>
                    <input
                        className={styles.input}
                        type="text"
                        value={task ? new Date(task.created).toLocaleDateString() : ''}
                        disabled
                    />
                </div>

                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Actualizando tarea...' : 'Actualizar tarea'}
                </button>
            </form>
        </div>
    )
}