"use client"
import Image from 'next/image'
import React from 'react'
import localFont from 'next/font/local'
import { Inter ,Kumbh_Sans} from 'next/font/google'
import { animate, motion } from 'framer-motion'
const logoVariants = {
  init: {
    width: "31.25em",
    top: "40%",
    left: "20%"
  },
  anim: {
    width: "4em",
    x:-10000,
    transition: {
      duration: 1,
      ease:"easeIn"
    }
  }
}


const comb = Kumbh_Sans({weight:"400",subsets:["latin"]})
const inter = Inter({ weight: "400", subsets: ["latin"] })
const myfont = localFont({src:"./myfont.ttf"});
const parentVar = {
  init:{
    opacity:1,
  },
  anim:{
  opacity:1,
  transition:{
    when:"beforeChildren",
    staggerChildren:0.1,
  }
  }
}
const child = {
  init:{
    opacity:0,
    y:-200,
  },
  anim:{
    opacity:1,
    y:0,
    transition:{
      type:"spring",
      mass:0.2,
      stiffness:120,
      damping:10
    }
  }
}

const image = {
  init:{
    scale:0,
    rotate:180,
  },
  anim:{
    scale:1,
    rotate:0
  }
}
const sec = {
  init:{
    x:-10000
  },
  anim:{
    x:0,
    transition:child.anim.transition
  }
}
const Up = {
  init:{
    opacity:0,
    y:20
  },
  anim:{
    opacity:1,
    y:0,
    transition:child.anim.transition
  }
}
const left = {
  init:{
    x:3000,
  },
  anim:{
    x:0,
    transition:child.anim.transition
  }
}
const span ={
  init:{
    scale:0,
  },
  anim:{
    scale:1
  }
}
const eba = {
  init:{
    opacity:0
  },
  anim:{
    delay:0.6,
    opacity:1,
    transition:{
    delay:1,
    ease:"easeIn"
    }
  }
}
const eba1 = {
  init:{
    x:[20,0],
  },
  anim:{
    x:0,
    transition:{
      duration:3,
      repeat:Infinity
    }
  }
}
const eba2 = {
  init:{
    x:-30,
  },
  anim:{
    x:0,
    transition:{
      duration:3,
      repeat:Infinity
    }
  }
}
function Mainpage() {
  return (
    <div className={`${inter.className} px-[1em] p-[1em] pt-[1em] w-full bg-blue-600 h-screen`}>
        <motion.div variants={parentVar} initial="init" animate="anim">
      <div className={`${myfont.className} flex flex-col justify-end leading-[3.5em] md:leading-[6em]`}>
        <motion.div className={`${myfont.className} justify-end gap-[.2em] items-center  min-w-[300px] flex flex-wrap lg:text-[6.5rem] text-[4.0625rem]`}>
          <motion.p variants={child} className='text-right'>HI,</motion.p>
          <motion.p variants={child} className='text-right'> WELCOME</motion.p>
           <motion.div variants={image}  className='w-[1em] text-right h-[1em] bg-green-400 rounded-full'></motion.div>
          <motion.p variants={child}>HOME</motion.p>
     </motion.div>
      </div>
      <div className={`${myfont.className} flex flex-col justify-end flex-wrap leading-[3.5em] md:leading-[6em]`}>
        <div className={`${myfont.className} justify-end gap-[.2em] items-center  min-w-[319px] flex flex-wrap   lg:text-[6.5rem] text-[4.0625rem]`}>
          <motion.p variants={sec} className='text-right'>IT&apos;S</motion.p>
          <motion.p variants={Up} className='text-right'>ME</motion.p>
          <motion.span variants={span} className='bg-black w-[1em] h-[.2em]'></motion.span>
          <motion.p variants={left} className='flex'>DAN&reg;</motion.p>
     </div>
      </div>
      </motion.div>

      <div className='flex mt-[2em] flex-col md:justify-between gap-y-[1em] md:flex-row'>
      <div className={`${myfont.className} w-max  flex flex-col  leading-[3.5em] `}>
        <motion.div variants={eba} initial="init" animate="anim" className={`${myfont.className} justify-end gap-[.2em] items-start  min-w-[319px] flex flex-wrap flex-col   lg:text-[6.5rem] text-[4.0625rem]`}>
          <motion.p variants={eba1}>DIGITAL,</motion.p>
          <motion.p variants={eba2}>FRONTEND,</motion.p>
          <motion.p variants={eba1} className='text-wrap'>DEVELOPER</motion.p>
     </motion.div>
      </div>

      </div>
      {/* <motion.div variants={logoVariants} initial="init" animate="anim" className='absolute top-[1.4em] w-[4em] left-[1em]'><Image src="Danwhite.svg" width={500} height={300} alt='mylogo' /></motion.div> */}

    </div>
  )
}

export default Mainpage
