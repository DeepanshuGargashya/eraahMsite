import Cause1 from '../../Assets/cause11.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Save from '../../Assets/save.png'
import Share from '../../Assets/share.png'
import Company from '../../Assets/company.png'
import AddIcon from '@mui/icons-material/Add';
import Calender from '../../Assets/calendar.png'
import Target from '../../Assets/target.png'
import  Raise from '../../Assets/raised.png'
import { NavLink } from 'react-router-dom';

function Causes(){
    return(
        <>
        <div className="container px-0">
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
             <div className="px-3">

            <h4>About Cause</h4>
            <p>
We holistically tackles the problem of gender inequality in India’s educational system at its root by working directly with governments, schools, parents, village leaders, and community volunteers to ensure access to quality education for girls.
</p>
            <div className="d-flex ">
                <AddIcon/>
                <h5>Read more</h5>
            </div>
             </div>

             <div className="d-flex justify-content-between px-4">
                <div className="donation">
                    <img className='d-flex m-auto' src={Calender} alt="" />
                    <p className='text-center mb-0'>Remaining Days</p>
                    <p className='text-center mb-0'>100</p>
                </div>
                <div className="donation">
                    <img className='d-flex m-auto' src={Target} alt="" />
                    <p className='text-center mb-0'>Target</p>
                    <p className='text-center mb-0'>$80,000</p>
                </div>
                <div className="donation">
                    <img className='d-flex m-auto' src={Raise} alt="" />
                    <p className='text-center mb-0'>Raised</p>
                    <p className='text-center mb-0'>$80,000</p>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-center date mt-3 px-3 mb-5">
                <div className="dte">
                    <p className='mb-0'>Last Day to Donate</p>
                    <h4>Sat, 13 Aug, 2023</h4>
                </div>
                <div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Donate Now</div>
            </div>

        </div>
        </>
    )
}

export default Causes