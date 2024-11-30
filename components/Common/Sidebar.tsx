"use client"

import { Drawer, Link } from '@mui/material'
import { AlignJustify, CircleX } from 'lucide-react'
import React, { useState } from 'react'

export const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const [dropdown, setDropdown] = useState(true)
    
    return (
        <div className='block lg:hidden'>
            <button onClick={() => setOpen(true)}> <AlignJustify color='#5A3AEC' /> </button>
            <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
                <div className='w-[240px] py-20 bg-[#9EE463] flex flex-col gap-6 justify-start text-center text-[#7000FF] relative h-screen'>
                    <CircleX color="#5A3AEC" className='absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(false)} />
                    <Link style={{ color: "#7000FF", textDecoration: 'none', fontWeight: 'medium' }} className='uppercase font-medium text-[#7000FF] no-underline' href="/"> Home </Link>
                    <Link style={{ color: "#7000FF", textDecoration: 'none', fontWeight: 'medium' }} className='uppercase font-medium text-[#7000FF] no-underline' href="/about-us"> About us </Link>
                    <div className=''>
                        <button 
                            className='uppercase font-medium flex items-center justify-self-center'
                            onClick={() => setDropdown(!dropdown)}
                        >
                            Services
                            <svg className={`w-4 h-4 ml-1 inline ${!dropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ${!dropdown ? 'max-h-0' : 'max-h-full mt-2'}`}>
                            <Link style={{ color: "#7000FF", fontWeight: 'medium', textDecoration: 'none' }} className='text-[#7000FF] font-bold no-underline px-4 py-2 hover:bg-gray-100' href="/services/mobile-app-development">
                                Mobile App Development
                            </Link>
                            <Link style={{ color: "#7000FF", fontWeight: 'medium', textDecoration: 'none' }} className='text-[#7000FF] font-bold no-underline px-4 py-2 hover:bg-gray-100' href="/services/web-development">
                                Web Development
                            </Link>
                            <Link style={{ color: "#7000FF", fontWeight: 'medium', textDecoration: 'none' }} className='text-[#7000FF] font-bold no-underline px-4 py-2 hover:bg-gray-100' href="/services/ui-ux-design">
                                UI/UX Design
                            </Link>
                            <Link style={{ color: "#7000FF", fontWeight: 'medium', textDecoration: 'none' }} className='text-[#7000FF] font-bold no-underline px-4 py-2 hover:bg-gray-100' href="/services/market-research">
                                Market Research
                            </Link>
                            <Link style={{ color: "#7000FF", fontWeight: 'medium', textDecoration: 'none' }} className='text-[#7000FF] font-bold no-underline px-4 py-2 hover:bg-gray-100' href="/services/product-management">
                                Product Management
                            </Link>
                            <Link style={{ color: "#7000FF", fontWeight: 'medium', textDecoration: 'none' }} className='text-[#7000FF] font-bold no-underline px-4 py-2 hover:bg-gray-100' href="/services/analytics-data-science">
                                Analytics and Data science
                            </Link>
                        </div>
                    </div>
                    <Link style={{ background: "#7000FF", color: "#fff", margin: "0 12px", padding: "12px 24px", fontWeight: "medium", textDecoration: 'none' }} href="/contact-us">
                        Contact us
                    </Link>
                </div>
            </Drawer>
        </div>
  )
}

export default Sidebar