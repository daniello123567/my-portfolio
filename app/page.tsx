import React from 'react'
import Image from './components/Image'
import Main from './components/Main'

function page() {
  const Introduction = ()=>{
    return (<div className='w-full pb-[3em] flex flex-col justify-center items-center h-max bg-white'>
      <Image/>
    </div>)
  }
  return (
    <div style={{backgroundImage:"url('/bro.svg')"}}>
    <Main/>
    </div>
  )
}

export default page
