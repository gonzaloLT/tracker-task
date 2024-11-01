import { useEffect, useState } from "react"
import { getStoriesEpic } from "../helpers/getStories"

export const useFetchStoriesEpic = (epicId) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    const fetchStoriesEpic = async () => {
        setState((prevState) => ({...prevState, loading: true}) )
        try {
            const stories = await getStoriesEpic(epicId)
            setState({
                data: stories || [],
                loading: false
            })
        } catch (error) {
            console.log(error)
            setState({
                data: [],
                loading: false
            })
        }
    }

    useEffect(()=>{
        fetchStoriesEpic()
    },[epicId])
    
  return {...state, fetchStoriesEpic};
}
