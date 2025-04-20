import pack from '../assets/pack.svg'
import React from 'react'

const Thinking = () => {
  return (
    <div className='md:flex block text-white'>
        <div className='bg-[#EB664E] px-[3rem] md:py-[5rem] py-[3rem] text-center md:text-start '>
            <h2 className='text-xl md:text-4xl font-bold md:w-[25%] pb-[10px] md:pb-[20px]'>What Is Thinkers Hub Creative</h2>
            <p className='md:w-[50%] pb-[10px] mb-[20px] md:pb-[20px] text-sm'> We are a team with extensive experience in Digital Transformation of large businesses, 
                we want to help small and medium-sized companies to achieve their goals. We do reach out
                 to people who could really bo your client.
            </p>
            <button className='bg-black px-3 py-2 rounded-lg'>Explore</button>
            <div className='float-right h-[5rem] md:mt-[-300px] md:visible invisible'>
                <img src={pack} className='md:h-[24rem] mt-[2rem]'/>
            </div>
        </div>
    </div>
  )
}

export default Thinking
