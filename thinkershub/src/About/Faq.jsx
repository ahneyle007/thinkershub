import React, { useState } from 'react'
import pana from '../assets/pana.jpg'
import pack from '../assets/pack.svg'
import {FaAngleDown, FaAngleUp} from "react-icons/fa";


const frequentlyAskedQuestions = [
    {
        title:"What is Lorem Ipsum?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title:"Why do we use it?",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
    },
    {
        title:" Where does it come from?",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
];

const Faq = () => {
  
  const [activeId, setActiveId] = useState(null);
 
  const togglerFunction = (index) =>{
    if(activeId === index) {
        setActiveId(null);
    }else {
        setActiveId(index);
    }
  };

  return (
    <div className='py-8 px-2'>
        <div className=' grid grid-cols-2 bg-white                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          '>
            <div className='flex md:justify-center items-center'>    
                <div className='md:px-[2px] md:justify-center items-center'>
                    <img src={pana} className='max-w-xs'/>
                                        
                </div>
            </div>
            {/* Accordion starts here  */}
            <div className=''>
                <h1 className='text-start font-bold text-5xl pb-2'>FAQ</h1>
                <div className='w-[650px] h-max rounded-lg overflow-hidden justify center'>
                    {frequentlyAskedQuestions.map( (item, i) =>(                    
                        <div key={i} className='border-b border-red-400 last:border-b-0'>
                            <div className={`px-5 py-4 flex items-center justify-between ${
                                activeId === i ? "bg-gray-300" : " "
                            }`}
                            onClick={() => togglerFunction(i)}
                        >
                                <p className='font-bold'>{item.title}</p>
                                <span>
                                    {activeId === i ? (
                                        <FaAngleUp/>) : (
                                        <FaAngleDown/>
                                    )}
                                </span>
                            </div>
                            {activeId === i && (
                                <div className='px-5 py-4 flex items-center justify-between'>
                                    <p className='text-sm'>{item.description}</p> 
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Faq
