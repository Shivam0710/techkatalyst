import { FAQ } from '@/helpers/constants'
import React from 'react'
import { Accordion } from './Accordion'

export const FaqSection = ({ faq }: { faq: FAQ[] }) => {
  return (
    <div className='standard-margin-top px-[100px] text-center'>
        <h3 className='text-[#101828] text-5xl font-semibold'>
            Frequently asked questions
        </h3>
        <p className='text-[#212121] text-base pt-4'>
            Everything you need to know about the product and billing.
        </p>
        <div className='pt-[60px] w-9/12 mx-auto'>
            {faq.map((item) => (
                <Accordion key={item.question} question={item.question} answer={item.answer} />
            ))}
        </div>
    </div>
  )
}
