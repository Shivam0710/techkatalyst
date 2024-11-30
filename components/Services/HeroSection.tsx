import React from 'react'

interface HeroSectionProps {
  title: React.ReactNode;
  heading: string;
  subheading: string;
}

export const HeroSection = ({ title, heading, subheading }: HeroSectionProps) => {
  return (
    <div className='bg-[#B7FD7E] py-12 lg:py-20 px-6 lg:px-[100px] text-center'>
        <div className='text-[28px] lg:text-6xl font-semibold'>
            {title}
        </div>
        <h1 className={`text-sm lg:text-2xl font-semibold mt-6 lg:mt-12`}>
            {heading}
        </h1>
        <p className={`text-sm lg:text-base font-normal pt-3 lg:pt-4`}>
            {subheading}
        </p>
        <a href="" className={`mt-4 lg:mt-12 bg-[#7000FF] text-white py-[14px] lg:py-5 px-[60px] rounded-sm text-lg font-medium block lg:inline-block`}>
            Get Started
        </a>
    </div>
  )
}