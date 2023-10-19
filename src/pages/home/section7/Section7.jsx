import React from 'react'
import Testimonial from './Testimonial'
import TestimonialData  from './TestimonialData'


const Section7 = () => {
    return (
        <>
          <div className='bg-gray-50'>
          <div className=" py-[80px] w-[80%] mx-auto ">
            <h4 className="text-center text-slate-800 text-[40px] font-normal font-['BR Omega'] leading-[54px]">
              What Member say
            </h4>
            
            <Testimonial details={TestimonialData} />
          </div>
          </div>
        </>
      );
}

export default Section7