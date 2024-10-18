import { useEffect, useState } from "react";
import { getTaskStory } from "../helpers/getTask";

export const useFetchTasksStory = (storyId) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    const fetchTask = async ()=>{
        setState((prevState) => ({...prevState, loading: true}) )
        try {
            const tasks = await getTaskStory(storyId)
            setState({
                data: tasks || [],
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

    useEffect(() => {
        fetchTask();
    }, [storyId])

    return {...state, fetchTask};
}
