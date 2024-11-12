"use client"
import React from 'react'
import {motion} from "framer-motion"
import StaggeredDrop from './Menu'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
const man = Manrope({weight:"500",subsets:["latin"]
});
const bro = {
  init:{
    y:[-40,-40],
    opacity:[0,0],
  },
  anim:{
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}
function Header() {
  return (
    <motion.div className={`${man.className} z-50  shadow-2xl text-[1em] text-[#030712] flex justify-center`}>
    <motion.div variants={bro} initial="init" animate="anim" className='w-[90%] z-50 md:w-[95%] xl:w-[70em] shadow-bro flex justify-between items-center px-[1em] rounded-full top-[2em] fixed bg-white h-[4.75em]'>
      <StaggeredDrop/>
      <div className='flex gap-[.4em] items-center'><div className='your-image overflow-hidden w-[2.125em] bg-black rounded-full h-[2.125em]'>
        <Image className='w-full h-full' width={500} height={300} alt='my dp' src="/dp1.JPG" />
      </div>
      <p className='text-[1.0625em]'>DANIEL.WEB DEV</p></div>
    </motion.div>
    </motion.div>
  )
}

export default Header
