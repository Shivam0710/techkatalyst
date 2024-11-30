import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const ProductCard = ({ title, subtitle, titleClassName, icon, url }: { title: string, subtitle: string, titleClassName?: string, icon?: string, url: string }) => {
  return (
    <a href={url} className={`bg-white p-6 lg:p-8 inline-flex flex-col justify-between gap-2 group relative`}>
      <SquareArrowOutUpRight color='#5A3AEC' className='absolute right-6 top-6 opacity-0 group-hover:opacity-100' />
      <div>
        <Image 
            src={icon || ''}
            alt='folder-icon'
            className='h-[48px] w-[48px] lg:h-[72px] lg:w-[72px]'
            width={72}
            height={72} 
        />
        <p className={`text-[#212121] mt-4 lg:mt-6 lg:text-2xl font-bold ${titleClassName} w-full`}>
            {title}
        </p>
        <p className='text-xs lg:text-base text-[#212121] mt-2 lg:mt-5 w-[100%] lg:w-[85%]'>
            {subtitle}
        </p>
      </div>
      <p className='text-[#5A3AEC] text-xs lg:text-sm font-semibold flex justify-end group-hover:opacity-100 mt-1'>
        Know more
      </p>
    </a>
  )
}

export default ProductCard