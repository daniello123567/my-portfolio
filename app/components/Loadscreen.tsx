"use client"
import React from 'react'
import { Borel } from 'next/font/google'
import {easeInOut, motion} from "framer-motion"
import Image from 'next/image'
const borel = Borel({weight:"400",subsets:["latin"]})
function Loadscreen() {
  return (
     <div className={`${borel.className} w-screen px-[3em] md:px-0 h-screen animate-blinkerbg flex justify-center items-center`}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}><Image src="/Daniel.svg" width={500} height={300} alt='mylogo'/></motion.div>
     </div>
  )
}

export default Loadscreen
