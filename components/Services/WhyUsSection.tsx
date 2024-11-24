import { WhyUsPoint } from '@/helpers/constants'
import Image from 'next/image'
import React from 'react'

export const WhyUsSection = ({ title, points, heading }: { title: string, points: WhyUsPoint[], heading?: string }) => {
  return (
    <div className='standard-margin-top px-[100px]'>
        <h3 className='text-5xl font-bold mb-4 text-center leading-tight mx-auto'>
            {heading}
        </h3>
        <p className='text-center'>
            {title}
        </p>
        <div className='grid grid-cols-3 mx-auto mt-[60px] drop-shadow-sm'>
            {points.map((point, index) => (
                <div key={index} className={`p-6 px-10 flex flex-col gap-2 text-center items-center ${index < 3 ? 'border-b border-[#E7E7E7]' : ''} ${index % 3 !== 0 ? 'border-l border-[#E7E7E7]' : ''}`}>
                    <Image src={point.icon} alt={point.heading} width={48} height={48} />
                    <p className='text-[18px] mt-4 font-semibold text-[#212121]'>
                        {point.heading}
                    </p>
                    <p className='mt-0 text-sm text-[#212121]'>
                        {point.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}
