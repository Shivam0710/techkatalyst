import Image from 'next/image'
import React from 'react'
import FolderIcon from '@/public/folder-icon.png'
import { inter } from '@/helpers/fonts'

export const ProductCard = ({ title, subtitle, titleClassName }: { title: string, subtitle: string, titleClassName?: string }) => {
  return (
    <div className={`bg-white p-8 inline-block ${inter.className}`}>
        <Image 
            src={FolderIcon}
            alt='folder-icon'
            className='h-[72px] w-[72px]'
        />
        <p className={`text-[#212121] mt-6 text-2xl font-bold ${titleClassName}`}>
            {title}
        </p>
        <p className='text-[#212121] mt-5 w-[85%]'>
            {subtitle}
        </p>
    </div>
  )
}

export default ProductCard