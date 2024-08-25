"use client"
import React, { useEffect, useState } from 'react'
import Loadscreen from './components/Loadscreen'
import Mainpage from './components/mainpage'
function Page() {
  const [completeLoading,setCompleteloading] = useState<boolean>(false)
  useEffect(()=>{setTimeout(()=>setCompleteloading(true),3000)},[])
  return (
    <div>
      {/* {!completeLoading?<Loadscreen/>: */}
      <Mainpage/>
      </div>
  )
}

export default Page
