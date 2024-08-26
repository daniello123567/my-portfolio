import React from 'react'
import Tool from './Tool'

const Mytools = [
  {
    name:"Typescript",
    src:"/typescript.svg"
  },
  {
  name:"Nextjs",
  src:"/nextjs-icon.svg"
},
{
  name:"React",
  src:"/react-2.svg"
},
{
  name:"Clerk",
  src:"/clerk.jpg"
},
{
  name:"Postgresql Database",
  src:"/postgre.svg"
}
];
type Tool = {
  name:string,
  src:string
}
function Social() {
  return (
    <div className='text-babe2'>
      <p className='text-[2.25em] tracking-[-1.4px] md:text-[3.0625em] lg:text-[4.125em] text-center mt-[1.5em]'>Some Tools I use.</p>
    <div className='w-full justify-center lg:gap-x-[2em] lg:mt-[2em] mt-[1em] lg:flex-row items-center gap-[1em] flex flex-wrap'>
      {Mytools.map((tools:Tool)=>{
        return <Tool name={tools.name} src={tools.src}/>
      })}..ETC
    </div>
    </div>
  )
}

export default Social
