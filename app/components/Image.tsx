"use client"
import React from "react"
import Image from "next/image"
import {motion} from 'framer-motion'
function Imager() {
  const UsersImage = "https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/WhatsApp%20Image%202024-11-12%20at%201.28.39%20PM.jpeg?t=2024-11-12T12%3A36%3A37.336Z"

  const CurveArrowIcon = () => {
    return (
      <motion.svg

        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 82"
        width="70"
        height="82"
        style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="__lottie_element_214">
            <rect width="70" height="82" x="0" y="0" />
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_214)">
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,-4.425998687744141,-3)"
            opacity="1"
          >
            <motion.path
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity="0"
              stroke="rgb(71,71,71)"
              strokeOpacity="1"
              strokeWidth="3"
              d="M69.55899810791016,80.29199981689453 C59.981998443603516,79.9990005493164 50.334999084472656,80.53600311279297 40.854000091552734,79.35600280761719 C31.371999740600586,78.1760025024414 21.7810001373291,75.01899719238281 15.711999893188477,68.72899627685547 C7.603000164031982,60.32600021362305 7.5,47.900001525878906 12.284000396728516,37.827999114990234 C17.066999435424805,27.756000518798828 25.96500015258789,19.542999267578125 34.90599822998047,11.770999908447266"
            />
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(1,0,0,1,-4.425998687744141,-3)"
            opacity="1"
          >
            <motion.path
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity="0"
              stroke="rgb(71,71,71)"
              strokeOpacity="1"
              strokeWidth="3"
              d="M8.925999641418457,11.708000183105469 C19.923999786376953,11.986000061035156 31.384000778198242,12.17199993133545 41.34400177001953,7.5 C36.08000183105469,12.184000015258789 32.439998626708984,18.659000396728516 31.17300033569336,25.59000015258789"
            />
          </g>
        </g>
      </motion.svg>
    );
  };
 const variant = {
      "init":{
        x:"-100%",
        rotate:0
      },
      "anim":{
        x:0,
        rotate:360,
        transition:{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 1.2,
          ease: [0.42, 0, 0.58, 1]
        }
      }
 }
 const forBro = {
    "init":{opacity:0},
    "anim":{opacity:1}
 }
 const par =  {
  init: { opacity: 0 },
  anim: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}
  return (
    <motion.div variants={par} initial="init" animate="anim" className="w-[14.5625em] pt-[3em] relative   mx-auto h-[14.4375em]">
    <div className="absolute left-[2em] w-[3.98854375em] bottom-[0.5em] h-[5.05208125em]">
    <CurveArrowIcon/>
    </div>
    <motion.p variants={forBro}  className={"font-geaugu w-max text-[2em] bottom-[-.3em] left-[3em] text-[#474747] font-[700] absolute"}>Yours Truly</motion.p>
    <motion.div variants={variant}  className="border-[#474747] mx-auto w-[7.4375em]  rounded-full h-[7.4375em] border-[0.1875em]">
      <Image className="w-full h-full rounded-[inherit] object-cover" alt="image" src={UsersImage} width={700} height={700}/>
    </motion.div>
    </motion.div>
  )
}

export default Imager
