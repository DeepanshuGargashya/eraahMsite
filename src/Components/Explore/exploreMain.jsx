import Anand from '../../Assets/anand.png'
import { useState } from 'react';
import Cause1 from '../../Assets/cause1.png'
import Cause2 from '../../Assets/cause2.png'
import Cause3 from '../../Assets/cause3.png'
import Star from '../../Assets/star.png'
import Point from '../../Assets/point.png'
import Ngo1 from '../../Assets/ngo1.png'
import Ngo2 from '../../Assets/ngo2.png'
import Ngo3 from '../../Assets/ngo3.png'
import { NavLink } from 'react-router-dom';
import Explore from '../../Pages/explore';
import Walk from '../../Assets/walk.png'

function ExploreMain(){
    const[value,changeValue] = useState('causes')
    const[tags,changeTags] = useState('sort')

    const[showDonation,setShowDonation]= useState(false)
    const handleDonation=()=>{
       setShowDonation(true)
    }

    const setTabValue=(tab)=>{
       changeValue(tab);
    }
    const setTagValue=(tab)=>{
       changeTags(tab);
    }
    return(
        <>
        {!showDonation ?
        <div className="container px-0">
        <div className="header">

        <div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
            <p className="text-center mb-0">Explore</p>
            <img src={Anand} alt="" />
        </div>
            <input class="d-flex m-auto text-center form-control me-2 my-5  " type="search" placeholder="Search for Causes/Donors/Events" aria-label="Search"/>

            <div className="d-flex justify-content-evenly mt-4">
                <div className="cause" style={value==='causes'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('causes')}>Causes</div>
                <div className="cause" style={value==='ngos'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('ngos')}>NGO's</div>
                <div className="cause" style={value==='events'? {color:'white',fontWeight:'500'}:{color:'#ADADAD'}} onClick={()=> setTabValue('events')}>Events</div>
            </div>
        </div>

        <div class="table-responsive">

        <div className="search-tags d-flex justify-content-between mt-3 px-3">
            <div className="search" style={tags=='sort'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('sort')}>Sort</div>
            <div className="search" style={tags=='all'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('all')}>All</div>
            <div className="search" style={tags=='nature'? {backgroundColor:"#FFC700",color:'black',width:'fit-content'}:{backgroundColor:"#EDEDED",color:"#616161",width:'fit-content'}} onClick={()=>setTagValue('nature')}>Nature</div>
            <div className="search" style={tags=='education'? {backgroundColor:"#FFC700",color:'black',width:'fit-content'}:{backgroundColor:"#EDEDED",color:"#616161",width:'fit-content'}} onClick={()=>setTagValue('education')}>Education</div>
           
            </div> 
        </div>
            <div className="result d-flex justify-content-between mt-2 px-3">
                <p>Showing results for ‘All’</p>
                <p>100 results</p>
                </div>

                {value==='causes'?
                <><div className="causesContainer">
                    <div className="row row-cols-2 justify-content-between mx-0 ">
                <div class="card px-0 mt-3">
                <img src={Cause1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div className="d-flex justify-content-between">
                    <div className="days">
                        1 day left!
                    </div>
                    <div className="foundation">
                    YouInYou Foundation, Delhi
                    </div>
                    </div>
                    <h4 class="card-title mt-2">Education for young girls</h4>
                    <div className="childrensPost d-flex justify-content-between " >
                <span>&#x20B9;4,373</span>
                <span>35%</span>
                <span className="count" style={{color:"#5400DC"}}>&#x20B9;10,000</span>
            </div>
                    <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div className="childrensPost d-flex justify-content-between" >
                <span>Paid</span>
                <span className="count">Remaining</span>
            </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to={'/causes'}><div href="#" class="btn btn-primary donateButton mt-4 d-flex m-auto" >Donate</div></NavLink>
                </div>
                </div>
                <div class="card px-0 mt-3">
                <img src={Cause2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div className="d-flex justify-content-between">
                    <div className="days">
                        1 day left!
                    </div>
                    <div className="foundation">
                    Care4Dogs, Mumbai
                    </div>
                    </div>
                    <h4 class="card-title mt-2">Shelter for street dogs</h4>
                    <div className="childrensPost d-flex justify-content-between " >
                <span>&#x20B9;4,373</span>
                <span>35%</span>
                <span className="count" style={{color:"#5400DC"}}>&#x20B9;10,000</span>
            </div>
                    <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div className="childrensPost d-flex justify-content-between" >
                <span>Paid</span>
                <span className="count">Remaining</span>
            </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div href="#" class="btn btn-primary donateButton mt-4 d-flex m-auto" >Donate</div>
                </div>
                </div>
                <div class="card px-0 mt-3 mb-5">
                <img src={Cause3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div className="d-flex justify-content-between">
                    <div className="days">
                        1 day left!
                    </div>
                    <div className="foundation">
                    YSakriya, Rajasthan
                    </div>
                    </div>
                    <h4 class="card-title mt-2">Uplift rural women</h4>
                    <div className="childrensPost d-flex justify-content-between " >
                <span>&#x20B9;4,373</span>
                <span>35%</span>
                <span className="count" style={{color:"#5400DC"}}>&#x20B9;10,000</span>
            </div>
                    <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            <div className="childrensPost d-flex justify-content-between" >
                <span>Paid</span>
                <span className="count">Remaining</span>
            </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div href="#" class="btn btn-primary donateButton mt-4 d-flex m-auto" >Donate</div>
                </div>
                </div>
                </div>
                    </div></>:value==='ngos'?<>
                    <div className="ngoContainer">
                        <div className="row row-cols-2 justify-content-between" >
                            <div className="ngoss" style={{width:'48%'}}>
                                <div className="city d-flex justify-content-between">
                                    <div className="d-flex starssss justify-content-center">
                                        <img src={Star} alt="" />
                                        4.5
                                    </div>
                                    <div className="d-flex pointttt justify-content-center">
                                        <img style={{width:'20%'}} src={Point} alt="" />
                                        Gurgaon
                                    </div>
                                </div>
                                <img className='d-flex m-auto my-3' style={{width:'50%'}} src={Ngo1} alt="" />
                                <h4 className='text-center'>YouInYou Foundation</h4>
                                <p className='text-center'>Supports and uplifts underprivileged children across India</p>
                                <div class="btn btn-primary donateButton mt-4 d-flex m-auto" onClick={()=>handleDonation()} >Donate Now</div>

                            </div>
                            <div className="ngoss" style={{width:'48%'}}>
                                <div className="city d-flex justify-content-between">
                                    <div className="d-flex starssss justify-content-center">
                                        <img src={Star} alt="" />
                                        4.5
                                    </div>
                                    <div className="d-flex pointttt justify-content-center">
                                        <img style={{width:'20%'}} src={Point} alt="" />
                                        Jaipur
                                    </div>
                                </div>
                                <img className='d-flex m-auto my-3' style={{width:'50%'}} src={Ngo2} alt="" />
                                <h4 className='text-center'>WeCare</h4>
                                <p className='text-center'>Supports and uplifts scheduled tribes in Rajasthan</p>
                                <div onClick={()=>handleDonation()} class="btn btn-primary donateButton mt-4 d-flex m-auto" >Donate Now</div>

                            </div>
                            <div className="ngoss mt-3 mb" style={{width:'48%'}}>
                                <div className="city d-flex justify-content-between">
                                    <div className="d-flex starssss justify-content-center">
                                        <img src={Star} alt="" />
                                        4.5
                                    </div>
                                    <div className="d-flex pointttt justify-content-center">
                                        <img style={{width:'20%'}} src={Point} alt="" />
                                        Raipur
                                    </div>
                                </div>
                                <img className='d-flex m-auto my-3' style={{width:'50%'}} src={Ngo3} alt="" />
                                <h4 className='text-center'>Village Welfare</h4>
                                <p className='text-center'>Nurturing progress in rural communities with care</p>
                                <div onClick={()=>handleDonation()} class="btn btn-primary donateButton mt-4 d-flex m-auto" >Donate Now</div>

                            </div>
                        </div>
                    </div>
                    </>:value==='events'?<><div className="eventContainer">
                    <div className="row row-cols-2 justify-content-between mx-0">
           
             <div class="card px-0">
            <img src={Walk} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-center">23rd August | 6:00PM Onwards</h5>
                <NavLink to={'/events'} style={{textDecoration:'none',color:'black'}}><h3>Walk for Kids - 50km | Delhi</h3></NavLink>
                <div className="d-flex">
                    <img style={{width:'10%'}} src={Point} alt="" />
                <h5>Hauz Khaus, Delhi</h5>
                </div>
                <div className="inr">30 INR</div>
                
            </div>
            </div>
            <div class="card px-0">
            <img src={Walk} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-center">23rd August | 6:00PM Onwards</h5>
                <h3>Walk for Kids - 50km | Delhi</h3>
                <div className="d-flex">
                    <img style={{width:'10%'}} src={Point} alt="" />
                <h5>Hauz Khaus, Delhi</h5>
                </div>
                <div className="inr">30 INR</div>
                
            </div>
            </div>
            <div class="card px-0 mt-3 mb-5">
            <img src={Walk} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-center">23rd August | 6:00PM Onwards</h5>
                <h3>Walk for Kids - 50km | Delhi</h3>
                <div className="d-flex">
                    <img style={{width:'10%'}} src={Point} alt="" />
                <h5>Hauz Khaus, Delhi</h5>
                </div>
                <div className="inr">30 INR</div>
                
            </div>
            </div>
            </div>
                        </div></>:''}      
             </div>: <Explore/>}
        </>
    )
}

export default ExploreMain