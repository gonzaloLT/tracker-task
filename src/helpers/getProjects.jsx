export const getProjects = async (TOKEN) => {
    const url = 'https://lamansysfaketaskmanagerapi.onrender.com/api/projects'
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json',
            auth: TOKEN,
        }
    });
    const { data } = await resp.json();

  return data; 
}
