import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import m5 from "../assets/m5.png"
import m6 from "../assets/m6.png"
import m7 from "../assets/m7.png"

function Meet () {
    return (
        <>
            <div className="flex lg:flex-row flex-col lg:justify-between justify-center place-items-center px-5 my-[1rem] bg-gray-100 py-[2rem] rounded-2xl">
                <div className="md:pl-[4rem] lg:text-start text-center space-y-4 md:mb-[1px] mb-[3rem]"> 
                    <button className="text-[20px] md:text-lg font-semibold rounded-2xl px-3 bg-[#DDE041] mt-4">Work with us</button>
                    <p className="text-4xl font-black "> Meet the best <br/> of Creatives.</p>
                    <section className="text-lg lg:w-[28rem] text-wrap"> 
                        If you're looking for brands and creators to collaborate
                        with, you'll find them on <a className="font-bold">Think Creative Hub. </a> 
                         We study what makes for a successful match, so finding each 
                        other is easy.
                    </section>
                </div>

                <div> 
                    <div className="rounded-2xl p-[10px] sm:w-[28rem] w-[22rem]">
                        <div className="">    
                            <table className="shadow-lg bg-red-400 rounded-2xl w-[20rem]">
                                <tr>
                                    <td className="px-[7px]"><div className=" mt-[10px] sm:w-[8rem] w-[6rem]"><img src={m1}/></div></td>
                                    <td className="px-[7px]"> <div  className="mt-[10px] sm:w-[8rem] w-[6rem]"><img src={m2}/></div></td>
                                    <td></td>
                                </tr>
                                <tr> 
                                    <td className="p-[7px]"><div  className="sm:w-[8rem] w-[6rem]"><img src={m3}/></div></td>
                                    <td className="p-[7px]"><div  className="sm:w-[8rem] w-[6rem]"><img src={m4}/></div></td>
                                    <td className="p-[7px]"><div  className="sm:w-[8rem] w-[6rem]"><img src={m5}/></div></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="px-[7px]"><div  className="sm:w-[8rem] w-[6rem]"><img src={m6}/></div></td>
                                    <td className="px-[7px]"> <div  className="sm:w-[8rem] w-[6rem]"><img src={m7}/></div></td>
                                </tr>
                            </table>
                        </div>
                        
                    </div>
                    
                </div>    
            </div>

        </>
    )
}

export default Meet;


                                <div className="grid grid-cols-3 mx-[0px] pt-[10px] space-x-[20px] space-y-[20px]">
                                    <div className="w-[9rem] mt-[10px] ml-[0px]"><img src={m1}/></div>
                                    <div  className="w-[9rem]"><img src={m2}/></div>
                                    <div> </div>
                                    <div  className="w-[9rem]"><img src={m3}/></div>
                                    <div  className="w-[9rem]"><img src={m4}/></div>
                                    <div  className="w-[9rem]"><img src={m5}/></div>
                                    <div></div>
                                    <div  className="w-[9rem]"><img src={m6}/></div>
                                    <div  className="w-[9rem]"><img src={m7}/></div>
                                </div>