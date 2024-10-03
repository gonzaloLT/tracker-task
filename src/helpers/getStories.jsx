export const getStories = () => {
    const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/stories`
  return 
}

export const getStoriesEpic = async (epicId) => {
    const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${epicId}/stories`
    const resp = await fetch(url, {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token')
        }
    })

    const { data } = await resp.json();
  return data;
}

export const getStoriesById = () => {
    const url = ``
    return 
  }
  