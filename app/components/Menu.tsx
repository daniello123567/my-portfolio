"use client"
import { motion } from "framer-motion";
import React,{ useEffect, useState } from "react";
import Option from "./Option";

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};
export default function Mygee(){
  const [home,sethome] = useState<HTMLElement|null>()
  const [aboutme,setaboutme] = useState<HTMLElement|null>()
  const [tools,setools] = useState<HTMLElement|null>()
  const [works,setworks] = useState<HTMLElement|null>()
  useEffect(()=>{
    const home:HTMLElement|null = window.document.querySelector('.home');
    const aboutme:HTMLElement|null = window.document.querySelector('.aboutme')
    const tools:HTMLElement|null = window.document.querySelector('.tools')
    const works:HTMLElement|null = window.document.querySelector('.works')
  },[])

  const [open,setOpen] = useState<any>(false);
  return (
  <div className="flex items-center  bg-white">
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className="tracking-tight">--MENU</span>
        <motion.span variants={iconVariants}>
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[70%] w-48 overflow-hidden"
      >
        <Option elementtoscrollintoview={home} setOpen={setOpen} text="Home" />
        <Option elementtoscrollintoview={aboutme} setOpen={setOpen}  text="About Me" />
        <Option elementtoscrollintoview={tools} setOpen={setOpen}  text="Tools i use?" />
        <Option elementtoscrollintoview={works} setOpen={setOpen}  text="My projects" />
      </motion.ul>

    </motion.div>
  </div>)
}






