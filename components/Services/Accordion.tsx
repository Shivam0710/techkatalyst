import React from 'react'

export const Accordion = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#EAECF0]">
      <button
        className={`w-full py-6 flex justify-between items-center text-left`}
        onClick={toggleAccordion}
      >
        <span className="text-[#212121] text-lg font-medium text-left">{question}</span>
        <span className='border border-[#5A3AEC] rounded-full p-1'>
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="#5A3AEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="#5A3AEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'} text-left`}
      >
        <p className="text-[#6A6A6A] text-base">
          {answer}
        </p>
      </div>
    </div>
  )
}
