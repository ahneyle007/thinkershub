import I1 from "../assets/Image1.png" 
import I2 from "../assets/Image2.png"
import I3 from "../assets/Image3.png"
import I4 from "../assets/Image4.png"
import I5 from "../assets/Image5.png"
import I6 from "../assets/Image6.png"
import I7 from "../assets/Image7.png"
import I8 from "../assets/Image8.png"

const Celebs = ()=>{
    return(
        <>
            <div className="grid grid-cols-2 gap-[1rem]  md:gap-2 lg:w-[100%] sm:float-start ml-[4px] pr-[12px] md:pr-[45px] md:mr-[35px]">
                <div className="w-[11rem]"><img src={I1}/></div>
                <div className="w-[11rem]"><img src={I2}/></div>
                <div className="w-[11rem]"><img src={I3}/></div>
                <div className="mt-[-30px] w-[11rem]"><img src={I4}/></div>
                <div className="mt-[-10px] w-[11rem]"><img src={I5}/></div>
                <div className="w-[11rem]"><img src={I6}/></div>
                <div className="mt-[-60px] w-[11rem]"><img src={I7}/></div>
                <div className="w-[11rem]"><img src={I8}/></div>
            </div>
        </>
    )
}

export default Celebs;