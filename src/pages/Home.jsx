import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";

import Horizontalcard from "../components/Horizontalcard";

import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  // const [nowPlayingData, setNowPlayingData] = useState([]);
const {data : nowPlayingData} = useFetch('/movie/now_playing')
const {data : topRatedData} = useFetch('/movie/top_rated')
const {data : popularTvShowData} = useFetch('/tv/popular')
const {data : onTheAirShowData} = useFetch('/tv/on_the_air')

//   const fetchNowPlayingData = async() => {
//     try{
//       const response = await axios.get("/movie/now_playing")
//       setNowPlayingData(response.data.results)
//       console.log(response.data.results)
//     }catch(error) {
//       console.log(error)
//     }
//   }



// useEffect(() => {
// fetchNowPlayingData()
// }, [])

  return (
    <div>
      <BannerHome />
        <Horizontalcard data={trendingData} heading={"Trending"} trending={true} media_type={"Trending"}/>
        <Horizontalcard data={nowPlayingData} heading={"Now Playing"} media_type={"Movie"}/>
        <Horizontalcard data={topRatedData} heading={"Top Rated Movies"} media_type={"Movie"}/>
        <Horizontalcard data={popularTvShowData} heading={"popular Tv Show"} media_type={"Tv"}/>
        <Horizontalcard data={onTheAirShowData} heading={"On The Air"} media_type={"Tv"}/>
    </div>
  );
};

export default Home;
