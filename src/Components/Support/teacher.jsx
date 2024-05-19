import Education from '../../Assets/Education.png'
import TeacherImage from '../../Assets/teacher.png'
import Flowers from '../../Assets/flowers.png'
import searchicon from '../../Assets/searchicon.png'
import staricon from '../../Assets/staricon.png'
import fakeAnand from '../../Assets/fakeAnand.png'
import locationicon from '../../Assets/locationicon.png'
import { NavLink ,useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
function Teacher() {
    const teacherData = [
        {
            image: fakeAnand,
            rating: '4.5',
            location: 'Gurgaon',
            Name: 'Anand',
            About: 'Maths teacher for Venus Valley School',

        },
        {
            image: fakeAnand,
            rating: '4.5',
            location: 'Gurgaon',
            Name: 'Anand',
            About: 'Maths teacher for Venus Valley School',

        },
        {
            image: fakeAnand,
            rating: '4.5',
            location: 'Gurgaon',
            Name: 'Anand',
            About: 'Maths teacher for Venus Valley School lorem ipusomshbdijw',

        },
        {
            image: fakeAnand,
            rating: '4.5',
            location: 'Gurgaon',
            Name: 'Anand',
            About: 'Maths teacher for Venus Valley School',

        },
    ];
    return (
        <>
            {/* <div className="container teacher">
            <div className="choose d-flex justify-content-center align-items-center">
                <p>You chose :</p>
                <img src={Education} alt="" />
                <p>Education</p>

            </div>
            <h3 className='text-center mt-3'>Choose a teacher to support</h3>
            <p className='text-center'>A good education starts with a good teacher. Here we have our list of teachers you can support</p>

            <div className="teacherCardd">
                <img style={{width:'100%'}} src={TeacherImage} alt="" />
                <div className="flowers d-flex align-items-center mt-3">
                    <img src={Flowers} alt="" />
                    <div className="flowersContent px-3">
                        <h4 className='mb-0'>Swetha Tiwari</h4>
                        <p className='mb-0'>Maths teacher for Venus Valley School, UP</p>
                    </div>
                </div>
                <p>Swetha, an experienced math teacher with over 15 years of expertise, specializes in grades 3-6, nurturing critical thinking, problem-solving, and student confidence.</p>

                <NavLink to={'/donation'}><div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Support Swetha</div></NavLink>

            </div>
        </div> */}


            <div className="container Teacher-support">
                <div className="row heading">
                    <h5>Welcome 😊</h5>
                    <div class="input-group searchinput mb-3">
                        <span class="input-group-text inputag-text" id="basic-addon1">
                            <img src={searchicon} alt="search_icon" width={'50%'} />
                        </span>
                        <input type="text" class="form-control inputtag" placeholder="Seach for Teachers" aria-label="search" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="teachers">
                    <div className="top-heading">
                        <h5>Choose a teacher to support</h5>
                        <p>A good education starts with a good teacher.
                            Here we have our list of teachers you can
                            support</p>
                    </div>
                </div>
                <div className="row TeacherCards">
                    {
                        teacherData.map((da, index) => {
                            return (
                                <TeacherCards key={index} index={index} data={da} image={da.image}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Teacher;

function TeacherCards({index,data,image}) {
    const navigate = useNavigate();
    return (
        <>
            <div className="col-6" style={{margin:'10px 0px' ,paddingLeft: index%2 !== 0 ? '6px':'',paddingRight: index%2 === 0 ? '6px':''}}>
                <div className="box">
                    <div className="toptext">
                        <div className="lefttext">
                            <h6><img src={staricon} alt="favourite-icon" width={'20%'} />&nbsp;{data.rating}</h6>
                        </div>
                        <div className="righttext">
                            <h6><img src={locationicon} alt="location-icon" width={'25%'} />{data.location}</h6>
                        </div>
                    </div>
                    <div className="mainprofile">
                        <div className="circle">
                            <img src={image} width={'100%'} alt="" />
                        </div>
                        <h5 className='nametext'>{data.Name}</h5>
                        <p className='teacher-about'>
                            {data.About?.length > 35 ? data.About.substring(0, 35) + '...' : data.About}
                        </p>
                        <p className='viewprofile' onClick={()=>navigate('/TeacherProfile',{state:data})}>View Profile</p>
                        <button className='donate-now' onClick={()=>navigate('/donation',{state:data})}>Donate Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}