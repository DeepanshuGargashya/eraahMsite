import Cause1 from '../../Assets/cause11.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Save from '../../Assets/save.png'
import Share from '../../Assets/share.png'
import Company from '../../Assets/company.png'
import AddIcon from '@mui/icons-material/Add';
import Calender from '../../Assets/calendar.png'
import Target from '../../Assets/target.png'
import  Raise from '../../Assets/raised.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Point from '../../Assets/point.png'
import { NavLink } from 'react-router-dom';

function Events(){
    return(
        <>
        <div className="container events px-0">
        <div className="causeBanner">
                <img src={Cause1} alt="" />
                <div className="arrowBack d-flex justify-content-between">
                <NavLink to="/explore" style={{color:'white'}}>
        <ArrowBackIcon />
    </NavLink>
                    <div className="saved">
                        <img src={Save} alt="" />
                    </div>
                </div>
            </div>
            <div className="girls">

            <div className="education mb-2">
            Education
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column">
                    
            <h3>Support Education for Girls</h3>
            <div className="d-flex align-items-center media">
                <p className='mb-0'>Created by</p>
                <div className="delhi d-flex align-items-center">
                    <img className='px-2' src={Company} alt="" />
                    <p className='mb-0'>YouInYou Foundation, Delhi</p>

                </div>
                </div>
            </div>
            <img src={Share} alt="" />

            </div>

            </div>

            <div className="d-flex justify-content-between px-3 align-items-center">
                <h3>Details</h3>
                <KeyboardArrowUpIcon/>
            </div>
            <p className='px-3'>20th August | 6:00PM Onwards</p>
            <div className="d-flex px-3">
                <img style={{width:'7%',height:'26px'}} src={Point} alt="" />
                <p>Haven Auditorium, 22 Street, Samaritan Nagar, New Delhi, 211234</p>
            </div>
            <h5 className='px-3'>View on Maps</h5>

            <div className="px-3">

            <h4>About Event</h4>
            <p>
            The "Walk for Kids" event is not just a walk; it's a journey towards a brighter future. Participants of all ages, from enthusiastic school children to dedicated professionals, come together to walk in solidarity for a common cause - supporting education. 
</p>
            <div className="d-flex ">
                <h5><AddIcon/></h5>
                <h5>Read more</h5>
            </div>
             </div>
             <div className="d-flex justify-content-between px-3 align-items-center">
                <h3>Terms & Conditions</h3>
                <KeyboardArrowUpIcon/>
            </div>

            <div className="d-flex align-items-center justify-content-center date mt-3 px-3 mb-5">
                <div className="dte">
                    <p className='mb-0'>Only 6 spots left!</p>
                    <h4>₹50</h4>
                </div>
                <div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Reserve Your Spot</div>
            </div>

        </div>
        </>
    )
}

export default Events