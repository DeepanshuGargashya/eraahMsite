import Anand from '../../Assets/anand.png'
import { useState } from 'react';
import Aryan from '../../Assets/aryan.png'
import { NavLink } from 'react-router-dom';

function Chats(){
    const[value,changeValue] = useState('all')
    const setTabValue=(tab)=>{
        changeValue(tab);
     }
    return(
        <>
        <div className="container px-0">
        <div className="header pb-4">

<div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
    <p className="text-center mb-0">Chats</p>
    <img src={Anand} alt="" />
</div>
    <input class="d-flex m-auto form-control me-2 my-5  " type="search" placeholder="Search for Chats" aria-label="Search"/>
        </div>
        <NavLink to={'/chatScreen'} style={{textDecoration:'none'}}><div className="chatCard d-flex align-items-center justify-content-between mt-3 px-3">
            <div className="chatContent d-flex align-items-center">
            <img src={Aryan} alt="" />
            <div className="content px-4">
                <p className='mb-0'>Anita Venkat</p>
                <span>Can I donate directly?</span>
            </div>
            </div>
            <span>6:17PM</span>
        </div></NavLink>

        </div>
        </>
    )
}

export default Chats