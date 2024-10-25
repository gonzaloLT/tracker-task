import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './styles/form.module.css'

export const FormStory = ({ onStoryCreated, isSubmitting }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        onStoryCreated(data)
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
                        {...register('name', { required: 'El nombre de la historia es obligatorio' })}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Descripción:</label>
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
                    <label className={styles.label}>Fecha de vencimiento (Opcional):</label>
                    <input
                        className={styles.input}
                        type="date"
                        {...register('due')}
                    />
                </div>


                <div className={styles.formGroup}>
                    <label className={styles.label}>Puntos (Opcional):</label>
                    <input
                        className={styles.input}
                        type="number"
                        {...register('points')}
                    />
                </div>


                <div className={styles.formGroup}>
                    <label className={styles.label}>Status (Opcional):</label>
                    <select className={styles.input} {...register('status')}>
                        <option value="todo">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creando historia' : 'Crear'}
                </button>
            </form>
        </div>
    )
}
