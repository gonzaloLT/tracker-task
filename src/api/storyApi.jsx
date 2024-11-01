import { API_URL } from "../auth/constants"

//Crear historia
export const createStory = async (story) => {
    try {
        const resp = await fetch(`${API_URL}/stories`, {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'auth': localStorage.getItem('token')
            },
            body: JSON.stringify(story)
        })

        if(!resp.ok){
            throw new Error ('Error al crear historia')
        }

        const data = await resp.json();

        return data;
    } catch (error) {
        console.log('Error: ', error)
        return null;
    }
}

//Actualizar historia
export const updateStory = async (storyId, updateStory) => {
    try {
        const response = await fetch(`${API_URL}/stories/${storyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            },
            body: JSON.stringify(updateStory)
        })

        if (!response.ok) {
            throw new Error(`Error al actualizar la historia con id: ${storyId}`)
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error: ', error)
        return null;
    }
}   

//Borrar tarea
export const deleteStory = async (storyId)=> {
    try {
        const response = await fetch(`${API_URL}/stories/${storyId}`, {
            method: 'DELETE',
            headers: {
                'auth': localStorage.getItem('token')
            },
        })

        if (!response.ok) {
            throw new Error(`Error al borrar la historia con id: ${storyId}`)
        }

        return true;
    } catch (error) {
        console.log('Error: ', error)
        return false;
    }
}