import { useRef } from "react";
import { motion, useScroll, useTransform, backIn } from "framer-motion";


export default function Playground(){
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:["start end","1.2 end"]
    });
    const opacity = useTransform(scrollYProgress,[0,1],[0.2,1],{ ease: backIn });
    const scale = useTransform(scrollYProgress,[0,1],[0.5,1]);

    return (
        <div className = 'text-[#BBBDFA] text-clamp4 anton-regular relative'>
            <div className = 'h-screen bg-gradient-to-b from-black to-[#1F1634]'></div>
            <div className = 'px-[10%] flex justify-center bg-[#1F1634]'>
                <motion.div ref = { targetRef } className = 'w-[1000px]'>
                    <div className = 'h-[1500px] flex flex-col justify-between py-[5%] relative'>
                        <motion.div style={{scale,opacity}} className = 'flex justify-start w-fit sticky top-2'>
                            CRAFTING
                        </motion.div>
                        <div className = 'flex justify-end sticky top-2'>
                            <motion.div style={{scale,opacity}} className = 'w-fit'>
                                REMARKABLE AND
                            </motion.div>
                        </div>
                        <div className = 'bg-[#1F1634] sticky top-[60px] md:top-[85px] lg:top-[120px]'>
                            <motion.div style={{scale,opacity}}  className = 'flex justify-start '>
                                EXITING
                            </motion.div>
                        </div>
                        <div className = 'flex justify-end sticky top-[60px] md:top-[85px] lg:top-[120px]'>
                            <motion.div style={{scale,opacity}}  className = 'w-fit sticky top-[100px]'>
                                DIGITAL JOURNEYS.
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}