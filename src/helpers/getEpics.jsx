export const getEpics = async (projectId) => {  
    const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${projectId}/epics`

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
    const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${epicId}`

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