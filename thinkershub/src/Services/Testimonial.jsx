import React from "react";
import dunn from "../assets/dunn.png";    
import conor from "../assets/conor.png";


const Testimonial = ()=> {
    return(
        <div>
            <div>
                <div>
                    <p></p>
                    <img src={dunn} alt="dunn" className="w-[5rem] h-[5rem] rounded-full ml-[5rem] mt-[5rem]"/>
                    <h2 className="text-sm  ml-[5rem] mt-[1rem]">Ilana Dunn - @seeingotherpeople</h2>
                </div> 
                <div>
                    <p></p>
                    <img src={conor} alt="dunn" className="w-[5rem] h-[5rem] rounded-full ml-[5rem] mt-[5rem]"/>
                    <h2 className="text-sm font-bold ml-[5rem] mt-[1rem]">Conor Mckenzie</h2>
      
                </div>
            </div>
            <div></div>
        </div>
    )

}

export default Testimonial;