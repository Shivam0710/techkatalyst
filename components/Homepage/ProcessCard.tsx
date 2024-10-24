import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const ProcessCard = ({ icon, title, subtitle } : { icon: StaticImageData, title: string, subtitle: string }) => {
  return (
    <div className='flex flex-col items-center'>
        <article className='bg-[#7000FF] p-6 rounded-full'>
            <Image 
                src={icon}
                alt='icon'
                className='w-[62px] h-[62px]'
            />
        </article>
        <p className='text-white font-bold text-2xl mt-6'>
            {title}
        </p>
        <p className='text-[rgba(255,255,255,0.8)] text-sm text-center w-[50%]'>
            {subtitle}
        </p>
    </div>
  )
}

export default ProcessCard