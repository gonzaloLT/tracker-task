import { API_URL } from "../auth/constants";

//Crear tarea
export const createTask = async (task) => {
    const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth': localStorage.getItem('token')
        },
        body: JSON.stringify(task)
    });
}

