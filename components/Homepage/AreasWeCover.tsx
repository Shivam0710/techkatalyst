import React from 'react'
import CircleBg from '@/public/circle-bg.png'
import Image from 'next/image'
import ProductCard from './ProductCard'
import { inter } from '@/helpers/fonts'

export const AreasWeCover = () => {
  return (
    <div className='h-[1397px] bg-[#0A0615] w-full mt-[-300px] relative overflow-hidden pt-[420px]'>
        <Image 
            src={CircleBg}
            alt='circle-bg'
            className='absolute object-cover top-0'
        />
        <h4 className={`text-5xl z-10 text-white w-[60%] font-bold italic ${inter.className} mx-auto text-center leading-[56px] z-10 relative`}>
            We deal with the aspects of professional services
        </h4>
        <div className='mt-14 text-white px-[100px] z-10 relative grid grid-cols-3 gap-6'>
            <ProductCard titleClassName='w-[50%]' title='Market Research' subtitle='In-depth product research, competitor analysis, and market documentation that provide a clear roadmap for your business.' />
            <ProductCard titleClassName='w-[50%]' title='Product Management' subtitle='From product discovery and validation to roadmapping and optimization, we manage the entire lifecycle of your product.' />
            <ProductCard titleClassName='w-[50%]' title='Web Development' subtitle='Building intuitive and powerful mobile applications to keep your business at your customers’ fingertips.' />
            <ProductCard titleClassName='w-[50%]' title='Mobile App Development' subtitle='Building intuitive and powerful mobile applications to keep your business at your customers’ fingertips.' />
            <ProductCard titleClassName='w-[50%]' title='Analytics & Data Science' subtitle='We turn raw data into actionable insights, offering services from data collection and mining to predictive modeling and consulting.' />
            <ProductCard title='UI/UX Design' titleClassName='w-[40%]' subtitle='Delivering intuitive and aesthetically pleasing interfaces that enhance user satisfaction and boost conversions.' />
        </div>
    </div>
  )
}

export default AreasWeCover