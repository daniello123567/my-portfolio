"use client"
import React from 'react'
import { Manrope } from 'next/font/google'
import { motion } from "framer-motion"
const man = Manrope({weight:"500",subsets:["latin"]});
const bro = {
  init:{
    y:[-40,-40],
    opacity:[0,0],
  },
  anim:{
    y:0,
    opacity:1,
    transition:{
      delay:0.3,
      duration:1
    }
  }
}
function Hero() {
  return (
    <motion.div variants={bro} initial="init" animate="anim" className={`${man.className} home xl:w-[70em] p-[2.875em] text-babe2 text-center w-[100%] h-max rounded-[1.5em] mx-auto bg-white`}>
     <p className='text-[1.5em]  text-babe2 tracking-tight'>Hello, i&apos;m Daniel</p>
     <h1 className='text-[3.375em] md:text-[4em] mt-[1em]  mb-[1em] md:leading-[70px] lg:text-[6em]  lg:leading-[90px] lg:mt-0 tracking-[-3px] leading-[59.4px]'>I develop digital products balancing users wants and company goals.</h1>
     <p className='text-[1.5em] mt-[1em]  text-babe2 tracking-tight'>I&apos;m a <strong>Frontend Developer</strong>. I code digital experiences prioritizing users and strategic fit</p>
     <button type='button' className='bg-babe2 lg:w-[13.1875em] sm:w-[60%] text-white h-[4.059375em] w-full rounded-full text-[0.75em] lg:text-[1em] mt-[2em]'>Start a project with me!</button>
    </motion.div>
  )
}

export default Hero
