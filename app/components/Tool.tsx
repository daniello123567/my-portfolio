import React from 'react'
import Image from 'next/image'
function Tool({src,name}:{src:string,name:string}) {
  return (
    <div className='p-[1em] hover:scale-110 transform transition-all duration-75 ease-in-out lg:w-[10em] flex items-center justify-between text-center h-[7em] bg-white rounded-[1.25em] w-[40%]'>
      <div className='h-[4em] w-[4em]'>
        <Image src={src} alt={`image of ${name}`} width={500} height={300}/>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default Tool
