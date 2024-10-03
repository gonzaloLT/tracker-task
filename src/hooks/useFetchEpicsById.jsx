import { useEffect, useState } from "react"
import { getEpicsById } from "../helpers/getEpics"

export const useFetchEpicsById = (epicId) => {
    const [ state, setState ] = useState({
        data: null,
        loading: true
    })

    useEffect(()=>{
        getEpicsById(epicId)
            .then(epic => {
                setState({
                    data: epic,
                    loading: false
                })
            })
            .catch(()=>{
                setState({
                    data: null,
                    loading: false
                })
            })
    },[])
  return state
}
