import React  from 'react';
import { useNavigate } from "react-router-dom";
import { BsGrid1X2Fill } from 'react-icons/bs'
import { FaUser } from "react-icons/fa";
import { MdSmsFailed, MdMessage, MdPayments } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from '../Images/logo3.png'

function Sidebar({ handleDashboardAgain, handleDashboard, handleClick, openSidebarToggle, OpenSidebar }) {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear()
        navigate("/auth");
    }
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <img class="navbar-brand" src={logo} alt=""></img><h4>JMI HOSTEL</h4>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}><IoCloseCircleOutline /></span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="# " onClick={() => { handleClick('home'); OpenSidebar(); handleDashboardAgain()}}>
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="# " onClick={() => { handleClick('register'); OpenSidebar(); handleDashboard()}}>
                        <FaUser className='icon' /> Profile
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="# " onClick={() => { handleClick('complain'); OpenSidebar(); handleDashboard() }}>
                        <MdSmsFailed className='icon' /> Complain
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="# " onClick={() => { handleClick('payment'); OpenSidebar(); handleDashboard() }}>
                        <MdPayments className='icon' /> Payment
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="# " onClick={() => { handleClick('chat'); OpenSidebar(); handleDashboard() }}>
                        <MdMessage className='icon' /> Chats
                    </a>
                </li>
                <li className='sidebar-list-item logout-icon'>
                    <a href="# " onClick={() => { logout() }}>
                        <RxExit className='icon' /> Logout
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar