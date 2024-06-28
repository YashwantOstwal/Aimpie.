import { useNavigate } from 'react-router-dom'

export default function ContactUs(){
    const navigate = useNavigate();
    return (
        <div className = 'h-screen flex justify-center bg-[#1F1634] md:items-center bg-aimpie bg-no-repeat bg-top'>
            <div className = 'w-[80%] bg-center max-md:my-[10%] max-md:h-[80%] flex flex-col justify-center bg-[#BBBDFA] text-[#1F1634] rounded-2xl lilita-one-regular'>
                <button onClick = {()=>{navigate('/')}} className = 'flex justify-center text-xl md:text-3xl'>
                ← Back
                </button> 
                <div className = 'text-4xl pt-[2%] pb-[4%] md:text-5xl flex justify-center'>
                    Contact Us!
                </div>
                <div className = 'flex justify-center'>
                    <form autoComplete='off' className = 'w-[60%] space-y-5'>
                <Input container = 'Full name' type = 'text'/>
                <Input container = 'Email' type = 'email'/>
                <Input container = 'Phone' type = 'number'/>
                <Input container = 'Message' type = 'text'/>
                <div className = 'flex justify-center p-[2%]'><button className = 'px-[10%] py-[2%] bg-[#1F1634] text-[#BBBDFA] rounded-full hover:scale-105 cursor-grab md:text-xl' type = 'submit'><span className = ''>Submit</span></button></div>
                    </form>
                </div>

            </div>
        </div>
    );
}
function Input({container,type}){
    return (
        <div className = 'relative m-[2%] w-[100%]'>
            <label className = 'lilita-one-regular text-[#1F1634] px-2 bg-[#BBBDFA] absolute -top-3 left-3 lg:text-2xl' htmlFor={container}>{container} :</label>
            <input className = 'rounded-lg bg-transparent border-[#1F1634]  border-2 md:border-4 outline-none caret-[#1F1634] px-[2%] pt-[2%] pb-[1%] text-[#1F1634] w-[100%] md:text-xl' type={type} id={container} name = {container}/>
        </div>
    );
}
