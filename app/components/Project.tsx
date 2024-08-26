import React from 'react'

function Project() {
  return (
    <div className='flex lg:flex-row flex-col gap-[2em]'>
      <div className='bg-purple-500 w-full rounded-[1.5em] h-[23.9364375em]'></div>
      <div className='w-full justify-between p-[1.5em] flex flex-col bg-white h-[20.7em] lg:h-[23.9364375em] rounded-[1.5em]'>
        <div className='flex text-babe3 tracking-[-0.2px] text-[1em] justify-between items-center'>
          <p>chatter🍀</p>
          <p>project duration: 1 month</p>
        </div>
        <div className='imagesoftheapp flex gap-[1em]'>
          <div className='w-[5em] h-[5em] outline outline-2 outline-red-400 bg-purple-600 rounded'></div>
          <div className='w-[5em] h-[5em] bg-blue-900 rounded'></div>
          <div className='w-[5em] h-[5em] bg-blue-900 rounded'></div>
          <div className='w-[5em] h-[5em] bg-blue-900 rounded'></div>
        </div>
        <div>
          <p className='text-black flex gap-[1em] text-[1.5em] tracking-[-0.9px]'>Platform For Writers

          </p>
          <p className='text-babe4 tracking-tight'>Online magazine that provides the latest information on global fashion trends, events, lifestyle tips, and much more</p>

        </div>
      </div>
    </div>
  )
}

export default Project
