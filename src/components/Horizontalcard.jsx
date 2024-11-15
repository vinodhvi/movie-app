import React, { useRef } from "react";
import Card from "../components/Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Horizontalcard = ({ data = [], heading, trending, media_type }) => {
    const containerRef = useRef()
const handleNext =() => {
    containerRef.current.scrollLeft +=50
}
const handlePrev =() => {
    containerRef.current.scrollLeft -=50
}
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl font-bold lg:text-3xl mb-7 ">{heading}</h2>
      <div className=" relative">
        <div ref={containerRef} className="grid grid-cols-[repeat(auto-fit,220px)] grid-flow-col gap-5  overflow-x-scroll overflow-hidden relative z-10 scroll-smooth transition-all scrollbar-none">
          {data.map((data, index) => {
            return (
              <Card key={data.id + "heading"} data={data} index={index+1} trending={trending} media_type={media_type}/>
            );
          })}
        </div>
       <div className="absolute top-0 hidden justify-between w-full h-full lg:flex items-center">
       <button onClick={handlePrev} className="bg-white p-1 text-black rounded-full -ml-2 z-10">
            <FaAngleLeft/>
        </button>
        <button onClick={handleNext} className="bg-white p-1 text-black rounded-full -mr-2 z-10">
            <FaAngleRight/>
        </button>
       </div>
      </div>
    </div>
  );
};

export default Horizontalcard;
