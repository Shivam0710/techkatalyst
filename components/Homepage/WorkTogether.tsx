import { afacad, afacadBold, interMedium } from '@/helpers/fonts'
import React from 'react'

const WorkTogether = () => {
  return (
    <div className='mt-[56px] lg:mt-[120px] px-6 gap-8 lg:px-[100px] py-[80px] bg-[#7000FF] flex-col lg:flex-row text-white flex justify-end'>
        <article className='grow'>
            <h4 className={`${interMedium.className} text-[30px] text-center lg:text-left lg:text-5xl italic`}>
                Let’s work together
            </h4>
            <p className={`pt-4 lg:pt-6 ${afacad.className} text-xl w-full text-center lg:text-left lg:w-[50%]`}>
                We are architects of innovation, trailblazers of technological advancements, and partners in your success. As a dynamic and forward -thinking organisation  
            </p>
        </article>
        <article className='flex lg:self-center'>
            <a href="" className={`flex justify-center ${afacadBold.className} bg-[#9EE463] py-[14px] lg:py-5 px-10 text-black w-full text-2xl whitespace-nowrap`}>
                Start a project
            </a>
        </article>
    </div>
  )
}

export default WorkTogether