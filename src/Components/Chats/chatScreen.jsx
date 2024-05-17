import Aryan from '../../Assets/aryan.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { NavLink } from 'react-router-dom';

function ChatScreen(){
    return(
        <>
        <div className="container chatss px-0">
        <div className="header pt-4 pb-2">
        <div className="chatCard d-flex align-items-center justify-content-between mt-3 ">
            <div className="d-flex align-items-center" style={{color:'white'}}>

            <NavLink to={'/chats'} style={{color:'white'}}><ChevronLeftIcon/></NavLink>
            <h5 className='mb-0'>20</h5>
            
            <div className="chatContent d-flex align-items-center px-3">
            <img src={Aryan} alt="" />
            <div className="content ps-2">
                <p className='mb-0 text-white'>Anita Venkat</p>
                <span className='mb-0 text-white'>Online</span>
            </div>
            </div>
            </div>
            <div className="d-flex" style={{color:'white'}}>
            <LocalPhoneIcon/>
            <MoreVertIcon/>
            </div>
        </div>
        </div>
        <div className="today mt-3">
            <p className='mb-0 text-center '>Today</p>
        </div>
        <div className="belowChat d-flex justify-content-between align-items-center px-3" >
            <div className="camera" style={{color:'white'}}>
            <CameraAltIcon/>
            </div>
            <div className="microphone d-flex" style={{color:'#6100FF'}}>
                <AttachmentIcon/>
                <MicNoneIcon/>
            </div>

        </div>
        </div>
        </>
    )
}

export default ChatScreen