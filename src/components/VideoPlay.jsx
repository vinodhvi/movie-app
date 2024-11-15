import React from 'react'
import { IoClose } from 'react-icons/io5'
import useFetchDetails from '../hooks/useFetchDetails'

const VideoPlay = ({data,close, media_type}) => {

const {data : videodata} = useFetchDetails(`/${media_type}/${data?.id}/videos`)
console.log("test",videodata)
  return (
    <section className='fixed bg-neutral-700 top-0 right-0 left-0 bottom-0 z-40 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-black w-95 lg:w-full h-[50vh] lg:h-[80vh] max-w-screen-lg aspect-video rounded relative'>
            <button>
                <IoClose onClick={close} className='absolute -right-2 -top-6 text-3xl '/>
            </button>
        </div>
    </section>
  )
}

export default VideoPlay