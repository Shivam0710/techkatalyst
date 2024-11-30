import React from 'react'
import Image from 'next/image'
import Intro from '@/public/intro.png'
import Decorator from '@/public/decorator.png'
import { poppins } from '@/helpers/fonts'

export const IntroSection = () => {
  return (
    <div className='relative'>
        <div className='flex flex-col-reverse lg:flex-row items-center py-10 pt-4 px-6 lg:px-[100px]'>
            <article className='mt-[28px] lg:mt-auto'>
                <h2 className={`${poppins.className} text-[40px] leading-[40px] w-[90%] lg:text-[48px] font-medium lg:w-[80%] lg:leading-[68px]`}>
                    We provide best tech solutions for your business
                </h2>
                <p className={`${poppins.className} text-xl lg:w-[70%] mt-3 lg:mt-10`}> 
                    We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization
                </p>
                <a href="/contact-us" className={`${poppins.className} mt-6 lg:mt-12 bg-[#7000FF] py-[14px] lg:py-5 px-10 text-white rounded-sm text-[18px] text-center lg:text-2xl font-medium w-full lg:w-auto inline-block`}>
                    Lets discuss oppotunities
                </a>
            </article>
            <Image 
                src={Intro}
                alt="Intro"
                className='w-[482px] lg:h-[480px]' 
            />
        </div>
        <Image 
            src={Decorator}
            alt='decorator'
            className='absolute left-0 z-[-1] bottom-0 '
        />
    </div>
  )
}

export default IntroSection