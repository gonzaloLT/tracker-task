import { useEffect, useState } from "react";
import { getStories } from "../helpers/getStories";

export const useFetchStories = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getStories()
            .then(stories =>
                setState({
                    data: stories,
                    loading: false
                })
            )
            .catch((err) => {
                console.log(err)
                setState({
                    data: [],
                    loading: false
                })
            })
    },[])
    return state;
}
