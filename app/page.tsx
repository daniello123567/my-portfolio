"use client"
import React, { useEffect, useState } from 'react'
import Loadpage from './components/loadpage'
import Mainpage from './components/mainpage'
function Page() {
  const [completeLoading,setCompleteloading] = useState<boolean>(false)
  useEffect(()=>{setTimeout(()=>setCompleteloading(true),3000)},[])
  return (
    <div>
      {completeLoading?
      <Mainpage/>
      :<Loadpage/>}
      </div>
  )
}

export default Page
