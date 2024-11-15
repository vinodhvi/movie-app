import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (endPoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async() => {
        try{
            setLoading(true)
          const response = await axios.get(endPoint)
          setLoading(false)
          setData(response.data.results)
          console.log(response.data.results)
        }catch(error) {
          console.log(error)
        }
      }



useEffect(()=> {
    fetchData()
}, [endPoint])

    return{data, loading}
}

export default useFetch;