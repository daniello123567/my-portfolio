"use client"
import React, { useEffect, useState } from 'react'
import Project from './Project'
import data from './data'
declare global {
type jesus = {
  Description: string;
  Name: string;
  Overview: string;
  Projectduration: string;
  Toolsused: string;
  created_at?: string;
  github_link: string;
  id?: number;
  images: string[];
  live_link: string;
}
}

function Works() {

  return (
    <div className='works scroll-mt-[6em] text-babe2'>
      <p className='text-[2.25em] tracking-[-1.4px] md:text-[3.0625em] lg:text-[4.125em] text-center mt-[1.5em]'>Selected Works</p>
      <p className='text-[1.0625em] lg:mb-[2.5em] mb-[1em] mt-[1em]  text-babe2 leading-[1em] text-center tracking-[-0.2px]'>
        Some works i&apos;ve built on my own & i&apos;m proud of😎
      </p>
      {data?.map((work:jesus)=>{
        return <Project github={work.github_link} livelink={work.live_link} name={work.Name} toolsused={work.Toolsused} projectduration={work.Projectduration} key={work.id} overview={work.Overview}  arrayofimages={[...work.images]} description={work.Description}/>
      })}
    </div>
  )
}

export default Works
