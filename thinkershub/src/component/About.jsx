import Thinking from '../About/Thinking'
import OurMission from '../About/OurMission'
import Redefine from '../About/Redefine'
import OurVision from '../About/OurVision'
import Faq from '../About/Faq'

const About = () => {
    return(
        <div className="bg-gray-100">  
            <Thinking/>
            <Redefine/>
            <OurMission/>
            <OurVision/>
            <Faq/>
            
        </div>
    )
}

export default About;