import { API_URL } from "../auth/constants"

//Crear historia
export const createStory = async (story) => {
    try {
        const resp = await fetch(`${API_URL}/stories`, {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'auth': localStorage.getItem(token)
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