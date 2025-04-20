import React from 'react';
import cdpix from '../assets/campaignadd.png';

const Campaign = () => {
    return ( 
        <div className='bg-gray-300 py-[8rem] rounded-3xl'>
            
            <div className='flex'>
                <div className='ml-[5rem]'>
                    <img src={cdpix} alt="campaign add pix" 
                    className="w-[38rem] h-[35rem]" />
                </div>
                <div className='pl-[5rem] pt-[10rem]'>
                    <button className='bg-yellow-300 px-6 py-4 border rounded-3xl mx-4 my-4 box-content text-balance font-bold'>Strategy</button>
                    <h2 className='text-5xl font-bold pb-[2rem]'>Expert creative</h2>
                    <p className='text-xl w-[30rem]'>Brands and creators collaborate with our dedicated
                        team of experts to build winning creative strategy - backed by research, first-party
                         data, and industry benchmarks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Campaign;