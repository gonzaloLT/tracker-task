import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask = () => {
    const { register, handleSubmit } = useForm();





    return (
        <div>
            <form>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" />
                </div>

                <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea id="description" name="description" />
                </div>

                <button type="submit">Crear</button>
            </form>
        </div>
    )
}
