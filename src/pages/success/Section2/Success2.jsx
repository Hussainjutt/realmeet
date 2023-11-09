import React from 'react'

import { Link } from 'react-router-dom'

const Success2 = (props) => {
  return (
    <>
   <div className='w-[80%] mx-auto flex  flex-wrap justify-between '>
    {props.data.map((item ,index)=>(

   
   <div key={index} className='w-[49%] '>

        <div className=" bg-white rounded-[30px] shadow my-5 ">
            <div >
                <img className=" rounded-tl-2xl rounded-tr-2xl" src={item.img} alt="" />
            </div>
            <div className='py-2 pl-3' >
            <p><span className="text-neutral-400 text-sm font-normal font-['BR Omega']  leading-[18.90px] tracking-tight">Date:</span><span className="text-cstm_primary_pink-100 text-sm font-normal font-['BR Omega'] leading-[18.90px] tracking-tight"> {item.date}, </span><span className="text-neutral-400 text-sm font-normal font-['BR Omega'] leading-[18.90px] tracking-tight">Posted By:</span><span className="text-cstm_primary_pink-100 text-sm font-normal font-['BR Omega'] leading-[18.90px] tracking-tight"> {item.aurthor}</span></p>
            <h3 className=" py-2 text-slate-800 text-[28px] font-semibold font-['BR Omega'] leading-10 ">{item.title}</h3>
            </div>
            <div className='text-right pb-3'>
      <Link to={item.link} className="text-white py-[6px] px-[10px] rounded-[5px] mr-12 bg-cstm_primary_pink-100 text-lg font-normal font-['BR Omega'] tracking-tight">Read More{"  >"}</Link>
     
      </div>
        </div>
    </div>
     ))}
   </div>
    </>
  )
}

export default Success2