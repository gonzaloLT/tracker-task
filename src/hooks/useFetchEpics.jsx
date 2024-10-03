import { useEffect, useState } from "react"
import { getEpics } from "../helpers/getEpics";

export const useFetchEpics = (projectId) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        if (projectId) {
            getEpics(projectId)
                .then(epics => {
                    setState({
                        data: epics,
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
        } else {
            setState({
                data: [],
                loading: false
            })
        }

    }, [projectId])


    return state;
}
