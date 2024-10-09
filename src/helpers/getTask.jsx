import { API_URL } from "../auth/constants";


export const getTaskStory = async (storyId) => {
    const url = `${API_URL}/stories/${storyId}/tasks`

    const resp = await fetch(url, {
        method:'GET',
        headers:{
            'Content-type': 'application/json',
            auth: localStorage.getItem('token')
        }
    })

    const { data } = await resp.json()
  return data;
}
