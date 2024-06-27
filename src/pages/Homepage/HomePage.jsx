import { RecoilRoot } from 'recoil';
import Landingpage from './Landing.jsx'
import OurWork from './OurWork.jsx'
import GetInspired from './GetInspired.jsx' 
import Services from './Services.jsx' 
import Testimonials from './Testimonials.jsx' 
import MeetUs from './MeetUs.jsx' 
import Playground from './PlayGround.jsx' 

export default function HomePage(){
    return (
    <RecoilRoot>
        <Landingpage/>
        <Playground/>
        <MeetUs/>
        <OurWork/>
        <Services/>
        <GetInspired/>
        <Testimonials/>
    </RecoilRoot>
    );
}