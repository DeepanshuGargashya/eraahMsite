import Anand from '../Assets/anand.png'
import { useState } from 'react';
import Mail from '../Assets/mail.png'
import Donation from '../Assets/donation.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Updates(){
    const[value,changeValue] = useState('recent')
    const setTabValue=(tab)=>{
        changeValue(tab);
     }
    return(
        <>
        <div className="container px-0">
        <div className="header">

<div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
    <p className="text-center mb-0">Updates</p>
    <img src={Anand} alt="" />
</div>
    <input class="d-flex m-auto text-center form-control me-2 my-5  " type="search" placeholder="Search for Causes/Donors/Events" aria-label="Search"/>

    <div className="d-flex justify-content-evenly mt-4">
        <div className="cause" style={value==='recent'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('recent')}>Recent</div>
        <div className="cause" style={value==='archived'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('archived')}>Archived</div>
    </div>
        </div>
        <div className="updates d-flex justify-content-between align-items-center mt-3 mx-3">
            <div className="mail">
                <img src={Mail} alt="" />
            </div>
            <div className="mailContent ps-3">
                <p className='mb-0'>Account Alert! </p>
                <p className='mb-0'>You have not verified your email address.</p>
                <div className="verifyEmail">
                    Verify Email
                </div>
            </div>
            <div className="icon">
             <p className='mb-0'>2h</p>
            <MoreHorizIcon/>
            </div>
        </div>
        <div className="updates d-flex justify-content-between align-items-center mt-3 mx-3">
            <div className="mail">
                <img src={Donation} alt="" />
            </div>
            <div className="mailContent px-4">
                <p className='mb-0'>Donation  </p>
                <p className='mb-0'>You have donated $3000 to YouInYou Foundation.</p>
                
            </div>
            <div className="icon">
             <p className='mb-0'>2h</p>
            <MoreHorizIcon/>
            </div>
        </div>

        </div>
        </>
    )
}

export default Updates