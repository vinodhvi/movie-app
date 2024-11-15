import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import Horizontalcard from './../components/Horizontalcard'
import VideoPlay from "../components/VideoPlay";

const Detail = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`);
  const {data : similarData} = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const {data : recemondedData} = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
  const [playVideo, setPlayVideo] = useState(false)
  const [playVideoId, setPlayVideoId] = useState('')

  console.log("Datas", data);
  console.log("castData", castData);
  console.log("similarData", similarData);

  const handlePlayVideo = (data) => {
    setPlayVideoId(data)
    setPlayVideo(true)
  }


const duration = (Number(data?.runtime)/60).toFixed(1).split(".").join(",")
  return (
    <div className="py-16">
      <div className="w-full h-[450px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL+data?.backdrop_path}
            alt="backdrop"
            className="h-full object-cover w-full"
          />
        </div>
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent hidden lg:block"></div>
        <div className="container mx-auto px-3 py-16 lg:py-0 flex lg:gap-10 gap-5 flex-col lg:flex-row">
          <div className=" relative mx-auto lg:-mt-28 lg:mx-0 w-fit">
          <img
            src={imageURL + data?.poster_path}
            alt="backdrop"
            className="h-80 object-cover w-60 rounded"
          />
          <button onClick={()=>handlePlayVideo(data)} className="mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105">Play Now</button>
          </div>
          <div className="text-white">
              <h2 className='capitalize text-lg lg:text-2xl font-semibold my-2 text-white'>{data?.title || data?.name}</h2>
              <p className="text-neutral-400">{data?.tagline}</p>
              <div>
                <Divider />
              <div className="flex items-center my-3 gap-3 text-neutral-400 text-sm">
                 <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
                 <span>|</span>
                 <p>View : {Number(data?.vote_count).toFixed(0)}</p>
                 <span>|</span>
                 <p>Duration : {duration[0]}h {duration[0]}m</p>
                
                </div>
                <Divider />
                <div>
                  <h3 className='capitalize text-lg lg:text-2xl font-semibold mb-1 text-white'>Overview</h3>
                  <p>{data?.overview}</p>
                  <Divider />
                  <div className="flex items-center gap-3 my-3 text-center">
                    <p>Staus : {data?.status}</p>
                    <span>|</span>
                    <p>Release date : {moment(data?.release_date).format("MMM Do YYYY")}</p>
                    <span>|</span>
                    <p>Revenue : {Number(data?.revenue)}</p>
                  </div>
                  <Divider />
                </div>
                {/* movie director */}
                <div>
                  <p>Director : {castData?.crew[0]?.name}</p>
                </div>
              </div>
          </div>
        </div>
     <div>
        <Horizontalcard data={recemondedData} heading={"Similar" + params?.explore } media_type={params?.explore}/>
     </div>
    {
      playVideo && (
        <VideoPlay data={playVideoId} close={()=> setPlayVideo(false)} media_type={params?.explore}/>
      )
    }
    </div>
  );
};

export default Detail;
