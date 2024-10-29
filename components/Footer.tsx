import Image from 'next/image'
import React from 'react'
import LogoWhite from '@/public/logo-white.png'
import LinkedinLogo from '@/public/linkedin.png'
import TwitterLogo from '@/public/twitter.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#101427] pt-8 lg:pt-[56px] pb-[26px] px-6 lg:px-[100px]'>
        <div className='flex justify-between'>
            <Image 
                src={LogoWhite}
                alt='logo'
                className='w-[104px] h-[32px] lg:w-[180px] lg:h-auto'
            />
            <article className='items-center space-x-20 text-white hidden lg:flex'>
                <a href="">
                    Services
                </a>
                <a href="">
                    Contact us
                </a>
            </article>
            <article className='flex items-center gap-4 '>
                <a href="">
                    <Image 
                        src={LinkedinLogo}
                        alt='linkedin'
                        className='w-[28px] lg:w-[36px] h-[28px] lg:h-[36px]'
                    />
                </a>
                <a href="">
                    <Image 
                        src={TwitterLogo}
                        alt='twitter'
                        className='w-[28px] lg:w-[36px] h-[28px] lg:h-[36px]'
                    />
                </a>
            </article>
        </div>
        <article className='items-center space-x-12 text-white flex lg:hidden pt-4'>
            <a href="">
                Services
            </a>
            <a href="">
                Contact us
            </a>
        </article>
        <hr className='border-solid border-t-[#161f31] mt-[32px] lg:mt-[56px]' />
        <p className='text-sm text-white mt-6 lg:text-center'>
            © Copyright 2024, All Rights Reserved by Tech Katalyst
        </p>
    </div>
  )
}

export default Footer