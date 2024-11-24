import Image from 'next/image'
import React, { useState } from 'react'
import { InputComponent } from './InputComponent'

export const GetInTouchSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        mobile: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='standard-margin-top bg-[#5A3AEC] px-[100px] py-20'>
            <div className=' bg-white flex items-stretch gap-[60px]'>
                <Image 
                    src="/images/services/contact-us.png"
                    alt="get in touch"
                    width={464}
                    height={514}
                />
                <div className="py-10 pr-[60px] w-full">
                    <h6 className='text-[#101828] text-[28px] font-semibold'>
                        Get in touch
                    </h6>
                    <p className='text-[#6A6A6A] text-sm'>
                        We’d love to hear from you. Please fill out this form.
                    </p>
                    <form className='mt-6'>
                        <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
                            <InputComponent label="Name" placeholder="Enter your name" value={formData.name} onChange={(e) => handleChange(e)} className="w-full" name="name" />
                            <InputComponent label="Email id" placeholder="Email id" value={formData.email} onChange={(e) => handleChange(e)} className="w-full" name="email" />
                            <InputComponent label="Company" placeholder="Enter website link" value={formData.company} onChange={(e) => handleChange(e)} className="w-full" name="company" />
                            <InputComponent label="Mobile number" placeholder="Enter mobile number" value={formData.mobile} onChange={(e) => handleChange(e)} className="w-full" name="mobile" />
                        </div>
                        <InputComponent label="Message" placeholder="Enter your message" value={formData.message} onChange={(e) => handleChange(e)} className="w-full my-6" name="message" type="textarea" />
                        <button className='bg-[#5A3AEC] font-medium text-white px-6 py-2 w-full'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
