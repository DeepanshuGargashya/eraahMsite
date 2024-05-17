import LabelBottomNavigation from "../Components/bottomNavbar"
import Anand from '../Assets/anand.png'
import HeaderImage from '../Assets/headerImage.png'
import Dots from '../Assets/dots.png'
import Kid from '../Assets/kid.png'
import Neema from '../Assets/neema.png'
import PieChartWithPaddingAngle from "../Components/pieChart"
import Walk from '../Assets/walk.png'
import Clean from '../Assets/clean.png'
import Point from '../Assets/point.png'
import { NavLink } from "react-router-dom"

function HomePage(){
    return(
        <>
        <div className="container px-0">
            <div className="header pb-4">

            <div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
                <p className="text-center mb-0">Hi, Anand</p>
                <NavLink to={'/profile'}><img src={Anand} alt="" /></NavLink>
            </div>
                <input class="d-flex m-auto text-center form-control me-2 my-5  " type="search" placeholder="Search for Causes/Donors/Events" aria-label="Search"/>
            </div>
            <img style={{width:'100%'}} src={HeaderImage} alt="" />
            <div className="impact d-flex justify-content-between align-items-center px-4 py-2">
                <p className="mb-0">Impact feature : YouInYou Foundation</p>
                <img src={Dots} alt="" />
            </div>
            <div className="kiddo d-flex align-items-center justify-content-between">
                <div className="donate">
                    <h2 className="text-center">Start making a difference today</h2>
                    {/* <button className="px-3 py-2">Donate Now</button> */}
                    <div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Donate Now</div>
                </div>
                <img className="d-flex m-auto" src={Kid} alt="" />
            </div>
            <div className="d-flex justify-content-between px-2">
                <h5>MY IMPACT CREATED</h5>
                <p style={{color:'#929292'}} className="mb-0">See All</p>
            </div>
            <div className="d-flex justify-content-between">

            <div className="impactContainer">
                <img src={Neema} alt="" />
                <h5>Neema Rai</h5>
                <p>YouInYou Foundation</p>

            </div>
            <div className="impactContainer">
                <img src={Neema} alt="" />
                <h5>Neema Rai</h5>
                <p>YouInYou Foundation</p>

            </div>
            <div className="impactContainer">
                <img src={Neema} alt="" />
                <h5>Neema Rai</h5>
                <p>YouInYou Foundation</p>

            </div>
            </div>
            <div className="d-flex justify-content-between px-2">
                <h5>MY DONATION BREAKDOWN</h5>
                <p style={{color:'#929292'}} className="mb-0">See All</p>
            </div>
            <div className="d-flex">
            <div className="pie">
                <div className="foundation">To YouInYou Foundation</div>
                <div className="pie d-flex align-items-center">
            <PieChartWithPaddingAngle/>
            <div className="again">
                <h3>$10,000</h3>
                <div href="#" class="btn btn-primary donateButton mt-2 d-flex m-auto" >Donate Again</div>
            </div>

                </div>
            </div>
            
            </div>
            <div className="d-flex justify-content-between px-2">
                <h5>EVENTS NEAR ME</h5>
                <p style={{color:'#929292'}} className="mb-0">See All</p>
            </div>
            <div className="events d-flex justify-content-between row row-cols-2 mx-0">
            <div class="card mt-3">
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
            <div class="card eventCard mt-3">
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

           
        </div>
        {/* <LabelBottomNavigation/> */}
        </>
    )
}

export default HomePage