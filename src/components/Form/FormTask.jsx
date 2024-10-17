import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask = ({onTaskCreated, isSubmitting}) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const onSubmit = (data)=>{
        onTaskCreated(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre: </label>
                    <input 
                        type="text"
                        {...register('name', {required: 'El nombre de tarea es obligatorio'})}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <label>Descripción</label>
                    <input 
                        type="text"
                        {...register('description', {
                            validate: (value) =>
                                value === '' || value.length >= 10 || 'La descripción debe tener al menos 10 caracteres'
                        })}
                    />
                    {errors.description && <p>{errors.description.message}</p>}
                </div>

                <button type="submit">
                    {isSubmitting ? 'Creando tarea' : 'Crear'}
                </button>
            </form>
        </div>
    )
}
