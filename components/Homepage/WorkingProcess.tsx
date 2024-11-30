import { poppinsBold } from '@/helpers/fonts'
import React from 'react'
import ProcessCard from './ProcessCard'
import DevIcon from '@/public/dev.png'
import PlanningIcon from '@/public/planning.png'
import TestingIcon from '@/public/testing.png'

export const WorkingProcess = () => {
  return (
    <div className='bg-[#0a0615] pt-[40px] lg:py-[120px] pb-[40px]'>
        <h4 className={`${poppinsBold.className} text-white text-[30px] p-6 pt-0 leading-[32px] lg:p-0 lg:text-5xl w-full lg:w-[50%] text-center mx-auto lg:leading-[56px] italic`}>
            Our working process on how to grow your business
        </h4>
        <article className='flex flex-col lg:flex-row lg:px-[150px] justify-between mt-[8px] lg:mt-12 gap-6 lg:gap-0'>
            <ProcessCard icon={PlanningIcon} title="Initiation & Planning" subtitle="We are architects innovation trailblazers of technological advancement" />
            <ProcessCard icon={DevIcon} title="Execution and Development" subtitle="We are architects innovation trailblazers of technological advancement" />
            <ProcessCard icon={TestingIcon} title="Testing and Maintenance" subtitle="We are architects innovation trailblazers of technological advancement" />
        </article>
    </div>
  )
}

export default WorkingProcess