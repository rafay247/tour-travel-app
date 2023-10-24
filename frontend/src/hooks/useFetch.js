import { useEffect, useState } from 'react'

const useFetch = (url) => {

    console.log('url',url);
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    setError('failed to fetch')
                }
                const result = await res.json()
                console.log('fetch',result.data);
                setData(result.data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchData()
    }, [url])

    return {
        data,
        error,
        loading
    }


}

export default useFetch