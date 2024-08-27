"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
function Tool({src,name}:{src:string,name:string}) {
  const bro = {
    init:{
      y:-80,
      opacity:0,
      rotate:-90
    },
    anim:{
      y:0,
      opacity:1,
      rotate:0,
      transition:{
        delay:0.5,
        type:"spring",
        ease:"easeInOut"
      }
    }
  }
  return (
    <motion.div variants={bro} viewport={{once:true}} initial="init" whileInView="anim" className='p-[1em] hover:scale-110 transform transition-all duration-75 ease-in-out lg:w-[10em] flex items-center justify-between text-center h-[7em] bg-white rounded-[1.25em] w-[40%]'>
      <div className='h-[4em] w-[4em]'>
        <Image src={src} alt={`image of ${name}`} width={500} height={300}/>
      </div>
      <p>{name}</p>
    </motion.div>
  )
}

export default Tool
