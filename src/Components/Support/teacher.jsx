import Education from '../../Assets/Education.png'
import TeacherImage from '../../Assets/teacher.png'
import Flowers from '../../Assets/flowers.png'
import { NavLink } from 'react-router-dom'

function Teacher(){
    return(
        <>
        <div className="container teacher">
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
        </div>
        </>
    )
}

export default Teacher