import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from './../components/Card'

const Explore = () => {
  const params = useParams()
const [pageNo, setPageNo] = useState(1)
const [data, setData] = useState([])
const [totalPageNo, setTotalPageNo] = useState(0)

  console.log(params.explore)
  const fetchData = async() => {
    try{
      const response = await axios.get(`/discover/${params.explore}`, {
        params:{
          page:pageNo
        }
      })
      setData((prev)=> {
        return [
          ...prev,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
      console.log("page", response)
    }catch(error) {
      console.log(error)
    }
  }
const handleScroll = () => {
  if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      setPageNo(prev => prev + 1)
  }
}

useEffect(()=> {
  fetchData()
}, [pageNo])
useEffect(()=> {
  setPageNo(1)
  setData([])
  fetchData()
}, [params.explore])
useEffect(()=> {
  window.addEventListener("scroll", handleScroll)
}, [])
  return (
    <div className='py-16'>
     <div className='container mx-auto'>
     <h3 className='capitalize text-lg lg:text-2xl font-semibold my-2'>Popular {params.explore} Show</h3>
      <div className='flex gap-5 flex-wrap'>
        {
          data.map((exploreData, index) => {
            return(
              <Card data={exploreData} key={exploreData.id + "exploresection"} media_type={params.explore}/>
            )
          })
        }
      </div>
     </div>
    </div>
  )
}

export default Explore