import { API_URL } from "../auth/constants";

//Crear tarea
export const createTask = async (task) => {
    try{
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            },
            body: JSON.stringify(task)
        });
        if(!response.ok){
            throw new Error('Error creating task')
        }

        const data = await response.json();
        return data;
    } catch(error){
        console.log('Error', error )
        return null;
    }
}

