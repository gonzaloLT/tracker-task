import React, { useEffect, useState } from 'react';

function useFetch(url, option) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch(url, option)
                if(!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, loading, error};
}

export default useFetch;
