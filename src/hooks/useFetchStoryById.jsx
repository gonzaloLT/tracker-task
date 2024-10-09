import { useEffect, useState } from "react"
import { getStoryById } from "../helpers/getStories"


export const useFetchStoryById = (idStory) => {
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        getStoryById(idStory)
            .then(story =>
                setState({
                    data: story,
                    loading: false
                })
            )
            .catch((err) => {
                console.log(err)
                setState({
                    data: null,
                    loading: false
                })
            })
    }, [])

    return state;
}
