"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
type party = {
  name:string,
  toolsused:string,
  projectduration:string,
  arrayofimages:Array<string>,
  overview:string,
  description:string,
  livelink:string,
  github:string
}
function Project({name,toolsused,projectduration,arrayofimages,overview,description,livelink,github}:party) {
const [currentIndex,setcurrentindex] = useState<number>(0);
const handleNext = ()=>{
  if(currentIndex!==arrayofimages.length-1){
    setcurrentindex((prev)=>prev+1)
  }
}
const handlePrev = ()=>{
  if(currentIndex!==0){
    setcurrentindex(prev=>prev-1);
  }
};
const router = useRouter();
const handleVisitwebsite = ()=>{
  router.push(livelink)
}
const handleVisitgithub = ()=>{
  router.push(github)
}
  return (
    <div className='flex mt-[3em] lg:flex-row flex-col gap-[2em]'>
      <div className='bg-purple-500  border-gray-300 border-spacing-2 border-2 shadow-sm relative overflow-hidden w-full rounded-[1.5em] h-[23.9364375em]'>
 <img title={name} className='w-full h-full object-cover' src={arrayofimages[currentIndex]}/>
       <div className='absolute flex justify-between w-full top-[9em]'>
        {currentIndex!=0?<button onClick={handlePrev} className='w-[3em] rounded-full h-[3em] bg-black text-white backdrop-blur-md' type='button'>&larr;</button>:<p></p>}
        {currentIndex!==arrayofimages.length-1&&<button onClick={handleNext} className='w-[3em] rounded-full h-[3em] bg-black text-white backdrop-blur-md' type='button'>&rarr;</button>}
       </div>
      </div>
      <div className='w-full  gap-[2em] p-[1.5em] flex flex-col bg-white h-max lg:h-[23.9364375em] rounded-[1.5em]'>
        <div className='flex flex-wrap text-babe3 tracking-[-0.2px] text-[1em] justify-between items-center'>
          <p className='font-bold'>{name}</p>
          <p className='text-wrap'>Tech used:<br/>{toolsused}</p>
          <p>project duration: {projectduration}</p>
        </div>
        <div>
          <p className='text-black flex gap-[1em] text-[1.5em] tracking-[-0.9px]'>{overview}
          </p>
          <p className='text-babe4 tracking-tight'>{description}</p>

        </div>
        <div className='flex gap-[1em]'>
        <button type='button' onClick={handleVisitwebsite} className='bg-slate-200 px-[.8em] rounded-full py-[.5em]'>Visit {name}</button>
        <button type='button' onClick={handleVisitgithub} className='bg-slate-200 px-[.8em] rounded-full py-[.5em]'>View Code</button>
      </div>
      </div>

    </div>
  )
}

export default Project
