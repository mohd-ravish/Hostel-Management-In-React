import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Register from './Register'
import Complain from './Complain'
import Payment from './Payment'
import Chat from './Chat'

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(!isSidebarOpen);
      setOpenSidebarToggle(!openSidebarToggle);
      // document.body.style.overflow = 'hidden';
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
    // document.body.style.overflow = 'auto';
  }
  // const [cssEnabled, setCssEnabled] = useState(false);
  // const handleCss = () => {
  //   setCssEnabled(true);
  // };
  return (
    <div className={`grid-container app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar handleDashboardAgain={handleDashboardAgain} handleDashboard={handleDashboard} handleClick={handleClick} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      {isClicked.home && isDashboard && <Home />}
      {isClicked.register && <Register />}
      {isClicked.complain && <Complain />}
      {isClicked.payment && <Payment />}
      {isClicked.chat && <Chat />}
    </div>
  )
}

export default Dashboard;
