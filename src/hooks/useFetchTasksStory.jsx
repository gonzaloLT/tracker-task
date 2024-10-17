import { useEffect, useState } from "react";
import { getTaskStory } from "../helpers/getTask";

export const useFetchTasksStory = (storyId) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getTaskStory(storyId)
            .then(tasks => {
                setState({
                    data: tasks || [],
                    loading: false
                })
            })
            .catch((err) => {
                console.log(err)
                setState({
                    data: [],
                    loading: false
                })
            })
    }, [])

    const setTasks = (tasks) => {
        setState((prevState) => ({
            ...prevState,
            data: tasks,
        }));
    };

    return {...state, setTasks};
}
