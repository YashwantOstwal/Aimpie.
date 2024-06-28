import {motion, useScroll, useTransform,MotionConfig} from 'framer-motion'
import aimpieLogo2 from '../../assets/images/aimpieLogo2.png'
import MeetUs from './MeetUs.jsx'
import variants from './data/variants.js'
import { useNavigate } from 'react-router-dom'

export default function Landingpage(){
    const navigate = useNavigate();
    return (
        <>
        <div className = 'bg-[#040306]'>
            <motion.div className = 'flex justify-center md:justify-start bg-[#040306] space-x-5 p-[10%] md:p-[6%] lg:p-[2%] '
                variants = {variants} initial = "hideLogo" animate = "animateLogo" transition = {{duration:0.5,delay:1.9}}
            >
                <div className = 'aspect-[4/1] w-[15%] min-w-20 flex flex-col justify-center'><img className = '' src = {aimpieLogo2} /></div>
                <motion.button className = 'bg-[#A594FD] px-[1%] rounded-lg lilita-one-regular ' onClick={()=>{navigate('/contactus')}}
                  initial ={{rotate:"0deg"}}  whileHover = {{rotate:["5deg","-5deg","0deg"],backgroundColor:"white"}} transition ={{duration:0.5}}
                > Contact Us</motion.button>
            </motion.div>
            <motion.div className = 'bg-landing bg-cover h-screen bg-center border-red-100'
               variants = {variants} initial = "hideBg" animate = "animateBg" transition = {{duration:0.9,times:[0.4,1],delay:0.2}}
            >
                <div className = 'space-y-4'>
                    <motion.div className = 'flex justify-center poppins-medium text-[#BBBDFA]'
                       variants = {variants} initial = "hidetext1" animate = "animatetext" transition = {{duration:0.5,delay:1.6}}
                    > 
                        Step into the future
                    </motion.div>
                    <motion.div className = 'flex justify-center anton-regular text-[#faf6cd] text-4xl md:text-7xl text-center'
                        variants = {variants} initial ="hidetext2" animate = "animatetext" transition ={{duration:0.6,delay:1.1}}
                    >
                        DESIGNING YOUR DIGITAL UNIVERSE.
                    </motion.div>
                </div>
            </motion.div>
        </div>
        </>
    );
}