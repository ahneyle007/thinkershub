import React from 'react';
import Prado from '../assets/repurpose.png';

const Repurpose = () => {
    return (
        <div className='py-[6rem] rounded-3xl'>
           <div className='flex'>
                <div className='ml-[5rem] pt-[5rem]'>
                    <img src={Prado} alt="campaign add pix" 
                    className="w-[36rem] h-[38rem]" />
                </div>
                <div className='pl-[5rem] pt-[10rem] w-[32rem]'>
                    <button className='bg-yellow-300 px-6 py-4 border rounded-3xl my-4 box-content text-balance font-bold'>Repurpose</button>
                    <h2 className='text-5xl font-bold pb-[2rem]'>Use your campaign content everywhere</h2>
                    <p className='text-xl w-[30rem]'>Take the best-performing content creater and use it across 
                        different channels, like out-of-home, print and in-flight entertainment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Repurpose