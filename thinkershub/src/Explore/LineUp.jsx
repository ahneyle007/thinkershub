import W1 from "../assets/William.jpg"
import W2 from "../assets/Grace.png"
import W3 from "../assets/Ephraim.png"
import W4 from "../assets/Ella.png"
import W5 from "../assets/Seyil.png"
import W6 from "../assets/Tomiwa.png"

const LineUp = ()=> {
    return(
        <>
            <div className="mt-[2rem] grid grid-cols-2 p-2 lg:place-items-start">

                <div className="md:ml-[4rem] mb-[3rem] items-center justify-center  text-center flex flex-col lg:flex-row">
                    <img src={W1} className="md:w-[12rem] w-[8rem] md:mr-[1rem]"/>
                    <div>
                        <h2 className="font-bold text-[17px] md:text-[20px]"> By William Idiaghe</h2>
                        <h4 className="text-red-500 mb-[4px] text-[15px] md:text-[18px]">The Setup</h4>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <button className="mb-[8px] md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] px-[1px] md:px-3 bg-[#DDE041]"> Video Editing </button>
                            <button className="md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] md:px-3  bg-[#DDE041]"> Content Creation </button>
                        </div>
                    </div>
                </div>
                <div className="md:ml-[4rem] mb-[3rem] items-center justify-center text-center flex flex-col lg:flex-row">
                    <img src={W2} className="md:w-[12rem] w-[8rem] md:mr-[1rem] " />
                    <div>
                        <h2 className="font-bold text-[17px] md:text-[20px]"> By Grace Okopi</h2>
                        <h4 className="text-red-500 mb-[4px] text-[15px] md:text-[18px]">Album Ads</h4>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <button className="mb-[8px] md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] px-[1px] md:px-3 bg-[#DDE041]">Branding</button>
                            <button className="md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] md:px-3  bg-[#DDE041]">Digital marketing</button>
                        </div>
                    </div>
                </div>
                <div className="md:ml-[4rem] mb-[3rem] items-center justify-center text-center flex flex-col lg:flex-row">
                    <img src={W3} className="md:w-[12rem] w-[8rem] md:mr-[1rem] " />
                    <div>
                        <h2 className="font-bold text-[17px] md:text-[20px]"> By Ephraim Obasi</h2>
                        <h4 className="text-red-500 mb-[4px] text-[15px] md:text-[18px]">Finance Database</h4>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <button className="mb-[8px] md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] px-[8px] md:px-4 bg-[#DDE041]">Software Development</button>

                        </div>
                    </div>
                </div>
                <div className="md:ml-[4rem] mb-[3rem] items-center justify-center text-center flex flex-col lg:flex-row">
                    <img src={W4} className="md:w-[12rem] w-[8rem] md:mr-[1rem]" />
                    <div>
                        <h2 className="font-bold text-[17px] md:text-[20px]"> By Ella Dashe</h2>
                        <h4 className="text-red-500 mb-[4px] text-[15px] md:text-[18px]">Bistro Foods Ads</h4>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <button className="mb-[8px] md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] px-[8px] md:px-4 bg-[#DDE041]">Content Creation</button>
                            
                        </div>
                    </div>
                </div>
                <div className="md:ml-[4rem] mb-[3rem] items-center justify-center text-center flex flex-col lg:flex-row">
                    <img src={W5} className="md:w-[12rem] w-[8rem] md:mr-[1rem]" />
                    <div>
                        <h2 className="font-bold text-[17px] md:text-[20px]"> By Seyil Gupiya</h2>
                        <h4 className="text-red-500 mb-[4px] text-[15px] md:text-[18px]">Gathering of saints</h4>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <button className="mb-[8px] md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] px-[1px] md:px-14 bg-[#DDE041]">Paint</button>
                            
                        </div>
                    </div>
                </div>
                <div className="md:ml-[4rem] mb-[3rem] items-center justify-center text-center flex flex-col lg:flex-row">
                    <img src={W6} className="md:w-[12rem] w-[8rem] md:mr-[1rem]" />
                    <div>
                        <h2 className="font-bold text-[17px] md:text-[20px]"> By Tomiwa Joe</h2>
                        <h4 className="text-red-500 mb-[4px] text-[15px] md:text-[18px]">Social Media Design</h4>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <button className="mb-[8px] md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] px-[1px] md:px-3 bg-[#DDE041]">Social Media Ads</button>
                            <button className="md:mb-[1px] text-[13px] md:text-[16px] font-bold rounded-lg md:rounded-2xl py-[3px] md:px-3  bg-[#DDE041]">Content Creation</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default LineUp