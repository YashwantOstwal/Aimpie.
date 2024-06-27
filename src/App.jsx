import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ContactUs from './pages/ContactUs/ContactUs';

export default function (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element ={<HomePage/>}/>
                <Route path = '/contactus' element ={<ContactUs/>}/>
            </Routes>
        </BrowserRouter>
    );
}