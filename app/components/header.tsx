import React from 'react'
import Option from './Option'
import StaggeredDrop from './Menu'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
const man = Manrope({weight:"500",subsets:["latin"]
})
function Header() {
  return (
    <div className={`${man.className} z-50  shadow-2xl text-[1em] text-[#030712] flex justify-center`}>
    <div className='w-[90%] z-50 md:w-[95%] xl:w-[70em] shadow-bro flex justify-between items-center px-[1em] rounded-full top-[2em] fixed bg-white h-[4.75em]'>
      <StaggeredDrop/>
      <div className='flex gap-[.4em] items-center'><div className='your-image overflow-hidden w-[2.125em] bg-black rounded-full h-[2.125em]'>
        <Image className='w-full h-full' width={500} height={300} alt='my dp' src="/dp1.JPG" />
      </div>
      <p className='text-[1.0625em]'>DANIEL.WEB DEV</p></div>
    </div>
    </div>
  )
}

export default Header
