import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation()
  const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const navigate= useNavigate()
const query = location?.search?.slice(3)

  const fetchData = async() => {
    try{
      const response = await axios.get(`/search/multi`, {
        params:{
          query :location?.search?.slice(3),
          page:1
        }
      })
      setData((prev)=> {
        return [
          ...prev,
          ...response.data.results
        ]
      })
    
      console.log("page", response)
    }catch(error) {
      console.log(error)
    }
  }
useEffect(()=> {
  setPage(1)
  setData([])
  fetchData()
}, [location?.search])

const handleScroll = () => {
  if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    setPage(prev => prev + 1)
  }
}
useEffect(()=> {
  if(query) {
    fetchData()
  }
 
}, [page])
useEffect(()=> {
  window.addEventListener("scroll", handleScroll)
}, [])


  console.log('location', location.search.slice(3))


  return (
    <div className='py-16'>
      <div className='lg:hidden my-2 mx-2 sticky top-16 z-40'>
        <input type="text" placeholder='Search Here ...' 
        onChange={(e)=> navigate(`/search?q=${e.target.value}`) }
        value={query.split("%20")?.join("")}
        className='px-4 py-1 text-lg bg-white w-full rounded-full text-neutral-900'/>
      </div>
      <div className='container mx-auto'>
        <h2 className='capitalize text-lg lg:text-2xl font-semibold my-2'>Search Results</h2>
        <div className='flex gap-5 flex-wrap'>
        {
          data.map((searchData, index) => {
            return(
              <Card data={searchData} key={searchData.id+"Search"} media_type={searchData.media_type}/>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default SearchPage