import { afacad, afacadBold, interMedium } from '@/helpers/fonts'
import React from 'react'

const WorkTogether = () => {
  return (
    <div className='mt-[120px] px-[100px] py-[80px] bg-[#7000FF] text-white flex justify-end'>
        <article className='grow'>
            <h4 className={`${interMedium.className} text-5xl italic`}>
                Let’s work together
            </h4>
            <p className={`pt-6 ${afacad.className} text-xl w-[50%]`}>
                We are architects of innovation, trailblazers of technological advancements, and partners in your success. As a dynamic and forward -thinking organisation  
            </p>
        </article>
        <article className='flex self-center'>
            <a href="" className={`flex ${afacadBold.className} bg-[#02FF02] py-5 px-10 text-black w-full text-2xl whitespace-nowrap`}>
                Start a project
            </a>
        </article>
    </div>
  )
}

export default WorkTogether