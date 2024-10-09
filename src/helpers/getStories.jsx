import {API_URL} from '../auth/constants'

export const getStories = async() => {
    const url = `${API_URL}/stories`
    const resp = await fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        auth: localStorage.getItem('token')
      }
    })

    const {data} = await resp.json()
  return data;
}

export const getStoriesEpic = async (epicId) => {
    const url = `${API_URL}/epics/${epicId}/stories`
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

export const getStoryById = async (idStory) => {
    const url = `${API_URL}/stories/${idStory}`
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        auth: localStorage.getItem('token')
      }
    })

    const {data} = await resp.json()
    
    return data;
  }
  