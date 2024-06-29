import Marquee from "react-fast-marquee"
import ourSelectedWork from '../../assets/images/ourSelectedWork.png'

export default function WorkMarquee (){
    return (
        <div className = 'space-y-4 bg-black py-[2%]'>
            <Marquee direction = 'left' gradient = {true} gradientColor='black' gradientWidth = {250} autoFill={true} >
                <img className = 'opacity-10 max-md:opacity-30' src={ourSelectedWork}  />
            </Marquee>
            <Marquee direction = 'right' gradient = {true} gradientColor = 'black' gradientWidth = {250} speed = {90} autoFill={true} className = 'bg-black '>
                <img className = 'opacity-10 max-md:opacity-30' src={ourSelectedWork}  />
            </Marquee>
        </div>
    );
}
