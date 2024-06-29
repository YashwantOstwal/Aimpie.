import {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function GetInspired(){
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end','end start']
    });
    const leftTransition = useTransform(scrollYProgress,[0,1],["200px","0px"]);
    const rightTransition =useTransform(scrollYProgress,[0,1],["-170px","0px"]);
    const backgroundColor = useTransform(scrollYProgress,(pos)=>{
        return pos?"#c1ed42":"#000000"
    });
    const opacity = useTransform(scrollYProgress,[0,0.4],[0,1]);
    
    return (
    <>
        <div className = 'flex justify-center bg-[#c1ed42] py-[10%] md:hidden'>
            <motion.p initial ={{scale:0.5,rotate:'10deg'}} whileInView = {{scale:1,rotate:"0deg"}} transition={{delay:0.8}} className = 'w-[70%] text-white text-5xl anton-regular px-[4%] py-[3%] rounded-xl'>
                FEELING INSPIRED FOR A NEW PROJECT ?
            </motion.p>
        </div>
        <div  className = 'bg-[#000000]'>
            <motion.div style = {{opacity,backgroundColor}} className = ' flex justify-center h-screen max-md:hidden overflow-hidden'>
                <div className = 'flex flex-col justify-center anton-regular px-[10%] text-7xl md:text-clamp5 text-[#141414] w-[80%] '>
                    <motion.div style = {{x:leftTransition,paddingBottom:"30px"}} ref = {targetRef}>FEELING</motion.div>
                    <motion.div style = {{x:rightTransition,paddingBottom:"30px"}} >INSPIRED FOR A</motion.div>
                    <motion.div style = {{x:leftTransition,paddingBottom:"30px"}}>NEW PROJECT ?</motion.div>
                </div>
            </motion.div>
        </div>
    </>
    );
}
