import React from 'react'
import BgPattern from '@/public/bg-pattern.png'
import Image from 'next/image'
import { afacad, afacadItalic } from '@/helpers/fonts'

export const About = () => {
  return (
    <div className='h-[584px] px-[100px] mt-[120px]'>
        <article className='bg-[#02FF02] w-full h-full relative overflow-hidden z-10 p-20'>
            <Image 
                src={BgPattern}
                alt='bg-pattern'
                className='absolute left-0 bottom-0 w-[100%] h-[950px]'
            />
            <p className={`${afacadItalic.className} text-6xl font-bold text-center w-[88%] mx-auto`}>
                We are tech experts who use technology to innovate and transform businesses
            </p>
            <p className={`${afacad.className} text-xl mx-auto mt-4 text-center w-[90%]`}>
                At <span className='text-[#7000FF]'> Tech Katalyst</span>, we believe in the power of innovation and strategic thinking. Our goal is to bridge the gap between ideas and successful implementation, helping businesses navigate complex markets and thrive in the digital age. By combining deep industry insights with cutting-edge technology, we strive to deliver solutions that not only meet but exceed our clients' expectations. 
            </p>
            <article className='mt-20 mx-auto text-center'>
                <a href="" className={`bg-[#7000FF] text-white text-2xl ${afacad.className} font-medium py-5 px-20`}>
                    Explore about us
                </a>
            </article>
        </article>
        
    </div>
  )
}

export default About