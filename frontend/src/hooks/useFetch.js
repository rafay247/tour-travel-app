import { useEffect, useState } from 'react'

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
            setData(result.data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }
    fetchData()
}, [url])

const useFetch = (url) => {
    return {
        data,
        error,
        loading
    }


}

export default useFetch