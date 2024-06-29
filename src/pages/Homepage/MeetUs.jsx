import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function MeetUs(){
    const targetRef = useRef(null);
    const { scrollYProgress} = useScroll({
        target:targetRef,
        offset:["center end","1.3 end"]
    });
    const opacity = useTransform(scrollYProgress,[0,0.5],[0.5,1]);
    const scale = useTransform(scrollYProgress,[0,1],[0.5,0.9]);
    const y = useTransform(scrollYProgress,[0,1],["50px","0px"]);

    return (
        <>
            <div className = 'bg-gradient-to-t from-[#040306] to-[#1F1634]'>
            <div className = 'flex md:justify-center py-[6%] mx-[5%] border-t-1 border-neutral-100/20'>
                <div className = 'w-[80%] flex md:justify-between max-md:flex-col max-md:gap-10'>
                    <div className = 'px-2 rounded-full border-2 border-dotted text-[#9e9ea7] poppins-medium text-nowrap w-fit h-fit text-sm'>aim ✱ <span className = 'font-semibold text-[#C1ED42]'>Meet us</span></div>
                    <p className = 'md:w-[50%] w-[100%] text-white font-semibold md:text-lg poppins-medium text-md'>We're a full-service design agency driven by a diverse blend of talents, all united by a profound passion for constructing engaging, innovative and creative digital experiences.</p>
                </div>
            </div>
            <div className = 'flex md:justify-center py-[6%] border-b-1 border-neutral-100/20'>
                <div className = 'w-[80%] flex max-md:flex-col max-md:gap-5 md:justify-between mx-[5%]'>
                    <TextPositioner num = "10+" text = "Years of experience"/>
                    <TextPositioner num = "117" text = "Completed projects"/>
                    <TextPositioner num = "33" text = "Satisfied clients"/>
                    <TextPositioner num = "0" text = "Days without a creative crisis"/>
                </div>
            </div>
            </div>
        </>
    );
}
function TextPositioner(props){
    return (
        <div className ='flex gap-1'>
            <span className = 'text-[#C1ED42] text-5xl oswald-700'>{props.num}</span>
            <span className = 'text-[#9e9ea7] text-sm poppins-light'>{props.text}</span>
        </div>
    );
}
