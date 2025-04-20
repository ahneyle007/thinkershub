import React from 'react';
import hmtraffic from '../assets/homemeasure.png';

const Traffic = () => {
    return (
        <div className='bg-black text-white py-[8rem] rounded-3xl'>
            <div className='flex'>
                <div className='ml-[5rem] pt-[5rem] w-[28rem]'>
                        <button className='bg-yellow-300 text-black px-5 py-3 rounded-3xl mb-6 box-content text-balance font-bold'>Measure</button>
                        <h2 className='text-5xl font-bold pb-[2rem]'>Understand what's working - and why</h2>
                        <p className='text-xl'>No more guessing. Learn what content and creative elements resonate best 
                                                        with your audience and why. With live reporting and post-campaign insights,
                                                         you have the tools to make every campaign better.
                        </p>
                </div>
                <div className='ml-[5rem]'>
                        <img src={hmtraffic} alt="campaign add pix" 
                        className="w-[38rem] h-[35rem]" />
                </div>
            </div>
        </div>
    );
};

export default Traffic;