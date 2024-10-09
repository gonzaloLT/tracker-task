import { API_URL } from "../auth/constants"

export const getEpics = async (projectId) => {  
    const url = `${API_URL}/projects/${projectId}/epics`

    const resp = await fetch(url, {
        headers:{
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token')
        }
    })

    const { data } = await resp.json() 
    return data;
}

export const getEpicsById = async (epicId) => {
    const url = `${API_URL}/epics/${epicId}`

    const resp = await fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token')
        }
    })

    const {data} = await resp.json();
  return data;
}