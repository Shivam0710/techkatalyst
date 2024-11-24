import React from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import { inter } from '@/helpers/fonts'

export const Header = () => {
  return (
    <div className='flex justify-between items-start py-6 lg:py-10 px-6 lg:px-[100px] items-center'>
        <Image src={Logo} alt="Logo" className="w-[130px] lg:w-[216px] h-[40px] lg:h-[66px]" /> 
        <article className={`hidden lg:flex items-center space-x-20 ${inter.className} font-medium`}>
            <a className='uppercase font-medium' href=""> Home </a>
            <a className='uppercase font-medium' href=""> About us </a>
            <a className='uppercase font-medium' href=""> Services </a>
            <a className='bg-[#7000FF] py-3 px-8 text-white rounded-sm font-medium' href=""> Contact us </a> 
        </article>
    </div>
  )
}

export default Header