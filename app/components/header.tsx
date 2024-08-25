import React from 'react'
import localFont from 'next/font/local'
const myFont = localFont({src:"./acorn.woff"})
function Header() {
  return (
    <div className={`${myFont.className} flex justify-center`}>
    <div className='h-[3.395em] sm:top-[1em] sm:bottom-0  px-[2em] items-center justify-between flex w-[25.55em] border border-[#88868683] rounded-full fixed bottom-[2em] bg-white/50 backdrop-blur-md'>
    <p>Home</p>
     <p>About Me</p>
     <p>Start a Project With ME!</p>
    </div>

    </div>
  )
}

export default Header
