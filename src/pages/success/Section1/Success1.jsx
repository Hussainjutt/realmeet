import React from 'react'
import Successimg1 from '../../../assets/images/Success1img.jpeg'

const Success1 = () => {
  return (
    <>
      
      <div className=' w-[80%] m-auto my-12'>
      <div className='w-[800px] m-auto'>
      <h2 className="text-center text-black text-[40px] font-normal font-['BR Omega']">Real life inspirational stories of success</h2>
      <p className="  text-center text-slate-800 text-lg font-normal font-['BR Omega'] leading-[25.20px]">Lorem ipsum dolor sit amet consectetur. Sit scelerisque ut mattis scelerisque tortor imperdiet tincidunt vulputate vitae. Nulla egestas sagittis non a diam lectus nulla scelerisque dignissim consectetur consectetur</p>
      </div>
      <div className='h-[450px] mt-12'>
    <img className='object-cover w-full h-full rounded-tl-[30px] rounded-tr-[30px]' src={Successimg1} alt=""  />
      </div>
      <div className="pl-3 py-4 bg-white rounded-[30px] shadow" >
      <p className='mt-3'><span className="text-neutral-400 text-sm font-normal font-['BR Omega'] leading-[18.90px] tracking-tight">Date:</span><span className=" text-cstm_primary_pink-100 text-sm font-normal font-['BR Omega'] leading-[18.90px] tracking-tight"> 25 august -2020, </span><span className="text-neutral-400 text-sm font-normal font-['BR Omega'] leading-[18.90px] tracking-tight">Posted By:</span><span className="text-cstm_primary_pink-100 text-sm font-normal font-['BR Omega'] leading-[18.90px] tracking-tight"> Allan Rasel</span></p>
      <h3 className="my-3  text-slate-800 text-[35px] font-normal font-['BR Omega'] leading-[43.75px]">Lorem ipsum dolor sit amet consectetur. Orci netus non non turpis amet urna purus amet felis. Eros enim condimentum molestie sit tortor rutrum consequat pharetra.</h3>
      <div className='text-right'>
      <button className="text-white p-[6px] rounded-[5px] mr-12 bg-cstm_primary_pink-100 text-lg font-normal font-['BR Omega'] tracking-tight">Read More</button>
      </div>
      </div>
      
      </div>
    </>
  )
}

export default Success1