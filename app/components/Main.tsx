"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import Imager from './Image'
import { motion } from 'framer-motion'

const nanum = localFont({ src: '../font/nanum.woff2' })
function Main() {

  const NameofUser = 'Daniel Adetaiwo';
  const WorkofUser = 'Frontend developer';
  const Heromsg = 'Creating Websites for Businesses and Brands';
  const Herosummary = 'I design and develop websites that align with your business goals, drive conversions, and set you ahead of your competitors.'
  const src = 'https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/WhatsApp%20Image%202024-11-12%20at%201.28.39%20PM.jpeg?t=2024-11-12T12%3A36%3A37.336Z';
  const Email = 'mailto:danieladetaiwoeniola@gmail.com';
  const Projects: Array<Project> = [
    {
      image: 'https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/Chatterforeveryone-GoogleChrome2024-11-1200-31-17-ezgif.com-video-to-gif-converter%20(1).gif?t=2024-11-11T23%3A46%3A15.131Z',
      ShortDesc: 'Haven Of Writers. React, NextJS, Typescript, Supabase, ClerkAuth', Name: 'chatter', GithubLink: 'https://github.com/daniello123567/CHATTER', LiveLink: 'https://chatter-six-kappa.vercel.app/feed'
    },
    {
      image: 'https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/SHOPBESTJEWELRIES_NUBE-GoogleChrome2024-11-1200-57-13-ezgif.com-video-to-gif-converter.gif?t=2024-11-12T00%3A05%3A44.502Z',
      ShortDesc: 'High Quality jewelry Ecommerce. React, Nextjs, Framer Motion, Supabase', Name: 'Nube', GithubLink: 'https://github.com/daniello123567/ProjectOne', LiveLink: 'https://nube-101.vercel.app'
    },
    {
      image: 'https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/tryon-tan.vercel.app-GoogleChrome2024-11-1212-38-26-ezgif.com-video-to-gif-converter.gif?t=2024-11-12T11%3A54%3A09.161Z',
      ShortDesc: 'Augmented Reality. Lens Studio,React, Supabase', Name: 'Try On Tan', GithubLink: 'https://github.com/daniello123567/tryon', LiveLink: 'https://tryon-tan.vercel.app/'
    },
    {
      image: 'https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/DANIELADETAIWOSWORLDCLASSDEVELOPERgithubrepoapp-GoogleChrome2024-11-1201-16-44-ezgif.com-video-to-gif-converter.gif?t=2024-11-12T12%3A08%3A03.418Z',
      ShortDesc: 'Github API. Vue,javascript,Tailwind', Name: 'my github projects. ', GithubLink: 'https://github.com/daniello123567/VUE', LiveLink: 'https://vue-brown-five.vercel.app/'
    },
  ];
  type Project = {
    image: string,
    ShortDesc: string,
    Name: string,
    GithubLink: string,
    LiveLink: string,
  }


  const Header = () => {
    return (<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7,delay:0.6}} className='w-full px-[1em] flex justify-between  py-[.2em] h-[2.61770625em]'>
      <div className='w-max flex items-center gap-[.4em] h-full '>
        <div className=' h-full w-[2.5em] rounded-md'>
          <Image className='w-full h-full rounded-[inherit] object-cover' alt='image' src={src} width={700} height={700} />
        </div>
        <div className={'text-[.7rem] text-[#363636] text'}>
          <p>{NameofUser}</p>
          <p>{WorkofUser}</p>
        </div>
      </div>
      <div className='text-[#6D6D6D] md:w-[40%] w-max justify-between font-[400] flex items-center'>
        <Link href="#works">My Works</Link>
        <Link className='w-[10.3239375em] hidden hover:bg-[#fff2d2] transition-all duration-200 hover:border-[#ffd65b] gap-[.3em] md:flex justify-center items-center rounded-[0.25em] border border-[#dbdbdb] h-[3em]' href={Email}>
          <Image className='w-[0.875em] h-[0.875em] ' alt='image' src="https://cdn.prod.website-files.com/660450a4a9bd743720b9e518/662f8508adf84d51ec9cf6fa_bi_chat-text%20(2).png" width={700} height={700} />
          <p>Send Message</p>
        </Link>
      </div>
    </motion.div>)
  }
  const Hero = () => {
    return (<motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} id='Home' className='w-full p-[1em] md:flex-row md:justify-between md:items-start flex justify-center flex-col md:pt-[6.25em] gap-[1em] px-[4%] h-[26.8125em]'>
      <div className='md:w-[68%] flex flex-col justify-start items-start lg:w-[60%] '>
        <p className='md:text-left text-[2em] w-full md:text-[3em] md:leading-[64px] lg:text-[3.5em] lg:leading-[76px] sm:text-[2.375em] sm:leading-[54px] font-[400] text-center text-[#363636] leading-[44px]'>{Heromsg}</p>
      </div>
      <div className='flex md:justify-start md:items-start md:w-[35%] justify-center items-center flex-col gap-[1.5em]'>
        <p className='text-[#6D6D6D] md:text-left sm:text-[1.0625em] sm:leading-[28px] md:text-[1.125em] leading-[24px] text-center'>{Herosummary}</p>
        <Link className='w-[10.3239375em] hover:bg-[#fff2d2]  transition-all duration-200 hover:border-[#ffd65b] bg-[#ffd65b]  gap-[.3em] flex justify-center items-center rounded-[0.25em] border border-[#dbdbdb] h-[3em]' href={Email}>
          <Image className='w-[0.875em]  h-[0.875em] ' alt='image' src="https://cdn.prod.website-files.com/660450a4a9bd743720b9e518/662f8508adf84d51ec9cf6fa_bi_chat-text%20(2).png" width={700} height={700} />
          <p>Send Message</p>
        </Link>
      </div>
    </motion.div>)
  }
  const skills = [
    { name: 'Accessibility', image: 'accessibility.svg' },
    { name: 'css3', image: 'css.svg' },
    { name: 'HTML5', image: 'html.svg' },
    { name: 'Javascript', image: 'javascript.svg' },
    { name: 'React', image: 'react.svg' },
    { name: 'Typescript', image: 'typescript.svg' },
  ]
  const childVar = {
    init:{
      y:-50,
      opacity:0
    },
    anim:{
      y:0,
      opacity:1,
      transition:{duration:0.2}
    }
  }
  const parentVar = {
    init:{
      opacity:0
    },
    anim:{
      opacity:1,
      transition: {
        when:'beforeChildren',
        staggerChildren: 0.3,
      }
    }
  }
  const Skill = ({ skill, image }: { skill: string, image: string }) => {
    return <motion.li variants={childVar} className={`${nanum.className} text-[1em] w-[5em] px-[1.25em] flex flex-col justify-center items-center`}>
      <Image className='w-[2.5em] object-cover md:w-[3.125em] md:h-[3.125em] h-[2.5em]' width={500} height={500} alt='skill' src={`/${image}`} />
     {skill}
    </motion.li>
  }
  type skill = { name: string, image: string }
  const SkillsComponent = () => {
    return (<motion.ul viewport={{once:true}} variants={parentVar} initial="init" whileInView="anim" className='w-full justify-center mb-[1em] flex flex-wrap items-center gap-[1em]'>
      {skills.map((skill: skill,i) => {
        return <Skill key={i} image={skill.image} skill={skill.name} />
      })}
    </motion.ul>)
  }
  const GithubIcon = () => {
    return (<svg className='w-[1.0625em] h-[1.0625em]' viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#dbdbdb" stroke="#dbdbdb"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.024"></g><g id="SVGRepo_iconCarrier"> <g fill="#4f627d"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> </g> </g></svg>)
  }
  const Project = ({ Name, ShortDesc, image, GithubLink, LiveLink }: { Name: string, ShortDesc: string, image: string, GithubLink: string, LiveLink: string }) => {
    return (<motion.div viewport={{once:true,amount:0.3}} initial={{opacity:0,y:-30}} whileInView={{y:0,opacity:1}} transition={{ease:"easeInOut",duration:0.5}} className='h-max group flex flex-col border border-[#dbdbdb] bg-[#dfdfdf] w-full'>
      <div className='w-full pt-[1.25em] px-[1.25em] bg-inherit h-[18.03125em]'>
        <div className='w-full group-hover:scale-105 transition-all duration-150 ease-in-out h-full'>
          <Image className='w-full h-full object-cover' alt='image' src={image} width={500} height={500} />
        </div>
      </div>
      <div className='w-full z-[999] flex justify-between items-center py-[0.75em] px-[1.25em] bg-white h-[5em]'>
        <div className='h-full flex flex-col justify-between'>
          <p className='text-[#a1a1a1] text-[0.75em]'>{ShortDesc}</p>
          <p className='text-[#363636]'>{Name}</p>
        </div>
        <div className='flex gap-[.5em]'>
          <a target='_blank' rel="noopener noreferrer" href={GithubLink} className='w-[2.5em] h-[2.5em] transition-all duration-150 cursor-pointer flex justify-center items-center hover:border-[#ffd65b] hover:bg-[#ffd65b1f] rounded-full border border-[#dbdbdb]'>
            <GithubIcon />
          </a>
          <a target='_blank' rel="noopener noreferrer" href={LiveLink} className='w-[2.5em] h-[2.5em] transition-all duration-150 cursor-pointer flex justify-center items-center hover:border-[#ffd65b] hover:bg-[#ffd65b1f] rounded-full border border-[#dbdbdb]'>
            <Image className='w-[1.0625em] object-cover rounded-[inherit] h-[1.0625em]' alt='image' src='https://cdn.prod.website-files.com/660450a4a9bd743720b9e518/661257ad68ca560c90a431ec_home%20icons.png' width={500} height={500} />

          </a>

        </div>
      </div>
    </motion.div>)
  }
  const ProjectsSection = () => {
    return (<div id='works' className='border-t pb-[5em] pt-[1em] border-t-[#dbdbdb] px-[3%]'>
      <p className='text-[#6d6d6d] mb-[2em]'>My Work Gallery</p>
      <div className='grid lg:grid-cols-3 place-items-center md:grid-cols-2 grid-cols-1 gap-[1em]'>
        {Projects.map((project: Project) => {
          return <Project key={`${project.ShortDesc}-${crypto.randomUUID()}`} Name={project.Name} ShortDesc={project.ShortDesc} GithubLink={project.GithubLink} LiveLink={project.LiveLink} image={project.image} />
        })}
      </div>
    </div>)
  }
  const Footer = () => {
    return (<div className='w-full border-t border-t-[#dbdbdb] text-[#6d6d6d] text-[0.75em] flex justify-center items-center py-[1.25em]'>
      <p>© {NameofUser}</p>
    </div>)
  }
  const Introduction = () => {
    return (<div className='w-full flex flex-col justify-center items-center h-max'>
      <Imager />
    </div>)
  }
  return (
    <div className={` font-Neu pt-[1em] w-full  min-h-[100vh]`}>
      <Header />
      <Introduction />
      <div className='w-[90%] mt-[1em] border-b border-l border-r mx-auto lg:w-[25em] lg:h-[20em] md:h-[40em] h-[20em]'>
      <Image className='w-full h-full object-cover' width={500} src="https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/Screenshot%202024-11-12%20at%2013-16-54%20AltSchool%20Africa%20Certificate%20-%20Adetaiwo%20219%20.pdf.png?t=2024-11-12T12%3A17%3A17.801Z" height={500} alt='certificate'/>
      </div>
      <Hero />
      <SkillsComponent />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default Main
