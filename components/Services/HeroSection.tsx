import React from 'react'

poppinsface HeroSectionProps {
  title: React.ReactNode;
  heading: string;
  subheading: string;
}

export const HeroSection = ({ title, heading, subheading }: HeroSectionProps) => {
  return (
    <div className='bg-[#B7FD7E] py-20 px-[100px] text-center'>
        <div className='text-6xl font-semibold'>
            {title}
        </div>
        <h1 className={`text-2xl font-medium mt-12`}>
            {heading}
        </h1>
        <p className={`text-base font-normal pt-4`}>
            {subheading}
        </p>
        <a href="" className={`mt-12 bg-[#7000FF] text-white py-5 px-[60px] rounded-sm text-lg font-medium inline-block`}>
            Get Started
        </a>
    </div>
  )
}