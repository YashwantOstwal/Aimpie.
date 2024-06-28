import { useScroll, useTransform,motion,useAnimation } from "framer-motion";
import { useRef,useState } from "react";
import ourclients from "./Testimonials";
import {variants,cloudContent} from './data/services'

export default function Services(){
  const strategy1 = useAnimation();
  const strategy2 = useAnimation();
  const design1 = useAnimation();
  const design2 = useAnimation();
  const development1 = useAnimation();
  const development2 = useAnimation();
  
  function handleHoverStrategy(){
    strategy1.start('variant1')
    strategy2.start('variant2')
  }
  function handleHoverStrategy2(){
    strategy1.start('variant2');
    strategy2.start('variant3')
  }
  function handleHoverDesign(){
    design1.start('variant1')
    design2.start('variant2')
  }
  function handleHoverDesign2(){
    design1.start('variant2');
    design2.start('variant3')
  }
  function handleHoverDevelopment(){
    development1.start('variant1')
    development2.start('variant2')
  }
  function handleHoverDevelopment2(){
    development1.start('variant2')
    development2.start('variant3')
  }
  
  return (
    <div className = 'bg-black overflow-hidden py-[5%]'>
      <div className = 'flex justify-center'>
          <div className = 'w-[80%] flex md:justify-between max-md:flex-col max-md:gap-10 p-[6%]'>
            <div className = 'px-2 rounded-full border-2 border-dotted text-[#9e9ea7] poppins-medium text-nowrap w-fit h-fit text-sm'>aim ✱ <span className = 'font-semibold text-[#C1ED42]'>Services</span></div>
            <p className = 'md:w-[50%] py-[2%] w-[100%] text-white font-semibold md:text-lg poppins-medium text-md border-y border-neutral-100/20'>We customize our services to match your unique requirements. No matter the objective, we'll develop an innovative solution to bring it to fruition.</p>
          </div>
      </div>
      <div className = 'lilita-one-regular text-[#faf6cd]/50 text-2xl md:text-3xl text-center'>/Hover :</div> 
      <div className = ' h-screen flex justify-center'>
        <div className =  'relative w-[80%] h-[80%]  text-[40px] md:text-8xl  oswald-700 text-[#faf6cd]'>
            <motion.div className = 'z-10 absolute flex justify-around h-[40%] w-full bg-black'
              onMouseEnter = {handleHoverStrategy} onMouseLeave={handleHoverStrategy2}>
                <motion.div
                  variants = {variants} animate = {strategy1} transition={{duration:0.2,ease:'easeIn'}}
                >
                  <div className = 'mt-[16%] max-md:bg-neutral-100 max-md:text-black max-md:px-3'> STRATEGY</div>
                </motion.div>
                <motion.div className = 'w-[45%] h-[100%] relative poppins-medium text-[#141414] text-[10px] text-nowrap'
                  initial = {{y:'20px',opacity:0}} variants = {variants} animate = {strategy2} transition = {{duration:0.2,ease:'easeIn'}}
                >
                  <OnHoverStrategy constituents = {cloudContent.startegy} cloudColor ="bg-[#BBBDFA]"/>
                </motion.div>
            </motion.div>
            
            <motion.div className = 'z-20 absolute top-[30%] flex max-md:flex-row-reverse justify-around h-[40%] w-full border-y border-neutral-100/20 bg-black'
              onMouseEnter = {handleHoverDesign} onMouseLeave={handleHoverDesign2}> 
                <motion.div className = 'w-[45%] h-[100%] relative poppins-medium text-[#141414] text-[10px] text-nowrap'
                  variants = {variants} initial = {{y:'20px',opacity:0}}  animate = {design2} transition = {{duration:0.2,ease:'easeIn'}}
                >
                  <OnHoverStrategy constituents = {cloudContent.design} cloudColor ="bg-[#C1ED42]" />
                </motion.div>
                <motion.div
                  variants = {variants} animate = {design1} transition={{duration:0.2,ease:'easeIn'}}
                >
                  <div className = 'mt-[21%]  max-md:bg-neutral-100 max-md:text-black max-md:px-3'> DESIGN</div>
                </motion.div>
            </motion.div>
            <motion.div className = 'z-30 absolute top-[60%] flex justify-around h-[40%] w-full border-t border-neutral-100/20 bg-black'
              onMouseEnter = {handleHoverDevelopment} onMouseLeave={handleHoverDevelopment2}>
                <motion.div
                  variants = {variants} animate = {development1} transition={{duration:0.2,ease:'easeIn'}}
                >
                  <div className = 'mt-[13%]  max-md:bg-neutral-100 max-md:text-black max-md:px-3 md:text-[90px]'> DEVELOPMENT</div>
                </motion.div>
                <motion.div className = 'w-[45%] h-[100%] relative poppins-medium text-[#141414] text-[10px] text-nowrap'
                  initial = {{y:'20px',opacity:0}} variants = {variants} animate = {development2} transition = {{duration:0.2,ease:'easeIn'}}
                >
                  <OnHoverStrategy constituents = {cloudContent.development} cloudColor ="bg-neutral-100"/>
                </motion.div>
            </motion.div>
            <div className = 'z-40 absolute top-[90%] pt-[6%] w-full border-t border-neutral-100/20 bg-black'></div>
        </div>
      </div>
    </div>
  );
}

function OnHoverStrategy(props){
  return (
    <div className = 'overflow-hidden'>
      <div className = {`fixed top-[10%] right-[30%] ${props.cloudColor} lg:px-[2%] lg:py-[3%] max-md:px-1 rounded-full w-fit`}>
        {props.constituents[0]}
      </div>
      <div className = {`fixed ${props.cloudColor} lg:px-[2%] lg:py-[3%] max-md:px-1 rounded-full w-fit top-[25%] left-[5%]`} >
        {props.constituents[1]}
      </div>
      <div className = {`fixed ${props.cloudColor} lg:px-[2%] lg:py-[3%] max-md:px-1 rounded-full w-fit top-[35%] left-[25%]`} >
        {props.constituents[2]}
      </div>
      <div className = {`fixed ${props.cloudColor} lg:px-[2%] lg:py-[3%] max-md:px-1 rounded-full w-fit bottom-[40%] right-[10%]`} >
        {props.constituents[3]}
      </div>
    </div>
  );
}

//create auto positioning upon each hover.
