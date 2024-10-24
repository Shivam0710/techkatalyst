import React from 'react'
import Image from 'next/image'
import Intro from '@/public/intro.png'
import Decorator from '@/public/decorator.png'
import { afacad } from '@/helpers/fonts'

export const IntroSection = () => {
  return (
    <div className='relative'>
        <div className='flex items-center py-10 pt-4 px-[100px]'>
            <article>
                <h2 className={`${afacad.className} text-[68px] font-bold w-[70%] leading-[68px]`}>
                    We provide best tech solutions for your business
                </h2>
                <p className={`${afacad.className} text-xl w-[70%] mt-10`}>
                    We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization
                </p>
                <a href="" className={`${afacad.className} mt-12 bg-[#7000FF] py-5 px-10 text-white rounded-sm text-2xl font-medium inline-block`}>
                    Lets discuss oppotunities
                </a>
            </article>
            <Image 
                src={Intro}
                alt="Intro"
                className='w-[482px] h-[480px]' 
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