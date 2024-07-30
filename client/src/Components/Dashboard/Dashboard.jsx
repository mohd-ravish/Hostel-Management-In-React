import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Register from './Register'
import Complain from './Complain'
import Payment from './Payment'
import Chat from './ChatBox'
import { verifyUser } from '../../ApiHandler/authFunctions'

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const OpenSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(!isSidebarOpen);
      setOpenSidebarToggle(!openSidebarToggle);
    }
  }
  const initialState = {
    home: true,
    register: false,
    complain: false,
    payment: false,
    chat: false,
  }
  const [isClicked, setIsClicked] = useState(initialState);
  const [isDashboard, setIsDashboard] = useState(initialState.home);

  const handleDashboard = () => {
    setIsDashboard(false);
  }

  const handleDashboardAgain = () => {
    setIsDashboard(true);
  }

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  }

  useEffect(() => {
    verifyUser(setAuth, setUsername, setMessage)
  }, [])

  return (
    <div>
      {auth ? (
        <div className={`grid-container app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <Header OpenSidebar={OpenSidebar} username={username} />
          <Sidebar handleDashboardAgain={handleDashboardAgain} handleDashboard={handleDashboard} handleClick={handleClick} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          {isClicked.home && isDashboard && <Home />}
          {isClicked.register && <Register />}
          {isClicked.complain && <Complain />}
          {isClicked.payment && <Payment />}
          {isClicked.chat && <Chat />}
        </div>
      ) : (
        <div className="auth-heading">
          <h1>{message}</h1>
          <Link to="/auth" className="auth-login">Login</Link>
        </div>
      )}
    </div>
  )
}

export default Dashboard;
