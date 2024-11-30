import React from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import { poppins } from '@/helpers/fonts'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='flex justify-between py-6 lg:py-10 px-6 lg:px-[100px] items-center'>
        <Image src={Logo} alt="Logo" className="w-[130px] lg:w-[216px] h-[40px] lg:h-[66px]" /> 
        <article className={`hidden lg:flex items-center space-x-20 ${poppins.className} font-medium`}>
            <Link className='uppercase font-medium' href="/"> Home </Link>
            <Link className='uppercase font-medium' href="/about-us"> About us </Link>
            <Link className='uppercase font-medium' href="/services/mobile-app-development"> Services </Link>
            <Link className='bg-[#7000FF] py-3 px-8 text-white rounded-sm font-medium' href="/contact-us"> Contact us </Link>
        </article>
    </div>
  )
}

export default Header