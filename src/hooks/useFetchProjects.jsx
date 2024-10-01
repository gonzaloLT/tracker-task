import { useEffect, useState } from "react"
import { getProjects } from "../helpers/getProjects"


export const useFetchProjects = (TOKEN) => {
	const [state, setState] = useState({
		data: [],
		loading: true
	})

	useEffect(() => {
		getProjects(TOKEN)
			.then(projects => {
				setState({
					data: projects,
					loading: false,
				})
			})
			.catch(() => {
				setState({
					data: [],
					loading: false
				})
			}
			)
	}, [])

	return state; //{data: [], loading: false }
}
