import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Laxmi from '../../Assets/laxmiCircle.png'
import Company from '../../Assets/company.png'
import Classroom from '../../Assets/classroom.png'
import Pdf from '../../Assets/pdf.png'
import Abrar from '../../Assets/abrar.png'
import { NavLink } from 'react-router-dom';

function ImpactTeacher(){
    return(
        <>
        <div className="container pairing px-0" style={{height:'46vh'}}>
        {/* <div className="header pt-4 pb-5" style={{position:'relative'}}>
       
       <div className="d-flex align-items-center" style={{color:'white'}}>

       <ArrowBackIcon/>
       <h4 className='px-2 mb-2'>Pairing details</h4>            
       </div>
      
   
   
   <div className="teacherCard mx-3">
    <div className="laxmi d-flex justify-content-between">

    <img className='laxmiImage' src={Laxmi} alt="" />
    <div className="laxmiContent px-3">
        <h5>Laxmi Prasad</h5>
        <div className="d-flex align-items-center">
                    <img className='px-2' src={Company} alt="" />
                    <p className='mb-0 text-muted'>YouInYou Foundation, Delhi</p>
                </div>
                <span className='mb-0'>Laxmi is a great teacher hailing from the hills of Haridwar. She teaches English</span>
    </div>
    </div>

    <div className="d-flex justify-content-between px-2 mt-2 flex-wrap">
                <div className="donation text-center" style={{paddingTop:'5px',paddingBottom:"5px"}}>
                    
                    <strong className='text-center mb-0'>84</strong>
                    <p className='text-center mb-0'>Students Taught</p>
                </div>
                <div className="donation text-center" style={{paddingTop:'5px',paddingBottom:"5px"}}>
                  
                    <strong className='text-center mb-0'>4/5</strong>
                    <p className='text-center mb-0'>Rating</p>
                </div>
                <div className="donation text-center" style={{paddingTop:'5px',paddingBottom:"5px"}}>
                  
                    <strong className='text-center mb-0'>Lotus Valley School</strong>
                    <p className='text-center mb-0'>School Name</p>
                </div>
            </div>

   </div>
   
   <div className="d-flex">
    <h4>CLASSROOM GALLERY</h4>
    <p>See All</p>
   </div></div> */}
   <div className="header pt-4 pb-5" style={{ position: 'relative' }}>
    <div className="d-flex align-items-center" style={{ color: 'white' }}>
    <NavLink to="/impact" style={{color:'white'}}>
        <ArrowBackIcon />
    </NavLink>
        <h4 className='px-2 mb-2'>Pairing details</h4>
    </div>

    <div className="teacherCard mx-3">
        <div className="laxmi d-flex justify-content-between">
            <img className='laxmiImage' src={Laxmi} alt="" />
            <div className="laxmiContent px-3">
                <h5>Laxmi Prasad</h5>
                <div className="d-flex align-items-center">
                    <img className='px-2' src={Company} alt="" />
                    <p className='mb-0 text-muted'>YouInYou Foundation, Delhi</p>
                </div>
                <span className='mb-0'>Laxmi is a great teacher hailing from the hills of Haridwar. She teaches English</span>
            </div>
        </div>

        <div className="d-flex justify-content-between px-2 mt-2 flex-wrap">
            <div className="donation text-center" style={{ paddingTop: '5px', paddingBottom: "5px" }}>
                <strong className='text-center mb-0'>84</strong>
                <p className='text-center mb-0'>Students Taught</p>
            </div>
            <div className="donation text-center" style={{ paddingTop: '5px', paddingBottom: "5px" }}>
                <strong className='text-center mb-0'>4/5</strong>
                <p className='text-center mb-0'>Rating</p>
            </div>
            <div className="donation text-center" style={{ paddingTop: '5px', paddingBottom: "5px" }}>
                <strong className='text-center mb-0'>Lotus Valley School</strong>
                <p className='text-center mb-0'>School Name</p>
            </div>
        </div>
    </div>

</div>
   

        </div>
        <div className="container mt-4">

        <div className="d-flex align-items-center mt-4 justify-content-between">
        <h4 className='mb-0'>CLASSROOM GALLERY</h4>
        <p className='mb-0'>See All</p>
    </div>
    <img style={{width:'100%'}} src={Classroom} alt="" />
    <h4 className='mt-3'>ATTENDANCE RECORD</h4>
    <div className="d-flex justify-content-around">
        <div className="text-center">

        <div className="percentage">
            88%
        </div>
        Present
        </div>
        <div className="text-center">

        <div className="percentages">
            88%
        </div>
        Absent
        </div>
    </div>
    <div className="d-flex align-items-center mt-4 justify-content-between mb-3">
        <h4 className='mb-0'>SALARY PROOF</h4>
        <p className='mb-0'>See All</p>
    </div>
    <div className="salary d-flex col-sm-5">
        <img src={Pdf} alt="" />
        <p>Siya_1-A Reporcard2.pdf</p>

    </div>
    <div className="d-flex align-items-center mt-4 justify-content-between">
        <h4 className='mb-0'>LIST OF CHILDREN TAUGHT</h4>
        <p className='mb-0'>See All</p>
    </div>
    <div className="taught m-auto d-flex flex-column">
        <img style={{width:'20%'}} src={Abrar} alt="" />
        Abrar
    </div>
        </div>
        </>
    )
}

export default ImpactTeacher