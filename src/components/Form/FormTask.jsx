import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles/form.module.css'

export const FormTask = ({ onTaskCreated, isSubmitting }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        onTaskCreated(data)
        reset()
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre: </label>
                    <input
                        className={styles.input}
                        type="text"
                        {...register('name', { required: 'El nombre de tarea es obligatorio' })}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción</label>
                    <textarea
                        className={styles.input}
                        type="text"
                        {...register('description', {
                            validate: (value) =>
                                value === '' || value.length >= 10 || 'La descripción debe tener al menos 10 caracteres'
                        })}
                    />
                    {errors.description && <p className={styles.errorMessage}>{errors.description.message}</p>}
                </div>

                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creando tarea' : 'Crear'}
                </button>
            </form>
        </div>
    )

}
