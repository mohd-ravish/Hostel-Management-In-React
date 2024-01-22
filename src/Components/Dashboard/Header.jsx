import {BsJustify} from 'react-icons/bs'
import profileIcon from '../Images/student-profile.png'

function Header({OpenSidebar}) {
  return (
    <header className='dash-header'>
        <div className='menu-icon'>
            <BsJustify className='dash-icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
        </div>
        <div className='header-right'>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/> */}
            <p>Hey, Username<br></br>Student</p>
            <img className='profile-icon' src={profileIcon} alt=''></img>
        </div>
    </header>
  )
}

export default Header