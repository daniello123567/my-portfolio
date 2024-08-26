import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='w-full text-center pt-[3em] px-[1.5em] pb-[1.5em] mt-[2em] h-[max-content] text-white bg-babe2 rounded-[1.5em]'>
      <div className='flex flex-col gap-[2em]'><p className='text-[2.25em] tracking-[-1.4px] leading-[43.2px]'>Ready to collaborate?</p>
      <p className='text-[1.0625em] tracking-[-0.2px]'>Let&apos;s Drop Your Idea here💌</p>
    <p className=' text-wrap underline'>danieladetaiwoeniola@gmail.com</p>
    </div>
    <div>
      <div className='flex flex-col lg:flex-row items-center'>
    <p className='text-[1.0625em] mt-[1em] tracking-[-0.2px]'>This is my West African Examination Council result.</p>
       <div className='w-full overflow-hidden  bg-white mt-[3em] h-[13em] rounded-[1.5em]'>
        <Image className='w-full h-full' width={500} height={300} alt='my waec result' src="/waec.jpg"/>
       </div>
    <p className='text-[1.0625em] mt-[1em] tracking-[-0.2px]'>This are fellow students and this is what they have to say about some of my projects</p>
       <div className='w-full overflow-hidden object-cover bg-white mt-[3em] h-[13em] rounded-[1.5em]'><Image className='w-full object-right-bottom object-cover h-full' width={500} height={300} alt='my waec result' src="/tes.PNG"/>
       </div>
       <div className='w-full overflow-hidden object-cover bg-white mt-[3em] h-[13em] rounded-[1.5em]'><Image className='w-full object-cover h-full' width={500} height={300} alt='my waec result' src="/tes2.PNG"/>
</div>
       </div>
    </div>
    </div>
  )
}

export default Footer
