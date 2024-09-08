import Celebs from "./Celebs";


function Inspire () {
        return(
                <div>
                    <div className="bg-gradient-to-b from-gray-300 to-[#f2f0e8] min-h-4">
                        
                    </div>                    
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[8rem]  gap-y-2 md:pl-[7rem] pl-[1px] bg-[#F2F0E8] rounded-b-3xl">
                        <div className="flex flex-col place-items-center md:place-items-start  md:gap-y-[1rem] bg-[#F2F0E8] h-[85vh] md:h-[90vh]">
                            
                            <div className=" flex items-center h-[15vh] md:h-[10vh] mt-[20px]">
                                <button className="bg-white rounded-xl px-3 p-1 text-[#4E4EFF] font-semibold text-[16px] md:text-[14px] m-1"> 
                                    Unleashing your creative Potential
                                </button> 
                                
                            </div>
                            <div className="font-black text-5xl md:text-7xl mt-[30px] md:mt-[20px]">
                                <span className="text-black ">Think.</span>
                                <span className="text-[#EB664E]">Create.</span> <br/>
                                <span className="text-[#DDE041]">Inspire.</span>
                            </div>
                            <div className="mt-[50px] md:mt-[20px] text-center md:text-start">
                                <p className="mt-[10px] w-[280px] md:w-[460px]">
                                    Whether you're a creator looking for your next brand deal, or a
                                    marketer hiring creators for your next campaign, you'll find them on 
                                    Think Creative Hub.
                                </p>
                                <div className="mt-[40px] md:mt-[30px]">
                                       <button className="bg-black rounded-2xl px-5 py-2 text-white">
                                            Get Started
                                        </button> 
                                </div>   
                            
                            </div> 
                            
                        </div>
                        <div className="">
                            <Celebs/>
                        </div>
                    </div>
                </div>
        )
}


export default Inspire; 
                  