import Anand from '../Assets/anand.png'
import { useState } from 'react'
import Laxmi from '../Assets/laxmi.png'
import Rahul from '../Assets/rahul.png'
import Neha from '../Assets/neha.png'
import Laltu from '../Assets/laltu.png'
import { NavLink } from 'react-router-dom'

function Impact(){
    const[value,changeValue] = useState('all')
    const setTabValue=(tab)=>{
        changeValue(tab);
     }
    return(
        <>
        <div className="container px-0">
        <div className="header">

<div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
    <p className="text-center mb-0">Impact</p>
    <img src={Anand} alt="" />
</div>
    <input class="d-flex m-auto text-center form-control me-2 my-5  " type="search" placeholder="Search for Causes/Donors/Events" aria-label="Search"/>

    <div className="d-flex justify-content-evenly mt-4">
        <div className="cause" style={value==='all'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('all')}>All</div>
        <div className="cause" style={value==='students'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('students')}>Students</div>
        <div className="cause" style={value==='teachers'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('teachers')}>Teachers</div>
    </div>
        </div>

        {value==='all'?<>
        <div className="container mt-3 px-3">
            <div className="row row-cols-2 justify-content-between" >
                <div className="rahull" style={{width:"48%"}}>
                    <img className='d-flex m-auto mt-4' src={Laxmi} alt="" />
                    <NavLink to={'/impactTeacher'} style={{textDecoration:'none'}}><h5 className='text-center mb-0 text-dark'>Laxmi Prasad</h5>
                    <p className='text-center'>YouInYou Foundation</p></NavLink>
                </div>
                <div className="rahull" style={{width:"48%"}}>
                    <img className='d-flex m-auto mt-4' src={Rahul} alt="" />
                    <h5 className='text-center mb-0'>Rahul</h5>
                    <p className='text-center'>YouInYou Foundation</p>
                </div>
                <div className="rahull mt-3 mb-5" style={{width:"48%"}}>
                    <img className='d-flex m-auto mt-4' src={Neha} alt="" />
                    <h5 className='text-center mb-0'>Neha</h5>
                    <p className='text-center'>YouInYou Foundation</p>
                </div>
                <div className="rahull mt-3 mb-5" style={{width:"48%"}}>
                    <img className='d-flex m-auto mt-4' src={Laltu} alt="" />
                    <NavLink to={'/impactStudent'} style={{textDecoration:'none'}}><h5 className='text-center mb-0 text-dark'>Abrar</h5>
                    <p className='text-center'>YouInYou Foundation</p></NavLink>
                </div>

            </div>
            </div></>:value==='students'?<></>:value==='teachers'?<></>:""}
        </div>
        </>
    )
}

export default Impact