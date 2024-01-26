import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Register from './Register'
import Complain from './Complain'
import Payment from './Payment'

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    if (window.innerWidth <= 768) {
      setOpenSidebarToggle(!openSidebarToggle)

    }
  }
  const initialState = {
    home: true,
    register: false,
    complain: false,
    payment: false,
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
  // const [cssEnabled, setCssEnabled] = useState(false);
  // const handleCss = () => {
  //   setCssEnabled(true);
  // };
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar handleDashboardAgain={handleDashboardAgain} handleDashboard={handleDashboard} handleClick={handleClick} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      {isClicked.home && isDashboard && <Home />}
      {isClicked.register && <Register />}
      {isClicked.complain && <Complain />}
      {isClicked.payment && <Payment />}
    </div>
  )
}

export default Dashboard;