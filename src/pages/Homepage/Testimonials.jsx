import { useCallback, useEffect, useRef, memo, useState, useMemo } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import axios from 'axios'
import instaCapLogo from '../../assets/images/brandLogos/instaCapLogo.png'
import streamrLogo from '../../assets/images/brandLogos/streamrLogo.png'
import zonarisLogo from '../../assets/images/brandLogos/zonarisLogo.png'
import idAtom from '../../store/atoms.jsx'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import brandReviews from './data/brandReviews.js'
import Marquee from 'react-fast-marquee'
import { useNavigate } from 'react-router-dom'

let controlInterval;
export default function Testimonials(){
    const navigate = useNavigate();
    const targetRef = useRef(null)
    const [unclicked,setUnclicked]  = useState(true)

    const isInView = useInView(targetRef) && unclicked
    const setCardId = useSetRecoilState(idAtom);


    useEffect(()=>{
        isInView? (
            controlInterval = setInterval(()=>{
                setCardId((prevState)=>{return `${(prevState+1)%3 }`});
            },2500)
        ):(
            clearInterval(controlInterval)
            
        );
    },[isInView]);

    const handleChange = useCallback((value)=>{
        setUnclicked(false);
        setCardId(value);
    });
    return (
        <div className = 'bg-gradient-to-b from-[#c1ed42] to-black'>
            <div className = 'mx-[5%]'>
                <div className = 'flex md:justify-center py-[6%] border-t-1 border-neutral-100/20'>
                    <div className = 'w-[100%] flex md:justify-between max-md:flex-col max-md:gap-5'>
                        <div className = 'px-2 rounded-full border-2 border-dotted text-[#ffffff] poppins-medium text-nowrap w-fit h-fit text-xl border-black'>aim ✱ <span className = 'font-semibold text-[#141414]'>Meet us</span></div>
                        <p className = 'md:w-[50%] w-[100%] text-white font-semibold md:text-lg poppins-medium text-clamp2 max-md:border-y max-md:border-neutral-100/20 py-[3%]'>We're a full-service design agency driven by a diverse blend of talents, all united by a profound passion for constructing engaging, innovative and creative digital experiences.</p>
                    </div>
                </div>
                <div className = ' flex justify-around md:justify-center md:gap-5 py-[2%] flex-wrap' ref = {targetRef}>
                    <RadioButton value = '0' handleChange = {handleChange}>{zonarisLogo}</RadioButton>
                    <RadioButton value = '1' handleChange = {handleChange}>{instaCapLogo}</RadioButton>
                    <RadioButton value = '2' handleChange = {handleChange}>{streamrLogo}</RadioButton>
                </div>
                <Card/>
            </div>
        </div>
    );
}

const RadioButton = memo((props)=>{
    const cardId = useRecoilValue(idAtom)
    return (
    <div className = 'flex gap-2 px-[1%] rounded-2xl'>
        <input className = 'w-5 accent-[#C1ED42]'type="radio" checked = {cardId === props.value} value = {props.value} onChange = {(e)=>{props.handleChange(e.target.value)}}/>
        <div className = 'w-20  flex flex-col justify-center'  ><img src = {props.children} alt="Logo" /></div>
    </div>
    );
});
function Card(){

    const cardId = useRecoilValue(idAtom);
    const [data,setData] = useState('')

    useEffect(()=>{
    axios.get(`/aimpie/brandReviews/?id=${cardId}`).then(response =>  response.data).then(data=> setData(data))
},[cardId])

    return (
        <>
                <div className = ' flex justify-center lilita-one-regular text-2xl md:text-4xl text-white'> /Fetching from API with axios{'.'.repeat(parseInt(cardId)+1)}</div>
    <AnimatePresence mode= "wait">
        <motion.div className = 'flex justify-center py-[4%]'
            key = {cardId} initial ={{scale:0.9}} animate ={{scale:1}} exit = {{scale:0.9}} transition ={{duration:0.4}}
        >
            <div className = 'w-[80%] lilita-one-regular h-60 bg-[#141414] text-clamp p-[3%] rounded-3xl'>
                <p className = 'bg-gradient-to-t from-[#C1ED42] to-white text-transparent bg-clip-text'>
                "{data}"
                </p>
            </div>
        </motion.div>
    </AnimatePresence>
    </>
    );
}