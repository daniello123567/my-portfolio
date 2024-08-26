"use client"
import { motion } from "framer-motion";
import React,{ useState } from "react";
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
        <Option elementtoscrollintoview={document.querySelector('.saka')} setOpen={setOpen} text="Home" />
        <Option elementtoscrollintoview={document.querySelector('.aboutme')} setOpen={setOpen}  text="About Me" />
        <Option elementtoscrollintoview={document.querySelector('.tools')} setOpen={setOpen}  text="Tools i use?" />
        <Option elementtoscrollintoview={document.querySelector('.works')} setOpen={setOpen}  text="My projects" />
      </motion.ul>

    </motion.div>
  </div>)
}






