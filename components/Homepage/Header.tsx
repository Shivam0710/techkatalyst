import React from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='flex justify-between items-center py-10 px-[100px]'>
        <Image src={Logo} alt="Logo" className="w-[140px] h-[66px]" /> 
        <article className='flex items-center space-x-20'>
            <a className='uppercase font-medium' href=""> Home </a>
            <a className='uppercase font-medium' href=""> Services </a>
            <a className='bg-[#7000FF] py-3 px-8 text-white rounded-sm font-medium' href=""> Contact us </a> 
        </article>
    </div>
  )
}

export default Header