import { useEffect, useState } from "react"
import { getStoriesEpic } from "../helpers/getStories"

export const useFetchStoriesEpic = (epicId) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{
        getStoriesEpic(epicId)
            .then(epics =>{
                setState({
                    data: epics,
                    loading: false
                })
            })
            .catch((err)=>{
                console.log(err)
                setState({
                    data: [],
                    loading: false
                })
            })
    },[])
    
  return state;
}
