import React from 'react'
import thinker from '../assets/log.jpeg'
import {FaCopy, FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright} from "react-icons/fa";

const Reachout = () => {
  return (
    <div className='bg-[#353839] text-gray-100 rounded-t-2xl p-2'>
      <div className='pb-2 flex justify-center'>
        <img src={thinker} className='rounded-lg w-[70px] ' />
      </div>
      <div className=''>
        <form className='text-center'>
          <div className='pb-2'>
            <input className= 'appearance-none border rounded text-gray-100 bg-[#353839] leading-tight' id="email" type="Email" placeholder="Enter your email" />
          </div>
          <div className='pb-2'>
            <input className='appearance-none border rounded text-gray-100 bg-[#353839] leading-tight' id="message" type="text" placeholder="Write your message"/>
            <p className='italic text-xs text-red-400'>Message box cannot be empty.</p>
          </div >
          <div className=''>
            <button className='appearance-none bg-red-300 hover:bg-red-600 font-bold py-1 px-2 rounded-lg' type='button'>
              Contact Us
            </button>
          </div>
        </form>
      </div>
      <div>
        <br></br>
        <hr className='mx-[50px     ] md:mx-[80px]'></hr>
      </div>
      <br></br>
      <div className=' md:flex md:justify-between'>
        
        <span className='flex md:mx-[80px] justify-center md:mb-[1px] mb-[30px]'>
          <FaFacebook className='mr-2'/> <FaInstagram className='mr-2' /> <FaLinkedin />
        </span>
        <span className='md:mx-[80px]'>
          <p className='flex justify-center text-xs'>
            <span>Copyright</span>
            <span className='mt-[3px] mx-[4px]'><FaRegCopyright/></span>
            <span>2024 Think Creative Hub</span>

          </p>
        </span>
      </div>
    </div>
  )
}

export default Reachout
