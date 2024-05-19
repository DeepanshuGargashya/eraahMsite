import React, { useState, useLayoutEffect ,useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import backArrowIcon from '../../Assets/back-arrow-icon.png';
import fakeAnand from '../../Assets/fakeAnand.png';
import teacherSupportImg1 from '../../Assets/teacher-support-img1.png';
import teacherSupportImg2 from '../../Assets/teacher-support-img2.png';
import childimage from '../../Assets/child-image.png';
export default function TeacherProfile() {
    const [amount, setamount] = useState(0);
    const [profiledata,setprofileData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [margin, setmargin] = useState();
    console.log("location", location.state);
useEffect(()=>{
location?.state ? setprofileData(location.state) : setprofileData([])
},[])
    const handleamountbtn = (type) => {
        if (type === 'add') {
            setamount(prev => prev + 100)
        }
        if (type === 'sub' && amount > 0) {
            setamount(prev => prev - 100);
        }
    }
    useLayoutEffect(() => {
        let element = document.getElementById('profilecard')?.clientHeight;
        setmargin(element - 10);
    }, [])
    const childrenimage = [
        {
            name: 'Abrar Singh',
            image: childimage,
        },
        {
            name: 'Abrar Singh',
            image: childimage,
        },
        {
            name: 'Abrar Singh',
            image: childimage,
        },
        {
            name: 'Abrar Singh',
            image: childimage,
        },
        {
            name: 'Abrar Singh',
            image: childimage,
        },
        {
            name: 'Abrar Singh',
            image: childimage,
        },
        {
            name: 'Abrar Singh',
            image: childimage,
        },
        {
            name: 'Abrar Singh',
            image: childimage,
        },
    ]
    return (
        <>
            <div className="Teacher-Profile">
                <div className="top-section">
                    <div className="heading">
                        <h5><img src={backArrowIcon} alt="Arrow-icon" width={'5%'} onClick={() => navigate(-1)} /> 🧑🏻‍🏫 Teacher Profile</h5>

                    </div>
                    <div className="cardss">
                        <div className="profile-card" id="profilecard">
                            <div className="profileimg">
                                <div className="imgs">

                                    <div className="circle">
                                        <img src={fakeAnand} width={'100%'} alt="" />
                                    </div>
                                </div>
                                <div className="text">
                                    <h5>Swetha Tiwari</h5>
                                    <p>Swetha is a Maths teacher hailing from the hills of Haridwar. She teaches basic maths in an interactive style</p>
                                </div>
                            </div>

                            <div className="row info">
                                <div className="box1">
                                    <div className="infobox">
                                        <h5>84</h5>
                                        <p>Students Taught</p>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="infobox">
                                        <h5>4.5/5</h5>
                                        <p>Rating</p>
                                    </div>
                                </div>
                                <div className="box3">
                                    <div className="infobox">
                                        <h5>Venus Valley School</h5>
                                        <p>School Name</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row donate">
                                <div className="donatebtns">
                                    <div className="custom-input">
                                        <button className='btn btnleft' onClick={() => handleamountbtn('sub')}>-</button>
                                        <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} />
                                        <button className='btn btnright' onClick={() => handleamountbtn('add')}>+</button>
                                    </div>
                                </div>
                                <div className="donatebutton">
                                    <button className='btn' onClick={()=>navigate('/donation',{state:profiledata})}>Donate Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Gallery-section" style={{ marginTop: margin + 'px' }}>
                    <div className="head">
                        <h5>CLASSROOM GALLERY</h5>
                        <h6>See All</h6>
                    </div>
                    <div className="imagess">
                        <div className="imagebox">
                            <img src={teacherSupportImg1} alt="image1" width={'55%'} />
                            <div className="imgg">
                                <div className="imgrowss">
                                    <img src={teacherSupportImg2} alt="image" width={'60%'} />
                                    <img src={teacherSupportImg2} alt="image" width={'60%'} />
                                    <img src={teacherSupportImg2} alt="image" width={'60%'} />
                                </div>
                                <div className="imgrowss">
                                    <img src={teacherSupportImg2} alt="image" width={'60%'} />
                                    <img src={teacherSupportImg2} alt="image" width={'60%'} />
                                    <img src={teacherSupportImg2} alt="image" width={'60%'} />
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

                <div className="Attendence">
                    <div className="head">
                        <h5>ATTENDANCE RECORD</h5>
                    </div>
                    <div className="row Records">
                        <div className="col-6 presentcolumn" >
                            <div className='colss-present'>
                                <div className="circle">
                                    <h5>88%</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="colss-absent">
                                <div className="circle">
                                    <h5>12%</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Listchildren">
                    <div className="head">
                        <h5>LIST OF CHILDREN TAUGHT</h5>
                        <h6>See All</h6>
                    </div>
                    <div className='children-image'>
                        {
                            childrenimage.map((value, index) => {
                                return (
                                    <div className="imgs" key={index}>
                                        <div className="circle">
                                            <img src={value.image} alt="Image" width={'100%'} />
                                        </div>
                                        <h5>{value.name}</h5>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
