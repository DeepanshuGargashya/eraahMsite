import Nature from '../../Assets/Nature.png'
import { NavLink, useNavigate } from 'react-router-dom'

function Support() {
    const navigate = useNavigate();
    const optionArray = [
        'Environment',
        'Environment',
        'Environment',
        'Environment',
        'Environment',
        'Environment',
    ];
    return (
        <>
            <div className="container support">
                <h3 className="text-center mt-5">Pick a cause to support</h3>
                <p className="text-center">Here are some categories of causes to help you get started. Select ones you are passionate about so we can customise your feed.</p>
                <div className="row d-flex flex-wrap">
                    {
                        optionArray.map((value, index) => {
                            return (
                                <div className="col-4 supportbox" key={index} onClick={() => navigate('/teacher')}>
                                    <div className='support1'>
                                    <img src={Nature} alt="" />
                                    <p className="text-center">{value}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Start your Journey now</div>
            </div>
        </>
    )
}

export default Support