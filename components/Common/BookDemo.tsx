"use client"
import React, { useState } from 'react'
import { Calendar } from './Calendar'

export const BookDemo = ({ className }: { className?: string }) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div>
            <p className={`lg:mt-12 bg-[#7000FF] py-[14px] lg:py-5 px-10 text-white rounded-sm text-[18px] text-center lg:text-xl font-medium w-full lg:w-auto inline-block ${className}`}>
                Book a free call
            </p>
            <Calendar open={open} onClose={() => setOpen(false)} />
        </div>
    )
}
