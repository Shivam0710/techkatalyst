import { Offering } from '@/helpers/constants'
import Image from 'next/image'
import React from 'react'

export const OfferingsSection = ({ title, offerings }: { title: string, offerings: Offering[] }) => {
  return (
    <div className="standard-margin-top text-center px-[100px]">
        <h3 className='text-5xl font-bold mb-12 w-[70%] leading-tight mx-auto'>
            {title}
        </h3>
        <div className='border border-[#E7E7E7] w-full grid grid-cols-4 items-stretch drop-shadow-xl'>
            { offerings.map((offering, index) => (
                <div key={index} className={`flex w-full h-full items-center self-center gap-4 p-6 flex-col ${index < 4 ? 'border-b border-[#E7E7E7]' : ''} ${(index+1) % 4 !== 0 ? 'border-r border-[#E7E7E7]' : ''}`}>
                    <Image src={offering.icon} alt={offering.description} width={60} height={60} />
                    <p className='w-10/12'>{offering.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
