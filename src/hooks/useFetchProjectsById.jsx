import { useState, useEffect } from "react"
import { getProjectsById } from "../helpers/getProjects"

export const useFetchProjectsById = (projectId, TOKEN) => {
    const [state, setState] = useState({
        data: null,
        loading: true
    })
    useEffect(() => {
        getProjectsById(projectId, TOKEN)
            .then(project => {        
                setState({
                    data: project,
                    loading: false
                })
            })
            .catch(()=>{
                setState({
                    data: null,
                    loading: false
                })
            })
    }, [])

    return state;
}