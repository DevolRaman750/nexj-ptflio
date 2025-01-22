import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-40 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='white'/>
      </div>
      
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      
      

      {/* Heading Content */}
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Next JS Portfolio
          </h2>

          <TextGenerateEffect
          className='text-center text-[50px] md:text-5xl lg:text-8xl'
          words='Hello World, I am Raman Tripathi '
          />  

          <p className='text-center md:tracking-wider mb-4 mt-4 text-sm md:text-lg lg:text-1xl'>
          I am persuing Bachelor of Engineering student at the Army Institute of Technology, Pune, with a strong foundation in full-stack web development. My expertise lies in the MERN stack and Spring Boot, allowing me to build scalable and efficient applications.

          Currently, I am honing my skills in Java programming while actively solving problems and deepening my understanding of data structures and algorithms. I thrive on challenges, embrace continuous learning, and am driven to explore emerging technologies to stay ahead in the dynamic field of software development.
          </p>
          <a href='#about'>
            <MagicButton 
              title="Show my work"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
      
    
      </div>
    
  )
}

export default Main
