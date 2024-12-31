import React from 'react'
import g1 from "../assets/group.png"

const Community = () => {
  return (
    <div className='rounded-2xl bg-black text-white flex md:flex-row flex-col  gap-[4rem]'>
      <div className='p-[4rem]'>
            <div><img src={g1} className="lg:w-[35rem] lg:h-[45rem] md:w-[24rem] md:h-[28rem] h-[32rem]"/></div>
      </div>
      <div className='justify-items-center sm:justify-items-start'>
            <h2 className='font-extrabold text-6xl sm:text-7xl w-[21rem] sm:w-[25rem] pt-[1rem] md:pt-[4rem]'>We bring to you the best community of creatives.</h2>
            <p className='text-sm py-5 w-[20rem]'>Join our community of creatives on our social media platforms</p>
            <h4 className='text-xs pb-3'>We Provide:</h4>
            <div className='w-[20rem] sm:w-[30rem] sm:block grid grid-cols-2'>
                <button className= "mb-[8px] md:mb-[1px] text-[13px] md:text-[12px] font-bold rounded-lg md:rounded-2xl py-[8px] px-[4px] md:px-4 bg-[#DDE041] text-black" >Branding</button >
                <button className= "mb-[8px] md:mb-[1px] text-[13px] md:text-[12px] font-bold rounded-lg md:rounded-2xl py-[8px] px-[4px] md:px-4 bg-[#DDE041] text-black mx-2"  >Social Media Ads</button >
                <button className= "mb-[8px] md:mb-[1px] text-[13px] md:text-[12px] font-bold rounded-lg md:rounded-2xl py-[8px] px-[4px] md:px-4 bg-[#DDE041] text-black"  >Content Creation</button >
                <button className= "mb-[8px] md:mb-[1px] text-[13px] md:text-[12px] font-bold rounded-lg md:rounded-2xl py-[8px] px-[4px] md:px-4 bg-[#DDE041] text-black mx-2"  >Web Dev</button >
                <button className= "mb-[8px] md:mb-[1px] text-[13px] md:text-[12px] font-bold rounded-lg md:rounded-2xl py-[8px] px-[4px] md:px-4 bg-[#DDE041] text-black my-2"  >Art And Craft</button>
            </div>
            <button className= "mb-[8px] md:mb-[1px] text-[13px] md:text-[12px] font-bold rounded-lg md:rounded-2xl py-[8px] px-[8px] md:px-8 bg-[#ffffff] text-black my-16">Learn More</button>
      </div>
    </div>
  )
}

export default Community