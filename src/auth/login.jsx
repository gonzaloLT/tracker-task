export const login = async (username, password) => {
    const url = 'https://lamansysfaketaskmanagerapi.onrender.com/api/login'

    const resp = fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    const { token } = resp.json()
  return token;
}
