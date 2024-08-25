"use client"
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Montserrat,Poppins } from 'next/font/google'
import {motion} from "framer-motion"
const myFont = localFont({src:"./acorn.woff"});
const robo = Poppins({weight:"700",subsets:["latin"]})
const child = {
  init:{
    y:40,
    opacity:0
  },
  anim:{
    y:0,
    opacity:1,
    transition:{
      duration:0.8,
    }
  }
}
const Parent = {
  init:{
    opacity:1
  },
  anim:{
    opacity:1,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.4
    }
  }
}
const eba = {
  init:{
    rotateZ:180
  },
  anim:{
   rotateZ:0,
   transition:{
       duration:1,
   }
  }
}
function Hero() {
  return (<div className={`${myFont.className} w-screen h-screen sm:mt-[3em]`}>
    <motion.div variants={Parent} initial="init" animate="anim" className={`${myFont.className} relative sm:mt-[1em]  text-center font-[700] text-my-guy tracking-[-2px] w-max mx-auto`}>
      <div className='leading-[1em] flex flex-col gap-y-[-1em] lg:leading-[.8em] text-[#8FDCC2]'>
        <motion.p variants={child}>Hi. I&apos;m Daniel.</motion.p>
         <br/>
        <motion.p variants={child}>A Frontend </motion.p><br/>
        <motion.p variants={child}>Developer.</motion.p>
        </div>
      <motion.div variants={eba} className='w-[1em] absolute right-[-1em] top-0 h-[1em] '>
        <Image src="/star.svg" width={500} height={300} alt='star'/>
      </motion.div>
      <div className='w-[1em] absolute bottom-[-.4em] left-[-.8em] h-[1em] '>
      <Image src="/star.svg" width={500} height={300} alt='star'/>
      </div>
    </motion.div>
    <p className={`${myFont.className}  mx-auto w-[50%] lg:mt-[1.8em]  mt-[1em] text-[#D4EDE4] text-center tracking-[-.3px] text-brother-gee`}>I&apos;m dedicated to building solutions that are intuitive, inclusive, and obsessed with users delight.</p>
    </div>
  )
}

export default Hero
