import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Laxmi from '../../Assets/laxmiCircle.png'
import Company from '../../Assets/company.png'
import Classroom from '../../Assets/classroom.png'
import Pdf from '../../Assets/pdf.png'
import Abrar from '../../Assets/abrar.png'
import Message from '../../Assets/message.png'
import { NavLink } from 'react-router-dom';

function ImpactStudent(){
    return(
        <>
        <div className="container pairing px-0" style={{height:'46vh'}}>
   <div className="header pt-4 pb-5" style={{ position: 'relative' }}>
    <div className="d-flex align-items-center" style={{ color: 'white' }}>
    <NavLink to="/impact" style={{color:'white'}}>
        <ArrowBackIcon />
    </NavLink>
        <h4 className='px-2 mb-2'>Pairing details</h4>
    </div>

    <div className="teacherCard mx-3">
        <div className="laxmi d-flex justify-content-between">
            <img className='laxmiImage' src={Abrar} alt="" />
            <div className="laxmiContent px-3">
                <h5>Abrar</h5>
                <div className="d-flex align-items-center">
                    <img className='px-2' src={Company} alt="" />
                    <p className='mb-0 text-muted'>YouInYou Foundation, Delhi</p>
                </div>
                <span className='mb-0'>Laxmi is a great teacher hailing from the hills of Haridwar. She teaches English</span>
            </div>
        </div>

        <div className="d-flex justify-content-between px-2 mt-2 flex-wrap">
            <div className="donation text-center" style={{ paddingTop: '5px', paddingBottom: "5px" }}>
                <strong className='text-center mb-0'>I-A</strong>
                <p className='text-center mb-0'>Class</p>
            </div>
            <div className="donation text-center" style={{ paddingTop: '5px', paddingBottom: "5px" }}>
                <strong className='text-center mb-0'>6</strong>
                <p className='text-center mb-0'>Years Old</p>
            </div>
            <div className="donation text-center" style={{ paddingTop: '5px', paddingBottom: "5px" }}>
                <strong className='text-center mb-0'>Lotus School</strong>
                <p className='text-center mb-0'>Education Provider</p>
            </div>
        </div>
    </div>

</div>
   

        </div>
        <div className="container mt-4">

        <div className="d-flex align-items-center mt-4 justify-content-between">
        <h4 className='mb-0'>PHOTOS OF PROGRESS</h4>
        <p className='mb-0'>See All</p>
    </div>
    <img style={{width:'100%'}} src={Classroom} alt="" />
    
    <div className="d-flex align-items-center mt-4 justify-content-between mb-3">
        <h4 className='mb-0'>REPORT CARDS</h4>
        <p className='mb-0'>See All</p>
    </div>
    <div className="salary d-flex col-sm-5">
        <img src={Pdf} alt="" />
        <p>Siya_1-A Reporcard2.pdf</p>

    </div>
    <div className="d-flex align-items-center mt-4 justify-content-between">
        <h4 className='mb-0'>MESSAGES TO YOU</h4>
        <p className='mb-0'>See All</p>
    </div>
    <img className='col-sm-3' src={Message} alt="" />
        </div>
        </>
    )
}

export default ImpactStudent