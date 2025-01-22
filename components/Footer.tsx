import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div>
            <img
                src='/footer-grid.svg'
                alt='grid'
                className='w-full h-full opacity-50'
            />
        </div>
        <div className='flex flex-col items-center '>
            <h1 className='heading lg:max-w[45vw]'>
            Passion for <span
                className='text-purple'
                > innovation</span>  and committed to taking digital transformation to the next level
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today
            </p>
            <a href='mailto:ramantripathi0707@gmail.com'>
                <MagicButton
                    title='Email:'
                    icon={<FaLocationArrow/>}
                    position='right'
                />



            </a>

        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © 2025 Raman
            </p>

            <div className='flex items-center md:fap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 '>
                    <a href={profile.link}>
                        <img 
                        src={profile.img} 
                        alt={profile.img}
                        
                        width={20} height={20}/>

                        </a>

                    </div>
                ))}

            </div>
        </div>
      
    </footer>
  )
}

export default Footer
