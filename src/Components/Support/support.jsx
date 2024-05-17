import Nature from '../../Assets/Nature.png'
import { NavLink } from 'react-router-dom'

function Support(){
    return(
        <>
        <div className="container support">
            <h3 className="text-center mt-5">Pick a cause to support</h3>
            <p className="text-center">Here are some categories of causes to help you get started. Select ones you are passionate about so we can customise your feed.</p>
            <div className="row row-cols-4">
               
                <div className="support1">
                    <img src={Nature} alt="" />
                    <NavLink to={'/teacher'} style={{textDecoration:'none'}}>  <p className="text-center">Environment</p></NavLink>
                </div>
                <div className="support1">
                    <img src={Nature} alt="" />
                    <p className="text-center">Environment</p>
                </div>
                <div className="support1">
                    <img src={Nature} alt="" />
                    <p className="text-center">Environment</p>
                </div>
                <div className="support1">
                    <img src={Nature} alt="" />
                    <p className="text-center">Environment</p>
                </div>
                <div className="support1">
                    <img src={Nature} alt="" />
                    <p className="text-center">Environment</p>
                </div>
            </div>
            <div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Start your Journey now</div>
        </div>
        </>
    )
}

export default Support