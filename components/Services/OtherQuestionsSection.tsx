import Image from 'next/image'
import React from 'react'

export const OtherQuestionsSection = () => {
  return (
    <div className='standard-margin-top mx-[100px] bg-[#F9FAFB] py-8 flex flex-col items-center mb-[120px]'>
        <Image 
            src="/images/services/still-have-questions.png"
            width={120}
            height={56}
            alt='still have questions'
        />
        <p className='text-[#101828] text-[20px] font-semibold pt-8'>
            Still have questions?
        </p>
        <p className='text-[#6A6A6A] text-[16px] pt-4'>
            Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <button className='bg-[#5A3AEC] text-white py-4 px-10 inline-block mt-9'>
            Get in touch
        </button>
    </div>
  )
}
