"use client"
import {motion} from "framer-motion"
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
export default function Option({
  text,
  setOpen,
  elementtoscrollintoview
}: {
  elementtoscrollintoview:HTMLElement|null|undefined,
  text: string;
  Icon?: any;
  setOpen?: any;
}){
  return (<motion.li
    variants={itemVariants}
    onClick={() => {setOpen(false);
      elementtoscrollintoview?.scrollIntoView({behavior:"smooth"});
    }}
    className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
  >
    <motion.span variants={actionIconVariants}>
    </motion.span>
    <span>{text}</span>
  </motion.li>)

}
