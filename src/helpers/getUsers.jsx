export const getUsersById = async (userId) => {
	const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/users/${userId}`
	const resp = await fetch(url, {
		headers: {
			'Content-type': 'application/json',
			auth: localStorage.getItem('token')
		}
	})
	
	const { data } = await resp.json();
	
	return data;
}
