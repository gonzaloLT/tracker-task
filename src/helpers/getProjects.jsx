import { API_URL } from "../auth/constants";
//Obtener todos los proyectos
export const getProjects = async () => {
    const url = `${API_URL}/projects`
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token'),
        }
    });
    const { data } = await resp.json();

    return data;
}

//Obtener proyectos por id
export const getProjectsById = async (projectId) => {
    const url = `${API_URL}/projects/${projectId}`
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token')
        }
    })
    const { data } = await resp.json();

    return data;
}

