"use client"
import React from 'react'
import Tool from './Tool'
import { motion } from 'framer-motion';

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
const bro = {
  init:{
    opacity:1,
  },
  anim:{
    opacity:1,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.5
    }
  }
}
const brother = {
  init:{
    y:-80,
    opacity:0
  },
  anim:{
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}
function Social() {
  return (
    <div className='tools text-babe2'>
      <motion.p variants={brother} viewport={{once:true}} initial="init" whileInView="anim" className='text-[2.25em] tracking-[-1.4px] md:text-[3.0625em] lg:text-[4.125em] text-center mt-[1.5em]'>Some Tools I use.</motion.p>
    <motion.div variants={bro} viewport={{once:true}} initial="init" whileInView="anim" className='w-full justify-center lg:gap-x-[2em] lg:mt-[2em] mt-[1em] lg:flex-row items-center gap-[1em] flex flex-wrap'>
      {Mytools.map((tools:Tool)=>{
        return <Tool key={tools.name} name={tools.name} src={tools.src}/>
      })}..ETC
    </motion.div>
    </div>
  )
}

export default Social
