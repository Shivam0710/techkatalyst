import { inter, interMedium } from '@/helpers/fonts'
import React from 'react'
import ProcessCard from './ProcessCard'
import DevIcon from '@/public/dev.png'
import PlanningIcon from '@/public/planning.png'
import TestingIcon from '@/public/testing.png'

export const WorkingProcess = () => {
  return (
    <div className='bg-[#0a0615] py-[120px]'>
        <h4 className={`${interMedium.className} text-white text-5xl w-[68%] text-center mx-auto leading-[56px] italic`}>
            Our working process on how to grow your business
        </h4>
        <article className='flex px-[150px] justify-between mt-12'>
            <ProcessCard icon={PlanningIcon} title="Initiation & Planning" subtitle="We are architects innovation trailblazers of technological advancement" />
            <ProcessCard icon={DevIcon} title="Execution and Development" subtitle="We are architects innovation trailblazers of technological advancement" />
            <ProcessCard icon={TestingIcon} title="Testing and Maintenance" subtitle="We are architects innovation trailblazers of technological advancement" />
        </article>
    </div>
  )
}

export default WorkingProcess