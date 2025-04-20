import Campaign from "../Services/Campaign";
import Products from "../Services/Products";
import Repurpose from "../Services/Repurpose";
import Testimonial from "../Services/Testimonial";
import Traffic from "../Services/Traffic";

const Services = () =>{
    return(
        <div>
            <Products/>
            <Campaign/>
            <Traffic/>
            <Repurpose/>
            <Testimonial/>
        </div>
    )
}

export default Services;