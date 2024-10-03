import { useEffect, useState } from "react"
import { getUsersById } from "../helpers/getUsers";

export const useFetchUsersById = (usersIds) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        const idsArray = Array.isArray(usersIds) ? usersIds : [usersIds]

        if (idsArray && idsArray.length > 0) {
            Promise.all(
                idsArray.map(userId => getUsersById(userId))
            ).then(members =>
                setState({
                    data: members,
                    loading: false
                })
            ).catch((error)=>{
                console.log(error)
                setState({
                    data:[],
                    loading: false
                })
            })
        } else {
            setState({
                data: [],
                loading: false
            })
        }
    }, [usersIds])
    
    return state;
}