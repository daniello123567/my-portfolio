"use client"
import Image from 'next/image'
import React from 'react'
import { motion} from "framer-motion"
const bro = {
  init:{
    y:-120,
    opacity:0
  },
  anim:{
    y:0,
    opacity:1,
    transition:{
      delay:0.5,
      duration:1
    }
  }
}
function Aboutme() {
  return (
    <motion.div variants={bro} viewport={{once:true}} initial="init" whileInView="anim" className='mt-[2em] aboutme text-center text-babe2'>
      <p className='text-[2.25em] tracking-[-1.4px] text-center'>About me</p>
      <p className='text-[1.0625em] tracking-[-0.2px]'>A Frontend Developer based in Nigeria.</p>
      <div className='flex justify-center flex-col lg:mx-auto gap-[1em] lg:flex-row-reverse'>
        <div className='w-full flex flex-col lg:w-[40%] text-left mt-[1em] p-[1.5em] bg-white rounded-[1.5em]'>
       <p className='text-[1.5em] tracking-[-0.9px] mb-[1em]'>Passionate versatile frontend engineering guy.</p>
       <p className='text-babe4 tracking-tight leading-[25.6px]'>I&apos;m an alumnus of AltSchool Africa, a premier institution for website development education. There, I honed my skills in modern web technologies, mastering HTML, CSS, and JavaScript. I gained practical experience with popular frameworks like React,Next.js & vue, and delved into responsive design principles.</p>
       <div className='flex gap-[.7em] flex-col md:flex-row'><button type='button' className='h-[3.05625em] text-[0.75em] bg-babe2 rounded-full py-[0.875em] px-[1.25em] mt-[1em] text-white'>READ RESUME</button>
       <button type='button' className='h-[3.05625em] text-[0.75em] rounded-full  py-[0.875em] px-[1.25em] border border-babe2 mt-[1em]'>READ MY TWEETS?</button>
       </div></div>
       <div className='w-full object-cover flex flex-col lg:w-[40%] text-left mt-[1em] p-[1.5em] h-[20em] bg-white rounded-[1.5em]'>
        <Image className='w-full rounded-[inherit] object-cover h-full' alt='my pic' src="/dp2.JPG" width={500} height={300}/>
       </div>
       </div></motion.div>
  )
}

export default Aboutme
