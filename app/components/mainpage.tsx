"use client"
import React from 'react'
import Header from './header'
import Hero from './Hero'
import Social from './Social'
import Works from './Works'
import Footer from './Footer'
import Aboutme from './Aboutme'
function Mainpage() {
  return (
    <div className='px-[1em] pt-[8em]  h-screen w-full'>
    <Header/>
    <Hero/>
    <Social/>
    <Aboutme/>
    <Works/>
    <Footer/>
    </div>
  )
}

export default Mainpage
