import adv1 from "../assets/Trusted by.png"
import adv2 from "../assets/INIFINITI.png"
import adv3 from "../assets/sephora.jpg"
import adv4 from "../assets/heineken.jpg"
import adv5 from "../assets/nordstrom.jpg"
import adv6 from "../assets/UNILEVER.jpg"
import adv7 from "../assets/PARAMOUNT.jpg"
import adv8 from "../assets/NISSAN.jpg"
import adv9 from "../assets/OTHERBOX.jpg"





function Endorsement (){    
    return (
        <>
            <div className="flex flex-row gap-[4rem] justify-center items-center mt-[2rem] mb-[2rem]">
                <div className="w-[4rem] md:w-[4rem]"><img src={adv1}/> </div>
                <div className="w-[3rem] md:w-[4rem]"><img src={adv2}/></div>
                <div className="w-[4rem]"><img src={adv3}/></div>
                <div className="w-[5rem]"><img src={adv4}/></div>
                <div className="w-[5rem]"><img src={adv5}/></div>
                <div className="w-[4rem]"><img src={adv6}/></div>
                <div className="w-[4rem]"><img src={adv7}/></div>
                <div className="w-[3rem]"><img src={adv8}/></div>
                <div className="w-[4rem]"><img src={adv9}/></div>
            </div>
            <div className="p-3 md:p-1">
                   
                <p className="mb-4 text-2xl md:text-4xl font-bold text-center">
                    <br/>Collaborate with us for the
                    <br/>best services. It's never
                    <br/>been easier.
                </p>
            
            </div>
        </>
    )

}

export default Endorsement;