import { useState } from "react"
import upArrow from '../../assets/images/upArrow.png'
import downArrow from '../../assets/images/downArrow.png'
import ourWork from './data/ourWork'
import zonaris from '../../assets/images/landingpages/zonaris.png'
import instaCap from '../../assets/images/landingpages/instaCap.png'
import allintickets from '../../assets/images/landingpages/allintickets.png'
import medalyc from '../../assets/images/landingpages/medalyc.png'
import trackpac from '../../assets/images/landingpages/trackpac.png'
import WorkMarquee from "./WorkMarquee"

export default function OurWork(){
    return (
        <>
        <div className = 'bg-black'>
            <div className = 'mx-[5%]'>
                {ourWork.map((e)=>{ return <Component key= {e.id} img = {e.img} client = {e.client} color= {e.color} description= {e.description} />})}
            </div>
        </div>
        </>
    );
}
function Component({img,client,color,description}){
    const [isOpen,setIsOpen] = useState(true);
    return  (
        <div className = ' bg-black relative'>
            <WorkMarquee/>
            <div className = 'flex justify-center sticky top-0 bg-black '>
                <div className = {`w-[100%] grid grid-cols-6 border-y border-neutral-100/40 ${isOpen?('py-[2%]'):('py-[5%]')}`}>
                    <div className = 'col-start-2 col-end-6 oswald-700 uppercase text-[#faf6cd] text-4xl md:text-5xl lg:text-7xl'>{client}</div>
                <ShowHideButton isOpen={isOpen} setIsOpen={setIsOpen}></ShowHideButton>
                </div>
            </div>
            { isOpen && <ShowContent color = {color} description = {description} img = {img}/>}
        </div>
    );
}


function ShowHideButton(props){
    const handleClick = () =>{
      props.setIsOpen((prevState) => {return !prevState})
    }
    return(
      <>
        {props.isOpen?
            ( <button className = 'w-[15%] flex justify-center items-center' onClick = { handleClick }> <img className='col-gap-1 w-[100%] ' src={upArrow} /></button>
            ):(
            <button className = 'w-[15%] flex justify-center items-center' onClick = { handleClick }> <img className='col-gap-1 w-[100%]' src={downArrow} /></button> )}
      </>
    );
  }

function ShowContent({color,description,img}){
    const [show,setShow] = useState(false);
    function handleClick(){
        setShow((prevState)=>{return !prevState});
      }
    return (
        <div className = 'w-[100%] flex justify-center'>
            <div className = {`w-10/12 shadow rounded-xl ${color} m-[3%] text-[#faf6cd] poppins-medium`}>
                <div className = 'p-[3%] space-y-10'>
                    <div>
                        <div className = 'p-2 rounded-full border-2 border-dotted text-[#9e9ea7] poppins-medium text-nowrap w-fit h-fit text-sm'>aim ✱ <span className = 'font-semibold text-[#C1ED42]'>description</span></div>
                    </div>
                    <p className = {`${!show && ('max-md:line-clamp-2')}`}>
                        {description}
                    </p>
                    <div className = 'flex justify-end md:hidden'>
                        <button className = 'underline'onClick = {handleClick} >
                            show {show?("less"):("more")}
                        </button>
                    </div>
                    <div className='flex justify-center py-[5%] gap-4'>
                        <img className = 'w-3/5 rounded-xl' src={img}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
