import { Outlet } from "react-router-dom";
import thinker from '../assets/log.jpeg';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";
import Nav from "./Nav";
import Navmob from "./Navmob";



function Lead () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = ()=>{
        console.log("toggleNavbar")
        setIsOpen(!isOpen);
    };
    

    return(
        <div>    
            <div className="flex flex-row gap-4 px-8 place-items-center justify-between h-[80px] md:h-[70px] bg-white">
                
                <div className=""><img src={thinker} className="w-[80px] sm:w-[70px]"/></div>
                <div className="hidden md:flex flex-row  w-[60vw] justify-between ">
                    <Nav/>
                </div>
                <div className="z-10 text-2xl md:hidden">
                     <button onClick={toggleNavbar} className="rounded-lg"  >
                         {isOpen ? <FaTimes/>:<FaBars/>} 
                    </button>
                </div>           
            </div>
            {
                isOpen && (
                    <div className="md:hidden text-xl flex flex-row items-center justify-center absolute rounded-2xl right-0 h-[40%] w-[50%] bg-transparent backdrop-blur-md">
                        <Navmob/>
                    </div>
                        
                )
            }
            <Outlet/>
        </div>
    )
}

export default Lead;