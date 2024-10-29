import { afacad, afacadBold, interItalic } from '@/helpers/fonts'
import Image from 'next/image'
import React from 'react'
import ServicesImage from '@/public/services-image.png'
import Decorator2 from '@/public/decorator-2.png'

export const ServicesWeProvide = () => {
  return (
    <div className='px-6 lg:px-[100px] py-[56px] lg:py-[120px] flex flex-col-reverse lg:flex-row gap-6 lg:gap-20'>
        <article>
            <h4 className={`${interItalic.className} font-bold text-[30px] lg:text-5xl w-full lg:w-[80%] lg:leading-[56px]`}>
                We provide IT solution & services for any startups
            </h4>
            <ul className={`${afacadBold.className} list-decimal text-xl ml-[20px] mt-6 lg:w-[75%] flex flex-col gap-3 lg:gap-4`}>
                <li className={`${afacad.className} font-normal`}>
                    <span className={`${afacadBold.className}`}>
                        Expertise Across Domains:
                    </span>
                    <span className={`${afacad.className} pl-1`}>
                        Our diverse team brings together years of experience in market research, product management, design, and analytics.
                    </span>
                </li>
                <li className={`${afacad.className} font-normal`}>
                    <span className={`${afacadBold.className}`}>
                        Customized Solutions:
                    </span>
                    <span className={`${afacad.className} pl-1`}>
                    We understand that every business is unique. We provide customized strategies that align with your specific goals and challenges.
                    </span>
                </li>
                <li className={`${afacad.className} font-normal`}>
                    <span className={`${afacadBold.className}`}>
                        Proven Track Record:
                    </span>
                    <span className={`${afacad.className} pl-1`}>
                        Our work speaks for itself, with a history of successful projects and satisfied clients who have seen tangible results.
                    </span>
                </li>
                <li className={`${afacad.className} font-normal`}>
                    <span className={`${afacadBold.className}`}>
                        End-to-End Support:
                    </span>
                    <span className={`${afacad.className} pl-1`}>
                        From ideation to execution, we’re with you every step of the way, ensuring your project runs smoothly and delivers value.
                    </span>
                </li>
            </ul>
            <a href="" className={`bg-[#7000FF] text-white text-lg text-center lg:text-2xl ${afacad.className} font-bold py-[14px] lg:py-5 px-10 block lg:inline-block mt-8 lg:mt-12`}>
                Lets discuss oppotunities
            </a>
        </article>
        <article className='relative overflow-hidden'>
            <Image 
                src={Decorator2}
                alt='decorator'
                className='absolute top-[0] lg:top-[-45px] left-[-20px]'
            />
            <Image 
                src={ServicesImage}
                alt='Services Image'
                className='gap-10 object-cover'
            />
        </article>
    </div>
  )
}

export default ServicesWeProvide