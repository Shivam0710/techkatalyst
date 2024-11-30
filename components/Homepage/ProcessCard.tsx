import Image from 'next/image'
import React from 'react'

export const ProcessCard = ({ index, title, subtitle, allowArrow=true } : { index: number, title: string, subtitle: string, allowArrow?: boolean }) => {
  return (
    <div className='flex flex-col bg-[#B7FD7E] p-6 relative'>
        { allowArrow && (
            <Image 
                src="/right-arrow.png"
                alt='right-arrow'
                className='absolute color-transparent lg:right-[-12px] lg:top-[50%] lg:translate-y-[-50%] right-[50%] bottom-[-24px] translate-x-[50%] rotate-90 lg:rotate-0'
                width={24}
                height={28}
            />
        )}
        <p className='flex lg:hidden h-10 w-10 justify-center items-center bg-[#5A3AEC] text-white absolute right-6 top-6 text-xl'>
            {index}
        </p>
        <p className='font-bold text-base lg:text-xl text-[#5A3AEC] w-8/12'>
            {title}
        </p>
        <hr className='w-[50px] border-t-2 border-[#5A3AEC] my-4 lg:mb-6' />
        <p className='text-black text-[12px] lg:text-sm'>
            {subtitle}
        </p>
    </div>
  )
}

export default ProcessCard